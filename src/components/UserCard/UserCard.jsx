import cn from "classnames";
import styles from "./userCard.module.css";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

function UserCard({name, photo, handler }) {
    const [active, setActive] = useState(false);
    
    return <div className={cn(styles["user-card"])} onClick={() => {
        setActive(!active);
        handler(name)
        }}>
        <div className={cn(styles["user-card__avatar"])}>
            <Avatar 
            photo={photo}
            active={active}/>
        </div>
      <span className={cn(styles["user-card__name"])}>{name}</span>
      </div>;
}

export default UserCard;