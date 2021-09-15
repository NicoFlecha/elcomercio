import { Backdrop, Button, Fade, Grid, Modal, TextField } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import { CartContext } from "../context/CartContext";

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'white',
      border: '0',
      borderRadius: '10px',
      boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.5)',
      padding: '1.5rem'
    },
    m1: {
        margin: '0.5rem'
    },
    mt2: {
        marginTop: '1rem'
    }
}));

export const CartModal = () => {

    const [open, setOpen] = useState(false);
    const [checkoutUser, setCheckoutUser] = useState({
        name: '',
        email: '',
        cellphone: ''
    });
    const classes = useStyles();

    const { cartTotal, buyCart } = useContext(CartContext);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const onValueChange = (e) => {
        let target = e.target;
        let type = target.id;
        let value = target.value;
        setCheckoutUser({
            ...checkoutUser,
            [type]: value
        })
    }

    useEffect(() => {
        console.log(checkoutUser);
    }, [checkoutUser])

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <p><b>Total: ${cartTotal}</b></p>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' color='primary' onClick={handleOpen}>Terminar compra</Button>
                </Grid>
            </Grid>
                
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500,}}
            >

                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Terminar compra</h2>
                        <form style={{display: 'flex', flexDirection: 'column'}}>
                            <div>
                                <TextField id="name" label="Nombre" className={classes.m1} value={checkoutUser?.name} onChange={onValueChange} />
                                <TextField id="email" label="Email" className={classes.m1} value={checkoutUser?.email} onChange={onValueChange} />
                            </div>
                            <TextField id="cellphone" label="Celular" className={classes.m1} value={checkoutUser?.cellphone} onChange={onValueChange} />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.mt2}
                                onClick={() => buyCart(checkoutUser)}
                            >
                                Comprar
                            </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}