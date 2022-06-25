import React, {useState} from 'react'
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 2px;
    font-size: 20px;
    color: ${props => props.className === "on" ? "#F7EC0A" : "#000411"};
`

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
                setRating(0);
                setHover(0);
            }}    
          >
            <span>&#9733;</span>
          </Button>
        );
      })}
    </div>
  );
}

export default StarRating