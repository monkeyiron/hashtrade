import fs from "fs"
import path from "path"
import { globSync } from "glob"

const RED = "\x1b[31m"
const GREEN = "\x1b[32m"
const RESET = "\x1b[0m"

console.log("Checking Design System Governance...\n")

let hasErrors = false

function error(msg: string) {
  console.error(`${RED}❌ ${msg}${RESET}`)
  hasErrors = true
}

const appsDir = path.resolve(process.cwd(), "apps")
const files = globSync("**/*.{ts,tsx}", {
  cwd: appsDir,
  ignore: ["**/node_modules/**", "**/dist/**"],
})

const forbiddenExternalImports = [
  "@radix-ui",
  "@tabler/icons",
  "@mui",
  "antd",
  "@chakra-ui",
]

files.forEach((file) => {
  const filePath = path.join(appsDir, file)
  const content = fs.readFileSync(filePath, "utf-8")

  // Check 1: Forbidden External Libraries
  forbiddenExternalImports.forEach((lib) => {
    if (content.includes(`from "${lib}`) || content.includes(`from '${lib}`)) {
      error(`[${file}] Forbidden direct import from ${lib}. Use @workspace/ui.`)
    }
  })

  // Check 2: Inline Styles
  if (content.includes(" style={{") || content.match(/style=\{.*?\}/)) {
    error(`[${file}] Inline styles detected. Use Tailwind utility classes.`)
  }

  // Check 3: Raw Div Layouts (optional warning/heuristic)
  if (
    content.includes('className="flex ') ||
    content.includes('className="grid ')
  ) {
    // Only warn, not block
    console.warn(
      `⚠️  [${file}] Raw layout classes (flex/grid) detected instead of <Stack>/<Grid>/<Container>.`
    )
  }
})

if (hasErrors) {
  console.error(`\n${RED}Design System validation failed.${RESET}`)
  process.exit(1)
} else {
  console.log(`${GREEN}✅ All Design System checks passed.${RESET}`)
}
