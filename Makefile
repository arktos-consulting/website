# Makefile — Arktos Consulting website.
#
# Wraps the package.json scripts so the same names work from a terminal, from an
# editor task runner or from CI. The organisation's other repositories generate
# this file from hermes-toolbox; this one is written by hand because the
# repository is not part of that tool's project list.

SHELL := /bin/bash
.DEFAULT_GOAL := help

# Install the dependencies from the lockfile
install:
	bun install --frozen-lockfile

# Start the development server on http://localhost:4321
dev:
	bun run dev

# Build the production site into dist/
build:
	bun run build

# Serve the built site locally
preview:
	bun run preview

# Generate the Astro content types into .astro/
sync:
	bun run sync

# Type-check the TypeScript modules and the Astro components
typecheck:
	bun run typecheck

# Type-check the Astro components alone
check:
	bun run check

# Rewrite the files to the Prettier convention
format:
	bun run format

# Check the formatting without rewriting anything
format-check:
	bun run format:check

# Check the bilingual invariants on the built output, after a build
verify-i18n:
	bun run verify:i18n

# Run the whole gate: format, types, components, build, bilingual
verify:
	bun run verify

# Gate the repository the way the other ones are gated
ci: verify

# Remove the build output and the generated content types
clean:
	rm -rf dist .astro

.PHONY: install dev build preview sync typecheck check format format-check verify-i18n verify ci clean help

# Show this help
help:
	@echo ''
	@echo 'Usage:'
	@echo '  make [target]'
	@echo ''
	@echo 'Targets:'
	@awk '/^[a-zA-Z0-9_\/%.-]+:/ && $$1 !~ /^\./ { \
		if (match(lastLine, /^# (.*)/)) { \
			cmd = substr($$1, 0, index($$1, ":")-1); \
			printf "  \033[36m%-24s\033[0m %s\n", cmd, substr(lastLine, RSTART + 2, RLENGTH); \
		} \
	} { lastLine = $$0 }' $(MAKEFILE_LIST)
	@echo ''
