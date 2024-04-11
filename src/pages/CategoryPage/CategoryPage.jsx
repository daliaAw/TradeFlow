import { useParams } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard"

export default function CategoryPage({category, items}) {

    let { categoryName } = useParams();

    return (
        <>
        <h1>{categoryName}</h1>
        <div className="item-list">
            {/* {items.map((item) => ( */}
            {/* <ItemCard key={item._id} product={item}/> */}
            {/* ))} */}
            <ItemCard/>
        </div>
        </>
    );
}