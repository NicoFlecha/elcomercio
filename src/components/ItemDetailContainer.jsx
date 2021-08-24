import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Items from './../mock-api/items.json';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const { id } = useParams();

    const getDataAPI = async () => {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        setItem(data);
    }

    const getData = async () => {
        setTimeout(async () => {
            let items = Items.results;
            let item = items.filter(i => i.id == id);
            setItem(item[0]);
        }, 1000)
    }

    useEffect(() => {
        getData();
        return setItem([]);
    }, [id]);

    return (
        <ItemDetail {...item} />
    )

}

export default ItemDetailContainer;