import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDeets from "../../components/ProductDeets/ProductDeets";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import WriteReviewForm from "../../components/WriteReviewForm/WriteReviewForm";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Function to fetch item data from the database
    const fetchItem = async () => {
      try {
        // Replace this fetch call with your actual API call to fetch item data
        const response = await fetch(`/api/items/${id}`); // Adjust API endpoint as per your backend
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const data = await response.json();
        setItem(data); // Set item data received from the API response
      } catch (error) {
        console.error("Error fetching item data:", error);
      }
    };

    fetchItem(); // Call the fetchItem function when the component mounts
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductDeets item={item} />
      <ProductReviews item={item} />
    </div>
  );
}
