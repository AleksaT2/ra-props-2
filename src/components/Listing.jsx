import React from "react";


function Listing(props) {
    return(
        <div className="item-list">
            {props.items.map(item => {
                return(
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={(item.MainImage && item.MainImage.url_570xN) ? item.MainImage.url_570xN : 'no image'} alt={item.title}/>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{(item.title && item.title.length > 50) ? `${item.title.slice(0, 50)}...` : item.title}</p>
                            <p className="item-price">{item.currency_code === "USD" ? "$" : item.currency_code === "EUR" ? "€" : item.currency_code + ' '}{item.price}</p>
                            <p className={item.quantity <= 20 ? (item.quantity < 10 ? "level-low item-quantity" : "level-medium item-quantity") : "level-high item-quantity"}>
                                {item.quantity} left
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
    
}

export default Listing;