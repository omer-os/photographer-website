import "../styles/globals.css";

// import { Tajawal } from "@next/font/google";
import { Layout } from "../components";

// const roboto = Tajawal({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
