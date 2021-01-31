import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import TourList from './components/TourList' // implrts index.js and css from TourList

class App extends Component {
  render() {
    return (
      <main>
        < Navbar />
        < TourList />
      </main>

    )
  }
}

export default App