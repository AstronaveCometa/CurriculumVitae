import React from 'react';
import ExperienciaEmpresa from './ExperienciaEmpresa';

const Experiencia = () => {
    const experiencias = [
        {
            empresa: 'Instituto Profesional AIEP',
            periodo: '2013 - Actualidad',
            cargo: 'Docente de Música Aplicada, Iniciación Musical, Solfeo y Composición',
            responsabilidades: [
                'Desarrollé e-contents y materiales didácticos atractivos.',
                'Rediseñé currículos a modalidades online, semipresencial y presencial.',
                'Colaboré estrechamente con equipos multidisciplinarios para lograr metas.'
            ]
        },
        {
            empresa: 'Universidad Andrés Bello',
            periodo: '2013 - Actualidad',
            cargo: 'Docente de Armonía, Informática Educativa, Tecnología Integrada y Seminarios',
            responsabilidades: [
                'Diseñé e implementé estrategias innovadoras de gamificación y aprendizaje digital.',
                'Lideré procesos de actualización curricular y articulación de contenidos.',
                'Apliqué mi creatividad y habilidades de comunicación efectiva en el aula.'
            ]
        }
    ];
  return (
    <section className="padding-section" id="experiencia">
        <div className="container-fluid p-5">
            <h2>Experiencia</h2>
            {experiencias.map((experiencia, index) => (
                <ExperienciaEmpresa
                    key={index}
                    empresa={experiencia.empresa}
                    periodo={experiencia.periodo}
                    cargo={experiencia.cargo}
                    responsabilidades={experiencia.responsabilidades} />
            ))}
        </div>
    </section>
  );
};

export default Experiencia;