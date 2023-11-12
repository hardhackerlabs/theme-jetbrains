const tinycolor = require('tinycolor2');
const _ = require('lodash');

function getColors(painter) {
  const originColors = _.mapValues({
    black: tinycolor("#282433"),
    brightBlack: tinycolor("#938AAD"),
    red: tinycolor("#e965a5"),
    green: tinycolor("#b1f2a7"),
    yellow: tinycolor("#ebde76"),
    blue: tinycolor("#b1baf4"),
    purple: tinycolor("#e192ef"),
    cyan: tinycolor("#b3f4f3"),
    orange: tinycolor("#ea7e6c"), // for git conflict status and some error status
    white: tinycolor("#eee9fc"),

    errorRed: tinycolor("#FF6261"),
  }, painter);
  
  console.log('Origin colors:');
  let colors = _.mapValues(originColors, (color, name) => {
    const colorStr = color.toHex();
    console.log(`  ${name}: "${colorStr}" - ${color.toHslString()}`);
    return colorStr;
  });
  
  colors = Object.assign(colors, {
    background: colors.black,
    highlightBackground: originColors.black.clone().lighten(10).toHex(),
    selectionBackground: originColors.black.clone().lighten(20).toHex(),
    darkerBackground: originColors.black.clone().darken(3).toHex(),
    hoverBackground: tinycolor.mix(originColors.black, originColors.black.clone().lighten(20), 20).toHex(),
    text: colors.white,
    string: colors.green,
    number: colors.yellow,
    method: colors.red,
    keyword: colors.blue,
    operator: colors.white,
    class: colors.cyan,
    variable: colors.purple,
    parameter: colors.yellow,
    secondaryText: colors.brightBlack,
    comment: colors.brightBlack,
    ignoreText: originColors.brightBlack.clone().darken(20).toHex(),
    highlight: colors.red,
    themePrimary: colors.red,
    error: colors.errorRed,
    warning: colors.yellow,
  });

  return { originColors, colors };
}

module.exports = getColors;
