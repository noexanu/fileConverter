/*
    fileConverter - CLI tool. 
    Поддерживаемые типы файлов: .xml, .json, .csv.
    Использование: fileConverter c:\...\input.xml d:\...\output.csv.
    Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
*/



if (process.argv.length < 4) { throw new Error('You should specify 2 directories. Example: c:/.../input.json d:/.../output.xml') };
const arguments = process.argv.slice(2);
const link1 = {
  location : arguments[0].match(/.+\\/)[0],
  name : arguments[0].match(/[^\\]+(?=\.)(?!.+\\)/)[0],
  extension : arguments[0].match(/\w+$/)[0]

  // location : /.+(?=\\)/.match(arguments[0]),
  // name : /[^\\]+(?=\.)(?!.+\\)/.match(arguments[0]),
  // extension : /\w+$/.match(arguments[0])
}
const link2 = arguments[1]
console.log(link1, link2)