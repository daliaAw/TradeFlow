import { useParams } from "react-router-dom";

export default function CategoryPage({category, items}) {


    let { categoryName } = useParams();

    return (
        <>
        <h1>{categoryName}</h1>
        <div className="item-list">
            {/* {items.map((item) => (
            <ItemCard key={item._id} product={item}/>
            ))} */}
        </div>
        </>
    );
}