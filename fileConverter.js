/*
    fileConverter - CLI tool. 
    Поддерживаемые типы файлов: .xml, .json, .csv.
    Использование: fileConverter c:\...\input.xml d:\...\output.csv.
    Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
*/



class File {
  constructor(object) {
    this.name = object.name;
    this.extension = object.extension;
    this.directory = object.directory;
  }
}



class Interface {
  constructor(inputFileObject, outputFileObject) {
    this.files = [inputFileObject, outputFileObject];
  }
  parseArguments() {
    if (process.argv.length !== 4) { throw new Error('You should specify 2 directories. Example: c:/.../input.json d:/.../output.xml') };
    process.argv.slice(2).map((string, index) => {
      const file = new Object;
      file.name = Interface.#MATCH_STRING(/[^\\]+(?=\.)(?!.+\\)/, string);
      file.extension = Interface.#MATCH_STRING(/\w+$/, string);
      file.directory = Interface.#MATCH_STRING(/.+\\/, string);
      this.files[index] = file;
    });
  }
  static #MATCH_STRING(regexp, string) { return string.match(regexp)[0]};
}

//node "fileConverter.js" C:\Users\YAN\Desktop\pi.txt C:\Users\YAN\Desktop\piCopy.txt

const cli = new Interface;
cli.parseArguments();
const inputFile = new File(cli.files[0]);
const outputFile = new File(cli.files[1]);
console.log(inputFile, outputFile);