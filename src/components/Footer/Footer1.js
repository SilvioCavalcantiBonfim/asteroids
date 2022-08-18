import './Footer1.css';

const Footer1 = (props) => {
    return <div className='footer1'>
    Icons by <a href='https://remixicon.com/' target="_blank" rel='noopener noreferrer' style={{pointerEvents: (props.state)? 'none' : 'visiblePainted',}}>remixicon</a>
</div>
};


export default Footer1;