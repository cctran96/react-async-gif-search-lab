import React, { Component } from 'react'

class GifSearch extends Component {
    state={
        input: ''
    }

    handleChange = e => {
        this.setState({input: e.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={e => this.props.handleSubmit(e, this.state.input)}>
                    <label>Enter a search term:</label>
                    <input type='text' onChange={e => this.handleChange(e)}/>
                    <input type='submit' value='Find Gifs'/>
                </form>
            </div>
        )
    }
}

export default GifSearch