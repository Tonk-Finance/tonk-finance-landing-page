import { UilDiscord, UilTwitter } from "@iconscout/react-unicons";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerSecondary}>
        <h2 className={styles.h2}>Join the community</h2>
        <div className={styles.row}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <UilDiscord size={100} color="#5865F2" />
            <h3>Discord</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <UilTwitter size={100} color="#1DA1F2" />
            <h3>Twitter</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
