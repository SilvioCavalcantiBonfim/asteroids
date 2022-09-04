import './Score.css';
import { CompleteString } from '../tools';

const ScoreBoard = (props) => {
    if(localStorage.getItem("Score") === null)
        localStorage.setItem("Score",0);
    return <div className='board__score' style={{left: (1-props.state)? props.window.width/2 - 110:3, top: (1-props.state)? props.window.height*0.58 : 3, width: 220}}>
        <div className='record'>HI {CompleteString(localStorage.getItem("Score"), 5)}</div>
        <div className='score'>{CompleteString(props.score, 5)}</div>
    </div>
}

export default ScoreBoard;