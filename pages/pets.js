import React from 'react';
import styles from '../styles/Home.module.css';

import Head from "next/head";

function Home() {
  return (
   <div>
     <Head>
      <title>Эрхүүд</title>
     </Head>
     <h3 className={styles.title}>
        Эрхүүд
      </h3>
   </div>
  );
}
export default Home;
