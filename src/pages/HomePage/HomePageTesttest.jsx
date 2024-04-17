import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { index } from "../../utilities/items-api";
import "./HomePage.css";

export default function HomePage() {
    const [categoryItems, setCategoryItems] = useState([]);
    

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await index();
                setCategoryItems(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchItems();
    }, []);

    return (
        <div className="homepage-container ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {categoryItems.map((_, index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {categoryItems.map((category, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img className="d-block w-100" src="https://picsum.photos/200/200" alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            
            <div className="categories-section">
                <h1 className="p-3">Uncover Top Picks</h1>
                <div className="row">
                    {categoryItems.map((category) => (
                        <div className="col-md-4 mb-4" key={category.category}>
                            <div className="category-card">
                                {/* <Link to={`/categories/${category.category}`}>
                                    <h3>{category.category}</h3>
                                </Link> */}
                                <div className="item-cards">
                                    {category.items.slice(0, 3).map((item) => (
                                        <ItemCard key={item._id} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />     
            <div className="card special-offer-card">
                <div className="row no-gutters">
                    {/* Left column */}
                    <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Essential for Every Home</h5>
                        <p className="card-text">10% off select TVs from Samsung, LG, Sony, and more.</p>
                        <button className="btn btn-primary">Button</button>
                    </div>
                    </div>
                    {/* Right column */}
                    <div className="img-card col-md-6">
                    <img src="https://picsum.photos/50/50" className="card-img" alt="Image" />
                    </div>
                </div>
            </div>
            
                <h2 className="section-title">
                <Link to="/categories" className="see-all-link">Shop by categories</Link></h2>
                <div className="row justify-content-center">
                  {categoryItems.map((category) => (
                  <div className="col-md-2" key={category.category}>
                   <div className="animated-card">
                   <div className="circle">
                   <div className="card-text">{category.category}</div>
                </div>
                </div>
             </div>
    ))}
             </div>
              <div className="cta-section">
                <h2 className="cta-title">Get Started</h2>
                <p className="cta-description">
                    Team up with TradeFlow experts and grow your business! Create your free account to take full advantage of our website features.</p>
                    <button className="cta-button">GET STARTED</button>
            </div>

{/* 
                <div className="row justify-content-center">
                <div className="col-md-2">
                    <div className="animated-card">
                        <div className="circle">
                        <div className="card-text">Card 1 Text</div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="animated-card">
                        <div className="circle">
                        <div className="card-text">Card 2 Text</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="animated-card">
                        <div className="circle">
                        <div className="card-text">Card 3 Text</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="animated-card">
                        <div className="circle">
                        <div className="card-text">Card 4 Text</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="animated-card">
                        <div className="circle">
                        <div className="card-text">Card 5 Text</div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
    );
}
