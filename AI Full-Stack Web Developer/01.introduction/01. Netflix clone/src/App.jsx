import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import './App.css'
import Header from './Component/Header/Header'
import Banner from './Component/Banner/Banner'
import MovieCard from './Component/MovieCard/MovieCard'

function App() {
return <>
    <Header/>
    <Banner/>
    <MovieCard/>
    </>
}

export default App
