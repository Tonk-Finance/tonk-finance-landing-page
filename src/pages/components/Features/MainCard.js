import styles from "./FeaturesLayout.module.css";

const MainCard = ({ number, title, text, h, vector, bg, variant }) => {
  return (
    <div className={variant === "long" ? styles.cardLong : styles.card}>
      <div className={styles.cardInner} style={{ backgroundColor: bg }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            height: variant === "long" ? "20rem" : h,

            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              borderRadius: "15px",
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
          {vector}

          {/* <h3 className={styles.h3}>{title}</h3> */}
        </div>
        <div>
          <h4 className={styles.h3}>{title}</h4>
          <h4 className={styles.h4}>{text}</h4>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
