import Container from 'componentes/Container'
import FavoritosProvider from 'context/Favoritos'
import Cabecalho from 'componentes/Cabecalho'

import React from 'react'
import { Outlet } from 'react-router-dom'
import Rodape from 'componentes/Rodape'

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}
