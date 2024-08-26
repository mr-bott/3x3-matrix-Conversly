
import React from 'react';
import './index.css';

class EachBox extends React.Component {
    state={
        main:false
    }
  handleClick = (id) => {
    const { details, boxClicked } = this.props;
    this.setState({main:true})
    boxClicked(id);
  };
  render() {
    const{main}=this.state
    const { details } = this.props;
    const { color,id } = details;
    let bgcolor
if(main===false){
 bgcolor = "white"
}else{
    bgcolor=color ? "orange" :"green"
}
    return (
      <li
        className="box"
        style={{ backgroundColor: bgcolor }}
        onClick={()=>this.handleClick(id)}
      >
        {details.id}
      </li>
    );
  }
}

export default EachBox;
