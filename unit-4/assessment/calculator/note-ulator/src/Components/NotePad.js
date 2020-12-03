import React, {Component} from 'react'
import axios from 'axios'


class NotePad extends Component {
    constructor() {
        super();

        this.state = {
            notebook: [],
            input: ""
        }
    }

    componentDidMount() {
        axios.get('/api/noteBook').then((res) => {
            this.setState({notebook:res.data})
            console.log(res.data)
        })
    }

    addItem(noteId,text){
        axios.post('/api/noteBook',{text:this.state.input}).then((res) => {
            this.setState({notebook:res.data})
        })
    }

    deleteItem(noteId,text) {
        axios.delete(`/api/noteBook/${noteId}`).then((res) => {
            this.setState({notebook:res.data})
        })
    }

    editItem(noteId, action) {
        axios.put(`/api/noteBook/${noteId}`)
    }

    handleChange(val) {
        this.setState({input:val})
    }

    render() {
        const mappedNotebook = this.state.notebook.map(element => {
            return <div>{element.text}<button onClick={() => this.deleteItem(element.id)}>delete</button><button onClick={() => this.editItem(element.id)}>edit</button></div>
        })
        return(
            <div className="all-notes">
                <h4>Notes:</h4>
                {mappedNotebook}
                <input onChange={(e) => this.handleChange(e.target.value)}></input>
                <div><button onClick={() => this.addItem()}>Add</button></div>
                
            </div>
        // <h4>Hi</h4>

        )
    }
}

export default NotePad