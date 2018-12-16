const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/web-components-one/runtime.js',
    './dist/web-components-one/polyfills.js',
    './dist/web-components-one/scripts.js',
    './dist/web-components-one/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/momentum-element.js');
  await fs.copyFile(
    './dist/web-components-one/styles.css',
    'elements/styles.css'
  );
})();
