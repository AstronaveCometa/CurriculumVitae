import React from 'react';

const Contacto = () => {
  return (
    <footer>
        <div className="text-center padding-section" id="contacto">
            <h3 className="pt-5">Contacto</h3>
            <div className="row p-5">
                <div className="col">
                    <a href="tel:+56975323801">
                        <i className="fa-solid fa-phone-volume"></i>
                    </a>
                </div>
                <div className="col">
                    <a href="mailto:sebastian.leon.castillo@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/AstronaveCometa">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Contacto;