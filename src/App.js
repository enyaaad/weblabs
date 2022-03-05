import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {useState} from "react";


function App() {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const newElement = () => {
        setItems([...items, input]);
    }
  return (
    <div id ="head">
        <h1>MyList</h1>
        <div id="header">
            <input type="text" placeholder="place your goal here" value={input} onChange={e => setInput(e.target.value)}/>
            <Button variant="primary" onClick={newElement}>create goal</Button>
        </div>
        <div id="body">
            <ul className="list-group" id="goals">
                {items.map(item => (
                    <li className="list-group-item">{item}</li>
                ))}
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
                <li className="list-group-item">first</li>
                <li className="list-group-item">second</li>
                <li className="list-group-item">third</li>
            </ul>
        </div>
    </div>
  );
}

export default App;
