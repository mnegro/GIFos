//assets
import friendlyImage from '../../assets/ilustra_header.svg'
//Style 
import './Filter.css'

//Components
import Search from '../Search/Search';


function Gif({
    className
}){
    return(
        <div className={`'gif__container' ${className} `}>
            <h1 className="gif__title">¡Inspirate y busca los mejores <strong>GIFS!</strong></h1>
            <img className="gif__img" src={friendlyImage} alt="Friendly image" />
            <Search className=""/>
            <h2 className='gif__title--subtitle'>Realiza tu busqueda</h2>
        </div>
    )
}

export default Gif;