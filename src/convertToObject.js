'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesProperties = sourceString.split(';');

  const stylePairs = stylesProperties.map((style) => style.split(':'));

  stylePairs.forEach((entry, index) => {
    const key = 0;
    const value = 1;

    entry[key] = entry[key].replace(/\s+/g, ' ').trim();

    if (!entry[key]) {
      return;
    }

    let entryValue = entry[value];
    const wordChars = [...entryValue.matchAll(/\S/g)];

    entryValue = entryValue.slice(
      wordChars[0].index,
      wordChars.at(-1).index + 1,
    );

    entry[value] = entryValue;
  });

  return Object.fromEntries(stylePairs);
}

module.exports = convertToObject;
