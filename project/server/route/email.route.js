import express from "express";
import {
  createEmail,
  getEmail,
  getEmails,
} from "../controller/email.controller.js";
const router = express.Router();

//CREATE
router.post("/", createEmail);
//Get
router.get("/", getEmails);
//get by id
router.get("/:id", getEmail);
export default router;
