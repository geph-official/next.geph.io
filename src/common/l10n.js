let l10nMap = {};

export const addl10n = (mappings) => {
  l10nMap = {
    ...l10nMap,
    ...mappings,
  };
};

export const l10n = (lang) => (key) => l10nMap[key][lang];

export const toLangCode = (lang) => {
  if (lang === "en") {
    return "en-US";
  } else if (lang === "zht") {
    return "zh-TW";
  } else if (lang === "zhs") {
    return "zh-CN";
  }
};
