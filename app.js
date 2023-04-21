const express = require("express");
const Joi = require("joi");
require("dotenv");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/sendMail", (req, res) => {
  res.status(200).send({ success: "Message has been sent" });
  return;

  const schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required().email(),
    message: Joi.string().min(10).required(),
  });

  const { error, value } = schema.validate(req.body);

  //if there is error,
  if (error) {
    res.status(400).send({ Error: error.details[0].message });
    return;
  }

  res.status(200).send({ success: "Message has been sent" });
  return;
});

app.listen(3000, function () {
  console.log("App is running");
});
