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
                <ItemPicture image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IRHnoE52BmlPONwRFqqmW-l6UfI0kcNCGw&usqp=CAU" />
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
