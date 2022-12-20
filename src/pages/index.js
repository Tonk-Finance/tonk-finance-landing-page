import Head from "next/head";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import styles from "./LandingPage.module.css";
import HeroTitle from "./components/Hero/HeroTitle";
import Divider from "./components/Hero/Divider";
import dynamic from "next/dynamic";
import { Suspense, memo } from "react";
import { useState } from "react";

const DynamicFeatures = dynamic(
  () => import("./components/Features/FeaturesLayout"),
  {
    suspense: true,
  }
);
const DynamicCallToAction = dynamic(
  () => import("./components/CallToAction/CallToAction"),
  {
    suspense: true,
  }
);
const DynamicImage = dynamic(
  () => import("./components/Hero/HeroImageWrapper"),
  {
    suspense: true,
  }
);
const DynamicSocials = dynamic(() => import("./components/Socials/Socials"), {
  suspense: true,
});

const IndexPage = memo(() => {
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
        <title>TONyield</title>
        <meta name="description" content="Tons of yield. On TON." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
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
            <HeroTitle />
            <Suspense fallback={`Loading...`}>
              <DynamicImage />
            </Suspense>
            <Divider />
            <Suspense fallback={`Loading...`}>
              <DynamicFeatures />
            </Suspense>
          </>
        )}
      </div>
      {!open && (
        <>
          <Suspense fallback={`Loading...`}>
            <DynamicCallToAction />
          </Suspense>
          <Suspense fallback={`Loading...`}>
            <DynamicSocials />
          </Suspense>
        </>
      )}
    </>
  );
});
export default IndexPage;
