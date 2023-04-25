const xml2js = require("xml2js");
const _ = require("lodash");

class Schema {
  constructor(name, parent, version) {
    this.root = {
      scheme: {
        $: {
          name,
          parent_scheme: parent,
          version,
        },
        colors: {
          option: [],
        },
        attributes: {
          option: [],
        }
      }
    };
  }
  
  addColor(name, value) {
    this.root.scheme.colors.option.push(this._option(name, value));
  }
  
  addAttribute(name, options) {
    const valueOptions = [];
    _.forEach(options, (value, key) => {
      valueOptions.push(this._option(key, value));
    });
    this.root.scheme.attributes.option.push({
      $: { name, },
      value: {
        option: valueOptions,
      },
    });
  }
  
  addBaseAttribute(name, based) {
    this.root.scheme.attributes.option.push({
      $: { name, baseAttributes: based },
    });
  }
  
  _option(name, value) {
    return { $: { name, value } };
  }
  
  toXMLString() {
    return new xml2js.Builder({ headless: true }).buildObject(this.root);
  }
}

module.exports = { Schema };
