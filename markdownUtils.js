export function markdownToHtml(md) {
  let html = md;
  html = html.replace(/###### (.+)/g, '<h6 class="text-base text-gray-400">$1</h6>');
  html = html.replace(/##### (.+)/g, '<h5 class="text-lg text-gray-500">$1</h5>');
  html = html.replace(/#### (.+)/g, '<h4 class="text-xl text-gray-600">$1</h4>');
  html = html.replace(/### (.+)/g, '<h3 class="text-2xl text-gray-700">$1</h3>');
  html = html.replace(/## (.+)/g, '<h2 class="text-3xl text-gray-800">$1</h2>');
  html = html.replace(/# (.+)/g, '<h1 class="text-4xl font-bold text-gray-900">$1</h1>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/!(.*?)(.*?)/g, '<img src="$2" alt="$1">');
  
  html = html.replace(/^\s*-\s+(.+)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/g, '<ul class="list-disc pl-6">$1</ul>');
  
  html = html.replace(/```(.*?)\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-3 rounded"><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 p-1 rounded">$1</code>');
  
  html = html.replace(/---+/g, '<hr class="my-4">');
  html = html.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>');
  return '<p>' + html + '</p>';
}

export function markdownToText(md) {
  return md
    .replace(/#+\s?/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/!(.*?)(.*?)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/---+/g, '')
    .replace(/^\s*-\s+/gm, '• ')
    .replace(/```[\s\S]*?```/g, '')
    .trim();
}

export function markdownToPlainHtml(md) {
  let html = md;
  html = html.replace(/###### (.+)/g, '<h6>$1</h6>');
  html = html.replace(/##### (.+)/g, '<h5>$1</h5>');
  html = html.replace(/#### (.+)/g, '<h4>$1</h4>');
  html = html.replace(/### (.+)/g, '<h3>$1</h3>');
  html = html.replace(/## (.+)/g, '<h2>$1</h2>');
  html = html.replace(/# (.+)/g, '<h1>$1</h1>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/!(.*?)(.*?)/g, '<img src="$2" alt="$1">');
  
  html = html.replace(/^\s*-\s+(.+)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  
  html = html.replace(/```(.*?)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  html = html.replace(/---+/g, '<hr>');
  html = html.replace(/\n\n+/g, '</p><p>').replace(/\n/g, '<br>');
  return '<p>' + html + '</p>';
}