const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Drugs = mongoose.model("drugs");

module.exports = (app) => {
  app.get("/api/drugs", requireLogin, async (req, res) => {
    const drugs = await Drugs.find({});

    res.send(drugs);
  });

  app.get("/api/drug/:id", requireLogin, async (req, res) => {
    const drug = await Drugs.find({ _id: req.headers.referer.substr(-24) });

    res.send(drug);
  });
};
