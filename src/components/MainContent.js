import Item from "./Item/Item";
import "./MainContent.css";
import "../";
const MainContent = () => {
    return (
        <div className="maincontent">
            <Item
                title="TITLE HEADING"
                subtitle="Title description"
                image="https://d3isma7snj3lcx.cloudfront.net/optim/images/game_group/30/3050216292/shingeki-no-kyojin-l-attaque-des-titans-eb5fc27c__w854.jpeg"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            adipisci debitis asperiores fugit rem modi quaerat ipsa itaque esse
            facilis. Provident consectetur hic a at magni fugit eos maiores
           veritatis!"
            />
            <Item
                title="TITLE HEADING"
                subtitle="Title description"
                image="https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/36/360673/attack-on-titan-brave-order-and-ip-7fb3f75d__930_250__0-108-1200-432.jpg"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            adipisci debitis asperiores fugit rem modi quaerat ipsa itaque esse
            facilis. Provident consectetur hic a at magni fugit eos maiores
            veritatis!"
            />
        </div>
    );
};

export default MainContent;
