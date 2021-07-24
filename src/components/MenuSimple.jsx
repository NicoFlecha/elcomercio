import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


function MenuSimple ({item}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyles = makeStyles({
        colorMain: {
            color: 'white'
        },
        fontBold: {
            fontWeight: 'bold',
            color: 'inherit'
        }
    })

    const styles = useStyles();

    return (
        <>
            <Button className={[styles.colorMain, styles.fontBold]} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {item.titulo}
            </Button>
            <Menu
                id="simple-menu"
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'center',
                // }}
                // transformOrigin={{
                //     vertical: 'top',
                //     horizontal: 'center',
                //   }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div>
                {
                    item.elementos.map(elemento => {
                        return <MenuItem onClick={handleClose}>{elemento.titulo}</MenuItem>               
                    })
                }
                </div>
            </Menu>
        </>
    )
}

export default MenuSimple;