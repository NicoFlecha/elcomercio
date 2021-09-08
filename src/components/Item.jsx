import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Price from './Price';
 
const Item = ({id, title, price, image}) => {
    return (
        <Link to={`/items/${id}`} style={{color: 'inherit', textDecoration: 'none'}}>
            <Card style={{height: '275px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <CardMedia image={image} title={title} style={{height: '150px', width: '100%', backgroundPosition: 'center', backgroundSize: 'auto 90%'}} />
                <CardContent style={{width: '100%', boxSizing: 'border-box', padding: '0.5rem'}}>
                    <Typography style={{fontSize: '1.5rem', textAlign: 'start'}}>
                        <Price amount={price} />
                    </Typography>
                    <Typography style={{textAlign: 'start'}}>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Item;