import Inicio from './pages/Inicio'
import Cabecalho from './componentes/Cabecalho'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from 'componentes/Favoritos'
import Rodape from 'componentes/Rodape'
import Container from 'componentes/Container'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            
            <Cabecalho/>
            
            <Container>
                <Routes >
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/favoritos" element={<Favoritos/>} />
                </Routes>
            </Container>

            <Rodape/>

        </BrowserRouter>
    )
}
