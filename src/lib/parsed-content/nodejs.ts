import fs from "node:fs/promises";
import path from "node:path";

export interface FileData {
  slug: string;
  birthtimeMs: number;
  createAt: Date;
  lastUpdate: Date;
  content: string;
}
export async function readContentFromFolder(
  folderPath: string
): Promise<Array<FileData>> {
  const _folderPath = path.resolve(process.cwd(), folderPath);
  const files = await fs.readdir(_folderPath, { withFileTypes: true });
  const dataArray = await Promise.all(
    files.map(async (file) => {
      const _slug = file.name.split(".")[0];
      const filePath = path.join(_folderPath, file.name);
      const [str, stat] = await Promise.all([
        fs.readFile(filePath, "utf8"),
        fs.stat(filePath),
      ]);
      return {
        slug: _slug,
        birthtimeMs: stat.birthtimeMs,
        createAt: stat.ctime,
        lastUpdate: stat.mtime,
        content: str,
      };
    })
  );
  return dataArray;
}
export async function readContentFromFile(filePath: string): Promise<FileData> {
  const _filePath = path.resolve(process.cwd(), filePath);
  const _slug = path.basename(_filePath).split(".")[0];
  const fileText = await fs.readFile(_filePath, "utf8");
  const fileStat = await fs.stat(_filePath);
  return {
    slug: _slug,
    birthtimeMs: fileStat.birthtimeMs,
    createAt: fileStat.ctime,
    lastUpdate: fileStat.mtime,
    content: fileText,
  };
}

export async function writeFile(
  filePath: string,
  data: string | Object,
  json = false
) {
  const _filePath = path.resolve(process.cwd(), filePath);
  const _content =
    !json && typeof data === "object"
      ? data.toString()
      : json
      ? JSON.stringify(data)
      : (data as string);
  await fs.mkdir(path.dirname(_filePath));
  await fs.writeFile(_filePath, _content);
}
