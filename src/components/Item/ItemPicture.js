import "./ItemPicture.css";

const ItemPicture = (props) => {
    return (
        <div className="blok">
            <div className="itempicture">
                <img src={props.image} alt="" />
            </div>
        </div>
    );
};

export default ItemPicture;
