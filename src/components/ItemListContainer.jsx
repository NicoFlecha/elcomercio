import { Container } from "@material-ui/core";

const ItemListContainer = ({greeting = 'Hola usuario', children}) => {
    return (
        <Container>
            <h1>{greeting}</h1>
            <div>
                {children}
            </div>
        </Container>
    )
    
}

export default ItemListContainer;