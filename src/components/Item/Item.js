import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";
import "./item.css";

const Item = (props) => {
    return (
        <div className="item">
            <ItemTitle title={props.title} />
            <ItemSubtitle subtitle={props.subtitle} />
            <ItemPicture image={props.image} />
            <ItemDescription text={props.text} />
        </div>
    );
};

export default Item;
