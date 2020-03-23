// Graph constructor
function Graph() {
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

Graph.prototype.setEnd = function(actor){
    this.end = actor
    return this.end
}

Graph.prototype.setStart = function(actor){
    this.start = actor
    return this.start
}

Graph.prototype.addNode = function(n) {
  this.nodes.push(n);
  var title = n.value;
  this.graph[title] = n;
};

Graph.prototype.getNode = function(actor) {
  var n = this.graph[actor];
  return n;
};
