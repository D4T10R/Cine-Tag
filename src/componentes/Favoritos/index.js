import React from 'react'

import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'

import img from './banner-favoritos.png'

import styles from './Favoritos.module.css'

import videos from 'json/db.json'
import Card from 'componentes/Card'

export default function Favoritos() {
    return (
    
        <>
            <Banner imagem={img} />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {
                    videos.map((video) => {
                        return (
                            <Card {...video} key={video.id}/>
                        )
                    })
                }
            </section>
        </>

    )
}
