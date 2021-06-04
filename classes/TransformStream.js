import { Transform } from 'stream';

class TransformStream extends Transform {
  _transform = (chunk, encoding, callback) => {
    const data = chunk.toString();
    console.log(data)

    const JSONtoXML = (object) => Object.keys(object).reduce((outputString, key) => {
      const reduce = (arr) => arr.reduce((output, element) => (element instanceof Array
        ? `${output}${reduce(element)}`
        : `${output}<${key}>\n${JSONtoXML(element)}</${key}>\n`
      ), '');
      const value = object[key] ?? '';
      switch (true) {
        case value instanceof Array:
          return outputString + reduce(value);
        case value instanceof Object:
          return `${outputString}<${key}>\n${JSONtoXML(value)}</${key}>\n`;
        default:
          return `${outputString}<${key}>${value}</${key}>\n`;
      }
    }, '');

    const XMLtoJSON = (xml) => {
      var parser = new DOMParser();
      return parser.parseFromString(xml);
    };

    console.log(XMLtoJSON(data))
    //this.push(XMLtoJSON(data));
    callback();
  };
}

export default TransformStream;
