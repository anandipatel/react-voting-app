import React, { Component } from 'react';

class Results extends Component {
  constructor(props){
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent(){
    if (this.store.getState().angular) {
      return (this.store.getState().angular) / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs) *100;
    } else{
      return 0;
    }

  }

  votesReactInPercent(){
    if (this.store.getState().react) {
      return (this.store.getState().react) / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs) *100;
    } else{
      return 0;
    }

  }

  votesVuejsInPercent(){
    if (this.store.getState().vuejs) {
      return (this.store.getState().vuejs) / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs) *100;
    } else{
      return 0;
    }

  }

  votesAngularInPercentStyle(){
    return{
      width:this.votesAngularInPercent()+'%'
    }

  }
  votesReactInPercentStyle(){
    return{
      width:this.votesReactInPercent()+'%'
    }
  }
  votesVuejsInPercentStyle(){
    return{
      width:this.votesVuejsInPercent()+'%'
    }
  }


  render(){
    return (
      <div>

      <span className="badge badge-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
      <div className="progress active">
          <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" style={this.votesAngularInPercentStyle()}>
          </div>
      </div>

      <span className="badge badge-primary">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
      <div className="progress active">
          <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={this.votesReactInPercentStyle()}>
          </div>
      </div>

      <span className="badge badge-success">Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
      <div className="progress active">
          <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={this.votesVuejsInPercentStyle()}>
          </div>
      </div>

      </div>
    )
  }

}
export default Results;
