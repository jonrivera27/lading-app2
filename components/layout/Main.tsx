import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Menu } from '@/components/Menu';
import { FC, ReactNode } from 'react';

interface Props{
    children?:ReactNode,
    title?: String,

} 

export const Main:FC<Props>=({children, title='::Club Ofertas::'})=> { //exporta un paquete de main 
  return (
    <>
      <Head>
        <title>{title} </title>
        <meta name="description" content="index Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} `}>
        
        <Menu></Menu>
         <div className="container-fluid">
          <div className="row">
            {children} 
          </div>
        </div>
      </main>
    </>
  )
}


