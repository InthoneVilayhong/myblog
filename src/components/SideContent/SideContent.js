import ItemDescription from "../Item/ItemDescription";
import ItemPicture from "../Item/ItemPicture";
import Aboutme from "./Aboutme";
import "./SideContent.css";
import "./Sidepicture.css";

const SideContent = () => {
    return (
        <div className="sidecontent">
            <Aboutme />
            <div className="sidepicture">
                <ItemPicture />
            </div>
            <div className>
                <ItemDescription
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            repudiandae culpa magni cumque quo, eos fugit."
                />
            </div>
        </div>
    );
};

export default SideContent;
