import styles from "./mission.module.css";
import diamond from "./diamond.gif";
import Animation from "./Animation";
const OurMission = () => {
  console.log(diamond);
  return (
    <div className={styles.gridElement}>
      <div className={styles.flexColumn}>
        <h1 className={styles.fontMain}>Our mission</h1>
        <hr className={styles.divider} />
        {/* <img src={diamond.src} width={400} height={400} /> */}

        <div>
          <h3 className={styles.paragraph}>
            {" "}
            We believe that investing in crypto should go along with high level
            of <span style={{ fontWeight: "bold" }}>
              accessibility
            </span> and{" "}
            <span style={{ fontWeight: "bold" }}>user experience</span>. Thats
            why we want to bring easy-to-use, mobile-friendly{" "}
            <span style={{ fontWeight: "bold" }}>yield aggregator</span> fully
            compatible with TON mobile wallets to people that were initially
            discouraged from using crypto by poor dApp design.
          </h3>
        </div>
      </div>

      <div className={styles.flexColumn}>
        <Animation />
      </div>
    </div>
  );
};

export default OurMission;
