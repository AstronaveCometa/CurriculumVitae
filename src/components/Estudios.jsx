import React from 'react';
import Estudio from './Estudio';

const Estudios = () => {
    const estudios = [
        {
            casa: 'Talento Digital OTEC Alkemy',
            fecha: '2026',
            descripcion: 'Desarrollo de Aplicaciones Móviles Android'
        },
        {
            casa: 'Desafío Latam',
            fecha: '2025 - 2026',
            descripcion: 'Desarrollo Web Full Stack JavaScript',
            link: 'https://empieza.desafiolatam.com/v/ZqkEE61QUCndD41XFVsnvfE8'
        },
        {
            casa: 'Talento Digital OTEC Alkemy',
            fecha: '2025',
            descripcion: 'Hacking Ético',
            link: 'https://acreditta.com/credential/aee27254-d821-4d5f-8310-1a90f13d190f?utm_source=copy&resource_type=badge&resource=aee27254-d821-4d5f-8310-1a90f13d190f'
        },
        {
            casa: 'Instituto Profesional AIEP',
            fecha: '2024 - 2025',
            descripcion: 'Diseño y Programación Web',
            link: 'https://drive.google.com/file/d/1mWvRm0YP0KBLz5T-i6iViY26uYh51Ydd/view?usp=sharing'
        },
        {
            casa: 'Talento Digital OTEC Alkemy',
            fecha: '2024',
            descripcion: 'Desarrollo Web Full Stack Java Trainee',
            link: 'https://www.acreditta.com/credential/59e04375-8630-4c6b-bb91-51ac2207a14c?utm_source=copy&resource_type=badge&resource=59e04375-8630-4c6b-bb91-51ac2207a14c'
        },
        {
            casa: 'Universidad Andrés Bello',
            fecha: '2022-2023',
            descripcion: 'Diplomado en Estrategias de Enseñanza y Aprendizaje Digital',
            link: 'https://drive.google.com/file/d/10hP3hDJDJbsFHhNMRGo_URDFBKfVAzrl/view?usp=sharing'
        },
        {
            casa: 'Universidad Andrés Bello',
            fecha: '2017-2018',
            descripcion: 'Magíster en Docencia para la Educación Superior',
            link: 'https://drive.google.com/file/d/1jDvnWLrHOA8Pioyqx-aPqgM5RfJ-AVoj/view?usp=sharing'
        },
        {
            casa: 'Universidad Andrés Bello',
            fecha: '2008-2011',
            descripcion: 'Licenciado en Educación, Profesor de Educación Musical',
            link: 'https://drive.google.com/file/d/1HUIRXh949zv2BJ0A1PDDNDwSxW3ihDp5/view?usp=sharing'
        }
    ];
  return (
    <section className="padding-section" id="estudios">
          <div className="container-fluid p-5">
              <h2>Estudios</h2>

              {estudios.map((estudio, index) => (
                  <Estudio
                      key={index}
                      casa={estudio.casa}
                      fecha={estudio.fecha}
                      descripcion={estudio.descripcion}
                      link={estudio.link} />
              ))}
          </div>
     
    </section>
  );
};

export default Estudios;