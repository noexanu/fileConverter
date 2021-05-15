import { createReadStream, createWriteStream } from 'fs';
import TransformStream from './Transform.js';

class Converter {
  /**
   * @param {object} [inputFile]  Input File class object
   * @param {object} [outputFile] Output File class object
   */

  static convert(inputFile, outputFile) {
    // Declaration of read\transform\write streams

    const readableStream = createReadStream(inputFile);
    const writableStream = createWriteStream(outputFile);
    const transformStream = new TransformStream();

    // Declaration of error handler

    const errorHandler = (err) => {
      throw err;
    };

    // Streams flow control

    readableStream
      .on('error', errorHandler)
      .pipe(transformStream)
      .on('error', errorHandler)
      .pipe(writableStream)
      .on('error', errorHandler);
  }
}

export default Converter;
