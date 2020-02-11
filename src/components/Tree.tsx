// src/components/Tree.tsx
import React from "react";

type Props = {
  name: string;
  scientificName: string;
  commonName: string;
  numLikes: number;
  onLike: VoidFunction;
};
class Tree extends React.Component<Props> {
  render() {
    return (
    <div>
      <p>Name: {this.props.name}, 
      Scientific Name: {this.props.scientificName}, 
      Common Name: {this.props.commonName}, 
      Likes: {this.props.numLikes}</p>

      <button onClick={this.props.onLike}>Like</button>
    </div>
    )
  }
}
export default Tree;