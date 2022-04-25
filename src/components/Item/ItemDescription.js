import "./ItemDescription.css";

const ItemDescription = (props) => {
    return (
        <div className="description">
            <p>{props.text}</p>
        </div>
    );
};

export default ItemDescription;
