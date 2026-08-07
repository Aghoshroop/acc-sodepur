const fs = require('fs');
const path = require('path');

const routes = [
    'src/app/(app)/home',
    'src/app/(app)/about',
    'src/app/(app)/coaches',
    'src/app/(app)/athletes',
    'src/app/(app)/gallery',
    'src/app/(app)/achievements',
    'src/app/(app)/programmes',
    'src/app/(app)/schedule',
    'src/app/(app)/admissions',
    'src/app/(app)/premier-relay',
    'src/app/(app)/premier-relay/overview',
    'src/app/(app)/premier-relay/teams',
    'src/app/(app)/premier-relay/schedule',
    'src/app/(app)/premier-relay/results',
    'src/app/(app)/premier-relay/standings',
    'src/app/(app)/premier-relay/records',
    'src/app/(app)/premier-relay/gallery',
    'src/app/(app)/premier-relay/sponsors',
    'src/app/(app)/knowledge-centre',
    'src/app/(app)/events',
    'src/app/(app)/contact',
    'src/app/(app)/portal/login',
    'src/app/experience',
    'src/components/layout',
    'src/components/ui'
];

routes.forEach(route => {
    const dir = path.join(__dirname, route);
    fs.mkdirSync(dir, { recursive: true });
    
    if (route.includes('src/app') && !route.endsWith('layout')) {
        const pagePath = path.join(dir, 'page.tsx');
        const componentName = route.split('/').pop().replace(/-/g, '').replace(/^\w/, c => c.toUpperCase()) + 'Page';
        const content = `export default function ${componentName}() {\n  return (\n    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">\n      <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-acc-white mb-8">\n        ${route.split('/').pop().toUpperCase()}\n      </h1>\n      <p className="text-acc-gray text-lg">\n        This section is currently under construction.\n      </p>\n    </div>\n  );\n}\n`;
        if (!fs.existsSync(pagePath)) {
            fs.writeFileSync(pagePath, content);
        }
    }
});

console.log('Scaffold complete.');
