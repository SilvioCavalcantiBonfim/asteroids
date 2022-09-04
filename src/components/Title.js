import play_svg from '../svg-components/play.svg';
import './Title.css';

const Title = (props) => {
    return <div className='start__menu' style={{top: (!props.state)? props.window.height*0.43 : 3, lineHeight: (!props.state)? 'normal' : 1.4}}>
        <div className='start__menu__title' style={{fontSize: (!props.state)? '2rem': '1.5rem'}}>Asteroids</div>
        {(!props.state)?<div>
            <button className='start__menu__submit' onClick={props.submitHandle}>
                <img src={play_svg} alt='' />
            </button>
        </div>:''}
    </div>
}

export default Title;