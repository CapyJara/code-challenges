// assums node has:
// node.value
// node.left
// node.right


function checkNodeTree(node) {
  if(node.left && node.left.value < node.value) {
    checkNodeTree(node.left);
    if(!checkNodeTree(node.left)) return false;
  }

  if(node.right && node.right.value < node.value) {
    checkNodeTree(node.right);
    if(!checkNodeTree(node.right)) return false;
  }

  if((node.left && node.left.value > node.value) || (node.right && node.right.value > node.value)) return false;

  return true;
}
