import { Button, Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Delete as DeleteIcon } from "@material-ui/icons";
import ItemCount from "./ItemCount";
import Price from "./Price";

export const CartDetail = () => {
    
    const { cartItems, clearCart, addItem, removeItem } = useContext(CartContext);

    return (
        <Container>
            <div style={{marginTop: '2rem', backgroundColor: 'white', padding: '2rem', borderRadius: '10px'}}>
                {
                    cartItems.length > 0 ? (
                        <>
                            <Grid container>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8} md={6} style={{padding: '1rem'}}> 
                                    <span><b>Producto</b></span>
                                </Grid>
                                <Grid item xs={1} md={3} style={{padding: '1rem'}}> 
                                    <span><b>Cantidad en Carrito</b></span>
                                </Grid>
                                <Grid item xs={2} style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
                                    <Button variant='contained' color='secondary' onClick={() => clearCart()} >Limpiar carrito</Button>
                                </Grid>
                            </Grid>
                            {
                                cartItems.map(item => (
                                    <Grid container>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={8} md={6} style={{margin: '0.5rem 0', padding: '1rem'}}>
                                            <Grid container style={{backgroundColor: 'lightgray', borderRadius: '10px', padding: '1rem'}}>
                                                <Grid item xs={3}>
                                                    <div style={
                                                        {width: '100px', height: '100px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}
                                                    }>
                                                        <img src={item.image} style={{borderRadius: '10px', width: '100%'}} alt={item.title} />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={9} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',textAlign: 'center'}}>
                                                    <h3 style={{margin: 0, fontSize: '1.5rem'}}>
                                                        <Link style={{color: 'inherit', textDecoration: 'none'}} to={`/items/${item.id}`}>{item.title}</Link>
                                                    </h3>
                                                    <p style={{fontWeight: 'bold'}}>
                                                        Subtotal: $<Price amount={item.price * item.quantity} />
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} md={3} style={{margin: '0.5rem 0', padding: '1rem'}}>
                                            <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <ItemCount 
                                                    minimal={true} 
                                                    item={{...item}} 
                                                    stockRaw={item.stock} 
                                                    onAdd={addItem}
                                                    initial={item.quantity}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div style={{height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                                <Button variant="text" onClick={() => removeItem(item)}>
                                                    <DeleteIcon color='secondary' />
                                                </Button>
                                            </div>
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