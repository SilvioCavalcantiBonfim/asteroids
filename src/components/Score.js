import './Score.css';
import { CompleteString } from '../tools';

const ScoreBoard = (props) => {
    if(localStorage.getItem("Score") === null)
        localStorage.setItem("Score",0);
    return <div className='board__score' style={{opacity: Number(props.state)}}>
        <label className='record'>
            HI {CompleteString(localStorage.getItem("Score"), 5)}
            </label><label className='score'>
            {CompleteString(props.score, 5)}
        </label>
    </div>
}

export default ScoreBoard;