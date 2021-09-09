import { Card, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import Price from './Price';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({id, title, price, image, stock, description}) => {

    const { addItem } = useContext(CartContext);

    if (!image) {
        return (
            <Container style={{marginTop: '2rem'}}>
                <Link to='/items'>Volver a Productos</Link>
                <Card style={{marginTop: '2rem'}}>
                <Grid container >
                    <Grid item sm={12} md={7} style={{padding: '1rem'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Skeleton variant="rect" width={'60%'} height={500} style={{borderRadius: '10px'}} />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                            <div style={{width: '100%'}}>
                                <Skeleton variant="text" width={'80%'} height={'4rem'}/>
                                <Skeleton variant="text" width={'40%'} height={'4rem'}/>
                            </div>

                            <div style={{width: '100%'}}>
                                <Skeleton variant="text" width={'80%'} height={'4rem'}/>
                                <Skeleton variant="text" width={'40%'} height={'4rem'}/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Card>
            </Container>
        )
    }

    return (
        <Container style={{marginTop: '2rem'}}>
            <Link to='/items'>Volver a Productos</Link>
            <Card style={{marginTop: '2rem', padding: '2rem'}}>
                <Grid container >
                    <Grid item sm={12} md={7} style={{width: '100%'}}>
                        <div style={{height: '400px', display: 'flex', justifyContent: 'center'}}>
                            <img src={image} style={{height: '100%', width: 'auto'}} />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={5} style={{width: '100%'}}>
                        <Container style={{height: '100%'}}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%'}}>
                                <h1>{title}</h1>
                                <h2>$ <Price amount={price}/></h2>
                                <ItemCount item={{id, title, price, image, stock}} stockRaw={stock} onAdd={addItem} />
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Card>
            <Card style={{marginTop: '2rem', padding: '2rem'}}>
                <h2>Sobre el producto</h2>
                <p>{description}</p>
            </Card>
        </Container>
    )
}

export default ItemDetail;