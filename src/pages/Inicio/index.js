import Banner from '../../componentes/Banner'
import Titulo from 'componentes/Titulo'
import Card from 'componentes/Card'

import img from '../../componentes/Banner/banner-home.png'

import styles from './Inicio.module.css'
import { useEffect, useState } from 'react'

export default function Inicio() {

    const  [videos, setVideo] = useState([])

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/D4T10R/cinetag-api/videos")
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(dados)
            })
    }, [])  

    return (
        <>
            <Banner imagem={img} />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes</h1>
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
