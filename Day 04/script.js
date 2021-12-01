//How to compare two JSON have the same properties without order?
function result(obj1,obj2){

    for(let i in obj1){
      if(obj1[i]===obj2[i]){
         console.log("true")
      } else{
          console.log("false")
      }
     }
    }
    result({ name: "Person 1", age:5 },{ age:5, name: "Person 1" });