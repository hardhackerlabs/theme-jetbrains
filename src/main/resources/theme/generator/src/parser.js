const fs = require("fs").promises;
const fsn = require("fs");
const xml2js = require("xml2js");

async function main() {
  const data = await fs.readFile("./schema.xml", "utf8");
  const schema = await xml2js.parseStringPromise(data);
  console.dir(schema);

  const stream = fsn.createWriteStream("./schema_gen.js");

  stream.write(`const { Schema } = require("./sdk.js");\n`);
  stream.write(`\n`);
  stream.write(`const schema = new Schema("${schema.scheme.$.name}", "${schema.scheme.$.parent_scheme}", "${schema.scheme.$.version}");\n`);
  stream.write(`\n`);
  schema.scheme.colors[0].option.forEach(option => {
    stream.write(`schema.addColor("${option.$.name}", "${option.$.value}");\n`);
  });
  stream.write(`\n`);
  schema.scheme.attributes[0].option.forEach(option => {
    if (option.$.baseAttributes) {
      stream.write(`schema.addBaseAttribute("${option.$.name}", "${option.$.baseAttributes}");\n`);
    } else {
      const values = {};
      option.value[0].option.forEach(value => {
        values[value.$.name] = value.$.value;
      });
      stream.write(`schema.addAttribute("${option.$.name}", ${JSON.stringify(values)});\n`);
    }
  });

  stream.end();
};

main();
