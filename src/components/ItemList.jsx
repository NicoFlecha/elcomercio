import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Item from "./Item";

const SkeletonItem = () => (
    <Skeleton variant="rect" width={250} height={350} />
)

const SkeletonItemList = ({q = 1}) => {
    let items = [];

    for(let i = 0; i < q; i++) {
        items.push(
            <div key={i} style={{padding: '1rem'}}>
                <SkeletonItem />
            </div>
        )
    }

    return items;
}

const ItemList = ({items}) => {

    return items?.length > 0 ? (
        <Grid container justifyContent='center' spacing={5}>
            {
                items.map(item => {
                    return (
                        <Grid item xs={12} md={4} lg={3}>
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