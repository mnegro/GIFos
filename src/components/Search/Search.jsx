//Components
import Button from '../Button/Button'

//Style
import './Search.css'
import Icon from '../../assets/icon-search-mod-noc.svg';

function Search(){
    return(
        <div className="search__container">
            <input 
            className="search__input" 
            type="text" 
            placeholder="Buscar Gif"
            />
            <Button className={'btn__search'}>
                <img src={Icon} alt="Icon search" />
            </Button>
        </div>
    )
}

export default Search;