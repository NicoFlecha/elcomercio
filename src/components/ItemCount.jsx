import { useState, useEffect, useContext } from 'react';
import { Card, CardContent, CardActions, Grid, Button } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemCount = ({stockRaw = 0, initial = 0, idItem, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [stock, setStock] = useState(stockRaw);
    const [disabled, setDisabled] = useState(false);
    
    const { isInCart, removeItem } = useContext(CartContext);

    useEffect(() => {
        if (count > stock) return setCount(stock);
        if (count < 0) return setCount(0);
        setDisabled(!(count > 0));
    }, [count])

    return isInCart(idItem) ? (
        <div style={{display: 'block'}}>
            <Link to="/cart" style={{textDecoration: 'none', textAlign: 'center'}}>
                <Button variant="contained" color="primary" size="large" style={{width: '70%'}}>Terminar Compra</Button>
            </Link>
            <Button variant="contained" color="secondary" size="large" style={{width: '20%', marginLeft: '10%'}} onClick={() => {removeItem(idItem); setStock(stockRaw)}}><DeleteIcon /></Button>
        </div>

    )
    :
    (
        <div style={{minWidth: '250px', maxWidth: '300px'}}>
            <Card variant="outlined" style={{backgroundColor: '#F4F5F4'}}>
                <CardContent>
                    <Grid container justifyContent="space-around" alignItems="center" style={{backgroundColor: 'white', borderRadius: '5px'}}>
                        <Grid item>
                            <CardActions>
                                <Button onClick={() => {setCount(count - 1)}}>
                                    <RemoveIcon />
                                </Button>
                            </CardActions>
                        </Grid>
                        <Grid item>
                            {count}
                        </Grid>
                        <Grid item>
                            <CardActions>
                                <Button onClick={() => {setCount(count + 1)}}>
                                    <AddIcon />
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                    <Button variant="outlined" size="large" style={{marginTop: '1rem', backgroundColor: 'white', width: '100%'}} onClick={() => {onAdd({quantity: count, id: idItem}); setStock(stock - count); setCount(0)}} disabled={disabled}>Agregar al Carrito</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ItemCount;