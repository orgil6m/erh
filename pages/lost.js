import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import Head from "next/head";

function Home() {
  return (
   <div>
     <Head>
      <title>Алдсан/Олдсон</title>
     </Head>
     <h3 className={styles.title}>
        Алдсан/Олдсон
      </h3>
   </div>
  );
}
export default Home;
