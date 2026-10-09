/**
 * Client logos, published on the case study pages.
 *
 * Language-neutral: a brand name and an image path are the same in French and in
 * English. This file is the single source for both locales, so a case cannot show
 * a logo in one language and not in the other.
 *
 * The intrinsic size is declared so the page reserves the space before the image
 * loads. The brand name stays in the text next to the logo: the image is
 * decorative, the name carries the meaning.
 */
export const CLIENT_LOGOS = [
  {
    name: "Bpifrance",
    src: "/images/clients/bpifrance.png",
    width: 271,
    height: 78,
  },
  { name: "SNCF", src: "/images/clients/sncf.png", width: 129, height: 35 },
  {
    name: "Doctolib",
    src: "/images/clients/doctolib.png",
    width: 279,
    height: 71,
  },
  {
    name: "Canal+",
    src: "/images/clients/canalplus.png",
    width: 287,
    height: 53,
  },
  { name: "Yseop", src: "/images/clients/yseop.png", width: 136, height: 61 },
  {
    name: "Descours & Cabaud",
    src: "/images/clients/descours_cabaud.png",
    width: 401,
    height: 68,
  },
  {
    name: "Seiitra",
    src: "/images/clients/seiitra.png",
    width: 132,
    height: 34,
  },
] as const

/** A published client logo. */
export interface ClientLogo {
  /** Client name, as the case studies spell it. */
  name: string
  /** Path of the logo image, served from `public/`. */
  src: string
  /** Intrinsic width in pixels, reserved before the image loads. */
  width: number
  /** Intrinsic height in pixels, reserved before the image loads. */
  height: number
}

/**
 * Returns the published logo of a client.
 *
 * @param clientName Client name as a case study spells it
 * @returns The matching logo, or `null` when the client has no published logo
 */
export function clientLogo(clientName: string): ClientLogo | null {
  return CLIENT_LOGOS.find((logo) => logo.name === clientName) ?? null
}
