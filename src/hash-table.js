/**
<<<<<<< HEAD
 * 
 * Hash Table Algorithm Implementation
 * run time 0(1)
 * 
 */

 const voters = {}

 const addVoter = name => {
     if(!voters.hasOwnProperty(name)){
         voters[name] = 'false'
     }
     return 'Voter has been added!'
 }

 const makeVote = name => {
     voters.hasOwnProperty(name) ? voters[name] = True : addVoter(name)
 }

 
=======
 * Hash Tables implementation
 * Run time: 0(1) or 0{log n}
 */

 const book = {}
 book["apple"] = 0.67
 book["ovacado"] = 1.49
 book["milk"] = 1.49
>>>>>>> 7afbdb6b804a1ff34419b697f87ec060735b9e34
