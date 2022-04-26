import "./ItemPicture.css";

const ItemPicture = (props) => {
    console.log(props.image);
    return (
        <div className="blok">
            <div className="itempicture">
                <img src={props.image} alt="" />
            </div>
        </div>
    );
};

export default ItemPicture;
