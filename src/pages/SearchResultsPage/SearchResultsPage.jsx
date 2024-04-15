import { Link, useLocation } from "react-router-dom";
import "./SearchResultsPage.css"

export default function SearchResultsPage({ products }){

    const location = useLocation();
    const searchTerm = location.state

    const resultsArr = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
    <>
    <h1>Search Results</h1>

    <div className="search-items-containter">
    {resultsArr.length === 0 ? (
        <p>No Results Found</p>
        ) : (
            
            resultsArr.map((product) => (
                <div className="search-item">
            <Link to={`/item/${product.category}/${product._id}`} key={product._id}>
                <div className="search-item-card">

                    <p>{product.title}</p>
                    <p>${product.wholesalePrice}</p>
                </div>
            </Link>
            <button>Add to Cart</button>
            </div>
        ))
        )}
        </div>

    </>
    )
}

