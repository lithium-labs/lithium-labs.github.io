// Very small markdown renderer for headings, paragraphs, links, bold, italics, code blocks and lists.
// Not a full parser — good for simple product pages. Use a proper library for complex needs.

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export default function renderMarkdown(md = '') {
  const lines = md.split(/\r?\n/);
  let html = '';
  let inCode = false;
  let codeBuffer = [];
  let inList = false;

  const flushParagraph = (p) => {
    if (p.trim() === '') return '';
    return `<p>${p}</p>`;
  };

  for (let rawLine of lines) {
    let line = rawLine;
    if (line.startsWith('```')) {
      inCode = !inCode;
      if (!inCode) {
        html += '<pre><code>' + escapeHtml(codeBuffer.join('\n')) + '</code></pre>';
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    if (/^#{1,6}\s+/.test(line)) {
      const match = line.match(/^(#{1,6})\s+(.*)$/);
      const level = match[1].length + 1;
      const content = inlineFormat(match[2]);
      html += `<h${level}>${content}</h${level}>`;
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      if (!inList) { html += '<ul>'; inList = true; }
      const item = line.replace(/^\s*[-*+]\s+/, '');
      html += `<li>${inlineFormat(item)}</li>`;
      continue;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
    }

    if (line.trim() === '') { html += '\n'; continue; }

    html += `<p>${inlineFormat(line)}</p>`;
  }

  if (inList) html += '</ul>';

  return html;
}

function inlineFormat(text) {
  let out = escapeHtml(text);
  // code spans
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  // bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // italics *text*
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // links [text](url)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return out;
}
