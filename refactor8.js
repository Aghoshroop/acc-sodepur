const fs = require('fs');
const path = require('path');

const scenesDir = path.join(__dirname, 'src', 'scenes');
const scenes = fs.readdirSync(scenesDir).filter(f => f.startsWith('Scene'));

scenes.forEach(scene => {
  const filePath = path.join(scenesDir, scene, 'index.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add the imports safely at the top (after other imports)
  if (!content.includes('useReducedMotion')) {
      const importsToAdd = `import { useReducedMotion } from '@/hooks/useReducedMotion';\nimport { useHasMounted } from '@/hooks/useHasMounted';\n`;
      // Find the last import statement
      const lines = content.split('\n');
      let lastImportIndex = -1;
      for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
              lastImportIndex = i;
          }
      }
      if (lastImportIndex !== -1) {
          lines.splice(lastImportIndex + 1, 0, importsToAdd);
          content = lines.join('\n');
      }
  }

  // Find and remove the exact subscribeMq block and useSyncExternalStore
  // We'll just replace the calls directly.
  content = content.replace(/const isReducedMotion = useSyncExternalStore\([\s\S]*?false\s*\);/, 'const isReducedMotion = useReducedMotion();');
  content = content.replace(/const hasMounted = useSyncExternalStore\([\s\S]*?false\s*\);/, 'const hasMounted = useHasMounted();');

  // Strip useSyncExternalStore from import { ... } from 'react';
  content = content.replace(/import {([^}]*)useSyncExternalStore([^}]*)} from 'react';/, (match, p1, p2) => {
      let inner = (p1 + p2).split(',').map(s => s.trim()).filter(s => s).join(', ');
      if (inner.length === 0) return '';
      return `import { ${inner} } from 'react';`;
  });

  // Remove subscribeMq and subscribe declarations entirely using a more robust regex that just wipes it.
  content = content.replace(/const subscribeMq = \([\s\S]*?return \(\) => mq\.removeEventListener\('change', callback\);\n};\n/, '');
  content = content.replace(/const subscribe = \(\) => \(\) => \{\};\n/, '');

  fs.writeFileSync(filePath, content);
});

console.log("Refactored cleanly.");
