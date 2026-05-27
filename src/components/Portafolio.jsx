import React from 'react';
import Proyecto from './Proyecto';
import ProyectoV from './ProyectoV';

const Portafolio = () => {
  return (
    <section id="portafolio">
        <div className="container-fluid p-5">
            <h2>Portafolio</h2>
            <Proyecto
            titulo="Pagina web de Zapatito Cochinito"
            descripcion="Página web estática promocional del grupo musical infantil Zapatito Cochinito. La web tiene una página principal, una sección de videos, galería, música, trayectoria y dossier, así como un menú de navegación y un pie de página con información de contacto." imagen="https://res.cloudinary.com/dorfpavlv/image/upload/v1779472232/Zapatito-cochinito_kqgcsl.png"
            repositorio="https://github.com/AstronaveCometa/zapatitoCochinitoWebPage.git" />
            <hr />
            <ProyectoV 
            titulo="E-commerce Kathy Wool"
            descripcion="Tienda online de tejidos hechos a mano, con sistema de usuarios, carrito de compras, favoritos, sistema de recomendaciones y procesamiento de pagos."
            video="https://www.youtube.com/embed/IVSFIuITvNc?si=xBTYFmvqws1VBnAa"
            repositorio="https://github.com/Katherin1605/kathy-wool-ecommerce.git"/>
        </div>
    </section>
  );
};

export default Portafolio;