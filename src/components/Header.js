import Title from "./Title.js";
import Baseline from "./Baseline";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Title name="My Blog" />
            <Baseline text="An awesome baseline" />
        </div>
    );
};

export default Header;
