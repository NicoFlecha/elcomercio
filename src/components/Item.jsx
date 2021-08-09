import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <Card>
            <CardMedia image={pictureUrl} title={title} style={{height: '250px', maxHeight: '100%'}} />
            <CardContent>
                <Typography style={{fontSize: '2rem', textAlign: 'start'}}>
                    ${new Intl.NumberFormat('de-DE', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}).format(price)}
                </Typography>
                <Typography style={{textAlign: 'start'}}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Item;