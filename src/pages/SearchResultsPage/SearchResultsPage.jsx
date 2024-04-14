import { Link, useLocation } from "react-router-dom";

export default function SearchResultsPage({ products }){

    const location = useLocation();
    const searchTerm = JSON.stringify(location.state)
    // const resultsArr = products.filter(product => product.tile.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // product.description.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <>
        <h1>Search Results</h1>
        <p>{location.state}</p>
        <p>{searchTerm}</p>
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

