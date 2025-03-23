// this function converts a country code to an emoji
// for example: "US" => 🇺🇸
// this function is used in the CountrySelector component
export function convertToEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char: string) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}