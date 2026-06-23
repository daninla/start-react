import { Component } from 'react';
import styles from './Header.module.css';

export class Header extends Component {
  render() {
    const { movies, onMovieSelect } = this.props;
    return (
      <>
        <header>
          <div className={styles.container}>
            <h2 className={styles.logo}>Films</h2>
            <ul className={styles.films}>
              {movies.map((movie, index) => (
                <li key={movie.title} onClick={() => onMovieSelect(index)}>
                  {movie.title}
                </li>
              ))}
            </ul>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
