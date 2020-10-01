export const replaceCorrectTextFormatted = (text: string) => {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&oacute;/g, 'ó')
    .replace(/&amp;/g, '&');
};
