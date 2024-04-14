import { Link, useLocation } from "react-router-dom";

export default function SearchResultsPage({ products }){

    const location = useLocation();
    const searchTerm = location.state
    const resultsArr = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <>
        <h1>Search Results</h1>

        {resultsArr.map((product) => (
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

