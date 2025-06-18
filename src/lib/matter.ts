export type MatterResult<T = Record<string, any>> = {
  mdContent: string;
  metaData: T;
};

export default function matter<T = Record<string, any>>(
  raw: string
): MatterResult<T> {
  let text = String(raw);
  const data = {} as T;
  const regex =
    /^(---\r?\n(?<frontText>[\s\S]*?\r?\n?)---\r?\n)(?<body>[\s\S]*$)/;
  const match = regex.exec(text);
  if (match?.groups) {
    const { frontText, body } = match.groups;
    text = body;
    const lines = frontText.split("\n");
    for (const line of lines) {
      const [key, value] = line.split(":");
      if (key && value) {
        (data as Record<string, any>)[key] = value.trim();
      }
    }
  }
  return { mdContent: text, metaData: data };
}
