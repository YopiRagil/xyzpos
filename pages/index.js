import styles from "../styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Berlangganan from "../components/Berlangganan";
import Footer from "../components/Footer";
import data from "../dataJSON/produk.json";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = (fun) => useEffect(fun, []);
export default function Home() {
  const [paket, setPaket] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const myRef = useRef(null);
  useMountEffect(() => scrollToRef(myRef));

  React.useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(false);
        setPaket(data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <navigator>
        <Navbar />
      </navigator>
      <main>
        <Hero clickToScroll={() => scrollToRef(myRef)} />
        <div ref={myRef} />
        <Berlangganan paket={paket} load={loading} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
