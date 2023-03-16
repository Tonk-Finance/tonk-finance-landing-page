import HeroTitle from "./components/AboutHero/HeroTitle";
import styles from "./LandingPage.module.css";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import { useState } from "react";
import Head from "next/head";
import OurMission from "./components/Mission/OurMission";
const about = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>About TONK.finance</title>
        <meta
          name="description"
          content="First yield aggregation platform built on TON"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.mainContainer}>
        <CustomNavbar
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        {!open && (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <OurMission />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <HeroTitle />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default about;
