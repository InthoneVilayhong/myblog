import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <div className="hello">
            <div className="container">
                <Header />
                <Navigation />
                <Content />
                <Footer />
            </div>
        </div>
    );
}

export default App;
