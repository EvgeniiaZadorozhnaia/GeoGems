import styles from "./HomePage.module.css";
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3 style={{fontSize:'25px', width:'800px'}} className={styles.hello}>
            Добро пожаловать в Мир коллекционных горных пород!<br></br>
            Откройте тайны Земли вместе с нами
          </h3>
          <hr />
          <p className={styles.text}>
            Наш магазин - это место, где природа встречается с искусством. Мы
            предлагаем вам уникальную возможность прикоснуться к истории нашей
            планеты, собрав редкие образцы горных пород со всего мира. Каждоый
            образец - это не просто камень, а свидетельство миллионов лет
            геологических процессов, которые формировали Землю.
            <br />
            <br />
            <hr />
            Независимо от того, являетесь ли вы опытным коллекционером или
            только начинаете свое путешествие в мир минералов, наш магазин
            предложит вам нечто особенное. Мы предлагаем как доступные образцы
            для начинающих коллекционеров, так и редкие экземпляры для опытных.
            <br/>
            <br/>
            <hr />
          </p>
          <Link style={{fontSize:'25px'}} to='/catalog'>Коллекция</Link>
        </div>
        <div className={styles.logo}>
          <h1 className={styles.Geo}>GeoGems</h1>
          <img className={styles.diamond} src="/pictures/32882dbcd4424eb8e814ce8e62e68361.gif"></img>
        </div>
      </div>
    </>
  );
}
