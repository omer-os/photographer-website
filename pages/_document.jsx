import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="sadiq ghazi - photographer" />
          <meta
            name="description"
            content="welcome to sadiq ghazi's official portfolio website. im profissional photographer and videographer based on iraq. "
          />
          <meta
            name="keywords"
            content="photographer, videographer, photoshop, montaj"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="morris" />
          <meta property="og:url" content="http://www.sadiqghazi.com/" />
          <meta property="og:site_name" content="Sadiq Ghazi" />
          <meta property="og:title" content="Sadiq Ghaz" />
          <meta property="og:description" content="welcome to sadiq ghazi's official portfolio website. im profissional photographer and videographer based on iraq." />
          <meta property="og:image" content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Sadiq Ghaz" />
          <meta property="og:image" content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="314" />
          <meta property="og:image:alt" content="Sadiq Ghaz" />
          <meta property="og:image" content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="400" />
          <meta property="og:image:alt" content="Sadiq Ghaz" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="#site_twitter" />
          <meta name="twitter:creator" content="#creator_twitter" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
