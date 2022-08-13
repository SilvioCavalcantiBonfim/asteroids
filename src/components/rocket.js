import rocket_svg from '../svg-components/rocket.svg';

const Rocket = (props) => {
    return <div className='rocket'>
        <img src={rocket_svg} alt='' style={props.style} />
    </div>;
};

export default Rocket;