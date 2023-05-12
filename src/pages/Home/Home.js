import React from "react"
import "./Home.css"

function Home() {
  return (
    <main className="main">
      <section className="home-hero">
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
      <section className="home-stories">
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
      <section className="home-designed">
        <div className="title-designed">
          <h1>DESIGNED FOR EVERYONE </h1>
          <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
          <a href="/" className="get-link">
            GET AN INVITE
          </a>
        </div>

        <div className="image-designed">
          <img src="/assets/home/desktop/designed-for-everyone.jpg" alt="designed-img" className="img-fluid" />
        </div>
      </section>
      <section className="home-gallery d-flex">
        <div className="wrapper-image">
          <img src="/assets/stories/desktop/mountains.jpg" alt="mountains-img" />
          <div className="card-overlay">
            <div className="card-title">
              <h5>The Mountains</h5>
              <small>by John Appleseed</small>
            </div>
            <hr />
            <div>
              <a href="/">READ STORE</a>
            </div>
          </div>
        </div>
        <div className="wrapper-image">
          <img src="/assets/stories/desktop/cityscapes.jpg" alt="cityscapes-img" />
          <div className="card-overlay">
            <div className="card-title">
              <h5>The Mountains</h5>
              <small>by John Appleseed</small>
            </div>
            <hr />
            <div>
              <a href="/">READ STORE</a>
            </div>
          </div>
        </div>
        <div className="wrapper-image">
          <img src="/assets/stories/desktop/18-days-voyage.jpg" alt="18-days-voyage-img" />
          <div className="card-overlay">
            <div className="card-title">
              <h5>The Mountains</h5>
              <small>by John Appleseed</small>
            </div>
            <hr className="" />
            <div>
              <a href="/">READ STORE</a>
            </div>
          </div>
        </div>
        <div className="wrapper-image">
          <img src="/assets/stories/desktop/architecturals.jpg" alt="architecturals-img" />
          <div className="card-overlay">
            <div className="card-title">
              <h5>The Mountains</h5>
              <small>by John Appleseed</small>
            </div>
            <hr />
            <div>
              <a href="/">READ STORE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features d-flex">
        <div className="features-wrapper d-flex">
          <div className="features">
            <img src="/assets/features/desktop/responsive.svg" alt="responsive" />
            <h5>100% Responsive</h5>
            <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
          </div>
          <div className="features">
            <img src="/assets/features/desktop/no-limit.svg" alt="no-limit" />
            <h5>No Photo Upload Limit</h5>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
          </div>
          <div className="features">
            <img src="/assets/features/desktop/embed.svg" alt="rembed" />
            <h5>Available to Embed</h5>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}

export default Home
