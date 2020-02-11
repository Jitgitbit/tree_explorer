// src/components/PopularTrees.tsx
import React from "react";
import Tree from './Tree';

type Props = {};
type State = {
  trees: Array<{
    name: string;
    scientificName: string;
    commonName: string;
    numLikes: number;
  }>;

  commonName: string
  scientificName: string
  numLikes: number
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      { name: "White birch", scientificName: "Betula pendula", commonName: `something`, numLikes:3 },
      { name: "Weeping willow", scientificName: "Salix sepulcralis", commonName: `something`, numLikes:76576565744 },
      { name: "London planetree", scientificName: "Platanus hybryda", commonName: `something`, numLikes:2.3 }
    ],
    commonName: '',
    scientificName: '',
    numLikes: 0
  };
  
  handleLike = () => {
    console.log("hi");
  };

  onLike = () => {
    console.log(`hi`);
  }

  addTree =()=> {
    console.log(`adding tree log`)
  }

  render() {
    return (
    <div> 
      <div>
        {this.state.trees.map((tree, index) => (
          <Tree
            key={index}
            name={tree.name}
            scientificName={tree.scientificName}
            commonName={tree.commonName}
            numLikes={tree.numLikes}
            onLike={this.onLike}
          />
        ))}
      </div>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTree();
          }}
          style={{ display: "flex" }}
        >
          <p style={{ margin: ".25rem" }}>
            <label>
              Common name:{" "}
              <input
                type="text"
                value={this.state.commonName}
                onChange={e => this.setState({ commonName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Scientific name:{" "}
              <input
                type="text"
                value={this.state.scientificName}
                onChange={e => this.setState({ scientificName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <button type="submit">Add!</button>
          </p>
        </form>
      </div>
    </div>
    )
  }
}
export default PopularTrees;