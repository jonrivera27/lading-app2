import Head from "next/head";
import styles from '../../styles/Home.module.css'

export default function HomePage(){
  return(
    <div className={styles.container}>
    
      <Head>
        <title>Ofertas</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
          <h1>landing</h1>
        </main>
    
    
    
    </div>
  )

}