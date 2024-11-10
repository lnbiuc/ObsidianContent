import { pinyin } from 'pinyin-pro';

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file: { body: string, _id: string }) => {
    let match
    try {
      match = file.body.match(/---\n([\s\S]+?)\n---\n([\s\S]*)/);
    } catch (e) {
      file.body = `---\n_path: /ignore\n---`;
    }
    let pathValue
    if (match) {
      let frontMatter = match[1];
      const mainContent = match[2];
      if (!frontMatter.includes('_path:')) {
        const titleMatch = frontMatter.match(/title:\s*(.+)/);
        if (titleMatch && titleMatch.length > 1) {
          const titleValue = titleMatch[1].trim();
          const result = pinyin(titleValue, { toneType: 'none', nonZh: 'consecutive', separator: '-' })
          const folders = parsePathFromString(file._id)
          pathValue = `${folders}/${result}`.toLocaleLowerCase();
          frontMatter = `_path: ${pathValue}\n` + frontMatter;
        } else {
          return;
        }
      }
      const newContent = `---\n${frontMatter}\n---\n${mainContent}`;
      console.log(`[Content Parse] ${file._id} => [Generate Path] ${pathValue}`)
      file.body = newContent;
    }
  });

  function parsePathFromString(pathString: string): string {
    pathString = pathString.replace('github:', '')
    const parts = pathString.split(':');
    let path = ''
    parts.forEach(p => {
      if (!p.endsWith('.md') && !p.endsWith('.mdx')) {
        path += `/${p}`
      }
    })
    return path
  }
})

