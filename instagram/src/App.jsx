//import css
import Style from './css/login.module.css'
import './css/App.css'
import './css/dayNight.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import image
import Moon from './img/moon.png'
import Sun from './img/sun.png'
import Black from './img/black.png'
import White from './img/white.png'
import Phone from './img/phone.png'
import PhoneBlack from './img/phoneBlack.png'
//import
import {useState} from 'react'
import Login from './components/Login'
import ModeDark from './components/ModeDark'

function App() {
    const [check, setCheck] = useState(false)

    const darkMode = () => {
        setCheck(!check)
    }

  return (
    <div className='App'>
        <input type="checkbox" name="check" id="check" className='check' onChange={darkMode} />
        <div className='App'>
            <ModeDark checked={check == true ? Sun : Moon} />
            <div className='d-flex col-12 col-lg-11 justify-content-around'>
				<div className='phon col-lg-7 col-xl-3 col-xxl-5 d-none d-lg-flex justify-content-end'>
					<img src={check == true ? Phone : PhoneBlack} alt="phoneBack" />
					<img className='d-xxl-none' src={check == true ? PhoneBlack : Phone} alt="phoneFront" />
				</div>
				<Login
					chec={check == true ? White : Black}
					color={check == true ? Style.login1 : Style.login}
					alter={check == true ? Style.alter1 : Style.alter}/>
			</div>
        </div>
    </div>
  )
}

export default App
