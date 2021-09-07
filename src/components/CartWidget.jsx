import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = ({color = "inherit"}) => {

    const { cartLength } = useContext(CartContext);

    return cartLength > 0 ? (
        <IconButton>
            <Link to="/cart">
                <Badge badgeContent={ cartLength } color='secondary' showZero={true}>
                    <ShoppingCartIcon  htmlColor={color} />
                </Badge>
            </Link>
        </IconButton> 
    ) : (
        <></>
    );

}

export default CartWidget;