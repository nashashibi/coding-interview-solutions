
class TreeNode {
    constructor (val) {
      this.left = null
      this.right = null
      this.parent = null
      this.val = val
    }
  }

  const rootNode = new TreeNode('a')
  rootNode.left = new TreeNode('b')
  rootNode.left.parent = rootNode
  rootNode.right = new TreeNode('c')
  rootNode.right.parent = rootNode
  const a = rootNode.right.left = new TreeNode('d')
  rootNode.right.left.parent = rootNode.right
  const b = rootNode.right.right = new TreeNode('e')
  rootNode.right.right.parent = rootNode.right

  function lowestCommonAncestor (node, a, b) {
    if (node === null) return null

    if ([a.val, b.val].includes(node.val)) {
      return node
    }

    const leftSearch = lowestCommonAncestor(node.left, a, b)
    const rightSearch = lowestCommonAncestor(node.right, a, b)

    if (leftSearch === null) return rightSearch
    if (rightSearch === null) return leftSearch

    return node
  }

  res = lowestCommonAncestor(rootNode, a, b).val

  console.log('output:', res)
