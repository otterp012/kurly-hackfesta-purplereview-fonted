import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Router from "next/router";
import BigLogo from "../components/layout/bigLogo";
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      // NProgress.start();
      setLoading(true);
    };
    const end = () => {
      // NProgress.done();
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  if (loading) {
    console.log("loading...");
    return (
      <div className='h-screen flex flex-col w-full overflow-y-scroll md:w-[390px] md:h-[720px] md:border md:mx-auto md:mt-[5%] items-center justify-center'>
        <BigLogo color='purple' />
        <span>Loading...</span>
      </div>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
