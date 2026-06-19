const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!scriptMatch) {
    console.log('No babel script found');
    process.exit(1);
}

const babelCode = scriptMatch[1];
console.log('Found babel code, length:', babelCode.length);

try {
    const babel = require('@babel/core');
    babel.transformSync(babelCode, {
        presets: ['@babel/preset-react']
    });
    console.log('Babel transformation successful!');
} catch (e) {
    console.error('Babel parsing error:');
    console.error(e.message);
}
