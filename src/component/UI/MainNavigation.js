import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <div className={classes.logo}>
        <Link to="/home">
          <h1>Food App</h1>
        </Link>
      </div>
      <nav>
        <ul className={classes.navlink}>
          <li>
            <Link to="/food-gallery"> Food Gallery</Link>
          </li>
          <li className={classes.addedbtn}>
            <Link to="/added-food"> Added Food</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
