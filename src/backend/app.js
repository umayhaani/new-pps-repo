const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

require("dotenv").config();

const authen = require("./mongoose");

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//app.use (expressValidator);
app.post("/signup", authen.signup);
app.post("/login", authen.login);
app.post("/gmailLogin", authen.gmailLogin);
app.post("/spell", authen.matchWord);
app.post("/admin/addWord", authen.spellBeeAdmin);
app.post("/savingHTML", authen.savingHTML);
app.post("/matchStudentResponse", authen.matchStudentResponse);
app.post("/uploadFile", upload.single("file"), authen.uploadFile);
app.post("/uploadVideo", upload.single("file"), authen.uploadVideo);
app.post("/attemptedWS", authen.attemptedWS);

app.get("/gettingUsers", authen.getUsers);
app.get("/gettingFile", authen.getFile);
app.get("/gettingVideo", authen.getVideo);
app.get("/gettingHTML", authen.getHTML);
app.get("/gettingTitle", authen.getTitle);
app.get("/word", authen.getWord); //app.get("/word/", authen.getWord);
app.get("/testWSConfirmation", authen.testWSConfirmation);
app.get("/getAttemptedWSReport", authen.getAttemptedWSReport);
app.get("/getPercentile", authen.getPercentile);
app.get("/getTimePercentile", authen.getTimePercentile);

app.patch("/confirmEmail", authen.confirmEmail);
app.patch("/confirmWorksheets", authen.confirmWorksheets);
app.patch("/disapprovedWorksheets", authen.disapprovedWorksheets);
app.patch("/approveNotes", authen.approveNotes);
app.patch("/disapproveNotes", authen.disapproveNotes);
app.patch("/approveVideos", authen.approveVideos);
app.patch("/disapproveVideos", authen.disapproveVideos);
app.patch("/editWords", authen.editWords);
app.patch("/editUsers", authen.editUsers);

app.delete("/deleteWorksheets", authen.deleteWorksheets);
app.delete("/deleteNotes", authen.deleteNotes);
app.delete("/deleteVideos", authen.deleteVideos);
app.delete("/deleteWords", authen.deleteWords);
app.delete("/deleteUsers", authen.deleteUsers);

mongoose
  .connect("mongodb://localhost/PPS", {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(5000);
    console.log("connected successfully");
  })
  .catch(() => {
    console.log("failed to connect");
  });
