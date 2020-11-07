import React from 'react'
import AppHero from '../../src/Components/home/Hero'
import AppAbout from '../../src/Components/home/About'
import AppFeature from '../../src/Components/home/Feature'
import AppWorks from '../../src/Components/home/Works'
import AppFaq from '../../src/Components/home/Faq'
import AppPricing from '../../src/Components/home/Pricing'
import AppContact from '../../src/Components/home/Contact'


function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    );
}

export default AppHome
