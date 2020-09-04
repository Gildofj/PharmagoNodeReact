const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");
const mongoose = require("mongoose");
//const requireLogin = require('../middlewares/requireLogin');
const Mailer = require("../services/Mailers");
const suporteTemplate = require("../services/emailTemplates/suporteTemplate");

const Mail = mongoose.model("mail");

module.exports = (app) => {
  app.post("/api/suporte/webhooks", (req, res) => {
    const p = new Path("/api/suporte/:mailId");

    _.chain(req.body)
      .map(req.body, ({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, mailId: match.mailId };
        }
      })
      .compact()
      .uniqBy("email", "mailId")
      .each(({ mailId, email }) => {
        Mail.updateOne(
          {
            _id: mailId,
            remetentes: { email: email, newContact: false },
          },
          {
            $set: { "recipients.$.newContact": true },
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post("/api/suporte", async (req, res) => {
    const { titulo, subject, body, remetentes } = req.body;

    const mail = new Mail({
      titulo,
      subject,
      body: body,
      remetentes: remetentes
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dataSent: Date.now(),
    });

    const mailer = new Mailer(mail, suporteTemplate(mail));

    try {
      await mailer.send();
      await mail.save();

      res.send(this.props);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
