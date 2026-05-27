import React from 'react';
import Proyecto from './Proyecto';

const Presentacion = () => {
  return (
    <section id="presentacion">
        <div className="container-fluid p-5">
            <h2>Presentación</h2>
            <div className="row">
                <div className="col-lg-4 p-3 d-none d-md-block">
                    <img src="https://res.cloudinary.com/dorfpavlv/image/upload/v1779472241/Foto-formal_sdbzxd.png" alt="Foto Sebastián León" />
                </div>
                <div className="col-lg-8 col-sm-12 p-3">
                    <p>
                        Soy docente con una amplia trayectoria en educación motivado por iniciar una nueva carrera
                        como Desarrollador Web Full Stack. Poseo sólidas habilidades blandas como facilidad para
                        aprender nuevas tecnologías, excelentes habilidades de comunicación escrita, creatividad y
                        trabajo en equipo. Mi formación multidisciplinaria me permite abordar desafíos desde
                        perspectivas innovadoras y colaborativas. Además, demuestro un compromiso inquebrantable con
                        el aprendizaje continuo y el desarrollo profesional en el área de TI.
                    </p>
                    <h3>Habilidades</h3>
                    <div className="row">
                        <div className="col">
                            <p className="text-end">HTML</p>
                            <p className="text-end">CSS</p>
                            <p className="text-end">Bootstrap</p>
                            <p className="text-end">JavaScript</p>
                            <p className="text-end">React</p>
                        </div>
                        <div className="col">
                            <p>Avanzado</p>
                            <p>Avanzado</p>
                            <p>Avanzado</p>
                            <p>Avanzado</p>
                            <p>Intermedio</p>
                        </div>
                        <div className="col">
                            <p className="text-end">Java</p>
                            <p className="text-end">SQL</p>
                            <p className="text-end">Node.js</p>
                            <p className="text-end">Express</p>
                            <p className="text-end">Spring Boot</p>
                        </div>
                        <div className="col">
                            <p>Intermedio</p>
                            <p>Intermedio</p>
                            <p>Intermedio</p>
                            <p>Avanzado</p>
                            <p>Intermedio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Presentacion;