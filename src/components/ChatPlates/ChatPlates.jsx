import UserCard from "../UserCard/UserCard";
import styles from "./chatPlates.module.css";
import cn from "classnames";
import data from "../../data";
import Button from "../Button/Button";
import { useState } from "react";

// const myPromise = new Promise((resolve, reject) => {
//   // запрос к банку занял 5 сек
//   if (true) {
//     resolve(1);
//   } else {
//     reject(0);
//   }
// });

// myPromise.then((responce) => {
//   console.log(responce);
// })

// fetch('https://api/gibdd')
// .then((responce) => responce.json())
// .then((dataGibdd) => fetch('https://api/checkTaxi'))
// .then((responce) => responce.json())
// .then((checkTaxiData) => fetch('https://api/checkTaxi'))
// .catch((error) => console.log(error))

// function getGibdd() {
//   return fetch('https://api/gibdd')
// }

// function getСheckTaxi() {
//   return fetch('https://api/checkTaxi')
// }

// function getDataAny() {
//   return fetch('https://api/dataAny')
// }

// async function checkCar() {
//   const result1 = await getGibdd()
//   const result2 = await getСheckTaxi()
//   const result3 = await getDataAny()
// }

// getGibdd()
// .then(responce => responce.json())
// .then(data => {
//   return getСheckTaxi()
// })
// .then(responce => responce.json())
// .then(data => {
//   return getDataAny()
// })
// .then(responce => responce.json())
// .then(data => {
//   console.log('data about you super car!');
// })
// .catch(error => console.log(error))

function ChatPlates() {
  const [message, setMessage] = useState("");
  const [activeUsers, setActiveUsers] = useState([])
  
  const setActiveUsersHandler = (name) => {
    setActiveUsers([...activeUsers, name])
  }
  
  return (
    <div className={cn(styles["chat-plates"])}>
      <div className={cn(styles["chat-plates__list"])}>
        {data.map((el) => {
          return <UserCard name={el.name} key={el.id} photo={el.photo} handler={setActiveUsersHandler} />;
        })}
      </div>
      <input className={cn(styles["chat-plates__input"])} type="text" placeholder="text me" onInput={(event) => setMessage(event.target.value)} />
      <div className={cn(styles["chat-plates__btn"])}>
        <Button text="send" use="send" handler={() => console.log(`message: ${message},sent: ${activeUsers}`)} />
      </div>
    </div>
  );
}

export default ChatPlates;
