import styles from "./Hero.module.css";
const HeroTitle = () => {
  return (
    <>
      <div className={styles.flexColumn}>
        <h2 className={styles.fontMain}>
          Simplify Your Crypto Investing Journey
        </h2>
        <hr className={styles.divider} />
      </div>
      <div className={styles.gridElement}>
        <div className={styles.flexColumn}>
          <h3 className={styles.paragraph}>
            {" "}
            The dApp (decentralised application) focuses on bringing the best
            possible user experience in yield farming products investment as
            well as providing you with flexible tool suited for every farmer -
            from beginners to professionals. It does not require active
            management of your assets and offers vast range of investments to
            suit any DeFi user.
          </h3>
        </div>
        <div className={styles.flexColumn}>
          <h3 className={styles.paragraph}>
            On a regular basis, Tonk Finance automatically collects (harvests)
            the reward tokens on your behalf and exchanges them for more of the
            underlying assets that you deposited, thereby compounding the
            interest you earn. This way, you save both time and network fees
            associated with making multiple transactions
          </h3>
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
