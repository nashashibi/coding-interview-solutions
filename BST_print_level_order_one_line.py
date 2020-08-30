from collections import deque

class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

  def __str__(self):
    q = deque([self])
    str = ''

    while len(q):
      node = q.pop()

      if node.left:
        q.appendleft(node.left)

      if node.right:
        q.appendleft(node.right)

      str += node.val

    return str


tree = Node('a')
tree.left = Node('b')
tree.right = Node('c')
tree.left.left = Node('d')
tree.left.right = Node('e')
tree.right.left = Node('f')
tree.right.right = Node('g')

print(tree)