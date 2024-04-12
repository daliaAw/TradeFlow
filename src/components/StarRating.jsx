import React, { useState } from 'react';

function StarRating({ rating, onHover }) {
  const [hoverRating, setHoverRating] = useState(null);

  const handleMouseOver = (index) => {
    setHoverRating(index + 1);
    if (onHover) {
      onHover(index + 1);
    }
  };

  const handleMouseOut = () => {
    setHoverRating(null);
    if (onHover) {
      onHover(null);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      {[...Array(5)].map((_, index) => {
        const starNumber = index + 1;
        return (
          <span
            key={index}
            className="fa fa-star"
            style={{
              color: hoverRating && hoverRating >= starNumber ? 'gold' : 'light-gray',
              textShadow: `0 0 0 ${hoverRating && hoverRating >= starNumber ? 'gold' : 'transparent'}`,
              fontSize: '20px',
              marginRight: '3px',
              cursor: 'pointer'
            }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleMouseOut()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
