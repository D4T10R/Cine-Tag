import Inicio from './pages/Inicio'
import Cabecalho from './componentes/Cabecalho'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from 'pages/Favoritos'
import Rodape from 'componentes/Rodape'
import Container from 'componentes/Container'
import FavoritosProvider from 'context/Favoritos'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            
            <Cabecalho/>
            
            <Container>
                <FavoritosProvider >
                    <Routes >
                        <Route path="/" element={<Inicio/>} />
                        <Route path="/favoritos" element={<Favoritos/>} />
                    </Routes>
                </FavoritosProvider>
            </Container>

            <Rodape/>

        </BrowserRouter>
    )
}
