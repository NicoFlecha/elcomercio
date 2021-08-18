import { Grid } from "@material-ui/core";
import { SettingsOverscanTwoTone } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import { useState, useEffect } from "react";
import Item from "./Item";

const SkeletonItem = () => (
    <Skeleton variant="rect" width={250} height={350} />
)

const SkeletonItemList = ({q = 1}) => {
    let items = [];

    for(let i = 0; i < q; i++) {
        items.push(
            <div style={{padding: '1rem'}}>
                <SkeletonItem />
            </div>
        )
    }

    return items;
}

const ItemList = () => {

    const products = [
        {
          id: 1,
          title: 'Iphone 12',
          price: 1100,
          pictureUrl: 'https://www.macstation.com.ar/img/productos/small/1675-1111.jpg'
        },
        {
          id: 2,
          title: 'Samsung Galaxy Z Flip',
          price: 1500,
          pictureUrl: 'https://cloudfront-eu-central-1.images.arcpublishing.com/larazon/X2R22FSTWVHAJI2CFHVHFSESXY.jpg'
        },
        {
          id: 3,
          title: 'Celular',
          price: 150,
          pictureUrl: 'https://www.macstation.com.ar/img/productos/small/1675-1111.jpg'
        },
        {
          id: 4,
          title: 'Celular',
          price: 150,
          pictureUrl: 'https://www.macstation.com.ar/img/productos/small/1675-1111.jpg'
        }
    ];

    const [items, setItems] = useState(null);

    const getProducts = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055');
        const data = await response.json();
        setItems(data.results);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return items ? (
        <Grid container justifyContent='center' spacing={5}>
            {
                items.map(item => {
                    return (
                        <Grid item spacing={10} xs={10} sm={6} md={4} xl={3}>
                            <Item {...item} />
                        </Grid>
                    )
                })
            }
        </Grid>
    ) : (
        <Grid container justifyContent='center' spacing={5}>
            <SkeletonItemList q={10} />
        </Grid>
    )
}

export default ItemList;