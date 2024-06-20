import styles from "./Contacts.module.css";

function Contacts() {
  const number = "+7 (952) 320 54 66";
  const email = "eu.ckorobogatowa@gmail.com";
  const telegramm = "@zadorozhnaia_evgeniia";
  const vk = "https://vk.com/skorobogatovaevs";
  const site = "https://localhost:5173";
  return (
    <>
      <div className={styles.contacts}>
        <h1 style={{fontSize:'25px'}}> Контакты</h1>
        <p>Телефон: {number}</p>
        <p>
          Email: <a href="#">{email}</a>
        </p>
        <p>
          Telegram: <a href="#">{telegramm}</a>
        </p>
        <p>
          VK: <a href="https://vk.com/skorobogatovaevs">{vk}</a>
        </p>
        <p>
          Сайт: <a href="http://localhost:5173/">{site}</a>
        </p>
      </div>
    </>
  );
}

export default Contacts;
