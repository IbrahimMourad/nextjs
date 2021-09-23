import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          molestiae rerum nobis ut explicabo harum maxime amet perspiciatis
          atque sint! Temporibus, autem. Saepe laudantium totam dolores odit
          modi reprehenderit magni!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          molestiae rerum nobis ut explicabo harum maxime amet perspiciatis
          atque sint! Temporibus, autem. Saepe laudantium totam dolores odit
          modi reprehenderit magni!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
