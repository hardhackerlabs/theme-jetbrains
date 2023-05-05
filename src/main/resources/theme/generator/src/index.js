const fs = require('fs').promises;
const getColors = require('./colors');
const getSchema = require('./schema');
const getTheme = require('./theme')

console.log('Generating schema: normal');
const normalColors = getColors((color, name) => {
  return color;
});
const normalSchema = getSchema('Hard Hacker', normalColors);
fs.writeFile('../normal.xml', normalSchema.toXMLString()).catch(() => process.exit(1));
const normalTheme = getTheme('Hard Hacker', '/theme/normal.xml', normalColors);
fs.writeFile('../normal.theme.json', JSON.stringify(normalTheme, null, 2)).catch(() => process.exit(1));

console.log('Generating schema: darker');
const darkerColors = getColors((color, name) => {
  switch (name) {
    case 'black':
    case 'brightBlack':
      color.darken(3);
      break;
    default:
      break;
  }
  return color;
});
const darkerSchema = getSchema('Hard Hacker Darker', darkerColors);
fs.writeFile('../darker.xml', darkerSchema.toXMLString()).catch(() => process.exit(1));
const darkerTheme = getTheme('Hard Hacker Darker', '/theme/darker.xml', darkerColors);
fs.writeFile('../darker.theme.json', JSON.stringify(darkerTheme, null, 2)).catch(() => process.exit(1));

// console.log('Generating theme: darker');
// const darkerTheme = getSchema('Hard Hacker Darker', getColors((color, name) => {
//   switch (name) {
//     case 'black':
//     case 'brightBlack':
//       color.darken(3);
//       break;
//     default:
//       break;
//   }
//   return color;
// }));

// fs.writeFile('./themes/darker.json', JSON.stringify(darkerTheme, null, 2)).catch(() => process.exit(1));

// console.log('Generating theme: high contrast');
// const highContrastColors = getColors((color, name) => {
//   return color;
// });
// highContrastColors.colors.highContrastBlack = highContrastColors.originColors.black.clone().darken(3).toHexString();
// const highContrastTheme = getSchema('Hard Hacker High Contrast', highContrastColors, { highContrast: true });

// fs.writeFile('./themes/high-contrast.json', JSON.stringify(highContrastTheme, null, 2)).catch(() => process.exit(1));
