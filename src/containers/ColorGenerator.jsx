import React, { Component } from 'react';
import Display from '../components/Display';

export default class ColorGenerator extends Component {
    state = {
        color: ''
    };

    componentDidMount() {
        setInterval(this.randomColor, 2000);
    };

    randomColor() {
    const boxColorArray = [
            'b3f0c4',
            'ffef72',
            'ffc476',
            'e2d3f2',
            '3c37d4',
            'f97d81'
        ];
    
    const randomColor = Math.floor(Math.random()*boxColorArray.length);
    
    this.setState({ color: `${randomColor}`});
    
    };
    
    render() {
        const { color } = this.state;
        return <Display color={color} />;
    }
}
