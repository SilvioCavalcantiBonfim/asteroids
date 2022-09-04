import React, { useEffect, useState } from "react";

export const CompleteString = (number, size) => {
    return [...Array(size - number.toString().length).keys()].map((e) => { return "0" }).join("") + number.toString();
}

export const Popup = props => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, props.delay);
        return () => clearTimeout(timer)
    }, [props.delay]);

    return <div style={{opacity: Number(visible), transform: 'opacity 3s'}}>{props.children}</div>;
};