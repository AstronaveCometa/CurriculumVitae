import React from 'react';

const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg fixed-top bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menú</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#presentacion">Presentación</a>
                        <a className="nav-link" href="#portafolio">Portafolio</a>
                        <a className="nav-link" href="#estudios">Estudios</a>
                        <a className="nav-link" href="#experiencia">Experiencia</a>
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;