import React from "react"
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../context"
import "./Pricing.css"

function Pricing() {
  const { switchState, setSwitchState, windowWidth, showClose } = useGlobalContext()

  window.scrollTo({ top: 0, behavior: "smooth" })
  const handleChange = () => {
    setSwitchState(!switchState)
  }

  return (
    <main className={!showClose && windowWidth < 576 ? "filter" : ""}>
      <header className="header-pricing">
        <div className="title-pricing">
          <h1>PRICING</h1>
          <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
        </div>

        <div className="image-pricing">
          <img src={windowWidth > 768 ? "/assets/pricing/desktop/hero.jpg" : windowWidth > 576 ? "/assets/pricing/tablet/hero.jpg" : "/assets/pricing/mobile/hero.jpg"} alt="hero-img" className="img" />
        </div>
      </header>
      <section className="section-pricing">
        <div className="toggle-switch">
          <form className="d-flex">
            {" "}
            <span className="me-3">mountly</span>
            <label className="switch">
              <input type="checkbox" onChange={handleChange} />
              <span className="slider round"></span>
            </label>
            <span className="ms-3">yearly</span>
          </form>
        </div>
        <div className="pricing-wrapper d-flex">
          <div className="pricing">
            <h5>Basic</h5>
            <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
            <h2>{switchState ? "$190" : "$19"}</h2>
            <small>{switchState ? "per mount" : "per year"}</small>
            <Button href="#/" bsPrefix="btn btn-left">
              PICK PLAN
            </Button>
          </div>
          <div className="pricing active">
            <h5>Pro</h5>
            <p>More advanced features available. Recommended for photography veterans and professionals.</p>
            <h2>{switchState ? "$390" : "$39"}</h2>
            <small>per mount</small>
            <Button href="#/" className="btn-active">
              PICK PLAN
            </Button>
          </div>
          <div className="pricing">
            <h5>Business</h5>
            <p>Additional features available such as more detailed metrics. Recommended for business owners.</p>
            <h2>{switchState ? "$990" : "$99"}</h2>
            <small>per mount</small>
            <Button href="#/" bsPrefix="btn btn-right">
              PICK PLAN
            </Button>
          </div>
        </div>
      </section>
      <section>
        {" "}
        <h2 className="text-center fs-1" style={{ marginTop: "60px", marginBottom: "56px" }}>
          COMPARE
        </h2>
        <Table size="xs">
          <thead>
            <tr>
              <th>THE FEATURES</th>
              <th>BASIC</th>
              <th>PRO</th>
              <th>BUSINESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UNLIMITED STORY POSTING</td>
              <td> &#10003;</td>
              <td> &#10003;</td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>UNLIMITED PHOTO UPLOAD</td>
              <td> &#10003;</td>
              <td> &#10003;</td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>EMBEDDING CUSTOM CONTENT</td>
              <td></td>
              <td> &#10003;</td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>CUSTOMIZE METADATA</td>
              <td></td>
              <td> &#10003;</td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>ADVANCED METRICS</td>
              <td></td>
              <td></td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>PHOTO DOWNLOADS</td>
              <td></td>
              <td></td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>SEARCH ENGINE INDEXING</td>
              <td></td>
              <td></td>
              <td> &#10003;</td>
            </tr>
            <tr>
              <td>CUSTOM ANALYTICS</td>
              <td></td>
              <td></td>
              <td> &#10003;</td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="footer-features ">
        <div className="footer-heading ">
          <h1>We’re in beta. Get your invite today!</h1>

          <div className="justify-content-start">
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

export default Pricing
