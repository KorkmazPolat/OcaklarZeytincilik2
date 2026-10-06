import { existsSync, readFileSync } from "node:fs";
import { parseEnv } from "node:util";
import { validateReleaseConfig } from "./release-config.mjs";
for (const file of [".env.production.local", ".env.local", ".env.production", ".env"]) {
  if (!existsSync(file)) continue;
  for (const [key, value] of Object.entries(parseEnv(readFileSync(file, "utf8")))) process.env[key] ??= value;
}
const optional = process.argv.includes("--optional");
if (!optional || process.env.REQUIRE_PUBLISH_CONFIG === "1" || process.env.VERCEL_ENV === "production") {
  const issues = validateReleaseConfig(process.env);
  if (issues.length) {
    console.error("Yayın ayarları tamamlanmadı:\n- " + issues.join("\n- "));
    process.exitCode = 1;
  } else console.log("Yayın ayarları doğrulandı.");
}
