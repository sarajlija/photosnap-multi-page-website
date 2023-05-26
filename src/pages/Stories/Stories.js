import React from "react"
import "./Stories.css"
import { Link } from "react-router-dom"
import data from "../../data.json"
import { useGlobalContext } from "../../context"
function Stories() {
  const { windowWidth, showClose } = useGlobalContext()
  window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <main className={!showClose && windowWidth < 576 ? "filter" : ""}>
      {windowWidth > 576 ? (
        <header className="header-stories">
          <div className="header-title ">
            <small>LAST MONTH’S FEATURED STORY</small>
            <h1>HAZY FULL MOON OF APPALACHIA</h1>
            <small className="opacity-75 ">
              March 2nd 2020<span>by John Appleseed</span>
            </small>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>{" "}
            <div>
              <Link to="/stories" className="stories-get-link">
                READ THE STORY <img src="/assets/shared/desktop/arrow copy.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </header>
      ) : (
        <header className="stories-mobile">
          <div className="title-mobile">
            <h1>Create and share your photo stories. </h1>
            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
            <a href="/" className="get-link">
              GET AN INVITE
              <img src="/assets/shared/desktop/arrow copy.svg" alt="arrow" />
            </a>
          </div>
          <div className="image-mobile">
            <img src="/assets/stories/mobile/moon-of-appalacia.jpg" alt="moon" className="img" />
          </div>
        </header>
      )}
      <section className="stories-gallery">
        {data.map((item, index) => (
          <div className="wrapper-image" key={index}>
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
