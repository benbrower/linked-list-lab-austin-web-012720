function getName(node){
  // console.log(node)
  return node.name;
}

function headNode(linkedList, collection){
  // console.log(collection)
  return(collection[linkedList])
}

function next(node, collection) {
  // console.log(collection[node.next])
  return collection[node.next];
}

function addressAt(index, list, collection) {
  console.log('index', index)
  console.log('list', list)
  console.log('collection', collection)

}

function indexAt(node) {
  // console.log(node)

}

function insertNodeAt(node) {
  // console.log(node)

}

function deleteNodeAt(index, list, collection) {
  // console.log('index', index)
  // console.log('list', list)
  // console.log('collection', collection)
  // let previousNode;
  // let currentNode = headNode(linkedList, collection);
  // for (let i = 0; i < index; i++){
  //   previousNode = currentNode;
  //   currentNode = next(currentNode, collection)
  // }
  // previousNode.next = currentNode.next;
}
