import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDeets from "../../components/ProductDeets/ProductDeets";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm";


function ItemDetailsPage( {user, setUser} ) {

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/items/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <ProductDeets item={item} user={user} setUser={setUser} />
      <ProductReviews item={item} />

    </div>
  );
}
