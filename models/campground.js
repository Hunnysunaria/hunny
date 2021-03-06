var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: Number,
   Disease: String,
   description: String,
   Age: Number,
   Disease_score: Number,

   patient: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);