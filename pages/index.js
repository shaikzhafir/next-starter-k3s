import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biblioteca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to this mess</h1>
        <h2>served on linode using k3s and nginx ingress controller</h2>
      </main>
    </div>
  );
}
