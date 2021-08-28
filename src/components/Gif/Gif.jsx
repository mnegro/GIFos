//Style
import './Gif.css';

function Gif({
    key,
    src
}){
    return(
            <img className= "gif--img" src={src} alt="gif" />
        
        
    )
}

export default Gif;