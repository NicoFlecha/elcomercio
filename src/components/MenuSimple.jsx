import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


function MenuSimple (props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyles = makeStyles({
        colorMain: {
            color: 'red'
        }
    })

    return (<>
        <Button className={useStyles.colorMain} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            {props.item.titulo}
        </Button>
        <Menu
            id="simple-menu"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
        <>
        {
            props.item.elementos.map(elemento => {
                return <MenuItem onClick={handleClose}>{elemento.titulo}</MenuItem>               
            })
        }
        </>
        </Menu>
    </>)
}

export default MenuSimple;