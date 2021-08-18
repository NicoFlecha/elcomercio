import { Container } from "@material-ui/core";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting = 'Hola usuario'}) => {
    return (
        <Container>
            <h1>{greeting}</h1>
            <ItemList />
        </Container>
    )
    
}

export default ItemListContainer;