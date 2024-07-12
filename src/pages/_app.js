// pages/_app.js
import "../styles/globals.css";
import { CssBaseline, Container } from "@mui/material";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Any global initialization or effects can go here
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rooms Management</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
