import MenuBurger from "./MenuBurger";
import Search from "./Search";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="NavBar">
      <MenuBurger />
      <h1>FOOD TRECK</h1>
      <div className="Search">
        <Search />
      </div>
    </div>
  );
}
