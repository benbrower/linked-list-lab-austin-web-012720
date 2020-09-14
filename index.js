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

function nodeAt(index, list, collection){
  let currentNode = headNode(list, collection);
  for (let i = 0; i < index; i++){
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, list, collection) {
  console.log('index', index)
  console.log('list', list)
  console.log('collection', collection)
  if(index === 0){
    return list;
  } else {
    let node = nodeAt(index - 1, list, collection);
    return node.next;
  }
}

function indexAt(index, list, collection) {
  // console.log(node)
  let currentNode = headNode(list, collection);
  let currentIndex = 0;
  while (currentNode != node){
    currentIndex++;
    currentNode = next(currentNode, collection);
  }
  return currentIndex;
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
