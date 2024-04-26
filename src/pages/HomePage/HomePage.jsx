import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { index } from "../../utilities/items-api";
import "./HomePage.css";

export default function HomePage({ products }) {
    const [categoryItems, setCategoryItems] = useState([]);

    const categories = [
        { name: 'Consumer Goods' },
        { name: 'Technology and Electronics' },
        { name: 'Fashion and Apparel' },
        { name: 'Home and Garden' },
        { name: 'Health and Wellness' }
    ]

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await index()
                setCategoryItems(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchItems();
    }, []);

    return (
        <div className="homepage-container container-fluid ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {categoryItems.map((_, index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                    ))}
                </ol>
                <div className="carousel-inner">
                    {categoryItems.map((category, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img className="d-block w-100" src={`/img/banner${index + 1}.png`} alt={`Slide ${index}`} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{category.title}</h5>
                                <p>{category.description}</p>
                            </div>
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



            <div className="services-section mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/img/delivery-truck.png" alt="Photo 1" className="img-fluid" />
                        <p>Free Delivery</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/img/return.png" alt="Photo 2" className="img-fluid" />
                        <p>15 Days Return</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/img/call-center.png" alt="Photo 3" className="img-fluid" />
                        <p>Support 24/7</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/img/payment.png" alt="Photo 4" className="img-fluid" />
                        <p>Paymeny Secure</p>
                    </div>
                </div>
            </div>

            <div className="categories-section container">
                {categoryItems.map((category, categoryIndex) => (
                    <div className="category-row" key={category.category}>
                        <div className="">
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <h3 className="">{category.category}</h3>
                                        <hr className="flex-grow-1 border-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {category.items.slice(0, 4).map((item, index) => (  // Use slice(0, 4) to display only the first 4 items
                                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item._id}>
                                    <ItemCard item={item} imageUrl={`/img/cat${categoryIndex + 1}-${index + 1}.png`} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <hr />


            {/* <div className="byCategories-section">
                <h2 className="byCategories">
                    <Link to="/categories" className="byCategories-title">Shop by categories</Link></h2>
                <div className="row justify-content-center">
                    {categoryItems.map((category) => (

                        <div className="col-md-3 col-sm-6" key={category.category}>
                            <div className="animated-card">
                                <div className="circle">
                                    <div className="card-text">{category.category}</div>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div> */}

            <div className="byCategories-section">
                <h2><Link to="/categories" className="byCategories-title">Shop by categories</Link></h2>
                <div className="row categoryList">
                    {categories.slice(0, 5).map(c => (
                        <Link to={`/cat/${c.name}`} key={c.id} className="categoryLink">
                            <div className="col-md-3 col-sm-6">
                                <div className="animated-card">
                                    <div className="circle">
                                        <div className="card-text">{c.name}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <hr />

            <div className="get-started-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="get-started-title">Get Started</h2>
                            <p className="get-started-description">
                                Team up with TradeFlow experts and grow your business! Create your free account to take full advantage of our website features.
                            </p>
                            <button className="btn btn-primary get-started-btn">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
