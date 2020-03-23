/**
 * 
 * Breadth First Search Implementation
 * 
 */

 /**
  * 
  * @param {number} value 
  */
 function Node(value){
    this.value = value
    this.edges = []
    this.visited = false
    this.parent = null
 }

 Node.prototype.addEdge = function(neighbor){
     this.edges.push(neighbor)
     neighbor.edges.bind(this)
 }


 /**
  * graph constructor
  */
 function Graph(){
     this.nodes = []
     this.graph = {}
 }

 Graph.prototype.addNode = function(n){
     this.nodes.push(n)
     let title = n.value
     this.graph[title] = n
 }



 
