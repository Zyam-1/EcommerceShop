import React from "react";



const Rating = ({ ratings, reviews }) => {
    console.log(ratings)
    let maxRatings = 5;
    let stars = [];

    for (let i = 1; i <= maxRatings; i++) {
        if (ratings >= i) {
            stars.push("full");
        } else if (ratings > (i - 0.5)) {
            stars.push("half");
        } else {
            stars.push("empty");
        }
    }
    return (
        <div className="d-flex align-items-center">
            <div className="me-2 text-warning">
                {
                    stars.map((star, i) => {
                        if (star === "full") {
                            return <i key={i} className="fa-solid fa-star"></i>
                        } else if (star === "half") {
                            return <i key={i} className="fa-solid fa-star-half-stroke"></i>
                        } else {
                            return <i key={i} className="fa-regular fa-star"></i>
                        }
                    })
                }
            </div >
            <small>{reviews}+ Reviews</small>
        </div>
    )
}


export default Rating;