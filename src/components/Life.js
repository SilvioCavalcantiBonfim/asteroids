import './Life.css';
import rocketLife_svg from '../svg-components/life.svg';

const Life = (props) =>{
    return <div className='life' style={{right: props.window.width*0.1 + 9, opacity: Number(props.state)}}>
        {[...Array(4-props.life).keys()].map((e) => <img src={rocketLife_svg} alt='' key={e} style={{opacity: 0.25}}/>)}
        {[...Array(props.life).keys()].map((e) => <img src={rocketLife_svg} alt='' key={e}/>)}
    </div>
}

export default Life;