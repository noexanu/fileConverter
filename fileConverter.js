/*
    fileConverter - CLI tool. 
    Поддерживаемые типы файлов: .xml, .json, .csv.
    Использование: fileConverter c:\...\input.xml d:\...\output.csv.
    Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
*/



const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');

class Converter extends Transform {
  _transform(chunk, encoding, callback) {
    const data = chunk.toString();
    console.log(data);
    this.push(data.replace(/[0]/g,'zero'));
    callback();
  }
}

class File {
  constructor(directory, name, extension) {
    this.name = name;
    this.extension = extension;
    this.directory = directory;
  }
  static #SUPPORTED_EXTENSIONS = ['txt','xml','json','csv']
  #getLink() { return `${this.directory}${this.name}.${this.extension}`; }
  #isSupported() { return File.#SUPPORTED_EXTENSIONS.includes(this.extension) ? true : false; }
  convertTo(outputFile) {
    const inputFile = this;
    if (inputFile.#isSupported() && outputFile.#isSupported()) {
      const readable = createReadStream(inputFile.#getLink());
      const writable = createWriteStream(outputFile.#getLink());
      const transform = new Converter;
      readable
      .on('error', err => { throw err })
      .pipe(transform)
      .on('error', err => { throw err })
      .pipe(writable)
      .on('error', err => { throw err });
    }
    else { throw new Error('Files have unsupported extensions. Converter works only with .xml, .json and .csv extensions') }
  }
}

//node "fileConverter.js"

const inputFile = new File('../','pi','txt');
const outputFile = new File('../','piCopy','txt');
inputFile.convertTo(outputFile);