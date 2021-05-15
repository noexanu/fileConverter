class File {
  /**
   * @param   {string} [directory] Path to file folder
   * @param   {string} [name]      Name of file
   * @param   {string} [extension] Extension of file
   *
   * @example ('c:\projects\...\', 'main', 'js')
   */

  constructor(directory, name, extension) {
    this.name = name;
    this.extension = extension;
    this.directory = directory;
  }

  /**
   * @access private
   */

  static #SUPPORTED_EXTENSIONS = ['xml', 'json', 'csv'];

  /**
   * @param   {string} [path] Full path to file
   * @returns {object}        New file object
   *
   * @example ('c:\projects\...\main.js')
   */

  static createFromPath(path) {
    const name = path.match(/[^\\]+(?=\.)(?!.+\\)/)[0];
    const extension = path.match(/\w+$/)[0];
    const directory = path.match(/.+\\/)[0];
    return new File(directory, name, extension);
  }

  /**
   * @returns {string} Full path to file
   */

  getPath() {
    if (!(this.directory && this.name && this.extension)) {
      throw new Error('Can\'t get the path: parametres are not specified.');
    }
    return `${this.directory}\\${this.name}.${this.extension}`;
  }

  /**
   * @returns {boolean} True/false if file extension is supported/not
   */

  isSupported() {
    if (!this.extension) {
      throw new Error('File extension is not specified.');
    }
    return !!File.#SUPPORTED_EXTENSIONS.includes(this.extension);
  }
}

export default File;
