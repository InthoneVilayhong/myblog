import MainContent from "./MainContent";
import SideContent from "./SideContent/SideContent";
import "./Content.css";

const Content = () => {
    return (
        <div className="content">
            <MainContent />
            <SideContent />
        </div>
    );
};

export default Content;
