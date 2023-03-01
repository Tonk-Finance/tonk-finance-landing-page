import styles from "./Hero.module.css";
const HeroTitle = () => {
  return (
    <div className={styles.gridElement}>
      <div className={styles.flexColumn}>
        <h1 className={styles.fontMain}>
          <span style={{ color: "#2269F8" }}>TONK</span>.
          <span style={{ color: "#CCA300" }}>FINANCE</span>
        </h1>
        <hr className={styles.divider} />
        <h1 className={styles.fontSecondary}>
          Let your idle assets work for you.
        </h1>
        <button className={styles.buttonCustom}>GO TO APP</button>
      </div>
    </div>
  );
};

export default HeroTitle;
