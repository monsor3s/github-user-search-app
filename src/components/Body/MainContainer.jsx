import "../../styles/components/main-container.sass"


function MainContainer() {
  return (
    <main className="main-container">
      <div className="body-header">
        <img src="" alt="" className="logo-profile" />
        <h1>The Octocat</h1>
        <h2>Joined 25 Jan 2011</h2>
        <span className="username">@octocat</span>
        <span className="bio">This profile has no bio</span>
      </div>
    </main>
  )
}

export default MainContainer