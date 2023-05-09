import React from "react"
import "./Home.css"

function Home() {
  return (
    <main className="main">
      <section className="banner-hero">
        <div className="title-hero">
          <h1>Create and share your photo stories. </h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <a href="/" className="get-link">
            GET AN INVITE
          </a>
        </div>

        <div className="image-hero">
          <img src="/assets/home/desktop/create-and-share.jpg" alt="hero-img" className="img-fluid" />
        </div>
      </section>
      <section className="section-stories">
        <div className="image-stories">
          <img src="/assets/home/desktop/beautiful-stories.jpg" alt="stories-img" className="img-fluid" />
        </div>
        <div className="title-stories">
          <h1>BEAUTIFUL STORIES EVERY TIME</h1>
          <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
          <a href="/" className="get-link">
            GET AN INVITE
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
