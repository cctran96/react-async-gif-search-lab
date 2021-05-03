import React, { Component } from 'react'

class GifList extends Component {
    render(){
        return(
            <div>
                <ul>
                    {this.props.gifData.map(data => <li key={data.id}><img src={data.images.original.url} alt='gif'/></li>)}
                </ul>
            </div>
        )
    }
}

export default GifList