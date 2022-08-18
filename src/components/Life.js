import './Life.css';
import point_svg from '../svg-components/point.svg';

const Life = (props) => {
    return <div className="live" style={{opacity: Number(props.state)}}>
        {[...Array(props.life).keys()].map((e) => {return <img src={point_svg} alt='' key={e}/>})}
    </div>
}

export default Life;