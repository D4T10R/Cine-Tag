import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.png'

import styles from './Cabecalho.module.css'
import CabecalhoLink from '../CabecalhoLink'

export default function index() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img 
                    src={logo}
                    alt='Logo do cine tag'
                /> 
            </Link>
            <nav >
                <CabecalhoLink to='/'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink to='/favoritos'>
                    favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}
