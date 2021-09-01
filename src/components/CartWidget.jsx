    import { IconButton } from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const CartWidget = ({color = "inherit"}) => {

    return (
        <IconButton>
            <Link to="/cart">
                <ShoppingCartIcon htmlColor={color} />
            </Link>
        </IconButton> 
    );

}

export default CartWidget;