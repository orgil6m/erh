import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { mn } from '../../locales/Navbar/mn';
import { en } from '../../locales/Navbar/en';
import { cn } from '../../locales/Navbar/cn';


function Academy() {
   const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;
  return (
    <div>
      <Head>
        <title>{t.academy} | {t.ozzo}</title>
      </Head>
      <h3 className={styles.title}>
        {t.academy}
      </h3>
    </div>
  )
}

export default Academy