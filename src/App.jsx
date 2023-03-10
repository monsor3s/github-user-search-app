import "../src/styles/components/app.sass"
import "../src/styles/reset.sass"
import "../src/styles/mixins.sass"
import Header from "./components/Header/Header"
import MainContainer from "./components/Body/MainContainer"


function App() { 

  return (
    <div className="container">
      <Header />
      <MainContainer />
    </div>
  )
}

export default App
