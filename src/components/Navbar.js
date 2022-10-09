import React from 'react'

function Navbar() {
    return (
        <>
            <div>
                <div className="bar fixed-top"></div>
                <nav className="navbar navbar-dark fixed-top">
                    <div className="nav container-fluid">
                        <img src="https://lh6.googleusercontent.com/-bTUHiGV6SyE/AAAAAAAAAAI/AAAAAAAAAAA/ggDZJFnZHrk/s55-p-k-no-ns-nd/photo.jpg" alt="Logo" />
                        <a className="navbar-brand fs-1" href=''><strong>Wood Worker</strong></a>
                        <div className="img"><a href="tel:+91 7498731202"><img src="https://png.pngtree.com/png-vector/20191022/ourmid/pngtree-phone-icon-isolated-on-abstract-background-png-image_1847735.jpg" alt="Call" height={50} width={50} /></a></div>
                    </div >
                </nav >
            </div >
        </>
    )
}

export default Navbar
