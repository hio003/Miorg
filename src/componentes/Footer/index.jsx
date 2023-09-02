import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://co.linkedin.com/in/hilario-contreras-programador/'>
                <img src="/img/LinkedIn.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/hio003'>
                <img src="/img/githud.png" alt='Github' />
            </a>
            <a href='https://app.aluracursos.com/user/hio-coes'>
                <img src="/img/alura.png" alt='alura' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Hilario Contreras Dev.</strong>
    </footer>
}

export default Footer