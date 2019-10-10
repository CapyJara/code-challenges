function logItOut(node) {
  if(node.next) {
    logItOut(node.next)
  }
  console.log(node.value);
}

function reverseRecurse(linkedList) {
  logItOut(linkedList.head);
}
