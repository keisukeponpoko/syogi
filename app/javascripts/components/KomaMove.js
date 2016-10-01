import React, {Component} from 'react'

export default class KomaMove extends Component {
  handleClick() {
    return () => {
      if (!this.props.koma.isBanjyou()) {
        event.clickMotigoma(this.props.koma)
      }
    }
  }
  
  render(){
    var className = this.props.koma.owner.name + '_koma'
    return(
      <div
        onClick={this.handleClick()}
        className={className}>
        {this.props.koma.render()}
      </div>
    )
  }
}
