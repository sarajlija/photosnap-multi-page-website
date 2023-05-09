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
    </main>
  )
}

export default Home
