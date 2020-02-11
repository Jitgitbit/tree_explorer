// src/components/Tree.tsx
import React from "react";

type Props = {
  name: string;
  scientificName: string;
  commonName: string;
  numLikes: number;
  onLike: (treeName: string) => void;
};
class Tree extends React.Component<Props> {
  handleLike = () => {
    console.log(`test click`)
    this.props.onLike(this.props.name);
  }
  render() {
    return (
    <div>
      <p>Name: {this.props.name}, 
      Scientific Name: {this.props.scientificName}, 
      Common Name: {this.props.commonName}, 
      Likes: {this.props.numLikes}</p>
    <span aria-label="thumbs up" role="img" onClick={this.handleLike}>👍 {this.props.numLikes}</span> 
      {/* <button onClick={() => this.props.handleLike}>Like</button> */}
    </div>
    )
  }
}
export default Tree;