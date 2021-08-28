//Style
import './Results.css';
//Components
import Gif from '../Gif/Gif';

function Results ({
    className,
    data
}){
    console.log(className);
    return(
       <section className={`result__container ${className? `${className} `: ''}`}>
           {(data || []).map(item =>{
               const {id, url} = item;
               return (
                    <Gif 
                        key={id}
                        src={url}    
                    />
               )
           })}
       </section>
    )
}

export default Results;