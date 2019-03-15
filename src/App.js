import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Resume from './components/file/Andrew Caldwell resume.pdf';

const Home = () =>{
  return(
      <div className="home">
        <h2>{`I'm a passionate technologist constantly learning to become better as a technician and a developer.`}</h2>
      </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"><h1 className="heading">Andrew Caldwell</h1></Link>
        <div className="nav-container">
          <nav className="navigation">
            <a href={Resume} target="_blank">Resume</a>
            <Link to="/about">My Story</Link>{" "}
            <Link to="/projects">Projects</Link>{" "}
            <Link to="/skills">Skills</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
