import styles from "./CountryItem.module.css";

interface Country {
  emoji: string;
  country: string;
}

function CountryItem({ country }: { country: Country }) {

  
  const flagemojiToPNG = (flag: string) => {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0))
      .filter((codeUnit): codeUnit is number => codeUnit !== undefined)
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
