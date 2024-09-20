import styles from "./button.module.css";
import cn from "classnames";

function Button({text, use, handler}) {
  return <button className={cn(styles["btn"], styles[`btn--${use}`])} onClick={handler}>{text}</button>;
}
export default Button;