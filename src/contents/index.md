---
title: Home
---

# Pho Thin

```ts
const getLang = (str: string): BundledLanguage | "" => {
  const cleanedStr: string = str.replace(/\s+/g, " ");
  const firstWord: string = cleanedStr.split(" ")[0];
  return Object.keys(bundledLanguages).includes(firstWord)
    ? (firstWord as BundledLanguage)
    : "";
};
```

