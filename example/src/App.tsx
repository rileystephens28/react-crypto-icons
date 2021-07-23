import React, { useState } from "react";
import Icon from "react-crypto-icons";
import "./App.css";

function App() {
    const [icon, setIcon] = useState<string>("btc");
    return (
        <div className="App">
            <h1>React Crypto Icons</h1>
            <h2>Search icon from 400+ cryptos!</h2>
            <div className="Input-container">
                <input
                    type="text"
                    placeholder="Search (ex: 'eth')"
                    className="Icon-search-input"
                    onChange={(e: any) => setIcon(e.target.value)}
                />
            </div>
            <Icon name={icon} height={300} width={300} />
            <h5 className="footer-container">
                *When a symbol's icon is not found, the generic icon{" "}
                <div className="footer-icon">
                    <Icon name="generic" height={1.5} width={1.5} />
                </div>{" "}
                is returned
            </h5>
        </div>
    );
}

export default App;
