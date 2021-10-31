const Post = require("./sarel-models/posts");
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => console.log("Mongo Connection Error", err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/sarel-demo");
}

const p = new Post({
  title: "Something",
  description: "Is it working?",
});
p.save();
