import { Link } from "react-router-dom";

export default function SearchResultsPage({newSearch, products}){

    return(
        <>
        <h1>Search Results</h1>
        <p>{newSearch}</p>
        {products.map((product) => (
        <Link to={`/item/${product.category}/${product._id}`}>
        <div className="item-card">
            <p>{product.title}</p>
            <p>${product.wholesalePrice}</p>
        </div>
        </Link>
))}
        </>
    )
}

