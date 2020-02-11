// src/components/Tree.tsx
import React from "react";
type Props = {
  name: string;
  scientificName: string;
};
class Tree extends React.Component<Props> {
  render() {
    return <p>Name: {this.props.name}, Scientific Name: {this.props.scientificName}</p>;
  }
}
export default Tree;