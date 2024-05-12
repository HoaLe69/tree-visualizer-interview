import { useState } from "react"
import Tree from "react-d3-tree";
import { useCenterdTree } from "./helper";

class TreeNode {
  constructor(value) {
    this.name = value;
    this.children = []
  }
}

const TreeVisualizer = () => {
  const [nodes, setNodes] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)

  const parseTree = (input) => {
    if (!input.trim().length) {
      setError("Invalid input")
      return
    }
    // get list node from input
    const lines = input.split('\n')
    const nodes = [];
    for (const line of lines) {
      const indentnum = line.length - line.trimLeft().length
      const namenode = line.trim()
      if (namenode.length === 0) continue
      // indentation must be even number
      if (indentnum % 2 !== 0) {
        setError("Invalid indentation")
        return
      }
      // root node
      if (indentnum === 0) {
        nodes.push([indentnum, new TreeNode(namenode)]);
      }
      else if (indentnum > 0) {
        const newnode = new TreeNode(namenode)
        while (indentnum <= nodes[nodes.length - 1][0]) {
          nodes.pop()
        }
        nodes[nodes.length - 1][1].children.push(newnode)
        nodes.push([indentnum, newnode])
      }
    }
    return nodes[0]
  }
  const handleShowTree = () => {
    const resFromParseTree = parseTree(inputValue)
    if (resFromParseTree) {
      const [, _nodes] = parseTree(inputValue)
      setNodes(_nodes)
    }
  }
  const [translate, containerRef] = useCenterdTree()
  return <div>
    <div className="wrapper">
      <textarea placeholder="Enter your input..." id="input" rows="10" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleShowTree} className="show_tree_btn">Show Tree</button>
      <blockquote className="waring">
        <p style={{ color: '#ffcc00' }}>
          <strong>Note</strong> : Using space key to indent
        </p>
      </blockquote>
    </div>
    {error && !nodes.name && <div className="error_text">
      {error}
    </div>}
    {nodes.name &&
      <div style={{ width: '100vw', height: '100vh' }} ref={containerRef}>
        <Tree data={nodes} orientation="vertical" translate={translate} />
      </div>
    }
  </div>
}
export default TreeVisualizer