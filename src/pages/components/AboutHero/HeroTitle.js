import styles from "./Hero.module.css";
const HeroTitle = () => {
  return (
    <div className={styles.gridElement}>
      <div className={styles.flexColumn}>
        <h1 className={styles.fontMain}>Our platform</h1>
        <hr className={styles.divider} />
        <div>
          <h1 className={styles.fontSecondary}>
            TONK.finance is the first yield aggregation platform built on TON
            with auto-compounding vault strategies.
          </h1>
        </div>

        <h3>
          {" "}
          The dApp (decentralised application) focuses on bringing the best
          possible user experience in yield farming products investment as well
          as providing you with flexible tool suited for every farmer - from
          beginners to professionals. It does not require active management of
          your assets and offers vast range of investments to suit any DeFi
          user.
        </h3>
        <h3>
          On a regular basis, Tonk Finance automatically collects (harvests) the
          reward tokens on your behalf and exchanges them for more of the
          underlying assets that you deposited, thereby compounding the interest
          you earn. This way, you save both time and network fees associated
          with making multiple transactions
        </h3>
      </div>
    </div>
  );
};

export default HeroTitle;
