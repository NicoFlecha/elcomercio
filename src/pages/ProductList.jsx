import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

const ProductList = () => {

    const { id } = useParams();

    console.log(id);

    return <ItemListContainer category={id} />
};

export default ProductList;