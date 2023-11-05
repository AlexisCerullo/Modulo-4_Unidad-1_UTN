const EmpleosPage = (props) => {
    return (

        <main className="holder">
            <div className="empleos">
                <div className="empleos-contenido">
                    <div className="empleos-titulo">
                        <h1>Trabaja con nosotros!</h1>
                        <h3>Estamos en busqueda de personal afines con nuestras necesidades de nuestro proyecto actual.</h3>
                    </div>
                    <form action="">
                        <p>
                            <label for="nombre-y-apellido">Nombre y Apellido</label>
                            <input type="text" name="" id="nombre-y-apellido" />
                        </p>
                        <p>
                            <label for="empleo">
                                <p className="seleccion">Seleccione el empleo al que quiere aplicar</p>
                                <div className="selectores">
                                    <div>
                                        <div>
                                            <input type="radio" name="posicion" id="actor-de-doblaje" />
                                            <label for="actor-de-doblaje">Actor/Actriz de doblaje</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="posicion" id="artista-2d" />
                                            <label for="artista-2d">Artista 2D</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="posicion" id="artista-3d" />
                                            <label for="artista-3d">Artista 3D</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="posicion" id="ingenierio-en-sistemas" />
                                            <label for="ingenierio-en-sistemas">Ingeniero en Sistemas</label>
                                        </div>
                                        <div>
                                            <input type="radio" name="posicion" id="ingenierio-en-sonido" />
                                            <label for="ingenierio-en-sonido">Ingeniero en Sonido</label>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </p>
                        <p className="curriculum">
                            <label for="curriculum">Subi tu curriculum acá!</label>
                            <input type="file" id="curriculum" />
                        </p>
                        <p>
                            <input type="submit" />
                        </p>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default EmpleosPage