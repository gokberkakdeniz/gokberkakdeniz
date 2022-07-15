import fs from "fs/promises";

try {
  const latestBlogPosts = await fetch("https://akdeniz.dev/gh-readme-latest-posts.md").then(r => r.text());
  const readme = await fs.readFile("./README.md").then(r => r.toString());
  const newReadme = readme.replace(/(?<=<!-- LATEST_POSTS_START -->)([\S\s]*?)(?=<!-- LATEST_POSTS_END -->)/mg, "\n" + latestBlogPosts);
  await fs.writeFile("./README.md", newReadme)
} catch (error) {
  console.error(error)
}
