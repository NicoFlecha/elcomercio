import { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Grid, Button } from '@material-ui/core';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';

const ItemCount = ({stockRaw = 0, initial = 0, idItem, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [stock, setStock] = useState(stockRaw);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (count > stock) return setCount(stock);
        if (count < 0) return setCount(0);
        setDisabled(!(count > 0));
    }, [count])

    return (
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
                    <Button variant="outlined" size="large" style={{marginTop: '1rem', backgroundColor: 'white', width: '100%'}} onClick={() => {onAdd({quantity: count, item: idItem}); setStock(stock - count); setCount(0)}} disabled={disabled}>Agregar al Carrito</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default ItemCount;