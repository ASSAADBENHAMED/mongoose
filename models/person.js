const mongoose= require ('mongoose');
const userSchema = mongoose.Schema({
    name:  String,
    age: Number,
    favoriteFoods: String, 
});
module.exports = mongoose.model("User", userSchema);