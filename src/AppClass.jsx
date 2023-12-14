import { Component } from "react";
import "./App.css"


export default class AppClass extends Component {
  // code here

  render() {
    const image = this.props.damu2();
    console.log(image)
    return (
      <>
        <h2 className="heading">IMAGE GALLERY USING CLASS PROPS</h2>
        <div className="Bigdiv">
          {image.map((img) => {
            return (
              <img src={img.img} />
            )
          })}
        </div>
      </>
    )
  }
}