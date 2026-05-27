import React from 'react'

const ProyectoV = (props) => {
    const { titulo, descripcion, video, repositorio } = props;
    return (

        <div className="row p-3">
            <div className="col-4">
                <h4 className="pt-2">{titulo}</h4>
                <p>{descripcion}</p>
                <a className="btn btn-success"
                    href={repositorio} target="_blank" rel="noopener noreferrer">Ir al repositorio</a>
            </div>
            <div className="col-8">
                <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

    )
}

export default ProyectoV
