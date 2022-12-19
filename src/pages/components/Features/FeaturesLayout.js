import MainCard from "./MainCard";
import styles from "./FeaturesLayout.module.css";
const FeaturesLayout = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.column}>
        <h2 className={styles.h2}>
          <span style={{ color: "#CCA300" }}>Yield</span> made simple.
        </h2>
        <div className={styles.row}>
          <MainCard
            number="1"
            title="Earn"
            text="Let your assets earn passive income for you through various pools."
          />
          <MainCard
            number="2"
            title="Reinvest"
            text="Your interests will be automatically reinvested, multiplying your income."
          />
          <MainCard
            number="3"
            title="Harvest"
            text="Harvest your interest from all pools with single click, saving your time and fees."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesLayout;
