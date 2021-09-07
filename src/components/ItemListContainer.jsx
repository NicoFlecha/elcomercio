import { Container } from "@material-ui/core";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';

const ItemListContainer = ({greeting = 'Hola usuario', category = null}) => {

    const [items, setItems] = useState([]);

    const getProducts = async (category) => {

        if (category) {

            const productsRef = collection(db, 'products');

            const q = query(productsRef, where("categoryId", "==", parseInt(category)));

            const productsSnapshot = await getDocs(q);

            const products = productsSnapshot.docs.map(product => {
                return {id: product.id, ...product.data()};
            })

            console.log(products);
            setItems(products);

        } else {

            const productsSnapshot = await getDocs(collection(db, 'products'));

            const products = productsSnapshot.docs.map(product => {
                return {id: product.id, ...product.data()};
            })

            console.log(products);
            setItems(products);
   
        }

    }

    useEffect(() => {

        console.log(category);

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