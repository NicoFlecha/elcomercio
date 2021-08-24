import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Items from './../mock-api/items.json';

const ItemListContainer = ({greeting = 'Hola usuario', category = null}) => {

    const [items, setItems] = useState([]);

    // const getProductsAPI = async () => {
    //     const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055');
    //     const data = await response.json();
    //     setItems(data.results);
    // }

    const getProducts = async (category) => {
        setTimeout(async () => {

            let data = [];

            if (category) {
                data = Items.results.filter(item => item.category == category);
            } else {
                data = Items.results;
            }

            setItems(data);

        }, 2000)
    }

    useEffect(() => {
        getProducts(category);

        return setItems([]);
    }, [category]);

    return (
        <Container>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </Container>
    )
    
}

export default ItemListContainer;