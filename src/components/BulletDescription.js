import './BulletDescription.css';
import { GenericalBullet } from './rocket';

export const BulletDescription = (props) => {
    if (props.state === 1)
        return <div className='body__description' style={{ width: props.window.width * 0.2, top: props.window.height * 0.43, opacity: props.opacity, transition: 'opacity 1s' }}>
        <div className='title__description'>{GenericalBullet[props.bullettype].describe.title}</div>
        <div className='description'>{GenericalBullet[props.bullettype].describe.body}</div>
        <div className='info__description'><label className='dm__description'>{GenericalBullet[props.bullettype].damage} Dano</label><label className='vl__description'>{GenericalBullet[props.bullettype].scaleVelocity} velocidade</label></div>
    </div>;
    else
        return <div />
}