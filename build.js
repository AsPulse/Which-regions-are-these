
const { build } = require('esbuild');
const { compile } = require('sass');
const { copyFile, writeFile } = require('fs').promises;

(async () => {
    await build({
        entryPoints: ['src/script/index.ts'],
        bundle: true,
        outfile: 'dist/script.js',
        sourcemap: true,
        minify: true,
    });
    await copyFile('src/index.html', 'dist/index.html');
    const sass = compile('src/style/index.scss', {
        style: 'compressed'
    });
    await writeFile('dist/style.css', sass.css);
})();
