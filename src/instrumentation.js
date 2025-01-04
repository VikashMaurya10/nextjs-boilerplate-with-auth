import { validateEnv } from "@/lib";

// Register and validate environment variables at startup
export async function register() {
  validateEnv();
}
