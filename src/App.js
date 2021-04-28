import React, { Component } from 'react';
import {connect} from 'react-redux'
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    if(!this.props.loading && !!this.props.catPics){
      return <CatList catPics={this.props.catPics} />
    }else{
      return <h1>Loading! One sec!</h1>
    }
  }
  
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

