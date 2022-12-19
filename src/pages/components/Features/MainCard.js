import styles from "./FeaturesLayout.module.css";
const MainCard = ({ number, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            //   justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              backgroundColor: "rgba(34, 105, 248, 0.6)",
              width: "4rem",
              height: "4rem",
              lineHeight: "4rem",
              fontSize: "2rem",
              textAlign: "center",
              color: "black",
            }}
          >
            {number}
          </div>
          <h3 className={styles.h3}>{title}</h3>
        </div>
        <h4 className={styles.h4}>{text}</h4>
      </div>
    </div>
  );
};

export default MainCard;
