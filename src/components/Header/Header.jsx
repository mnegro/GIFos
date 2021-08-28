import Button from '../Button/Button'
import  Logo from '../../assets/logo-desktop.svg';
import './Header.css'

function Header ({
    isDark,
    onClick
}){
    return (
          <div className="header">
            <img src= {Logo} alt="Logo Gifos" />

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