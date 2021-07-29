    import { IconButton } from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon} from '@material-ui/icons';

const CartWidget = ({color = "inherit"}) => {

    return (
        <IconButton>
            <ShoppingCartIcon htmlColor={color} />
        </IconButton> 
    );

}

export default CartWidget;