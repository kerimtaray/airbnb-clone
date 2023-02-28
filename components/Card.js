import React from "react"

export default function Card() {
    return (
        <div className="card-card">
            <img src="../images/katie-zaferes.png" className="card-img"/>
            <div className="card-cardstats">
                <img className="card-star" src="../images/star.png"/>
                <span className="card-gray">5.0</span>
                <span className="card-gray">6</span>
                <span className="card-gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> a person</p>
        </div>
    )
}