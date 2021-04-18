/*
    fileConverter - CLI tool. 
    Поддерживаемые типы файлов: .xml, .json, .csv.
    Использование: fileConverter c:\...\input.xml d:\...\output.csv.
    Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
*/

const fileSystem = require('fs');

class File {

  #name
  #extantion
  #dirrectory

  setName(name) { this.#name = name }
  setExt(extantion) { this.#extantion = extantion }
  setDirr(dirrectory) { this.#dirrectory = dirrectory }
  setParams(dirrectory, name, extantion) {
    this.#name = name;
    this.#extantion = extantion;
    this.#dirrectory = dirrectory;
  }

  readFile() {
    const readStream = fileSystem.createReadStream(`${this.#dirrectory}${this.#name}.${this.#extantion}`);
    readStream.on('data', (data) => {
      console.log(data.toString());
      readStream.pause();
      setTimeout(() => readStream.resume(), 1000);
    });
    readStream.on('error', err => { throw new Error(err) });
  }

}

const inputFile = new File();
inputFile.setParams('../','pi','txt');
inputFile.readFile();