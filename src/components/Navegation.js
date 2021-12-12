import React from 'react';
import LogoGamer from '../img/LogoGamer.jpg';
import img1 from '../img/img1.jpg';
import img5 from '../img/img5.jpg';
import img8 from '../img/img8.jpg';


const Navegation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav d-flex flex-wrap justify-content-center mt-2">
                            <li className="nav-item">
                                <img className="logo"src ={LogoGamer} alt="img"/>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active me-1" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-brand me-1" href="/">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-1" href="/">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-1" href="/">Gamer fron day</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form className="d-flex me-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>  
            </nav>
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="img1"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>EXTREME GAMERS</h1>
                                <p>More Than 25.000 Gamer Online</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img5} className="d-block w-100" alt="img5"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Modo Gamers...PC</h1>
                                <p>Download Video Gamers</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img8} className="d-block w-100" alt="img8"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Hacore Gamers</h1>
                                <p>All Gamers For Your Favorite Console</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
       
    );
};

export default Navegation;