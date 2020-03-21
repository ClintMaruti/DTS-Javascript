/**
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

 