
import React, { Component } from 'react';
import EachBox from '../EachBox';
import './index.css';

class Home extends Component {
  state = {
    clickedArray: [], 
    boxList: [
      { id: 1, color: false },
      { id: 2, color: false },
      { id: 3, color: false },
      { id: 4, color: false },
      { id: 5, color: false },
      { id: 6, color: false },
      { id: 7, color: false },
      { id: 8, color: false },
      { id: 9, color: false },
    ],
  }

  boxClicked = (id) => {
    const { clickedArray, boxList } = this.state;
    if (clickedArray.includes(id)) {
      return null
    } else {
      const updatedArray = [...clickedArray, id];
      this.setState(
        { clickedArray:[...updatedArray] },
        () => {
          if (updatedArray.length === boxList.length) {
            this.startColorChange()
          }
        }
      )
    }
  }


  startColorChange = async () => {
    const { clickedArray } = this.state;
  
    // Function to create a delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    for (const [index,id] of clickedArray.entries()) {
      await delay( 500); 
    // Delay each update by 500ms multiplied by index
  
      this.setState(prevState => ({
        boxList: prevState.boxList.map(box =>
          box.id === id ? { ...box, color: true } : box
        )
      }));
    }
  };
  

  render() {
    const { boxList } = this.state;

    return (
      <div className="main-container">
        <h1>3x3 Matrix</h1>
        <ul className="matrix">
          {boxList.map((box) => (
            <EachBox
              key={box.id}
              details={box}
              boxClicked={this.boxClicked}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
