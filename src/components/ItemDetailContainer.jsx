import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from '@firebase/firestore';
import { db } from '../firebase';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const { id } = useParams();

    const getData = async (id) => {
        const dataRef = doc(db, 'products', id);
        const dataSnap = await getDoc(dataRef);

        setItem({id: dataSnap.id, ...dataSnap.data()});
    }

    useEffect(() => {
        getData(id);
        return setItem([]);
    }, [id]);

    return (
        <ItemDetail {...item} />
    )

}

export default ItemDetailContainer;