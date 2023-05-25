import React from "react"
import "./Features.css"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context"

function Features() {
  const { windowWidth, showClose } = useGlobalContext()
  window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <main className={!showClose && windowWidth < 576 ? "filter" : ""}>
      <header className="header-features">
        <div className="title-features">
          <h1>FEATURES</h1>
          <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
        </div>

        <div className="image-features">
          <img src={windowWidth > 768 ? "/assets/features/desktop/hero.jpg" : windowWidth > 576 ? "/assets/features/tablet/hero.jpg" : "/assets/features/mobile/hero.jpg"} alt="hero-img" className="img-fluid" />
        </div>
      </header>
      <section className="section-features ">
        <div className="features-wrapper">
          <div className="features-item">
            <img src="/assets/features/desktop/responsive.svg" alt="responsive" />
            <h5>100% Responsive</h5>
            <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
          </div>
          <div className="features-item">
            <img src="/assets/features/desktop/no-limit.svg" alt="no-limit" />
            <h5>No Photo Upload Limit</h5>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
          </div>
          <div className="features-item">
            <img src="/assets/features/desktop/embed.svg" alt="rembed" />
            <h5>Available to Embed</h5>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
          </div>
          <div className="features-item">
            <img src="/assets/features/desktop/custom-domain.svg" alt="custom-domain" />
            <h5>Custom Domain</h5>
            <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
          </div>
          <div className="features-item">
            <img src="/assets/features/desktop/boost-exposure.svg" alt="boost-exposure" />
            <h5>Boost Your Exposure</h5>
            <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
          </div>
          <div className="features-item">
            <img src="/assets/features/desktop/drag-drop.svg" alt="drag-drop" />
            <h5>Drag & Drop Image</h5>
            <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
          </div>
        </div>
      </section>
      <section className="footer-features ">
        <div className="footer-heading ">
          <h1>We’re in beta. Get your invite today!</h1>

          <div className="features-link">
            <Link className="pricing-link" to="/">
              GET AN INVITE
            </Link>
            <img className="ms-3" src="/assets/shared/desktop/arrow copy.svg" alt="arrow" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Features
