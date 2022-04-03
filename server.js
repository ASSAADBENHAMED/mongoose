const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config()
//connecting to database
const connectdb = require('./helpers/connectDB');


const person = require('./models/person');
connectdb();
const port=process.env.PORT;
app.listen(port,(err)=>
err ? console.log(err) :console.log('server is running on port ${port}')); 

// Add new person
const addPerson = async (name, age, favoriteFoods) => {
    const user = await User.create({ name, age, favoriteFoods });
    console.log(user);
  };



// Add Person

   addPerson("ameni",20,"pizza");
   addPerson("wassim",26,"couscous");
   addPerson("sabrine",10,"fruis");
   addPerson("bilel",30,"hamburger");
   addPerson("yosri",16,"coffee");
   addPerson("mary",28,"chocolat chaud");

 // Use Person.find() to Search on Database, all person

  const FindPerson=async () =>{
    const user = await person.find({})
console.log(user)
}


const FindPersone = async (fav) => {
	const user = await User.find({FavoriteFoods : fav})
	console.log(user)
}


//Find person By ID
const FindID = async (id) => {
	const user= await User.findById(id).exec();
	console.log(user)
}

// Delete One Persone By ID From Data And DELETE them

const Delete = async (id) => {
	const user = await User.findByIdAndDelete(id);
	console.log(user);
  };

  const DeletePersone = async () => {
	const user = await User.deleteMany({ name:"Mary" }).then(function(){
    console.log(" Persone DELETED"); 
}).catch(function(error){
    console.log(error); 
})};