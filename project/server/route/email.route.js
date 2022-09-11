import express from "express";
import {
  countInbox,
  createEmail,
  getEmail,
  getEmails,
  getInboxMail,
  getSentMail,
} from "../controller/email.controller.js";
const router = express.Router();

//CREATE
router.post("/", createEmail);
//Get all emails

router.get("/", getEmails);

//get by id
router.get("/findbyid/:id", getEmail);

//get email sent by user
router.get("/sent/", getSentMail);

//get inbox email
router.get("/inbox/", getInboxMail);
//count inbox mail
router.get("/countInbox/", countInbox);

export default router;
