import React from 'react'

const Proyecto = (props) => {
    const { titulo, descripcion, imagen, repositorio, url } = props;
    return (

        <div className="row p-3">
            <div className="col-4">
                <h4 className="pt-2">{titulo}</h4>
                <p>{descripcion}</p>
                <a className="btn btn-success"
                    href={repositorio} target="_blank" rel="noopener noreferrer">Ir al repositorio</a>
            </div>
            <div className="col-8">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={imagen} alt={titulo} />
                </a>
            </div>
        </div>

    )
}

export default Proyecto
