import styles from "./FeaturesLayout.module.css";
const MainCard = ({ number, title, text, h }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.cardInner}
        style={{ backgroundColor: number === "1" && "#84D3FF" }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            height: h,

            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#fff",
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
