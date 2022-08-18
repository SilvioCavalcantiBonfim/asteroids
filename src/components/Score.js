import './Score.css';
import { CompleteString } from '../tools';

const ScoreBoard = (props) => {
    return <div className='board__score' style={{opacity: (!props.state)? 0: 1}}>
        <label className='record'>
            HI {CompleteString(localStorage.getItem("Score"), 5)}
            </label><label className='score'>
            {CompleteString(props.score, 5)}
        </label>
    </div>
}

export default ScoreBoard;