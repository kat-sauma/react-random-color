import React, { Component } from 'react';
import Display from '../components/Display';

export default class ColorGenerator extends Component {
    state = {
        color: '',
        boxColorArray: [
            '#b3f0c4',
            '#ffef72',
            '#ffc476',
            '#e2d3f2',
            '#3c37d4',
            '#f97d81'
        ]
    };

    componentDidMount() {
        const { color, boxColorArray } = this.state;
        setInterval(() => {
            const newColor = this.getRandomColor(boxColorArray);
            this.setState({ color: newColor })
        }, 2000);
        console.log(color, 'hi');

    };
    
    getRandomColor(boxColorArray) {
        const randomIndex = Math.floor(Math.random() * boxColorArray.length);
        return boxColorArray[randomIndex];
};
    
    render() {
        const { color } = this.state;
        return <Display color={color} />;
    }
}
