import React from "react";
import { Link } from "react-router-dom";
import { BBtn } from "./styles";

interface IProps {
    style?: React.CSSProperties;
    width: string;
    height: string;
    fn: Function;
    link: string;
}

const BlueBtn: React.FC<IProps> = ({ style, width, height, fn, children, link }) => {
    return (
        <BBtn style={style} width={width} height={height} onClick={(e) => fn(e)}>
            <Link to={link}>{children}</Link>
        </BBtn>
    );
};

export default BlueBtn;