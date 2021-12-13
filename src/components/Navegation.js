import React from 'react';
import logo9 from '../img/logo9.png';
import guku from '../img/guku.jpg';
import logo1 from '../img/logo1.jpg';
import yugi from '../img/yugi.jpg';


const Navegation = () => {
    return (
        <>
        <div className="b-example-divider"></div>

        <header className="p-3 bg-dark text-white fixed-top">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <img className='logo rounded'src={logo9}alt='logo'/>
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
                        <li><a href="/" className="nav-link px-2 text-white">Service</a></li>
                        <li><a href="/" className="nav-link px-2 text-white">Comics form day</a></li>
                        <li><a href="/" className="nav-link px-2 text-white">Contact</a></li>
                    </ul>

                    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                       <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
                    </form>

                    <div class="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <button type="button" className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
            <div className="container mt-5">
                <div id="carouselExampleCaptions"className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={guku} className="d-block w-100" alt="img1"/>
                            <div className="carousel-caption d-none d-md-block text-dark fw-bold">
                                <h1>EXTREME COMICS</h1>
                                <p>More Than 25.000 Comics Online</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={logo1} className="d-block w-100" alt="img5"/>
                            <div className="carousel-caption d-none d-md-block text-dark fw-bold">
                                <h1>MODO COMICS...</h1>
                                <p>Download Comics Chapters</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={yugi} className="d-block w-100" alt="img8"/>
                            <div className="carousel-caption d-none d-md-block text-dark fw-bold">
                                <h1>HACORE COMICS</h1>
                                <p>All Comics For Your Favorite Series</p>
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