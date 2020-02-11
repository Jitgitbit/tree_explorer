// src/components/PopularTrees.tsx
import React from "react";
import Tree from './Tree';

type Props = {};
type State = {
  trees: Array<{
    name: string;
    scientificName: string;
  }>;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      { name: "White birch", scientificName: "Betula pendula" },
      { name: "Weeping willow", scientificName: "Salix sepulcralis" },
      { name: "London planetree", scientificName: "Platanus hybryda" }
    ]
  };
  
  render() {
    return (
    <div>
      {this.state.trees.map((tree, index) => (
        <Tree
          key={index}
          name={tree.name}
          scientificName={tree.scientificName}
        />
      ))}
    </div>
    
    )
  }
}
export default PopularTrees;