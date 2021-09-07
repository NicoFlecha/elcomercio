import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";


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
        <MenuItem key={item.id}>
            <Button className={styles.colorMain, styles.fontBold} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                        return <MenuItem key={elemento.id} onClick={handleClose}><Link to={`/category/${elemento.id}`}>{elemento.titulo}</Link></MenuItem>               
                    })
                }
                </div>
            </Menu>
        </MenuItem>
    )
}

export default MenuSimple;