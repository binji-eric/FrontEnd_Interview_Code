import { wait } from '@testing-library/react';
import React, { Component } from 'react'
import './trafficLight.css'
export default class trafficLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light:  [
                {color: 'red', duration: 2000, twinkleDuration: 5000},
                {color: 'green', duration: 2000, twinkleDuration: 500},
                {color: 'yellow', duration: 1000, twinkleDuration: 0},
            ]
        }
    }


    componentDidMount() {

        const waitTime = function(delay) {
            return new Promise((resolve, reject)=>{
                setTimeout(resolve, delay);
            });
        }

        
        const change =  () =>  {
            this.lightDiv.className = "redLight";
            waitTime(this.state.light[0].duration).then(() => { 
                    this.lightDiv.className = "greenLight";
                    return waitTime(this.state.light[1].duration);
                }).then(() => {
                    this.lightDiv.className = "yellowLight";
                    return waitTime(this.state.light[2].duration);
                }).then(()=>{
                    change();
                })
        }
       change();
    }

    render() {
       
        return (
            <div className="outline">
                This is traffic Light
                <div className="light" ref={(ele) => {
                    this.lightDiv = ele
                }}>this light</div>
            </div>
        )
    }
}
