import React from "react"

export default function Card(props) {
    return (
        <div className="card-card">
            <img src={`../images/${props.img}`} className="card-img"/>
            <div className="card-cardstats">
                <img className="card-star" src="../images/star.png"/>
                <span className="card-gray">{props.rating}</span>
                <span className="card-gray">({props.reviewCount}) • </span>
                <span className="card-gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> a person</p>
        </div>
    )
}