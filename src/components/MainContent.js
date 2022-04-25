import Item from "./Item/Item";
import "./MainContent.css";
const MainContent = () => {
    return (
        <div className="maincontent">
            <Item
                title="TITLE HEADING"
                subtitle="Title description"
                image=""
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            adipisci debitis asperiores fugit rem modi quaerat ipsa itaque esse
            facilis. Provident consectetur hic a at magni fugit eos maiores
            veritatis!"
            />
            <Item
                title="TITLE HEADING"
                subtitle="Title description"
                image=""
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            adipisci debitis asperiores fugit rem modi quaerat ipsa itaque esse
            facilis. Provident consectetur hic a at magni fugit eos maiores
            veritatis!"
            />
        </div>
    );
};

export default MainContent;
