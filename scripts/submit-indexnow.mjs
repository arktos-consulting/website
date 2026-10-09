/**
 * Submits URLs to IndexNow.
 *
 * IndexNow tells participating engines which URLs changed, instead of waiting
 * for the next crawl. The key file lives in `public/`, so it is served from the
 * site root once the build is deployed: the API fetches it to check that the
 * caller controls the host, which is why a submission against a site that is not
 * live is rejected.
 *
 * Usage:
 *
 *   node scripts/submit-indexnow.mjs                  # every sitemap URL
 *   node scripts/submit-indexnow.mjs /conseil/ /ia/   # the listed paths only
 *   node scripts/submit-indexnow.mjs --dry-run        # print, call nothing
 *
 * Exits non-zero when the API rejects the submission.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs"

const ORIGIN = "https://www.arktos.consulting"
const ENDPOINT = "https://api.indexnow.org/indexnow"
const SITEMAP_URL = `${ORIGIN}/sitemap-0.xml`

/** Directory holding the key file, named `<key>.txt` and containing the key. */
const PUBLIC_DIR = "public"

/** Build output holding a locally readable copy of the sitemap. */
const LOCAL_SITEMAP = "dist/sitemap-0.xml"

/**
 * Reads the IndexNow key from the file published for it.
 *
 * @returns The key and the URL the API will fetch it from
 * @throws When no file in `public/` carries the expected name
 */
function readKey() {
  const keyFile = readdirSync(PUBLIC_DIR).find((name) =>
    /^[a-f0-9]{32}\.txt$/.test(name)
  )
  if (!keyFile) {
    throw new Error(
      `No IndexNow key file in ${PUBLIC_DIR}/: expected a 32-character hexadecimal name ending in .txt`
    )
  }
  return {
    key: readFileSync(`${PUBLIC_DIR}/${keyFile}`, "utf8").trim(),
    keyLocation: `${ORIGIN}/${keyFile}`,
  }
}

/**
 * Collects every URL the site publishes, from the built sitemap when it is
 * present and from the live one otherwise.
 *
 * @returns The sitemap URLs
 * @throws When neither the local nor the live sitemap can be read
 */
async function sitemapUrls() {
  const xml = existsSync(LOCAL_SITEMAP)
    ? readFileSync(LOCAL_SITEMAP, "utf8")
    : await (await fetch(SITEMAP_URL)).text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
}

/**
 * Turns the paths given on the command line into absolute URLs.
 *
 * @param paths Paths or URLs to submit
 * @returns Absolute URLs, with the origin prefixed when a path was given
 */
function toAbsolute(paths) {
  return paths.map((path) =>
    path.startsWith("http") ? path : `${ORIGIN}${path}`
  )
}

/**
 * Sends the URL list to the IndexNow API.
 *
 * @param urlList URLs to submit
 * @param key IndexNow key published at the site root
 * @param keyLocation Absolute URL of the key file
 * @returns The HTTP status the API answered with
 */
async function submit(urlList, key, keyLocation) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(ORIGIN).host,
      key,
      keyLocation,
      urlList,
    }),
  })
  return response.status
}

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const paths = args.filter((arg) => !arg.startsWith("--"))

const { key, keyLocation } = readKey()
const urlList = paths.length > 0 ? toAbsolute(paths) : await sitemapUrls()

console.log(`${urlList.length} URL to submit, key ${key}`)
console.log(`key file: ${keyLocation}`)

if (dryRun) {
  for (const url of urlList) {
    console.log(`  ${url}`)
  }
  process.exit(0)
}

const status = await submit(urlList, key, keyLocation)
console.log(`IndexNow answered HTTP ${status}`)
process.exit(status === 200 || status === 202 ? 0 : 1)
