import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            display: 0,
            theValBox: 0,
            theValBox2: 5
        }
    }

    
    handleClick = (props) => {
        let buttonValue = this.props;
        this.setState({theValBox:+props})
        // console.log(4+4)
        console.log(this.state.theValBox)
    }

    // this should input 'theValBox'
    addItems = () => {
        this.setState({ display : this.state.theValBox+this.state.theValBox2})
        return(console.log(this.state.theValBox + this.state.theValBox2))
    }

    h

    render() {
        // const mappedNoteBook = this.state.display.map((element) => {
        //     return (
        //         <div>
        //             {mappedNoteBook}
        //         </div>
        //     )
        // })
        return(
            <div className="all-notes">
                <span className="calc-display">{this.state.display}</span>
                <kbd className="keypad">
                    <button className="numkey" value="1" onClick={(e) => this.handleClick(e.target.value)}>1</button>
                    <button className="numkey" value="2" onClick={(e) => this.handleClick(e.target.value)}>2</button>
                    <button className="numkey" value="3" onClick={(e) => this.handleClick(e.target.value)}>3</button>
                    <button className="numkey" value="4" onClick={(e) => this.handleClick(e.target.value)}>4</button>
                    <button className="numkey" value="5" onClick={(e) => this.handleClick(e.target.value)}>5</button>
                    <button className="numkey" value="6" onClick={(e) => this.handleClick(e.target.value)}>6</button>
                    <button className="numkey">7</button>
                    <button className="numkey">8</button>
                    <button className="numkey">9</button>
                    <button className="numkey">0</button>
                    <button className="numkey">C</button>
                    <button className="numkey">=</button>
                    <button className="numkey">*</button>
                    <button className="numkey">-</button>
                    <button value="+" onClick={() => this.addItems()} >+</button>
                    <button className="numkey">/</button>
                    <button className="numkey">.</button>
                    {/* 17 items above */}

                </kbd>
            </div>
        )
    }
}