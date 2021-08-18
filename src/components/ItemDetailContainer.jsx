import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const { id } = useParams();

    const getData = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        setItem(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <ItemDetail {...item} />
    )

}

export default ItemDetailContainer;