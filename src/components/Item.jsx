import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Price from './Price';
 
const Item = ({id, title, price, image}) => {
    return (
        <Link to={`/items/${id}`} style={{color: 'inherit', textDecoration: 'none'}}>
            <Card style={{height: '275px', alignItems: 'center'}}>
                <CardMedia image={image} title={title} style={{height: '150px', backgroundPosition: 'center', backgroundSize: 'contain'}} />
                <CardContent>
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