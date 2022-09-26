import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import React from 'react';


export default function OrigamiImage(props) {
    return <Col>
    <Link to={"/origami/" + props.id}>
        <img className="img img-fluid" src={props.src} />
        </Link>
    </Col>


}