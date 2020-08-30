
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function print_level_order_in_lines (root) {
    let levelOrder = ''
    const queue = [null, root]

    while (queue.length) {
        const node = queue.pop()

        if (node?.left) {
            queue.unshift(node.left)
        }

        if (node?.right) {
            queue.unshift(node.right)
        }

        levelOrder += node?.val || ''
        
        if (node === null && queue.length) {
          levelOrder += '\n'
          queue.unshift(node)
        }
    }

    return levelOrder
}


rootNode = new Node('a')

rootNode.left = new Node('b')
rootNode.right = new Node('c')

rootNode.left.left = new Node('d')
rootNode.left.right = new Node('e')
rootNode.right.left = new Node('f')
rootNode.right.right = new Node('g')

rootNode.left.left.left = new Node('h')
rootNode.left.left.right = new Node('i')
rootNode.left.right.left = new Node('j')
rootNode.left.right.right = new Node('k')
rootNode.right.left.left = new Node('l')
rootNode.right.left.right = new Node('m')
rootNode.right.right.left = new Node('n')
rootNode.right.right.right = new Node('o')

rootNode.left.left.left.left = new Node('p')
rootNode.left.left.left.right = new Node('q')
rootNode.left.left.right.left = new Node('r')
rootNode.left.left.right.right = new Node('s')
rootNode.left.right.left.left = new Node('t')
rootNode.left.right.left.right = new Node('u')
rootNode.left.right.right.left = new Node('v')
rootNode.left.right.right.right = new Node('w')
rootNode.right.left.left.left = new Node('x')
rootNode.right.left.left.right = new Node('y')
rootNode.right.left.right.left = new Node('z')

rootNode.left.left.left.left.left = new Node('A')
rootNode.left.left.left.left.right = new Node('B')
rootNode.left.left.left.right.left = new Node('C')
rootNode.left.left.left.right.right = new Node('D')
rootNode.left.left.right.left.left = new Node('E')
rootNode.left.left.right.left.right = new Node('F')

const res = print_level_order_in_lines(rootNode)

console.log('output:', res)





