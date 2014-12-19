/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var staticObj={
  static1:"static1"
};

var moduleFactory= function(){
  
  //private var
  var private_1=1;
  var private_2=2;
  function sum(a,b){return a+b};
  //pulic func and elem
  var returnObj=Object.create(staticObj);;
  returnObj.public_1=3;
    returnObj.public_2=4;
    returnObj.getTotalPrivate= function(){console.log(sum(private_1,private_2));};
    returnObj.getPrivate_1= function(){console.log(private_1);};
    returnObj.getPrivate_2= function(){console.log(private_2);};
  
  return returnObj;
};

//var module1= moduleFactory();
//var module2= moduleFactory();
//module1.getTotalPrivate();

var obj={a:1,b:2,c:3};
dValue=4;
Object.defineProperty(obj,'d',{configurable:false,enumerable:true,set:function(value){dValue=(2*value);},get:function(){return dValue+1;}});
