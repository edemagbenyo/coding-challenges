/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const pArr = arrayFromTree(p)
  const qArr = arrayFromTree(q)
  console.log(pArr,qArr)
  return JSON.stringify(pArr) === JSON.stringify(qArr);
  
};

const arrayFromTree = (tree, container = [])=>{
  
  if(tree !== null){
      container.push(tree.val) ;
      arrayFromTree(tree.left,container)
      arrayFromTree(tree.right,container)
  }else{
      container.push(null)
  }
  
  return container
}

