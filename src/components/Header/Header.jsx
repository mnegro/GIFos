import Button from '../Button/Button'
import  Logo from '../../assets/logo-desktop.svg';
import LogoNoc from '../../assets/logo-mobile-modo-noct.svg';
import './Header.css'

function Header ({
    isDark,
    onClick
}){
    return (
          <div className="header">
            <img src={`${isDark? `${LogoNoc}` : `${Logo}`}`} alt="Logo Gifos" />

            <Button 
                isDark={isDark}
                onClick={onClick}
            >
                MODO
                {isDark? ' LIGTH' : ' DARK'}
            </Button>
    </div>
    )
  
}

export default Header;