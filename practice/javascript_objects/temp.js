let obje = new Object();
// assigning using dot notation
obj.name = "ankit";
obj.section = "section c"
obj.number = 12; 

// assigning using square brackets

obj.["year"] = 2001;

// iteration over every element os that object

function showProps(obj,objName) {
  var result = "";
  for (var i in obj) {
    if(obj.
    result += objName + "." + i + "=" + obj[i] + "\n" ;
  }
}
return result;   
}
