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

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
