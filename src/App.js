import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Updates from './components/Updates';
import Footer from './components/Footer';
import Resume from './components/file/Andrew Caldwell resume.pdf';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"><h1 className="heading">Andrew Caldwell</h1></Link>
        <div className="nav-container">
          <nav className="navigation">
            <a href={Resume} target="_blank">Resume</a>
            <Link to="#about">My Story</Link>{" "}
            <Link to="#projects">Projects</Link>{" "}
            <Link to="#skills">Skills</Link>
          </nav>
        </div>
        <Updates/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
}

export default App;
