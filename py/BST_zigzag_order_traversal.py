from collections import deque

class Node(object):
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def zigzag_order(self):
  q = deque([None, self])
  popLeft = False
  order = []

  while len(q):
    if popLeft:
      node = q.popleft()
    else:
      node = q.pop()
      
    if node:
      if popLeft:
        if node.right:
          q.append(node.right)

        if node.left:
          q.append(node.left)
      else:
        if node.left:
          q.appendleft(node.left)

        if node.right:
          q.appendleft(node.right)
        
      order.append(node.val)

    if node is None and len(q):
      if popLeft:
        q.appendleft(node)
      else:
        q.append(node)
      popLeft = not popLeft

  return order

# test 1
n8 = Node(8)
n9 = Node(9)
n10 = Node(10)
n11 = Node(11)
n12 = Node(12)
n13 = Node(13)
n14 = Node(14)
n15 = Node(15)
n4 = Node(4, n8, n9)
n5 = Node(5, n10, n11)
n6 = Node(6, n12, n13)
n7 = Node(7, n14, n15)
n2 = Node(2, n4, n5)
n3 = Node(3, n6, n7)
n1 = Node(1, n2, n3)

# test 2
# n4 = Node(4)
# n5 = Node(5)
# n6 = Node(6)
# n7 = Node(7)
# n2 = Node(2, n4, n5)
# n3 = Node(3, n6, n7)
# n1 = Node(1, n2, n3)

print(zigzag_order(n1))
# output 1: 
# [1, 3, 2, 4, 5, 6, 7, 15, 14, 13, 12, 11, 10, 9, 8]
# 
# output 2:
# [1, 3, 2, 4, 5, 6, 7]