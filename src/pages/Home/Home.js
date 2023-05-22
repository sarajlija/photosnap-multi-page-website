import React from "react"
import "./Home.css"
import data from "../../data.json"
import { useGlobalContext } from "../../context"

function Home({ windowWidth }) {
  const { showClose } = useGlobalContext()
  console.log(showClose)
  return (
    <main className={showClose ? "" : "filter"}>
      <section className="home-hero">
        <div className="title-hero">
          <h1>Create and share your photo stories. </h1>
          <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
          <a href="/" className="get-link">
            GET AN INVITE
          </a>
        </div>
        <div className="image-hero">
          <img src={windowWidth > 768 ? "/assets/home/desktop/create-and-share.jpg" : windowWidth > 576 ? "/assets/home/tablet/create-and-share.jpg" : "/assets/home/mobile/create-and-share.jpg"} alt="hero-img" className="img" />
        </div>
      </section>
      <section className="home-stories">
        <div className="image-stories">
          <img src={windowWidth > 768 ? "/assets/home/desktop/beautiful-stories.jpg" : windowWidth > 576 ? "/assets/home/tablet/beautiful-stories.jpg" : "/assets/home/mobile/beautiful-stories.jpg"} alt="beautifull-store" className="img" />
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
          <img src={windowWidth > 768 ? "/assets/home/desktop/designed-for-everyone.jpg" : windowWidth > 576 ? "/assets/home/tablet/designed-for-everyone.jpg" : "/assets/home/mobile/designed-for-everyone.jpg"} alt="designed-img" className="img" />
        </div>
      </section>
      <section className="home-gallery ">
        {data.slice(0, 4).map((item, index) => (
          <div className="wrapper-image " key={index}>
            <img src={windowWidth > 768 ? item.images.desktop : windowWidth > 576 ? item.images.mobile : item.images.mobile} alt={item.name} />
            <div className="card-overlay">
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
      </section>
    </main>
  )
}

export default Home
