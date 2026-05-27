import React from 'react'

const Estudio = (props) => {
    const { casa, fecha, descripcion, link } = props;
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h5 className="text-end">{casa}, {fecha}</h5>
                </div>
                <div className="col">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <p>{descripcion}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Estudio
