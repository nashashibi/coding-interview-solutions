from collections import deque

class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

  def __str__(self):
    q = deque([None, self])
    str = ''

    while len(q):
      node = q.pop()

      if node and node.left:
        q.appendleft(node.left)

      if node and node.right:
        q.appendleft(node.right)

      if node:
        str += node.val

      if node is None and len(q):
        q.appendleft(None)
        str += '\n'

    return str


tree = Node('a')
tree.left = Node('b')
tree.right = Node('c')
tree.left.left = Node('d')
tree.left.right = Node('e')
tree.right.left = Node('f')
tree.right.right = Node('g')

print(tree)