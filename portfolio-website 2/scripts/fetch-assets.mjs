// Downloads every remote image into public/assets/images so the site no longer depends on external hosts.
// Usage: npm run fetch-assets   (requires internet access, Node 18+)
import { mkdir, writeFile } from "node:fs/promises";
import { images } from "../src/data/site.js";
await mkdir("public/assets/images", { recursive: true });
let ok = 0, fail = 0;
for (const [key, { file, remote }] of Object.entries(images)) {
  try {
    const res = await fetch(remote.replace(/\?.*$/, (q) => (remote.includes("framerusercontent") ? q : "")));
    if (!res.ok) throw new Error(res.status);
    await writeFile(`public/assets/images/${file}`, Buffer.from(await res.arrayBuffer()));
    console.log("saved", file); ok++;
  } catch (e) { console.warn("FAILED", key, String(e)); fail++; }
}
console.log(`Done: ${ok} saved, ${fail} failed. Failed images keep using their remote URL.`);
