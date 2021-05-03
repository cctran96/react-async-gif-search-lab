import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state={
        gifData: []
    }
    url='https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'

    componentDidMount(){
        fetch(this.url).then(r => r.json()).then(gifData => this.setState({gifData: gifData.data.slice(0,3)}))
    }

    handleSubmit = (e, search) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`).then(r => r.json()).then(gifData => this.setState({gifData: gifData.data.slice(0,3)}))
        e.target.reset()
    }

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifData={this.state.gifData}/>
            </div>
        )
    }
}

export default GifListContainer