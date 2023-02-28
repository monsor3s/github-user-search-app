import "../../styles/components/main-container.sass"
import Logo from "../../assets/logo-bitmap.png"


function MainContainer() {
  return (
    <main className="main-container">
      <div className="body-header">
          <img src={Logo} alt="Logo" className="logo-profile" />
        <div className="main-header">
          <h1 className="main-title">The Octocat</h1>
          <h2 className="main-date">Joined 25 Jan 2011</h2>
          <span className="username">@octocat</span>
          <span className="bio">This profile has no bio</span>
        </div>
      </div>
    </main>
  )
}

export default MainContainer