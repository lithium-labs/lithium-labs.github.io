function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inlineFormat(text) {
  let out = escapeHtml(text);
  
  // newlines
  out = out.replace(/&lt;br\s*\/?&gt;/gi, '<br/>');
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


export default function renderMarkdown(md = '') {
  const lines = md.split(/\r?\n/);
  let html = '';
  let inCode = false;
  let codeBuffer = [];
  let inList = false;
  let paragraphBuffer = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      // Join buffered lines with a space or <br/> depending on preference
      // Standard Markdown usually treats single newlines as spaces
      html += `<p>${inlineFormat(paragraphBuffer.join(' '))}</p>`;
      paragraphBuffer = [];
    }
  };

  for (let rawLine of lines) {
    let line = rawLine;

    // 1. Handle Code Blocks
    if (line.trim().startsWith('```')) {
      flushParagraph(); // Close any open paragraph before code
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

    // 2. Handle Headers
    if (/^#{1,6}\s+/.test(line)) {
      flushParagraph();
      const match = line.match(/^(#{1,6})\s+(.*)$/);
      const level = match[1].length;
      html += `<h${level}>${inlineFormat(match[2])}</h${level}>`;
      continue;
    }

    // 3. Handle Lists
    if (/^\s*[-*+]\s+/.test(line)) {
      flushParagraph();
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      const item = line.replace(/^\s*[-*+]\s+/, '');
      html += `<li>${inlineFormat(item)}</li>`;
      continue;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
    }

    // 4. Handle Empty Lines (Paragraph Breaks)
    if (line.trim() === '') {
      flushParagraph();
      continue;
    }

    // 5. Handle Text Lines (The Paragraph Buffer)
    // Here we fix your <br> issue by re-assigning the string
    line = line.replace(/<br\s*\/?>/gi, "<br/>");
    paragraphBuffer.push(line);
  }

  // Final cleanup for remaining content
  flushParagraph();
  if (inList) html += '</ul>';

  return html;
}