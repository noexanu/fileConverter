/*
 * fileConverter - CLI tool.
 * Поддерживаемые типы файлов: .xml, .json, .csv.
 * Использование: fileConverter c:\...\input.xml d:\...\output.csv.
 * Требования: стиль ООП, тесты(unit and integration tests), git, обработка всех исключений.
 */

// Import classes
import File from './classes/File.js';
import Converter from './classes/Converter.js';

// Creating new files objects
const inputFile = new File('C:\\Users\\YAN\\Desktop', 'pi', 'json');
const outputFile = new File('C:\\Users\\YAN\\Desktop', 'piCopy', 'json');

// Convert input file to output file
if (inputFile.isSupported() && outputFile.isSupported()) {
  Converter.convert(inputFile.getPath(), outputFile.getPath());
} else {
  throw new Error('Files have unsupported extensions.');
}

// node "fileConverter.js"
