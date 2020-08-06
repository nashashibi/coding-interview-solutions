
class Node {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function print_level_order (root) {
    let levelOrder = ''
    const queue = [root]

    while (queue.length) {
        const node = queue.pop()

        if (node.left) {
            queue.unshift(node.left)
        }

        if (node.right) {
            queue.unshift(node.right)
        }

        levelOrder += node.val
    }

    return levelOrder
}

const rootNode = new Node(1, new Node(2), new Node(3, new Node(4), new Node(5)))
const res = print_level_order(rootNode)

console.log('output:', res)
