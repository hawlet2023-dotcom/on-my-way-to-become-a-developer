import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import './App.css'
import Header from './Component/Header/Header'
import Banner from './Component/Banner/Banner'
import DisplayRow from './Component/DisplayRow/DisplayRow';
import Footer from './Component/Footer/Footer';

function App() {
return <>
    <Header/>
    <Banner/>
    <DisplayRow/>
    <Footer/>
    </>
}

export default App
