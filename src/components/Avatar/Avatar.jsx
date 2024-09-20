import styles from "./avatar.module.css";
import cn from "classnames";
import {FaCheck} from "react-icons/fa"

function Avatar({photo, active}) {
    return <div className={cn(styles["avatar"])}>
              <img
                className={cn(styles["avatar__img"])}
                src={photo}
              />
              {
                active === true
                ? <div className={cn(styles["avatar__circle"])}>
                <FaCheck />
              </div> : null
              }
              
            </div>;
}

export default Avatar;