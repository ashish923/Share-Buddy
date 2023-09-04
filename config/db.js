const mongoose = require('mongoose');
function dbConnect() {
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: false
});
// mongoose.connect('mongodb://localhost/myapp', { bufferCommands: false });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});
}
module.exports = dbConnect;