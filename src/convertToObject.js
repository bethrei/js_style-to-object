'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const styleEntries = [];

  stylesArr.forEach((style, index) => {
    styleEntries[index] = stylesArr[index].split(':');
  });

  for (let entry = 0; entry < styleEntries.length; entry++) {
    const key = 0;
    const value = 1;

    styleEntries[entry][key] = styleEntries[entry][key]
      .replace(/\s+/g, ' ')
      .trim();

    if (!styleEntries[entry][key]) {
      styleEntries.splice(entry, 1);
      entry--;
      continue;
    }

    let entryValue = styleEntries[entry][value];
    const wordChars = [...entryValue.matchAll(/\S/g)];

    entryValue = entryValue.slice(
      wordChars[0].index,
      wordChars.at(-1).index + 1,
    );

    styleEntries[entry][value] = entryValue;
  }

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
