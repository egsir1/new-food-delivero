import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";

const ItemCard = ({ imgSrc, name, ratings, price }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className="itemCard">
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox2">
        <img src={imgSrc} alt="Pic" className="itemImg" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="rating">
            {/* {Array.apply(null, { length: 4 }).map((e, i) => (
              <i key={i}>
                <StarRounded />
              </i>
            ))} */}
            <h3 className="price">
              {price} <span> ₩</span>
            </h3>
          </div>
          <i className="addToCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
