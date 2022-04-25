import Link from "./Link";
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="left-navigation">
                <Link name="Link" classname="button" />
                <Link name="Link" classname="button" />
                <Link name="Link" classname="button" />
            </div>

            <div className="right-navigation">
                <Link name="Link" classname="button-right" />
            </div>
        </div>
    );
};
export default Navigation;
