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
      { name: "Weeping willow", scientificName: "Salix sepulcralis", commonName: `something`, numLikes:7 },
      { name: "London planetree", scientificName: "Platanus hybryda", commonName: `something`, numLikes:2.3 },
      { name:`B Tree`, scientificName: `Sanseveria`, commonName: `programming tree structure`, numLikes:6576565744 }
    ],
    commonName: '',
    scientificName: '',
    numLikes: 0
  };
  
  // handleLike = () => {
  //   console.log("hi, handle like log");
  // };

  handleLike = (treeName: string) => {
    console.log(`hi, on like log`, treeName);
    const updatedTrees = this.state.trees.map(tree => {
      return tree.name === treeName 
      ? {...tree, numLikes: tree.numLikes + 1}
      : tree;
    })
    this.setState({trees: updatedTrees});
  }

  addTree =()=> {
    console.log(`adding tree log`, this.state);
    this.setState({trees: [
      ...this.state.trees, 
      {
        name: this.state.commonName,
        commonName: this.state.commonName, 
        scientificName: this.state.scientificName,
        numLikes: 0
      }
    ]});
  }

  render() {
    console.log(this.state);
    return (
    <div> 
      <div>
        {this.state.trees.map((tree, index) => (
          // <Tree
          //   key={index}
          //   name={tree.name}
          //   scientificName={tree.scientificName}    //same
          //   commonName={tree.commonName}
          //   numLikes={tree.numLikes}
          //   onLike={this.handleLike}
          // />
          <Tree key={index} {...tree} onLike={this.handleLike}/>          //same
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