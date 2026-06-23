import { Component } from 'react';
import styles from './Main.module.css';

export class Main extends Component {
  render() {
    const { movie } = this.props;

    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{movie.title}</h1>
          
          <div className={styles.infoBlock}>
            <p><strong>Рік випуску:</strong> {movie.generalInfo.year}</p>
            <p><strong>Країна:</strong> {movie.generalInfo.country}</p>
            <p><strong>Студія:</strong> {movie.generalInfo.studio}</p>
            <p><strong>Жанр:</strong> {movie.generalInfo.genre.join(', ')}</p>
            <p><strong>Режисер:</strong> {movie.director}</p>
          </div>

          <div className={styles.plotBlock}>
            <h3>Сюжет:</h3>
            <p>{movie.plot}</p>
          </div>

          <div className={styles.actorsBlock}>
            <h3>У головних ролях:</h3>
            <ul>
              {movie.actors.map((actor) => (
                <li key={actor}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;