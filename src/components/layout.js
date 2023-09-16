import React from "react"
import NavBar from '../components/navBar';
import Footer from '../components/footer';




function Layout ({children}) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout