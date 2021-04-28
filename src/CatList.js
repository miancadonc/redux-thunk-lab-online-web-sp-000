// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component {

    renderImages = () => {
        // {if(!this.props.loading && !!this.props.catPics){
        //    
        // }else{
        //    return <h1>Loading! One sec!</h1>
        // }}
        return this.props.catPics.map(pic => <img src={pic.url} id={pic.id} alt={pic.id}/>)
    }

    render(){
        return(
            <div>
                {this.renderImages()}
            </div>
        )
    }
}

export default CatList