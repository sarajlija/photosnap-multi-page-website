import React from "react"
import "./Stories.css"
import { Link } from "react-router-dom"
function Stories() {
  return (
    <main>
      <header className="header-stories ">
        <div className="header-title ">
          <small>LAST MONTH’S FEATURED STORY</small>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <small class="opacity-75 ">
            March 2nd 2020<span>by John Appleseed</span>
          </small>
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>{" "}
          <div>
            <Link to="/stories">READ STORE</Link>
          </div>
        </div>
      </header>
    </main>
  )
}

export default Stories
