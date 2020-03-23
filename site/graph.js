// Graph constructor
function Graph(){
    this.nodes = []
    this.graph = {}
}

Graph.prototype.addNode = function(n){
    this.nodes.push(n)
    var title = n.value;
    this.graph[title] = n
}

Graph.prototype.getNode = function(actor){
    var n = this.graph[actor]
    return n
}
