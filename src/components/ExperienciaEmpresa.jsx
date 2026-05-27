import React from 'react'

const ExperienciaEmpresa = (props) => {
    const { empresa, periodo, cargo, responsabilidades } = props;
    return (
        <div>
            


            <p>{empresa + ' (' + periodo + ')'}</p>
            <p>{cargo}</p>

            <ul className='text-end'>
                {responsabilidades.map((responsabilidad, index) => (
                    <li key={index}>{responsabilidad}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienciaEmpresa
