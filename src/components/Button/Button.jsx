//Style
import './Button.css';


function Button ({
    className,
    onClick,
    children
}){
    return(
        <button
            className={`${className? `${className}` : 'btn'}`}
            onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button;