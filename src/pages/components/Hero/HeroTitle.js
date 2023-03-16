import styles from "./Hero.module.css";
const HeroTitle = () => {
  return (
    <div className={styles.gridElement}>
      <div className={styles.flexColumn}>
        <h1 className={styles.fontMain}>
          Maximize Your Crypto Earnings with{" "}
          <span className={styles.highlight}>Ease</span>
        </h1>
        <hr className={styles.divider} />
        <h1 className={styles.fontSecondary}>
          Let your idle assets work for you.
        </h1>
        <a href="https://docs.tonk.finance/tonk-finance/">
          <button className={styles.buttonCustom}>Read the docs</button>
        </a>
      </div>
    </div>
  );
};

export default HeroTitle;
