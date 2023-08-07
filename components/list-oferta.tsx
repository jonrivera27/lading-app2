import { url } from 'inspector'
import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    oferta: any,
    price: number,
    priceDiscount: number,
    
}
export const ListOferta: FC<Props> = ({ oferta }) => {
  return (
    <div className={`col-md-${oferta.md}`} style={{ backgroundColor: 'white', border: '1px solid #111'}} >
      <img src={oferta.urlImgArticle} alt="imagen-oferta" />
        <p>
          <b>{oferta.title}</b>
          
        </p>
        <p>
          {oferta.description}
        </p>
        <p>
          {oferta.price}
        </p>
        <p>
          {oferta.priceDiscount}
        </p>
        <p>
        
        </p>
       
        <a
         className="btn btn-red" 
         href={oferta.urlPromo}
         target='_blank' 

         role="button">
         IR A LA OFERTA
        </a>
    </div>
  )
}
