/**
 * Calculates the estimated reading time of a given text.
 *
 * @param {string} text - The text to calculate the reading time for.
 * @return {number} The estimated reading time in minutes.
 */
export function readingTime(text: string): number {
  const wpm = 225;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wpm);
}
/**
 * Reads a file synchronously and returns its contents as a string.
 *
 * @param {string} file - The path of the file to read.
 * @return {string} The content of the file as a string.
 */
export function readFile(file: string): string {
  const decoder = new TextDecoder("utf-8");
  const fdata = Deno.readFileSync(file);
  const data = decoder.decode(fdata);
  return data;
}

/**
 * Performs a synchronous glob operation on a given file path.
 *
 * @param {string} filePath - The path to search for files.
 * @param {string[]} ext - The list of file extensions to match.
 * @return {string[]} The list of matching file paths.
 */
export function denoGlobSync(filePath: string, ext: string[]): string[] {
  // Get the current working directory
  const cwd: string = Deno.cwd();
  const files: string[] = [];

  // Iterate over each directory entry in the given file path
  for (const dirEntry of Deno.readDirSync(filePath)) {
    // Construct the full file path by joining the current working directory,
    // the file path, and the directory entry name
    const path: string = `${cwd}/${filePath}/${dirEntry.name}`;
    // Get the file extension of the current file path
    const extName: string = path.split(".").slice(-1)[0];

    // Check if the file extension matches any of the given extensions
    if (ext.includes(extName)) {
      // If it matches, add the file path to the list of matching files
      files.push(path);
    }
  }

  // Return the list of matching file paths
  return files;
}
