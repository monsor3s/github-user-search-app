import "../../styles/components/main-container.sass"

import Logo from "../../assets/logo-bitmap.png"
import LocationIcon from "../../assets/icon-location.svg"
import AnchorIcon from "../../assets/icon-website.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"
import CompanyIcon from "../../assets/icon-company.svg"


function MainContainer() {
  return (
    <main className="main-container">
      <div className="body-header">
          <img src={Logo} alt="Logo" className="logo-profile" />
        <header className="main-header">
          <h1 className="main-title">The Octocat</h1>
          <h2 className="main-date">Joined 25 Jan 2011</h2>
          <span className="username">@octocat</span>
          <span className="bio">This profile has no bio</span>
        </header>
        <div className="stats-container">
          <div className="separador-div">
            <h4 className="data-title">Repos</h4>
            <p className="data-number">8</p>
          </div>
          <div className="separador-div">
            <h4 className="data-title">Followers</h4>
            <p className="data-number">3938</p>
          </div>
          <div className="separador-div">
            <h4 className="data-title">Following</h4>
            <p className="data-number">9</p>
          </div>
        </div>
        <footer className="link-container">
          <section className="footer-section">
            <div>
              <img src={LocationIcon} alt="location icon" className="main-icon"/>
              <a href="" className="footer-link">San Francisco</a>
            </div>
            <div>
              <img src={AnchorIcon} alt="anchor icon" className="main-icon"/>
              <a href="" className="footer-link">https://github.blog</a>
            </div>
          </section>
          <div className="footer-section">
            <div className="row-container">
              <img src={TwitterIcon} alt="location icon" className="main-icon"/>
              <a href="" className="footer-link">Not Available</a>
            </div>
            <div className="row-container">
              <img src={CompanyIcon} alt="Company icon" className="main-icon"/>
              <a href="" className="footer-link">@github</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default MainContainer