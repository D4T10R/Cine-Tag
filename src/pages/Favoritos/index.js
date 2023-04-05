import React from 'react'

import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'

import img from './banner-favoritos.png'

import styles from './Favoritos.module.css'

import videos from 'json/db.json'
import Card from 'componentes/Card'
import { useFavoritoContexto } from 'context/Favoritos'

export default function Favoritos() {

    const { favorito } = useFavoritoContexto()

    return (
    
        <>
            <Banner imagem={img} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    favorito.map((fav) => {
                        return (
                            <Card {...fav} key={fav.id}/>
                        )
                    })
                }
            </section>
        </>

    )
}
