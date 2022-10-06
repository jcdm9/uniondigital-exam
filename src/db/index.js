const mongoose = require("mongoose");

const InitiateMongoServer = async () => {
  try {
    console.log(process.env.DB_URL)
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Database connected to ${process.env.DB_URL}.`);
  } catch (e) {
    console.log(`Database ERROR: ${e}`)
    throw e;
  }
};

module.exports = { InitiateMongoServer }
