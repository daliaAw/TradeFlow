import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const categories = [
    { name: "Consumer Goods", path: "categories/consumergoods" },
    {
      name: "Technology and Electronics",
      path: "categories/technologyelectronics",
    },
    { name: "Fashion and Apparel", path: "categories/fashionapparel" },
    { name: "Home and Garden", path: "categories/homegarden" },
    { name: "Health and Wellness", path: "categories/healthwellness" },
  ];

  return (
    <footer>
      <hr/>
      <div className="footer">
        <div className="subscribe">
          <h5>Get Top Marketing Insights!<br/> Subscribe Now!</h5>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="categories">
          <h5>Categories</h5>
          <ul>
            {categories.map((category) => (
              <li key={category.name}>
                <Link to={`/cat/${category.name}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="misc">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Our Mission</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  )
}
