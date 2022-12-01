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

          <meta property="og:title" content="Sadiq Ghazi" />
          <meta property="og:url" content="https://www.sadiqghazi.com/" />
          <meta
            property="og:image"
            content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75"
          />

          <meta name="twitter:title" content="Sadiq Ghazi " />
          <meta
            name="twitter:description"
            content=" welcome to sadiq ghazi's official portfolio website. im profissional photographer and videographer based on iraq."
          />
          <meta
            name="twitter:image"
            content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75"
          />
          <meta name="twitter:card" content="https://www.sadiqghazi.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FQVXxbLl3SzuKzX0vgzD3&w=1920&q=75" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
