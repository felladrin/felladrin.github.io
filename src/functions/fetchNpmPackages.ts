export async function fetchNpmPackages() {
  const response = await fetch(
    `https://api.npms.io/v2/search?q=maintainer%3Afelladrin`
  );
  return response.json();
}
