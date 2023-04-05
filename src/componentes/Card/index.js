import React from 'react'

import iconeFavoritar from './favoritar.png'
import iconeDesFavoritar from './desFavoritar.png'

import styles from './Card.module.css'
import { useFavoritoContexto } from 'context/Favoritos';

export default function Card( { id, titulo, capa } ) {
  
  const { favorito, adicionarFavorito } = useFavoritoContexto();
  const ehFavorito = favorito && favorito.some((fav) => fav.id === id);
  const icone = !ehFavorito ? iconeFavoritar : iconeDesFavoritar;

  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img 
            src={icone}
            alt='Favoritar filme'
            className={styles.favoritar} 
            onClick={() => {
              adicionarFavorito({ id, titulo, capa })
            }}
        />
    </div>
  )
}
