import { Database } from "bun:sqlite"

const db = new Database("C:/Users/lordkeios/.local/share/opencode/opencode-local.db", { readonly: true })

console.log("=== session table columns ===")
console.log(db.query("PRAGMA table_info('session')").all())

console.log("\n=== drizzle migrations (last 5) ===")
try {
  console.log(db.query("SELECT hash, created_at FROM __drizzle_migrations ORDER BY created_at DESC LIMIT 5").all())
} catch (e) {
  console.log("error:", (e as Error).message)
}
