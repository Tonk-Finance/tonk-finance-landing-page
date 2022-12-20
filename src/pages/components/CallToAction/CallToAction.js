import styles from "./CallToAction.module.css";
const CallToAction = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textWrapper}>
        <h2 className={styles.h2}>Hop in and start earning today</h2>{" "}
        <p className={styles.p}>
          Earning in crypto can be very simple. If you are beginner, TONyield is
          your go-to. Explore variety of LP pools and the one that suits you the
          most.
        </p>
        <button className={styles.buttonCustom}>GO TO APP</button>
      </div>
    </div>
  );
};

export default CallToAction;
