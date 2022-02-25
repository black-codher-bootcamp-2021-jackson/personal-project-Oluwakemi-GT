const mongoose = require("mongoose");
const Wordbank = mongoose.model("wordbank");

const wordbankRoutes = (app) => {
  app.get(`/api/wordbank`, async (req, res) => {
    const wordbank = await Wordbank.find();

    return res.status(200).send(wordbank);
  });

  app.post(`/api/wordbank`, async (req, res) => {
    const wordbank = await Wordbank.create(req.body);

    return res.status(201).send({
      error: false,
      wordbank,
    });
  });

  app.put(`/api/wordbank/:name`, async (req, res) => {
    const { name } = req.params;

    const wordbank = await Wordbank.findByNameAndUpdate(name, req.body);

    return res.status(202).send({
      error: false,
      wordbank,
    });
  });

  app.delete(`/api/wordbank/:name`, async (req, res) => {
    const { name } = req.params;

    const wordbank = await Wordbank.findByNameAndDelete(name);

    return res.status(202).send({
      error: false,
      wordbank,
    });
  });
};

module.exports = wordbankRoutes;
