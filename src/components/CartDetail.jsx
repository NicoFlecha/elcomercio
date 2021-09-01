import { Button, Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import items from '../mock-api/items.json';

export const CartDetail = () => {
    
    const { cartItems, clearCart } = useContext(CartContext);

    return (
        <Container>
            <div style={{marginTop: '2rem', backgroundColor: 'white', padding: '2rem', borderRadius: '10px'}}>
                {
                    cartItems.length > 0 ? (
                        <>
                            <Button variant='contained' color='secondary' onClick={() => clearCart()} >Limpiar carrito</Button>
                            {
                                cartItems.map(item => (
                                    <Grid container>
                                        <Grid xs={10} md={6} style={{backgroundColor: 'lightgray', margin: '1rem 0', padding: '1rem', borderRadius: '10px'}}>
                                            <Grid container>
                                                <Grid xs={6}>
                                                    <div style={
                                                        {width: '200px', height: '200px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}
                                                    }>
                                                        <img src={items.results.find(i => i.id == item.id).image} style={{borderRadius: '10px', width: '100%'}} />
                                                    </div>
                                                </Grid>
                                                <Grid xs={6} style={{textAlign: 'center'}}>
                                                    <h3>{items.results.find(i => i.id == item.id).title}</h3>
                                                    -
                                                    {item.quantity}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </>
                    ) : (
                        <div style={{textAlign: 'center'}}>
                            <h2>El carrito está vacío</h2>
                            <Link to='/items'>
                                <span>Empezar a comprar</span>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Container>
    )

}