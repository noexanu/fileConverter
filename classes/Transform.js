import { Transform } from 'stream';

class TransformStream extends Transform {
  _transform = (chunk, encoding, callback) => {
    const data = chunk.toString();
    console.log(data);
    this.push(data.replace(/[0]/g, 'zero'));
    callback();
  }
}

export default TransformStream;
