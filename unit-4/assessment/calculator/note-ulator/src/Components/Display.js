import React, {Component} from 'react'
import NotePad from './NotePad'
import Calculator from './Calculator'

class Display extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className="back-drop">
                {/* <h4>this is text </h4> */}
                {/* <Calculator/> */}
                <NotePad/>
            </div>
        )
    }
}

export default Display