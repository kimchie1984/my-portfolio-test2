import "./footer.css"
import "./contact.css"
import "./navbar.css"
import "./project.css"
import "./about.css"
import Navbar from "./Components/Navbar"
import MyWork from "./Components/MyWork"
import Project from "./Components/Project"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import data from "./data"


export default function App() {

    const content = data.map( item => {
        return (
            <Project 
            key={item.id}
            {...item}
            />
        )
    })


  return (
    <div>
      <Navbar />
      <MyWork />
      {content}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}