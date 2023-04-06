import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import styles from './Player.module.css'

import Banner from 'componentes/Banner'
import Titulo from 'componentes/Titulo'

import img from './banner-player.png'

import NaoEncontrada from 'pages/NaoEncontrada'

export default function Player() {

    const [video, setVideo] = useState()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/D4T10R/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    const parametros = useParams()


    if (!video) {
        return <NaoEncontrada/>
    }

    return (

        <>
            <Banner imagem={img}/>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.Titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
            </section>
            
        </>


    )
}
