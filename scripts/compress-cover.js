#!/usr/bin/env node
// Usage: pnpm compress-cover <input-image> <slug>
// Example: pnpm compress-cover ~/path/to/cover.png var-let-const
import { execSync } from "child_process";

const [, , input, slug] = process.argv;
if (!input || !slug) {
  console.error("Usage: pnpm compress-cover <input-image> <slug>");
  process.exit(1);
}

const output = `public/blog/covers/${slug}.webp`;
execSync(`cwebp -q 85 -preset picture "${input}" -o "${output}"`, {
  stdio: "inherit",
});
console.log(`✓ Saved to ${output}`);
console.log(`  Add to frontmatter: cover: "${slug}.webp"`);
