import { Card, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import Price from './Price';

const ItemDetail = ({title, price, pictures}) => {

    if (!pictures) {
        return (
            <Container style={{marginTop: '2rem'}}>
                <Link to='/products'>Volver a Productos</Link>
                <Card style={{marginTop: '2rem'}}>
                <Grid container >
                    <Grid item sm={12} md={7} style={{padding: '1rem'}}>
                        <Skeleton variant="rect" width={'60%'} height={500} />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <Skeleton variant="text" width={'80%'} height={'2rem'}/>
                        <Skeleton variant="text" width={'40%'} height={'2rem'}/>
                    </Grid>
                </Grid>
            </Card>
            </Container>
        )
    }

    return (
        <Container style={{marginTop: '2rem'}}>
            <Link to='/products'>Volver a Productos</Link>
            <Card style={{marginTop: '2rem'}}>
                <Grid container >
                    <Grid item sm={12} md={7}>
                        <div style={{height: '400px', display: 'flex', justifyContent: 'center'}}>
                            <img src={pictures[0].url} style={{height: '100%'}} />
                        </div>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%'}}>
                            <h1>{title}</h1>
                            <h2>$ <Price amount={price}/></h2>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default ItemDetail;