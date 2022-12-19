import "../styles/globals.css";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../fonts/KhandFont/Khand-Bold.woff2" });
const App = ({ Component, pageProps }) => {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />;
    </main>
  );
};
export default App;
