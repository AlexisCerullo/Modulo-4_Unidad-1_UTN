import { Link } from "react-router-dom"

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="contacto">
                <form action="">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" id="nombre" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="" id="email" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="tel" name="" id="telefono" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id="mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
                <div class="otros-medios">
                    <h2>Redes sociales</h2>
                    <h4>En caso de consultas mas informales podes contactarte mediante nuestras redes sociales!</h4>
                    <div className="redes">
                        <Link to="#"><img src="img/redes/facebook.png" alt="facebook" /></Link>
                        <Link to="#"><img src="img/redes/intagram.png" alt="instagram" /></Link>
                        <Link to="#"><img src="img/redes/x.png" alt="x" /></Link>
                        <Link to="#"><img src="img/redes/youtube.png" alt="youtube" /></Link>
                        <Link to="#"><img src="img/redes/discord.png" alt="discord" /></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ContactoPage