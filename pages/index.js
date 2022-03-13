import React from 'react';
import styles from '../styles/Home.module.css';

import Head from "next/head";

function Home() {
  return (
   <div>
     <Head>
      <title>Нүүр</title>
     </Head>
     <h3 className={styles.title}>
     Нүүр
      </h3>
     {/* <Login />  */}
   </div>
  );
}
export default Home;
