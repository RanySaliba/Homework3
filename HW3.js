
var user = {
    name : "Adele",
    hobbies : ["singing", "schoching people"],
    age : 33
}
if(user.age > user.hobbies.length)
    console.log(true);
else if(user.age == user.hobbies.length)
    console.log(false);
else 
    console.log(undefined);
