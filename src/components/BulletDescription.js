import './BulletDescription.css';
import { GenericalBullet } from './rocket';

export const BulletDescription = (props) => {
    if (props.state === 1)
        return <div className='body__description' style={{ width: 170, opacity: props.opacity }}>
            <div className='info__description'>
                <label className='dm__description'>{GenericalBullet[props.bullettype].damage} Dano</label>
                <label className='vl__description'>{GenericalBullet[props.bullettype].scaleVelocity} velocidade</label>
            </div>
        </div>;
    else
        return <div />
}