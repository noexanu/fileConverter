/*
    fileConverter - CLI tool. 
    Поддерживаемые типы файлов: .xml, .json, .csv.
    Использование: fileConverter c:\...\input.xml d:\...\output.csv.
    Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
*/



const fileSystem = require('fs');

class File {
  constructor(directory, name, extension) {
    this.name = name;
    this.extension = extension;
    this.directory = directory;
  }
  #extensions = ['txt','xml','json','csv']
  #readFile = function() {
    const
      link = `${this.directory}${this.name}.${this.extension}`,
      readStream = fileSystem.createReadStream(link);
    readStream.on('error', err => { throw err });
    return readStream;
  }
  #saveFile = function() {
    const 
      link = `${this.directory}${this.name}.${this.extension}`,
      writeStream = fileSystem.createWriteStream(link);
    writeStream.on('error', err => { throw err });
    return writeStream;
  }
  #isSupported = function() { 
    return this.#extensions.includes(this.extension) ? true : false;
  }
  convertTo(outputFile) {
    const inputFile = this;
    if (inputFile.#isSupported() && outputFile.#isSupported()) {


      
      inputFile.#readFile().pipe(outputFile.#saveFile());
    }
    else { throw new Error('Files have unsupported extensions. Converter works only with .xml, .json and .csv extensions') }
  }
}



const
  inputFile = new File('../','pi','txt'),
  outputFile = new File('../','piCopy','txt');
inputFile.convertTo(outputFile);