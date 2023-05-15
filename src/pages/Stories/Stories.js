import React from "react"
import "./Stories.css"
import { Link } from "react-router-dom"
import data from "../../data.json"
function Stories() {
  return (
    <main>
      <header className="header-stories ">
        <div className="header-title ">
          <small>LAST MONTH’S FEATURED STORY</small>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <small className="opacity-75 ">
            March 2nd 2020<span>by John Appleseed</span>
          </small>
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>{" "}
          <div>
            <Link to="/stories">READ STORE</Link>
          </div>
        </div>
      </header>
      <section className="stories-gallery">
        {data.map((item, index) => (
          <div className="wrapper-image " key={index}>
            <img src={item.images.desktop} alt={item.name} />
            <div className="card-overlay">
              <small>{item.date}</small>
              <div className="card-title">
                <h5>{item.name}</h5>
                <small>by John Appleseed</small>
              </div>
              <hr />
              <div className="d-flex w-100 justify-content-between align-items-center">
                <a href="/">READ STORE</a>
                <img src="/assets/shared/desktop/arrow copy.svg" alt="arrow" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Stories
