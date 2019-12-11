import React, { Component } from 'react';
import './calculator.css';
import ResultComponent from './ResultComponent';
import KeyPadComponent from "./KeyPadComponent";
import {Card,CardHeader} from 'reactstrap';

class CalculatorMain extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <Card style={{backgroundColor:"DodgerBlue"}}>
                <CardHeader tag="h1" align="center">Calculator</CardHeader>
                
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                
                </Card>
            </div>
        );
    }
}

export default CalculatorMain;