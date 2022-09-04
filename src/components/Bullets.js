import './Bullets.css';

const BulletBar = (props) => {
    return <div className="bullet__bar" style={{opacity: Number(props.state)}}>
        <div style={{
            position: 'relative',
            lineHeight: 1.4,
            width: props.window.width*0.1,
            border: 'solid 3px black',
            height: 20,
            top: 0,
            right: 0,
            textAlign: 'center',
            verticalAlign: 'middle'
        }}>{props.amountBullet}
        <div className='amountBullet' style={{
            top: 0,
            zIndex:-1,
            right: 0,
            position: 'absolute',
            width: props.amountBullet/100*props.window.width*0.1,
            backgroundColor: (props.amountBullet>50)?'rgb('+((-props.amountBullet/50+2)*255)+',255,0)':'rgb(255,'+((props.amountBullet/40-1/4)*255)+',0)',
            textAlign: 'center',
            verticalAlign: 'middle',
            height: 20
        }}></div></div>
        </div>
}

export default BulletBar;