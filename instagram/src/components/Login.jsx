import Perfil from '../img/perfil.jpg'
import Google from '../img/google.png'
import Aplle from '../img/aplle.png'
//pages css
import Style from '../css/login.module.css'

const Login = ({chec, color, alter}) => {

    return (
    <div className={`${Style.loginInsta} d-flex flex-column align-items-center `}>
        <div className={`${color} col-11 d-flex flex-column align-items-center`}>
            <a href="https://www.instagram.com/">
                <img src={chec} alt="instagram" />
            </a>
            <img src={Perfil} alt="pefil" />
            <button>Continue como sprucegabriela</button>
            <p>Remover conta</p>
        </div>
        <div className={`${alter} col-11 d-flex flex-column align-items-center`}>
            <p>Não é sprucegabriela?</p>
            <p className='d-flex'><div>Alternar contas</div> ou <div>Inscreva-se</div></p>
        </div>
        <div className={`${Style.cell} col-11`}>
            <p>Baixe o aplicativo</p>
            <div className={`${Style.asgp}`}>
                <img src={Aplle} alt="aplle" className='phon'/>
                <img src={Google} alt="google" className='phon'/>
            </div>
        </div>
    </div>
     );
}

export default Login;