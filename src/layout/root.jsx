import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/sections/header'
import Footer from '../components/sections/footer'
import CallToAction from '../components/sections/callToAction'
import Preloader from '../components/ui/preloader'
import DiscoverWalletProviders from '../components/sections/wallet'

const RootLayout = () => {

    return (
        <>
            <Preloader />
            <Header />
            <Outlet />
            <CallToAction />
            <Footer />
            <DiscoverWalletProviders />
        </>
    )
}

export default RootLayout