import { AppBar, Box, Button, Container, IconButton, Slide, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import MenuSimple from './MenuSimple';

const HideOnScroll = props => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const NavBar = (props) => {

    return (
        <HideOnScroll {...props}>
            <AppBar position="static">
                <Container>
                    <Toolbar style={{padding: 0}}>
                        {/* <IconButton edge="start" color="inherit" aria-label="menu"></IconButton> */}
                        <Typography variant="h6">
                            ElComercio
                        </Typography>
                        <Box display="flex" flex-direction="row" justifyContent="center" width='100%'>
                            {
                                props.items.map(item => {
                                    let itemMenu;
                                    switch (item.tipo) {
                                        case 'dropdown':
                                            itemMenu = <MenuSimple item={item}></MenuSimple>;
                                        break;
                                        default:
                                            itemMenu = <Button color="inherit" position="end">{item.titulo}</Button>;
                                    }
                                    return itemMenu;
                                })
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar;