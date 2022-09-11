import emailModel from "../models/email.model.js";

export const createEmail = async (req, res, next) => {
  const email = new emailModel(req.body);

  try {
    const savedEmail = await email.save();
    res.status(200).json(savedEmail);
  } catch (err) {
    next(err);
  }
};
export const getEmails = async (req, res, next) => {
  try {
    const emails = await emailModel.find();
    res.status(200).json(emails);
  } catch (err) {
    next(err);
  }
};
export const getEmail = async (req, res, next) => {
  const emailId = req.params.id;
  try {
    const email = await emailModel.findById(emailId);
    res.status(200).json(email);
  } catch (err) {
    next(err);
  }
};
