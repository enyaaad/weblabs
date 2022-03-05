import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {useState} from "react";

function form() {
    const [goal, setgoal] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
    }

return(
        <form>
            <input type="text" placeholder="place your goal here" value={value}/>
            <Button variant="primary" onClick="newElement()">create goal</Button>
        </form>
    );

}