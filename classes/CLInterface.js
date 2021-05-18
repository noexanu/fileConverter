class CLInterface {
  /**
   * @returns {string[]} Array of paths to files
   */

  static getArguments() {
    // Less\more than 2 arguments handler
    if (process.argv.length !== 4) {
      throw new Error('You should specify 2 directories. Example: c:\\...\\input.json d:\\...\\output.xml');
    }

    // Return paths
    return process.argv.slice(2);
  }
}

export default CLInterface;
