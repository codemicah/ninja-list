import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          ipsa incidunt nobis assumenda, nostrum expedita quibusdam debitis
          minus maxime quos voluptatem ab? Ipsa laborum a veritatis quam
          asperiores dolor explicabo.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          ipsa incidunt nobis assumenda, nostrum expedita quibusdam debitis
          minus maxime quos voluptatem ab? Ipsa laborum a veritatis quam
          asperiores dolor explicabo.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
