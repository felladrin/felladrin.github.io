import type { NpmsQueryResult } from "../types/NpmsQueryResult";

export async function fetchNpmPackages(): Promise<NpmsQueryResult> {
  const response = await fetch(
    `https://api.npms.io/v2/search?q=maintainer%3Afelladrin`
  );
  return response.json();
}
