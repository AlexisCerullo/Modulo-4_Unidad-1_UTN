import { Link } from "react-router-dom"

const BlogPage = (props) => {
    return (
        <main className="holder">
            <div className="entradas-blog">
                <div className="entrada-blog">
                    <div className="contenido-entrada-blog">
                        <h2>Titulo</h2>
                        <h4>xx/xx/20xx</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip
                            ex ea commodo consequat.</p>
                        <p className="centrado"><Link to="#">Ver mas</Link></p>
                    </div>
                </div>
                <div className="entrada-blog">
                    <div className="contenido-entrada-blog">
                        <h2>Titulo</h2>
                        <h4>xx/xx/20xx</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip
                            ex ea commodo consequat.</p>
                        <p className="centrado"><Link to="#">Ver mas</Link></p>
                    </div>
                </div>
                <div className="entrada-blog">
                    <div className="contenido-entrada-blog">
                        <h2>Titulo</h2>
                        <h4>xx/xx/20xx</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip
                            ex ea commodo consequat.</p>
                        <p className="centrado"><Link to="#">Ver mas</Link></p>
                    </div>
                </div>
                <div className="entrada-blog">
                    <div className="contenido-entrada-blog">
                        <h2>Titulo</h2>
                        <h4>xx/xx/20xx</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip
                            ex ea commodo consequat.</p>
                        <p className="centrado"><Link to="#">Ver mas</Link></p>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default BlogPage;