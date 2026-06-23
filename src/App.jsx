import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { moviesData } from './data/movies.js';
import './App.css';

class App extends Component {
  state = {
    movies: moviesData,
    selectedMovieIndex: 0,
  };
  changeMovie = (index) => {
    this.setState({ selectedMovieIndex: index });
  };
  render() {
    const currentMovie = this.state.movies[this.state.selectedMovieIndex];
    return (
      <div>
        <Header movies={this.state.movies} onMovieSelect={this.changeMovie} />
        <Main movie={currentMovie} />
        <Footer />
      </div>
    );
  }
}

export default App;
