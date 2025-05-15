import {Link} from 'react-router-dom'



export default function LinkComp({children,linkAdd,...others}){
    
    return(
        <Link to={linkAdd} {...others}>
            {children}
        </Link>
        )
}