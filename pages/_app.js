import "../styles/globals.css";

import { Tajawal } from "@next/font/google";

const roboto = Tajawal({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
