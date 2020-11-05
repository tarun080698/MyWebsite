import React from 'react'
import AppHero from '../../src/Components/home/Hero'
import AppAbout from '../../src/Components/home/About'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout/>
        </div>
    );
}

export default AppHome
