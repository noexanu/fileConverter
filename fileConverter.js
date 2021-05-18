/*
 * fileConverter - CLI tool.
 * Поддерживаемые типы файлов: .xml, .json, .csv.
 * Использование: fileConverter c:\...\input.xml d:\...\output.csv.
 * Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
 */

import File from './classes/File.js';
import CLInterface from './classes/CLInterface.js';

const pathsArray = CLInterface.getArguments();
const inputFile = File.createFromPath(pathsArray[0]);
const outputFile = File.createFromPath(pathsArray[1]);
console.log(inputFile, outputFile);

// node "fileConverter.js" C:\Users\YAN\Desktop\pi.json C:\Users\YAN\Desktop\piCopy.json
