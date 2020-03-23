let data;
let graph;

function preload() {
  data = loadJSON("movies.json");
}

function setup() {
  // add title node
  noCanvas()
  let movies = data.movies
  graph = new Graph()
  for(let i = 0; i < movies.length; i++){
    let movie = movies[i].title
    let cast = movies[i].cast
    let movieNode = new Node(movie)
    graph.addNode(movieNode)
    
    for (let j = 0; j < cast.length; j++){
      let actor = cast[i]
      let actorNode = graph.getNode(actor)
      if(actorNode === undefined){
        actorNode = new Node(actor)
      }
      graph.addNode(actorNode)
      movieNode.addEdge(actorNode)
    }
  }
  console.log(graph)

  let queue = []
  let start = graph.setStart('The Rock')
  let end = graph.setEnd('The Rock')

  start.visited = true;
  queue.push(start)

  while(queue.length > 0){
    let current = queue.shift()
    if(current == end){
      console.log('Found') 
    }
    let edges = current.edges
    for(let i = 0; i < edges.length ; i++){
      let neighbor = edges[i]
      if(!neighbor.visited){
        neighbor.visited = true
        neighbor.parent = current
        queue.push(neighbor)
      }
    }
  }
}
