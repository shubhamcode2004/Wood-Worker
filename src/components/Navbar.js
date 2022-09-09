import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <img src="https://lh6.googleusercontent.com/-bTUHiGV6SyE/AAAAAAAAAAI/AAAAAAAAAAA/ggDZJFnZHrk/s55-p-k-no-ns-nd/photo.jpg" alt="" />
                    <a className="navbar-brand" href="/"><strong> Wood Worker </strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <img src="https://lh6.googleusercontent.com/-bTUHiGV6SyE/AAAAAAAAAAI/AAAAAAAAAAA/ggDZJFnZHrk/s55-p-k-no-ns-nd/photo.jpg" alt="" />
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><strong> Wood Worker </strong></h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/"><strong> Home </strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><strong> About </strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><strong> Contact </strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><strong> Feedback </strong></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar