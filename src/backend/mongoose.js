const signupModel = require("./models/signup-models");
const spellModel = require("./models/spell-model");
const worksheetModel = require("./models/worksheet-model");
const fileModel = require("./models/file-model");
const attemptedWSModel = require("./models/attemptedWorksheets-model");
const { sendConfirmationEmail } = require("./mailer");
const videoModel = require("./models/video-model");
//const { validate } = require("./models/signup-models");
const signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  //console.log(email);
  let existingUser;
  try {
    existingUser = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  console.log(existingUser);
  if (existingUser) {
    return res.status(422).send({ err: "user exists already", status: "422" });
  }

  if (!existingUser) {
    const createdUser = new signupModel({
      name,
      email,
      password,
      role,
    });

    const result = await createdUser.save();

    res.status(201).json({ email: result.email, status: 201 });
    sendConfirmationEmail({ userName: result.name, userEmail: result.email });
  }
};

const confirmEmail = async (req, res, next) => {
  const { email, Validate } = req.body;
  console.log(email);

  console.log(Validate);
  let confirmUser;

  try {
    confirmUser = await signupModel.findOneAndUpdate(
      { email: email },
      { $set: { isValidated: Validate } },
      {
        new: true,
      }
    );
    if (confirmUser) {
      console.log("sdfsf ", confirmUser);
      return res.json({ validated: true });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(!!Validate);
  let users;
  try {
    users = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  if (!users || users.password !== password || users.isValidated !== true) {
    return res.status(401).send({ err: "Invalid User Input", status: "401" });
  }
  if (email === "admin@gmail.com" && password === "admin123") {
    return res.json({ role: users.role, name: users.name });
  }

  if (users && users.password === password) {
    return res.json({ role: users.role, name: users.name, email: users.email });
  }
};

const gmailLogin = async (req, res, next) => {
  const { email } = req.body;
  let users;
  try {
    users = await signupModel.findOne({ email: email });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  if (!users) {
    return res.status(401).send({ err: "invalid user account", status: "401" });
  }
  if (email === "admin@gmail.com") {
    return res.json({ role: users.role });
  }

  if (users) {
    res.json({ role: users.role, name: users.name });
  }
};

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await signupModel.find({}, "isValidated name email role");
  } catch (err) {
    return res.status(500).send("Please try again later can not get users");
  }
  if (!users) {
    return res.status(404).send({ err: "can not get users", status: "404" });
  }
  const user = users.filter(
    (u) => u.isValidated === true && u.role !== "Admin"
  );
  console.log("from level  " + user);
  if (users && req.query.adminType) {
    let admins = users.filter(
      (a) => a.role === "Admin" && a.name !== "admin" && a.isValidated === true
    );
    return res.status(200).send({
      user: admins,
    });
  }
  if (users) {
    // res.json({ text: text.map((t) => t.toObject({ getters: true })) });
    console.log(user, "USSEEERRSSS");
    return res.status(200).send({
      user: user,
    });
  }
};

const spellBeeAdmin = async (req, res, next) => {
  const { spell, description, grade, level } = req.body;
  let sp;
  try {
    sp = await spellModel.findOne({ spell: spell });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (sp) {
    return res.status(422).send({ err: "spell exists already", status: "422" });
  }

  if (!sp) {
    const createdWord = new spellModel({
      spell,
      description,
      grade,
      level,
    });

    const result = await createdWord.save();

    res.status(201).json({ result: result });
  }
};

const getWord = async (req, res, next) => {
  //console.log("responding");
  console.log(req.query.adminGrade);
  // console.log(" from query " + query.level);
  // console.log(" from query grade " + query.grade);
  let text;
  try {
    text = await spellModel.find({}, "spell level grade description");
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!text) {
    return res.status(401).send({ err: "can not match words", status: "401" });
  }

  if (text && req.query.role === "admin" && req.query.adminGrade) {
    let word = text.filter((w) => w.grade === req.query.adminGrade);
    if (word) {
      return res.status(200).send({
        words: word,
      });
    }

    if (!word) {
      return res
        .status(401)
        .send({ err: "can not match words", status: "401" });
    }
  }

  if (text && req.query.role === "admin") {
    //console.log("callme");
    console.log(text);
    return res.status(200).send({
      words: text,
    });
  }

  const level = text
    .filter((l) => l.level === req.query.level)
    .filter((g) => g.grade === req.query.grade);
  console.log("from level  " + level);
  ////////////////////spellbee student side///////////
  if (text) {
    return res.status(200).send({
      text: level.map((t) => t.spell),
      description: level.map((t) => t.description),
    });
  }
};
const matchWord = async (req, res, next) => {
  const { spell } = req.body;
  let pls;
  try {
    pls = await spellModel.findOne({ spell: spell });
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!pls) {
    return res.status(401).json({ err: "Spellings do not match" });
  }
  if (pls) {
    return res.json({ spell: pls.spell });
  }
};

const savingHTML = async (req, res, next) => {
  const {
    html,
    type,
    inp1,
    inp2,
    inp3,
    inp4,
    inp5,
    code,
    creator,
    title,
    grade,
    subject,
  } = req.body;
  console.log(title, "ttt");
  console.log(grade, "ggggggggggg");
  console.log(subject, "ssssssssssss");
  const createdHTML = new worksheetModel({
    html,
    code,
    type,
    inp1,
    inp2,
    inp3,
    inp4,
    inp5,
    creator,
    title,
    grade,
    subject,
  });

  const result = await createdHTML.save();

  res.status(201).json({ result: result.code });
};

const getHTML = async (req, res, next) => {
  let ws;
  let ws_type;
  console.log(req.query.code);
  console.log(req.query.title);
  console.log(req.query.subject);
  console.log(req.query.grade);
  try {
    ws = await worksheetModel.find(
      {},
      "html code type approved disapproved creator title grade subject"
    );
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  //for test showing worksheets//
  if (req.query.type === "test worksheet" && req.query.code) {
    ws_type = ws.filter(
      (w) => w.code === req.query.code && w.approved === true
    );
    console.log(ws_type, "/////////");
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      type: ws_type.map((w) => w.type),
      creator: ws_type.map((w) => w.creator),
      title: ws_type.map((w) => w.title),
      grade: ws_type.map((w) => w.grade),
      subject: ws_type.map((w) => w.subject),
    });
  }

  //for showing practice worksheets//
  if (req.query.type === "practice worksheet") {
    ws_type = ws.filter(
      (w) =>
        w.type === req.query.type &&
        w.approved === true &&
        w.subject === req.query.subject &&
        w.grade === req.query.grade &&
        w.title === req.query.title
    );
    console.log(ws_type, "/ppppppp");
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      type: ws_type.map((w) => w.type),
      title: ws_type.map((w) => w.title),
      grade: ws_type.map((w) => w.grade),
      subject: ws_type.map((w) => w.subject),
    });
  }

  ////////FOR TEACHER'S APPROVED MY_WORKSHEETS////
  if (
    ws &&
    req.query.creator &&
    req.query.myWorksheets &&
    req.query.grade &&
    req.query.subject
  ) {
    ws_type = ws.filter(
      (w) =>
        w.approved === true &&
        w.creator === req.query.creator &&
        w.disapproved === "awaiting" &&
        w.grade === req.query.grade &&
        w.subject === req.query.subject
    );
    if (ws_type.length === 0) {
      return res.json({ err: "NO WORKSHEET AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      status: ws_type.map((w) => w.approved),
    });
  }

  ////////FOR WORKSHEETS HISTORY/////////
  if (
    ws &&
    req.query.show &&
    req.query.creator &&
    req.query.grade &&
    req.query.subject
  ) {
    ws_type = ws.filter(
      (w) =>
        (w.disapproved === "disapproved" &&
          w.approved === false &&
          w.grade === req.query.grade &&
          w.subject === req.query.subject) ||
        (w.disapproved === "awaiting" &&
          w.approved === true &&
          w.grade === req.query.grade &&
          w.subject === req.query.subject)
    );
    console.log(ws_type.length);
    if (ws_type.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      worksheets: ws_type,
    });
  }

  ////////////////////////////////////////
  if (ws && req.query.show && req.query.creator) {
    ws_type = ws.filter(
      (w) =>
        (w.disapproved === "disapproved" && w.approved === false) ||
        (w.disapproved === "awaiting" && w.approved === true)
    );
    console.log(ws_type.length);
    if (ws_type.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      worksheets: ws_type,
    });
  }

  ////For showing worksheets to admin for approval//////
  if (ws) {
    if (req.query.adminType === "English Admin") {
      ws_type = ws.filter(
        (w) =>
          w.approved === false &&
          w.disapproved === "awaiting" &&
          w.subject === "English" &&
          w.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Computer Admin") {
      ws_type = ws.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Computer" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Mathematics Admin") {
      ws_type = ws.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Mathematics" &&
          n.grade === req.query.grade
      );
    }

    if (req.query.adminType === "Science Admin") {
      ws_type = ws.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Science" &&
          n.grade === req.query.grade
      );
    }

    if (ws_type.length === 0) {
      return res.json({ err: "NO WORKSHEETS AVAILABLE", status: "404" });
    }
    console.log(ws_type, req.query.grade);
    return res.status(200).send({
      worksheets: ws_type,
      ws: ws_type.map((w) => w.html),
      code: ws_type.map((w) => w.code),
      grade: ws_type.map((w) => w.grade),
      subject: ws_type.map((w) => w.subject),
    });
  }
};

/////////////////getting titles for practice worksheet////////

const getTitle = async (req, res, next) => {
  let ws;
  let ws_type;
  console.log(req.query.code);
  try {
    ws = await worksheetModel.find(
      {},
      "html code type approved disapproved creator title grade subject"
    );
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  //for showing practice worksheets//
  if (ws) {
    if (req.query.type === "practice worksheet") {
      ws_type = ws.filter(
        (w) =>
          w.type === req.query.type &&
          w.approved === true &&
          w.subject === req.query.subject &&
          w.grade === req.query.grade
      );

      return res.status(200).send({
        title: ws_type.map((w) => w.title),
      });
    }
  }
};

const matchStudentResponse = async (req, res, next) => {
  const { inp1, inp2, inp3, inp4, inp5, searchId } = req.body;
  console.log(inp1, inp2, inp3, inp4, inp5, "301");
  let correctAns;
  let count = 0;
  try {
    correctAns = await worksheetModel.findOne({ code: searchId });
    console.log(
      correctAns.inp1,
      correctAns.inp2,
      correctAns.inp3,
      correctAns.inp4,
      correctAns.inp5,
      "306"
    );
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  if (!correctAns) {
    return res.status(401).json({ err: "Spellings do not match" });
  }
  if (correctAns) {
    if (inp1 === correctAns.inp1) {
      count = count + 1;
      console.log(count, "11111", correctAns.inp2, inp1);
    }
    if (inp2 === correctAns.inp2) {
      count = count + 1;
      console.log(count, "22222");
    }
    if (inp3 === correctAns.inp3) {
      count = count + 1;
      console.log(count, "3333");
    }
    if (inp4 === correctAns.inp4) {
      count = count + 1;
      console.log(count, "44444");
    }
    if (inp5 === correctAns.inp5) {
      count = count + 1;
      console.log(count, "5555");
    }
    res.send({
      score: count,
      code: correctAns.code,
      creator: correctAns.creator,
      title: correctAns.title,
      grade: correctAns.grade,
      subject: correctAns.subject,
    });
  }
};

const confirmWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndUpdate(
      { code: searchId },
      { $set: { approved: true } },
      {
        new: true,
      }
    );
    if (approvedWS) {
      return res.json({ approvedWS });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const disapprovedWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndUpdate(
      { code: searchId },
      { $set: { disapproved: "disapproved" } },
      {
        new: true,
      }
    );
    if (approvedWS) {
      return res.json({ approvedWS });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const deleteWorksheets = async (req, res, next) => {
  const { searchId } = req.body;
  console.log(searchId);
  let approvedWS;

  try {
    approvedWS = await worksheetModel.findOneAndDelete({ code: searchId });
    if (approvedWS) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

//create and get attempted worksheet
const attemptedWS = async (req, res, next) => {
  const {
    creator,
    attempter,
    title,
    code,
    scores,
    grade,
    subject,
    time,
    type,
  } = req.body;

  const createAttemptedWS = new attemptedWSModel({
    creator,
    attempter,
    title,
    code,
    scores,
    grade,
    subject,
    time,
    type,
  });

  const result = await createAttemptedWS.save();
  const foundWS = await attemptedWSModel.find(
    {},
    "creator attempter title code scores grade subject time type"
  );
  res.status(201).json({ result: foundWS });
  // console.log(foundWS);
};

const uploadFile = async (req, res, next) => {
  console.log("file is ", req.file.path, req.body.title);
  const fileName = req.file.filename;
  const createdFile = new fileModel({
    uploadedFile: fileName,
    title: req.body.title,
    grade: req.body.grade,
    subject: req.body.subject,
  });

  const result = await createdFile.save();
  console.log(result);
  res.status(200).send({ result });
};

const uploadVideo = async (req, res, next) => {
  console.log("video from line 449 ", req.file.size);
  const fileName = req.file.filename;
  if (req.file.size > 50000000) {
    console.log(req.file.size, "big file");
    return res.json({ message: "file is big" });
  }
  if (req.file.size <= 50000000) {
    const createdFile = new videoModel({
      uploadedFile: fileName,
      grade: req.body.grade,
      subject: req.body.subject,
    });
    console.log(createdFile);
    const result = await createdFile.save();
    console.log(result);
    return res.status(200).send({ result });
  }
};

const getFile = async (req, res, next) => {
  let notes;
  let note;

  try {
    notes = await fileModel.find(
      {},
      "uploadedFile approved disapproved grade subject"
    );
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }

  ////////////notes for students///////////
  if (notes && req.query.student) {
    note = notes.filter(
      (n) =>
        n.approved === true &&
        n.disapproved === "awaiting" &&
        n.grade === req.query.grade &&
        n.subject === req.query.subject
    );

    if (note) {
      console.log(note, req.query.grade, req.query.subject, "line644");
      return res.status(200).send({
        notes: note,
      });
    }
  }
  // if (note.length === 0) {
  //   return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
  // }

  console.log(note, "....");

  //////////////////////////NOTES HISTORY///////

  if (
    notes &&
    req.query.show &&
    req.query.creator &&
    req.query.grade &&
    req.query.subject
  ) {
    note = notes.filter(
      (n) =>
        (n.disapproved === "disapproved" &&
          n.approved === false &&
          n.grade === req.query.grade &&
          n.subject === req.query.subject) ||
        (n.disapproved === "awaiting" &&
          n.approved === true &&
          n.grade === req.query.grade &&
          n.subject === req.query.subject)
    );

    if (note.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      // ws: ws_type.map((w) => w.html),
      notes: note,
    });
  }
  ////////FOR NOTES HISTORY/////////

  if (notes && req.query.show && req.query.creator) {
    note = notes.filter(
      (n) =>
        (n.disapproved === "disapproved" && n.approved === false) ||
        (n.disapproved === "awaiting" && n.approved === true)
    );

    if (note.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      // ws: ws_type.map((w) => w.html),
      notes: note,
    });
  }

  ////For showing files to admin for approval//////
  if (notes) {
    if (req.query.adminType === "English Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "English" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Computer Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Computer" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Mathematics Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Mathematics" &&
          n.grade === req.query.grade
      );
    }

    if (req.query.adminType === "Science Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Science" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Urdu Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Urdu" &&
          n.grade === req.query.grade
      );
    }

    if (req.query.adminType === "Islamiate Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Islamiate" &&
          n.grade === req.query.grade
      );
    }

    if (note.length === 0) {
      return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      notes: note,
    });
  }
};

const getVideo = async (req, res, next) => {
  let notes;
  let note;

  try {
    notes = await videoModel.find(
      {},
      "uploadedFile approved disapproved grade subject"
    );
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }

  ////////////notes for students///////////
  if (notes && req.query.student) {
    let note = notes.filter(
      (n) =>
        n.approved === true &&
        n.disapproved === "awaiting" &&
        n.grade === req.query.grade &&
        n.subject === req.query.subject
    );

    if (note) {
      console.log(note, req.query.grade, req.query.subject, "line835");
      return res.status(200).send({
        notes: note,
      });
    }
  }
  // if (note.length === 0) {
  //   return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
  // }

  // if (notes && req.query.student) {
  //   note = notes.filter(
  //     (n) => n.approved === true && n.disapproved === "awaiting"
  //   );

  //   if (note.length === 0) {
  //     return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
  //   }
  //   return res.status(200).send({
  //     notes: note,
  //   });
  // }

  ////////FOR NOTES HISTORY/////////
  console.log(req.query.grade, req.query.subject, "799");
  if (
    notes &&
    req.query.show &&
    req.query.creator &&
    req.query.grade &&
    req.query.subject
  ) {
    note = notes.filter(
      (n) =>
        (n.disapproved === "disapproved" &&
          n.approved === false &&
          n.grade === req.query.grade &&
          n.subject === req.query.subject) ||
        (n.disapproved === "awaiting" &&
          n.approved === true &&
          n.grade === req.query.grade &&
          n.subject === req.query.subject)
    );

    // if (note.length === 0) {
    //   return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    // }
    return res.status(200).send({
      // ws: ws_type.map((w) => w.html),
      notes: note,
    });
  }

  ///////////////////////////////
  if (notes && req.query.show && req.query.creator) {
    note = notes.filter(
      (n) =>
        (n.disapproved === "disapproved" && n.approved === false) ||
        (n.disapproved === "awaiting" && n.approved === true)
    );

    if (note.length === 0) {
      return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      // ws: ws_type.map((w) => w.html),
      notes: note,
    });
  }

  ////For showing files to admin for approval//////
  // if (notes) {
  //   note = notes.filter(
  //     (n) => n.approved === false && n.disapproved === "awaiting"
  //   );
  if (notes) {
    if (req.query.adminType === "English Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "English" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Computer Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Computer" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Mathematics Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Mathematics" &&
          n.grade === req.query.grade
      );
    }

    if (req.query.adminType === "Science Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Science" &&
          n.grade === req.query.grade
      );
    }
    if (req.query.adminType === "Urdu Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Urdu" &&
          n.grade === req.query.grade
      );
    }

    if (req.query.adminType === "Islamiate Admin") {
      note = notes.filter(
        (n) =>
          n.approved === false &&
          n.disapproved === "awaiting" &&
          n.subject === "Islamiate" &&
          n.grade === req.query.grade
      );
    }

    if (note.length === 0) {
      return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
    }
    return res.status(200).send({
      notes: note,
    });
  }
};

const approveNotes = async (req, res, next) => {
  const { searchId } = req.body;
  let approvedNotes;
  let notes;

  try {
    approvedNotes = await fileModel.findOneAndUpdate(
      { uploadedFile: searchId },
      { $set: { approved: true } },
      {
        new: true,
      }
    );
    // if (approvedNotes) {
    //   return res.json({ approvedNotes });
    // }

    try {
      notes = await fileModel.find(
        {},
        "uploadedFile approved disapproved grade subject"
      );

      if (notes) {
        approvedNotes = notes.filter(
          (n) => n.approved === false && n.disapproved === "awaiting"
        );
        return res.json({ approvedNotes });
      }
    } catch (err) {
      return res.status(500).send("Something Went Wrong");
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const disapproveNotes = async (req, res, next) => {
  const { searchId } = req.body;
  let approvedNotes;

  try {
    approvedNotes = await fileModel.findOneAndUpdate(
      { uploadedFile: searchId },
      { $set: { disapproved: "disapproved" } },
      {
        new: true,
      }
    );
    if (approvedNotes) {
      return res.json({ approvedNotes });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const deleteNotes = async (req, res, next) => {
  const fs = require("fs");
  const { searchId } = req.body;
  let deleteNotes;
  const path = `../../public/${searchId}`;

  try {
    console.log(`deleted file is ${path}`);
    fs.unlinkSync(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
  try {
    deleteNotes = await fileModel.findOneAndDelete({ uploadedFile: searchId });
    if (deleteNotes) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const approveVideos = async (req, res, next) => {
  const { searchId } = req.body;
  let approvedNotes;

  try {
    approvedNotes = await videoModel.findOneAndUpdate(
      { uploadedFile: searchId },
      { $set: { approved: true } },
      {
        new: true,
      }
    );
    if (approvedNotes) {
      return res.json({ approvedNotes });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const disapproveVideos = async (req, res, next) => {
  const { searchId } = req.body;
  let approvedNotes;

  try {
    approvedNotes = await videoModel.findOneAndUpdate(
      { uploadedFile: searchId },
      { $set: { disapproved: "disapproved" } },
      {
        new: true,
      }
    );
    if (approvedNotes) {
      return res.json({ approvedNotes });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const editWords = async (req, res, next) => {
  const { searchId, spell, description } = req.body;
  let editWord;
  console.log(searchId, spell, description);

  try {
    editWord = await spellModel.findOneAndUpdate(
      { _id: searchId },
      { $set: { spell: spell, description: description } },
      {
        new: true,
      }
    );
    console.log(editWord, " from edit word");
    if (editWord) {
      //console.log(editWord, " from edit word");
      return res.json({ editWord });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const editUsers = async (req, res, next) => {
  const { searchId, mail, name } = req.body;
  let editWord;

  try {
    editWord = await signupModel.findOneAndUpdate(
      { _id: searchId },
      { $set: { email: mail, name: name } },
      {
        new: true,
      }
    );
    console.log(editWord, " from edit word");
    if (editWord) {
      //console.log(editWord, " from edit word");
      return res.json({ editWord });
    }
  } catch (err) {
    return res.status(500).send("Something Went Wrong");
  }
};

const deleteVideos = async (req, res, next) => {
  const fs = require("fs");
  const { searchId } = req.body;
  let deleteNotes;
  const path = `../../public/${searchId}`;

  try {
    console.log(`deleted file is ${path}`);
    fs.unlinkSync(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
  try {
    deleteNotes = await videoModel.findOneAndDelete({ uploadedFile: searchId });
    if (deleteNotes) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const deleteWords = async (req, res, next) => {
  const { searchId } = req.body;
  let deleteWords;

  try {
    deleteWords = await spellModel.findOneAndDelete({ spell: searchId });
    if (deleteWords) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

const deleteUsers = async (req, res, next) => {
  const { searchId } = req.body;
  let deleteUser;

  try {
    deleteUser = await signupModel.findOneAndDelete({ email: searchId });
    if (deleteUser) {
      return res.json({ deleted: "deleted" });
    }
    if (approvedWS.length === 0) {
      return res.json({ deleted: "ALL DELETED" });
    }
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
};

////////////get testwsConfirmation/////
const testWSConfirmation = async (req, res, next) => {
  let confirmation;

  console.log(req.query.searchid, req.query.attempter, req.query.type);
  try {
    confirmation = await await attemptedWSModel.find(
      { code: req.query.searchid },
      "creator attempter title code scores grade subject time type"
    );
    //console.log(confirmation);
  } catch (err) {
    console.log(err);
  }
  if (confirmation) {
    let confirmations = confirmation.filter(
      (c) => c.attempter === req.query.attempter && c.type === req.query.type
    );
    console.log(confirmations, "from confirmed");
    if (confirmations.length !== 0)
      return res.json({ confirmed: "ALREADY ATTEMPTED" });
    else return res.json({ confirmed: "NOT ATTEMPTED" });
  }
};

/////////////////for getting percentile /////////////
const getPercentile = async (req, res, next) => {
  let report;
  try {
    report = await attemptedWSModel.find(
      {},
      "creator attempter title code scores grade subject time type"
    );
    console.log(report);
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  let progressReport;
  let filter = [];
  let ObtainedMarksArray = [];
  let ob = [];
  let compared = [];
  let percentile = [];
  let arr = [];

  try {
    report = await attemptedWSModel.find(
      {},
      "creator attempter title code scores grade subject time type"
    );
    console.log(report);
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  ////////////////////for showing overall pr to student/////
  if (report) {
    progressReport = report.filter(
      (ws) =>
        ws.grade === req.query.grade &&
        ws.subject === req.query.subject &&
        ws.type === "test worksheet"
    );

    console.log(progressReport);

    ///////////////////calculating percentile///////////////////

    arr = Array.from(new Set(progressReport.map((s) => s.title)));

    for (let index = 0; index < progressReport.length; index++) {
      if (arr[index]) {
        filter[index] = progressReport.filter((t) => t.title === arr[index]);
      } else {
        console.log("notsame");
      }
    }

    //////////////finding obtained marks of loginuser titlewise//////////////
    for (let index = 0; index < filter.length; index++) {
      if (filter[index]) {
        ObtainedMarksArray[index] = filter[index]
          .filter((m) => {
            if (m.attempter === req.query.attempter) {
              console.log(m.scores, m.attempter);
              return m.scores;
            }
          })
          .map((s) => s.scores)
          .join("");
      }
    }
    //////////converting string to numbers ////
    ob = ObtainedMarksArray.map((s, index) => {
      return Number(s, index);
    });

    ///comparing obtained marks with others//////
    for (let index = 0; index < filter.length; index++) {
      let count = 0;
      let tobeCompared = ob[index];

      filter[index].map((c) => {
        if (c.scores < tobeCompared) {
          count++;
          compared[index] = count;
        } else {
          count = count;
          compared[index] = count;
        }
        return count;
      });
    }

    for (let index = 0; index < filter.length; index++) {
      let total = filter[index].length;

      percentile[index] = (compared[index] / total) * 100;
    }
    if (percentile.length !== 0) {
      for (let index = 0; index < percentile.length; index++) {
        if (percentile[index] === 0) {
          percentile[index] = 0.1;
        } else {
          percentile[index] = percentile[index];
        }
      }
    }

    return res.json({ percentile: percentile, titles: arr });
  }
};

/////////////////for getting time percentile /////////////
const getTimePercentile = async (req, res, next) => {
  let report;
  try {
    report = await attemptedWSModel.find(
      {},
      "creator attempter title code scores grade subject time type"
    );
    console.log(report);
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  let progressReport;
  let filter = [];
  let ObtainedMarksArray = [];
  let ob = [];
  let compared = [];
  let percentile = [];
  let arr = [];

  try {
    report = await attemptedWSModel.find(
      {},
      "creator attempter title code scores grade subject time type"
    );
    console.log(report);
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }
  ////////////////////for showing overall pr to student/////
  if (report) {
    progressReport = report.filter(
      (ws) =>
        ws.grade === req.query.grade &&
        ws.subject === req.query.subject &&
        ws.type === "test worksheet"
    );

    console.log(progressReport);

    ///////////////////calculating percentile///////////////////

    arr = Array.from(new Set(progressReport.map((s) => s.title)));

    for (let index = 0; index < progressReport.length; index++) {
      if (arr[index]) {
        filter[index] = progressReport.filter((t) => t.title === arr[index]);
      } else {
        console.log("notsame");
      }
    }

    //////////////finding obtained marks of loginuser titlewise//////////////
    for (let index = 0; index < filter.length; index++) {
      if (filter[index]) {
        ObtainedMarksArray[index] = filter[index]
          .filter((m) => {
            if (m.attempter === req.query.attempter) {
              console.log(m.time, m.attempter);
              return m.time;
            }
          })
          .map((s) => s.time)
          .join("");
      }
    }
    //////////converting string to numbers ////
    ob = ObtainedMarksArray.map((s, index) => {
      return Number(s, index);
    });

    ///comparing obtained marks with others//////
    for (let index = 0; index < filter.length; index++) {
      let count = 0;
      let tobeCompared = ob[index];

      filter[index].map((c) => {
        if (c.time > tobeCompared) {
          count++;
          compared[index] = count;
        } else {
          count = count;
          compared[index] = count;
        }
        return count;
      });
    }

    for (let index = 0; index < filter.length; index++) {
      let total = filter[index].length;

      percentile[index] = (compared[index] / total) * 100;
    }
    if (percentile.length !== 0) {
      for (let index = 0; index < percentile.length; index++) {
        if (percentile[index] === 0) {
          percentile[index] = 0.1;
        } else {
          percentile[index] = percentile[index];
        }
      }
    }

    return res.json({ percentile: percentile, titles: arr });
  }
};

/////////////////for progressReport///////////////////
const getAttemptedWSReport = async (req, res, next) => {
  let report;
  let progressReport;

  try {
    report = await attemptedWSModel.find(
      {},
      "creator attempter title code scores grade subject time type"
    );
    console.log(report);
  } catch (err) {
    return res.status(500).send("Logging in failed, please try again later");
  }

  ////////////////for showing subjectwise pr to student //////
  if (
    report &&
    req.query.act === "student" &&
    req.query.subjectWise === "subjectWise"
  ) {
    console.log("fromm2222222");
    progressReport = report.filter(
      (ws) =>
        ws.attempter === req.query.attempter &&
        ws.grade === req.query.grade &&
        ws.subject === req.query.subject
    );
    //console.log(progressReport);
    return res.status(200).json({ report: progressReport });
  }

  /////////////////////for showing test pr to teacher/////
  if (report) {
    progressReport = report.filter(
      (ws) =>
        ws.creator === req.query.creator &&
        ws.grade === req.query.grade &&
        ws.subject === req.query.subject &&
        ws.type === "test worksheet"
    );

    let sum = 0;
    let averageScores = 0;

    if (req.query.title) {
      progressReport = report.filter(
        (ws) =>
          ws.creator === req.query.creator &&
          ws.grade === req.query.grade &&
          ws.subject === req.query.subject &&
          ws.title === req.query.title &&
          ws.type === "test worksheet"
      );

      for (let index = 0; index < progressReport.length; index++) {
        sum = sum + progressReport[index].scores;
      }
      averageScores = sum / progressReport.length;
    }
    console.log(progressReport, ".//.../.");
    return res
      .status(200)
      .json({ report: progressReport, averageScores: averageScores });
  }
};

exports.signup = signup;
exports.confirmEmail = confirmEmail;
exports.login = login;
exports.gmailLogin = gmailLogin;
exports.getUsers = getUsers;
exports.spellBeeAdmin = spellBeeAdmin;
exports.matchWord = matchWord;
exports.getWord = getWord;
exports.savingHTML = savingHTML;
exports.getHTML = getHTML;
exports.matchStudentResponse = matchStudentResponse;
exports.confirmWorksheets = confirmWorksheets;
exports.disapprovedWorksheets = disapprovedWorksheets;
exports.deleteWorksheets = deleteWorksheets;
exports.uploadFile = uploadFile;
exports.getFile = getFile;
exports.approveNotes = approveNotes;
exports.disapproveNotes = disapproveNotes;
exports.deleteNotes = deleteNotes;
exports.attemptedWS = attemptedWS;
exports.getTitle = getTitle;
exports.testWSConfirmation = testWSConfirmation;
exports.getPercentile = getPercentile;
exports.getTimePercentile = getTimePercentile;
exports.getAttemptedWSReport = getAttemptedWSReport;
exports.uploadVideo = uploadVideo;
exports.getVideo = getVideo;
exports.approveVideos = approveVideos;
exports.disapproveVideos = disapproveVideos;
exports.editWords = editWords;
exports.editUsers = editUsers;
exports.deleteVideos = deleteVideos;
exports.deleteWords = deleteWords;
exports.deleteUsers = deleteUsers;

// //const express = require("express");

// const signupModel = require("./models/signup-models");
// const spellModel = require("./models/spell-model");
// const worksheetModel = require("./models/worksheet-model");
// const fileModel = require("./models/file-model");
// const attemptedWSModel = require("./models/attemptedWorksheets-model");
// const { sendConfirmationEmail } = require("./mailer");
// const videoModel = require("./models/video-model");
// //const { validate } = require("./models/signup-models");
// const signup = async (req, res, next) => {
//   const { name, email, password, role } = req.body;
//   //console.log(email);
//   let existingUser;
//   try {
//     existingUser = await signupModel.findOne({ email: email });
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   console.log(existingUser);
//   if (existingUser) {
//     return res.status(422).send({ err: "user exists already", status: "422" });
//   }

//   if (!existingUser) {
//     const createdUser = new signupModel({
//       name,
//       email,
//       password,
//       role,
//     });

//     const result = await createdUser.save();

//     res.status(201).json({ email: result.email, status: 201 });
//     sendConfirmationEmail({ userName: result.name, userEmail: result.email });
//   }
// };

// const confirmEmail = async (req, res, next) => {
//   const { email, Validate } = req.body;
//   console.log(email);

//   console.log(Validate);
//   let confirmUser;

//   try {
//     confirmUser = await signupModel.findOneAndUpdate(
//       { email: email },
//       { $set: { isValidated: Validate } },
//       {
//         new: true,
//       }
//     );
//     if (confirmUser) {
//       console.log("sdfsf ", confirmUser);
//       return res.json({ validated: true });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   // console.log(!!Validate);
//   let users;
//   try {
//     users = await signupModel.findOne({ email: email });
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   if (!users || users.password !== password || users.isValidated !== true) {
//     return res.status(401).send({ err: "Invalid User Input", status: "401" });
//   }
//   if (email === "admin@gmail.com" && password === "admin123") {
//     return res.json({ role: users.role, name: users.name });
//   }

//   if (users && users.password === password) {
//     return res.json({ role: users.role, name: users.name, email: users.email });
//   }
// };

// const gmailLogin = async (req, res, next) => {
//   const { email } = req.body;
//   let users;
//   try {
//     users = await signupModel.findOne({ email: email });
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   if (!users) {
//     return res.status(401).send({ err: "invalid user account", status: "401" });
//   }
//   if (email === "admin@gmail.com") {
//     return res.json({ role: users.role });
//   }

//   if (users) {
//     res.json({ role: users.role, name: users.name });
//   }
// };

// const getUsers = async (req, res, next) => {
//   let users;
//   try {
//     users = await signupModel.find({}, "isValidated name email role");
//   } catch (err) {
//     return res.status(500).send("Please try again later can not get users");
//   }
//   if (!users) {
//     return res.status(404).send({ err: "can not get users", status: "404" });
//   }
//   const user = users.filter(
//     (u) => u.isValidated === true && u.role !== "Admin"
//   );
//   console.log("from level  " + user);
//   if (users && req.query.adminType) {
//     let admins = users.filter(
//       (a) => a.role === "Admin" && a.name !== "admin" && a.isValidated === true
//     );
//     return res.status(200).send({
//       user: admins,
//     });
//   }
//   if (users) {
//     // res.json({ text: text.map((t) => t.toObject({ getters: true })) });
//     console.log(user, "USSEEERRSSS");
//     return res.status(200).send({
//       user: user,
//     });
//   }
// };

// const spellBeeAdmin = async (req, res, next) => {
//   const { spell, description, grade, level } = req.body;
//   let sp;
//   try {
//     sp = await spellModel.findOne({ spell: spell });
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   if (sp) {
//     return res.status(422).send({ err: "spell exists already", status: "422" });
//   }

//   if (!sp) {
//     const createdWord = new spellModel({
//       spell,
//       description,
//       grade,
//       level,
//     });

//     const result = await createdWord.save();

//     res.status(201).json({ result: result });
//   }
// };

// const getWord = async (req, res, next) => {
//   //console.log("responding");
//   console.log(req.query.adminGrade);
//   // console.log(" from query " + query.level);
//   // console.log(" from query grade " + query.grade);
//   let text;
//   try {
//     text = await spellModel.find({}, "spell level grade description");
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   if (!text) {
//     return res.status(401).send({ err: "can not match words", status: "401" });
//   }

//   if (text && req.query.role === "admin" && req.query.adminGrade) {
//     let word = text.filter((w) => w.grade === req.query.adminGrade);
//     if (word) {
//       return res.status(200).send({
//         words: word,
//       });
//     }

//     if (!word) {
//       return res
//         .status(401)
//         .send({ err: "can not match words", status: "401" });
//     }
//   }

//   if (text && req.query.role === "admin") {
//     //console.log("callme");
//     console.log(text);
//     return res.status(200).send({
//       words: text,
//     });
//   }

//   const level = text
//     .filter((l) => l.level === req.query.level)
//     .filter((g) => g.grade === req.query.grade);
//   console.log("from level  " + level);
//   ////////////////////spellbee student side///////////
//   if (text) {
//     return res.status(200).send({
//       text: level.map((t) => t.spell),
//       description: level.map((t) => t.description),
//     });
//   }
// };
// const matchWord = async (req, res, next) => {
//   const { spell } = req.body;
//   let pls;
//   try {
//     pls = await spellModel.findOne({ spell: spell });
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   if (!pls) {
//     return res.status(401).json({ err: "Spellings do not match" });
//   }
//   if (pls) {
//     return res.json({ spell: pls.spell });
//   }
// };

// const savingHTML = async (req, res, next) => {
//   const {
//     html,
//     type,
//     inp1,
//     inp2,
//     inp3,
//     inp4,
//     inp5,
//     code,
//     creator,
//     title,
//     grade,
//     subject,
//   } = req.body;
//   console.log(title, "ttt");
//   console.log(grade, "ggggggggggg");
//   console.log(subject, "ssssssssssss");
//   const createdHTML = new worksheetModel({
//     html,
//     code,
//     type,
//     inp1,
//     inp2,
//     inp3,
//     inp4,
//     inp5,
//     creator,
//     title,
//     grade,
//     subject,
//   });

//   const result = await createdHTML.save();

//   res.status(201).json({ result: result.code });
// };

// const getHTML = async (req, res, next) => {
//   let ws;
//   let ws_type;
//   console.log(req.query.code);
//   console.log(req.query.title);
//   console.log(req.query.subject);
//   console.log(req.query.grade);
//   try {
//     ws = await worksheetModel.find(
//       {},
//       "html code type approved disapproved creator title grade subject"
//     );
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   //for test showing worksheets//
//   if (req.query.type === "test worksheet" && req.query.code) {
//     ws_type = ws.filter(
//       (w) => w.code === req.query.code && w.approved === true
//     );
//     console.log(ws_type, "/////////");
//     return res.status(200).send({
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       type: ws_type.map((w) => w.type),
//       creator: ws_type.map((w) => w.creator),
//       title: ws_type.map((w) => w.title),
//       grade: ws_type.map((w) => w.grade),
//       subject: ws_type.map((w) => w.subject),
//     });
//   }

//   //for showing practice worksheets//
//   if (req.query.type === "practice worksheet") {
//     ws_type = ws.filter(
//       (w) =>
//         w.type === req.query.type &&
//         w.approved === true &&
//         w.subject === req.query.subject &&
//         w.grade === req.query.grade &&
//         w.title === req.query.title
//     );
//     console.log(ws_type, "/ppppppp");
//     return res.status(200).send({
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       type: ws_type.map((w) => w.type),
//       title: ws_type.map((w) => w.title),
//       grade: ws_type.map((w) => w.grade),
//       subject: ws_type.map((w) => w.subject),
//     });
//   }

//   ////////FOR TEACHER'S APPROVED MY_WORKSHEETS////
//   if (
//     ws &&
//     req.query.creator &&
//     req.query.myWorksheets &&
//     req.query.grade &&
//     req.query.subject
//   ) {
//     ws_type = ws.filter(
//       (w) =>
//         w.approved === true &&
//         w.creator === req.query.creator &&
//         w.disapproved === "awaiting" &&
//         w.grade === req.query.grade &&
//         w.subject === req.query.subject
//     );
//     if (ws_type.length === 0) {
//       return res.json({ err: "NO WORKSHEET AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       status: ws_type.map((w) => w.approved),
//     });
//   }

//   ////////FOR WORKSHEETS HISTORY/////////
//   if (
//     ws &&
//     req.query.show &&
//     req.query.creator &&
//     req.query.grade &&
//     req.query.subject
//   ) {
//     ws_type = ws.filter(
//       (w) =>
//         (w.disapproved === "disapproved" &&
//           w.approved === false &&
//           w.grade === req.query.grade &&
//           w.subject === req.query.subject) ||
//         (w.disapproved === "awaiting" &&
//           w.approved === true &&
//           w.grade === req.query.grade &&
//           w.subject === req.query.subject)
//     );
//     console.log(ws_type.length);
//     if (ws_type.length === 0) {
//       return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       worksheets: ws_type,
//     });
//   }

//   ////////////////////////////////////////
//   if (ws && req.query.show && req.query.creator) {
//     ws_type = ws.filter(
//       (w) =>
//         (w.disapproved === "disapproved" && w.approved === false) ||
//         (w.disapproved === "awaiting" && w.approved === true)
//     );
//     console.log(ws_type.length);
//     if (ws_type.length === 0) {
//       return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       worksheets: ws_type,
//     });
//   }

//   ////For showing worksheets to admin for approval//////
//   if (ws) {
//     if (req.query.adminType === "English Admin") {
//       ws_type = ws.filter(
//         (w) =>
//           w.approved === false &&
//           w.disapproved === "awaiting" &&
//           w.subject === "English" &&
//           w.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Computer Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Computer" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Mathematics Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Mathematics" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (req.query.adminType === "Science Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Science" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (ws_type.length === 0) {
//       return res.json({ err: "NO WORKSHEETS AVAILABLE", status: "404" });
//     }
//     console.log(ws_type, req.query.grade);
//     return res.status(200).send({
//       worksheets: ws_type,
//       ws: ws_type.map((w) => w.html),
//       code: ws_type.map((w) => w.code),
//       grade: ws_type.map((w) => w.grade),
//       subject: ws_type.map((w) => w.subject),
//     });
//   }
// };

// /////////////////getting titles for practice worksheet////////

// const getTitle = async (req, res, next) => {
//   let ws;
//   let ws_type;
//   console.log(req.query.code);
//   try {
//     ws = await worksheetModel.find(
//       {},
//       "html code type approved disapproved creator title grade subject"
//     );
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   //for showing practice worksheets//
//   if (ws) {
//     if (req.query.type === "practice worksheet") {
//       ws_type = ws.filter(
//         (w) =>
//           w.type === req.query.type &&
//           w.approved === true &&
//           w.subject === req.query.subject &&
//           w.grade === req.query.grade
//       );

//       return res.status(200).send({
//         title: ws_type.map((w) => w.title),
//       });
//     }
//   }
// };

// const matchStudentResponse = async (req, res, next) => {
//   const { inp1, inp2, inp3, inp4, inp5, searchId } = req.body;
//   console.log(inp1, inp2, inp3, inp4, inp5, "301");
//   let correctAns;
//   let count = 0;
//   try {
//     correctAns = await worksheetModel.findOne({ code: searchId });
//     console.log(
//       correctAns.inp1,
//       correctAns.inp2,
//       correctAns.inp3,
//       correctAns.inp4,
//       correctAns.inp5,
//       "306"
//     );
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   if (!correctAns) {
//     return res.status(401).json({ err: "Spellings do not match" });
//   }
//   if (correctAns) {
//     if (inp1 === correctAns.inp1) {
//       count = count + 1;
//       console.log(count, "11111", correctAns.inp2, inp1);
//     }
//     if (inp2 === correctAns.inp2) {
//       count = count + 1;
//       console.log(count, "22222");
//     }
//     if (inp3 === correctAns.inp3) {
//       count = count + 1;
//       console.log(count, "3333");
//     }
//     if (inp4 === correctAns.inp4) {
//       count = count + 1;
//       console.log(count, "44444");
//     }
//     if (inp5 === correctAns.inp5) {
//       count = count + 1;
//       console.log(count, "5555");
//     }
//     res.send({
//       score: count,
//       code: correctAns.code,
//       creator: correctAns.creator,
//       title: correctAns.title,
//       grade: correctAns.grade,
//       subject: correctAns.subject,
//     });
//   }
// };

// const confirmWorksheets = async (req, res, next) => {
//   const { searchId } = req.body;
//   console.log(searchId);
//   let approvedWS;

//   try {
//     approvedWS = await worksheetModel.findOneAndUpdate(
//       { code: searchId },
//       { $set: { approved: true } },
//       {
//         new: true,
//       }
//     );
//     if (approvedWS) {
//       return res.json({ approvedWS });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const disapprovedWorksheets = async (req, res, next) => {
//   const { searchId } = req.body;
//   console.log(searchId);
//   let approvedWS;

//   try {
//     approvedWS = await worksheetModel.findOneAndUpdate(
//       { code: searchId },
//       { $set: { disapproved: "disapproved" } },
//       {
//         new: true,
//       }
//     );
//     if (approvedWS) {
//       return res.json({ approvedWS });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const deleteWorksheets = async (req, res, next) => {
//   const { searchId } = req.body;
//   console.log(searchId);
//   let approvedWS;

//   try {
//     approvedWS = await worksheetModel.findOneAndDelete({ code: searchId });
//     if (approvedWS) {
//       return res.json({ deleted: "deleted" });
//     }
//     if (approvedWS.length === 0) {
//       return res.json({ deleted: "ALL DELETED" });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// //create and get attempted worksheet
// const attemptedWS = async (req, res, next) => {
//   const {
//     creator,
//     attempter,
//     title,
//     code,
//     scores,
//     grade,
//     subject,
//     time,
//     type,
//   } = req.body;

//   const createAttemptedWS = new attemptedWSModel({
//     creator,
//     attempter,
//     title,
//     code,
//     scores,
//     grade,
//     subject,
//     time,
//     type,
//   });

//   const result = await createAttemptedWS.save();
//   const foundWS = await attemptedWSModel.find(
//     {},
//     "creator attempter title code scores grade subject time type"
//   );
//   res.status(201).json({ result: foundWS });
//   // console.log(foundWS);
// };

// const uploadFile = async (req, res, next) => {
//   console.log("file is ", req.file.path, req.body.title);
//   const fileName = req.file.filename;
//   const createdFile = new fileModel({
//     uploadedFile: fileName,
//     title: req.body.title,
//     grade: req.body.grade,
//     subject: req.body.subject,
//   });

//   const result = await createdFile.save();
//   console.log(result);
//   res.status(200).send({ result });
// };

// const uploadVideo = async (req, res, next) => {
//   console.log("video from line 449 ", req.file.size);
//   const fileName = req.file.filename;
//   if (req.file.size >= 26180863) {
//     //	50,000,000
//     ///100000000
//     console.log(req.file.size, "big file");
//     return res.json({ message: "file is big" });
//   }
//   if (req.file.size < 26180863) {
//     const createdFile = new videoModel({
//       uploadedFile: fileName,
//       grade: req.body.grade,
//       subject: req.body.subject,
//     });
//     console.log(createdFile);
//     const result = await createdFile.save();
//     console.log(result);
//     return res.status(200).send({ result });
//   }
// };

// const getFile = async (req, res, next) => {
//   let notes;
//   let note;

//   try {
//     notes = await fileModel.find(
//       {},
//       "uploadedFile approved disapproved grade subject"
//     );
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }

//   ////////////notes for students///////////
//   if (notes && req.query.student) {
//     note = notes.filter(
//       (n) =>
//         n.approved === true &&
//         n.disapproved === "awaiting" &&
//         n.grade === req.query.grade &&
//         n.subject === req.query.subject
//     );

//     if (note) {
//       console.log(note, req.query.grade, req.query.subject, "line644");
//       return res.status(200).send({
//         notes: note,
//       });
//     }
//   }
//   // if (note.length === 0) {
//   //   return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
//   // }

//   console.log(note, "....");

//   //////////////////////////NOTES HISTORY///////

//   if (
//     notes &&
//     req.query.show &&
//     req.query.creator &&
//     req.query.grade &&
//     req.query.subject
//   ) {
//     note = notes.filter(
//       (n) =>
//         (n.disapproved === "disapproved" &&
//           n.approved === false &&
//           n.grade === req.query.grade &&
//           n.subject === req.query.subject) ||
//         (n.disapproved === "awaiting" &&
//           n.approved === true &&
//           n.grade === req.query.grade &&
//           n.subject === req.query.subject)
//     );

//     if (note.length === 0) {
//       return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       // ws: ws_type.map((w) => w.html),
//       notes: note,
//     });
//   }
//   ////////FOR NOTES HISTORY/////////

//   if (notes && req.query.show && req.query.creator) {
//     note = notes.filter(
//       (n) =>
//         (n.disapproved === "disapproved" && n.approved === false) ||
//         (n.disapproved === "awaiting" && n.approved === true)
//     );

//     if (note.length === 0) {
//       return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       // ws: ws_type.map((w) => w.html),
//       notes: note,
//     });
//   }

//   ////For showing files to admin for approval//////
//   if (notes) {
//     if (req.query.adminType === "English Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "English" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Computer Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Computer" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Mathematics Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Mathematics" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (req.query.adminType === "Science Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Science" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Urdu Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Urdu" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (req.query.adminType === "Islamiate Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Islamiate" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (note.length === 0) {
//       return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       notes: note,
//     });
//   }
// };

// const getVideo = async (req, res, next) => {
//   let notes;
//   let note;

//   try {
//     notes = await videoModel.find(
//       {},
//       "uploadedFile approved disapproved grade subject"
//     );
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }

//   ////////////notes for students///////////
//   if (notes && req.query.student) {
//     let note = notes.filter(
//       (n) =>
//         n.approved === true &&
//         n.disapproved === "awaiting" &&
//         n.grade === req.query.grade &&
//         n.subject === req.query.subject
//     );

//     if (note) {
//       console.log(note, req.query.grade, req.query.subject, "line835");
//       return res.status(200).send({
//         notes: note,
//       });
//     }
//   }
//   // if (note.length === 0) {
//   //   return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
//   // }

//   // if (notes && req.query.student) {
//   //   note = notes.filter(
//   //     (n) => n.approved === true && n.disapproved === "awaiting"
//   //   );

//   //   if (note.length === 0) {
//   //     return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
//   //   }
//   //   return res.status(200).send({
//   //     notes: note,
//   //   });
//   // }

//   ////////FOR NOTES HISTORY/////////
//   console.log(req.query.grade, req.query.subject, "799");
//   if (
//     notes &&
//     req.query.show &&
//     req.query.creator &&
//     req.query.grade &&
//     req.query.subject
//   ) {
//     note = notes.filter(
//       (n) =>
//         (n.disapproved === "disapproved" &&
//           n.approved === false &&
//           n.grade === req.query.grade &&
//           n.subject === req.query.subject) ||
//         (n.disapproved === "awaiting" &&
//           n.approved === true &&
//           n.grade === req.query.grade &&
//           n.subject === req.query.subject)
//     );

//     // if (note.length === 0) {
//     //   return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     // }
//     return res.status(200).send({
//       // ws: ws_type.map((w) => w.html),
//       notes: note,
//     });
//   }

//   ///////////////////////////////
//   if (notes && req.query.show && req.query.creator) {
//     note = notes.filter(
//       (n) =>
//         (n.disapproved === "disapproved" && n.approved === false) ||
//         (n.disapproved === "awaiting" && n.approved === true)
//     );

//     if (note.length === 0) {
//       return res.json({ err: "NO HISTORY AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       // ws: ws_type.map((w) => w.html),
//       notes: note,
//     });
//   }

//   ////For showing files to admin for approval//////
//   // if (notes) {
//   //   note = notes.filter(
//   //     (n) => n.approved === false && n.disapproved === "awaiting"
//   //   );
//   if (notes) {
//     if (req.query.adminType === "English Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "English" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Computer Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Computer" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Mathematics Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Mathematics" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (req.query.adminType === "Science Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Science" &&
//           n.grade === req.query.grade
//       );
//     }
//     if (req.query.adminType === "Urdu Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Urdu" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (req.query.adminType === "Islamiate Admin") {
//       note = notes.filter(
//         (n) =>
//           n.approved === false &&
//           n.disapproved === "awaiting" &&
//           n.subject === "Islamiate" &&
//           n.grade === req.query.grade
//       );
//     }

//     if (note.length === 0) {
//       return res.json({ err: "NO NOTES AVAILABLE", status: "404" });
//     }
//     return res.status(200).send({
//       notes: note,
//     });
//   }
// };

// const approveNotes = async (req, res, next) => {
//   const { searchId } = req.body;
//   let approvedNotes;
//   let notes;

//   try {
//     approvedNotes = await fileModel.findOneAndUpdate(
//       { uploadedFile: searchId },
//       { $set: { approved: true } },
//       {
//         new: true,
//       }
//     );
//     // if (approvedNotes) {
//     //   return res.json({ approvedNotes });
//     // }

//     try {
//       notes = await fileModel.find(
//         {},
//         "uploadedFile approved disapproved grade subject"
//       );

//       if (notes) {
//         approvedNotes = notes.filter(
//           (n) => n.approved === false && n.disapproved === "awaiting"
//         );
//         return res.json({ approvedNotes });
//       }
//     } catch (err) {
//       return res.status(500).send("Something Went Wrong");
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const disapproveNotes = async (req, res, next) => {
//   const { searchId } = req.body;
//   let approvedNotes;

//   try {
//     approvedNotes = await fileModel.findOneAndUpdate(
//       { uploadedFile: searchId },
//       { $set: { disapproved: "disapproved" } },
//       {
//         new: true,
//       }
//     );
//     if (approvedNotes) {
//       return res.json({ approvedNotes });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const deleteNotes = async (req, res, next) => {
//   const fs = require("fs");
//   const { searchId } = req.body;
//   let deleteNotes;
//   const path = `../../public/${searchId}`;

//   try {
//     console.log(`deleted file is ${path}`);
//     fs.unlinkSync(path);
//     //file removed
//   } catch (err) {
//     console.error(err);
//   }
//   try {
//     deleteNotes = await fileModel.findOneAndDelete({ uploadedFile: searchId });
//     if (deleteNotes) {
//       return res.json({ deleted: "deleted" });
//     }
//     if (approvedWS.length === 0) {
//       return res.json({ deleted: "ALL DELETED" });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// const approveVideos = async (req, res, next) => {
//   const { searchId } = req.body;
//   let approvedNotes;

//   try {
//     approvedNotes = await videoModel.findOneAndUpdate(
//       { uploadedFile: searchId },
//       { $set: { approved: true } },
//       {
//         new: true,
//       }
//     );
//     if (approvedNotes) {
//       return res.json({ approvedNotes });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const disapproveVideos = async (req, res, next) => {
//   const { searchId } = req.body;
//   let approvedNotes;

//   try {
//     approvedNotes = await videoModel.findOneAndUpdate(
//       { uploadedFile: searchId },
//       { $set: { disapproved: "disapproved" } },
//       {
//         new: true,
//       }
//     );
//     if (approvedNotes) {
//       return res.json({ approvedNotes });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const editWords = async (req, res, next) => {
//   const { searchId, spell, description } = req.body;
//   let editWord;
//   console.log(searchId, spell, description);

//   try {
//     editWord = await spellModel.findOneAndUpdate(
//       { _id: searchId },
//       { $set: { spell: spell, description: description } },
//       {
//         new: true,
//       }
//     );
//     console.log(editWord, " from edit word");
//     if (editWord) {
//       //console.log(editWord, " from edit word");
//       return res.json({ editWord });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const editUsers = async (req, res, next) => {
//   const { searchId, mail, name } = req.body;
//   let editWord;

//   try {
//     editWord = await signupModel.findOneAndUpdate(
//       { _id: searchId },
//       { $set: { email: mail, name: name } },
//       {
//         new: true,
//       }
//     );
//     console.log(editWord, " from edit word");
//     if (editWord) {
//       //console.log(editWord, " from edit word");
//       return res.json({ editWord });
//     }
//   } catch (err) {
//     return res.status(500).send("Something Went Wrong");
//   }
// };

// const deleteVideos = async (req, res, next) => {
//   const fs = require("fs");
//   const { searchId } = req.body;
//   let deleteNotes;
//   const path = `../../public/${searchId}`;

//   try {
//     console.log(`deleted file is ${path}`);
//     fs.unlinkSync(path);
//     //file removed
//   } catch (err) {
//     console.error(err);
//   }
//   try {
//     deleteNotes = await videoModel.findOneAndDelete({ uploadedFile: searchId });
//     if (deleteNotes) {
//       return res.json({ deleted: "deleted" });
//     }
//     if (approvedWS.length === 0) {
//       return res.json({ deleted: "ALL DELETED" });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// const deleteWords = async (req, res, next) => {
//   const { searchId } = req.body;
//   let deleteWords;

//   try {
//     deleteWords = await spellModel.findOneAndDelete({ spell: searchId });
//     if (deleteWords) {
//       return res.json({ deleted: "deleted" });
//     }
//     if (approvedWS.length === 0) {
//       return res.json({ deleted: "ALL DELETED" });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// const deleteUsers = async (req, res, next) => {
//   const { searchId } = req.body;
//   let deleteUser;

//   try {
//     deleteUser = await signupModel.findOneAndDelete({ email: searchId });
//     if (deleteUser) {
//       return res.json({ deleted: "deleted" });
//     }
//     if (approvedWS.length === 0) {
//       return res.json({ deleted: "ALL DELETED" });
//     }
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
// };

// ////////////get testwsConfirmation/////
// const testWSConfirmation = async (req, res, next) => {
//   let confirmation;

//   console.log(req.query.searchid, req.query.attempter, req.query.type);
//   try {
//     confirmation = await await attemptedWSModel.find(
//       { code: req.query.searchid },
//       "creator attempter title code scores grade subject time type"
//     );
//     //console.log(confirmation);
//   } catch (err) {
//     console.log(err);
//   }
//   if (confirmation) {
//     let confirmations = confirmation.filter(
//       (c) => c.attempter === req.query.attempter && c.type === req.query.type
//     );
//     console.log(confirmations, "from confirmed");
//     if (confirmations.length !== 0)
//       return res.json({ confirmed: "ALREADY ATTEMPTED" });
//     else return res.json({ confirmed: "NOT ATTEMPTED" });
//   }
// };

// /////////////////for getting percentile /////////////
// const getPercentile = async (req, res, next) => {
//   let report;
//   try {
//     report = await attemptedWSModel.find(
//       {},
//       "creator attempter title code scores grade subject time type"
//     );
//     console.log(report);
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   let progressReport;
//   let filter = [];
//   let ObtainedMarksArray = [];
//   let ob = [];
//   let compared = [];
//   let percentile = [];
//   let arr = [];

//   try {
//     report = await attemptedWSModel.find(
//       {},
//       "creator attempter title code scores grade subject time type"
//     );
//     console.log(report);
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   ////////////////////for showing overall pr to student/////
//   if (report) {
//     progressReport = report.filter(
//       (ws) =>
//         ws.grade === req.query.grade &&
//         ws.subject === req.query.subject &&
//         ws.type === "test worksheet"
//     );

//     console.log(progressReport);

//     ///////////////////calculating percentile///////////////////

//     arr = Array.from(new Set(progressReport.map((s) => s.title)));

//     for (let index = 0; index < progressReport.length; index++) {
//       if (arr[index]) {
//         filter[index] = progressReport.filter((t) => t.title === arr[index]);
//       } else {
//         console.log("notsame");
//       }
//     }

//     //////////////finding obtained marks of loginuser titlewise//////////////
//     for (let index = 0; index < filter.length; index++) {
//       if (filter[index]) {
//         ObtainedMarksArray[index] = filter[index]
//           .filter((m) => {
//             if (m.attempter === req.query.attempter) {
//               console.log(m.scores, m.attempter);
//               return m.scores;
//             }
//           })
//           .map((s) => s.scores)
//           .join("");
//       }
//     }
//     //////////converting string to numbers ////
//     ob = ObtainedMarksArray.map((s, index) => {
//       return Number(s, index);
//     });

//     ///comparing obtained marks with others//////
//     for (let index = 0; index < filter.length; index++) {
//       let count = 0;
//       let tobeCompared = ob[index];

//       filter[index].map((c) => {
//         if (c.scores < tobeCompared) {
//           count++;
//           compared[index] = count;
//         } else {
//           count = count;
//           compared[index] = count;
//         }
//         return count;
//       });
//     }

//     for (let index = 0; index < filter.length; index++) {
//       let total = filter[index].length;

//       percentile[index] = (compared[index] / total) * 100;
//     }
//     if (percentile.length !== 0) {
//       for (let index = 0; index < percentile.length; index++) {
//         if (percentile[index] === 0) {
//           percentile[index] = 0.1;
//         } else {
//           percentile[index] = percentile[index];
//         }
//       }
//     }

//     return res.json({ percentile: percentile, titles: arr });
//   }
// };

// /////////////////for getting time percentile /////////////
// const getTimePercentile = async (req, res, next) => {
//   let report;
//   try {
//     report = await attemptedWSModel.find(
//       {},
//       "creator attempter title code scores grade subject time type"
//     );
//     console.log(report);
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   let progressReport;
//   let filter = [];
//   let ObtainedMarksArray = [];
//   let ob = [];
//   let compared = [];
//   let percentile = [];
//   let arr = [];

//   try {
//     report = await attemptedWSModel.find(
//       {},
//       "creator attempter title code scores grade subject time type"
//     );
//     console.log(report);
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }
//   ////////////////////for showing overall pr to student/////
//   if (report) {
//     progressReport = report.filter(
//       (ws) =>
//         ws.grade === req.query.grade &&
//         ws.subject === req.query.subject &&
//         ws.type === "test worksheet"
//     );

//     console.log(progressReport);

//     ///////////////////calculating percentile///////////////////

//     arr = Array.from(new Set(progressReport.map((s) => s.title)));

//     for (let index = 0; index < progressReport.length; index++) {
//       if (arr[index]) {
//         filter[index] = progressReport.filter((t) => t.title === arr[index]);
//       } else {
//         console.log("notsame");
//       }
//     }

//     //////////////finding obtained marks of loginuser titlewise//////////////
//     for (let index = 0; index < filter.length; index++) {
//       if (filter[index]) {
//         ObtainedMarksArray[index] = filter[index]
//           .filter((m) => {
//             if (m.attempter === req.query.attempter) {
//               console.log(m.time, m.attempter);
//               return m.time;
//             }
//           })
//           .map((s) => s.time)
//           .join("");
//       }
//     }
//     //////////converting string to numbers ////
//     ob = ObtainedMarksArray.map((s, index) => {
//       return Number(s, index);
//     });

//     ///comparing obtained marks with others//////
//     for (let index = 0; index < filter.length; index++) {
//       let count = 0;
//       let tobeCompared = ob[index];

//       filter[index].map((c) => {
//         if (c.time > tobeCompared) {
//           count++;
//           compared[index] = count;
//         } else {
//           count = count;
//           compared[index] = count;
//         }
//         return count;
//       });
//     }

//     for (let index = 0; index < filter.length; index++) {
//       let total = filter[index].length;

//       percentile[index] = (compared[index] / total) * 100;
//     }
//     if (percentile.length !== 0) {
//       for (let index = 0; index < percentile.length; index++) {
//         if (percentile[index] === 0) {
//           percentile[index] = 0.1;
//         } else {
//           percentile[index] = percentile[index];
//         }
//       }
//     }

//     return res.json({ percentile: percentile, titles: arr });
//   }
// };

// /////////////////for progressReport///////////////////
// const getAttemptedWSReport = async (req, res, next) => {
//   let report;
//   let progressReport;

//   try {
//     report = await attemptedWSModel.find(
//       {},
//       "creator attempter title code scores grade subject time type"
//     );
//     console.log(report);
//   } catch (err) {
//     return res.status(500).send("Logging in failed, please try again later");
//   }

//   ////////////////for showing subjectwise pr to student //////
//   if (
//     report &&
//     req.query.act === "student" &&
//     req.query.subjectWise === "subjectWise"
//   ) {
//     console.log("fromm2222222");
//     progressReport = report.filter(
//       (ws) =>
//         ws.attempter === req.query.attempter &&
//         ws.grade === req.query.grade &&
//         ws.subject === req.query.subject
//     );
//     //console.log(progressReport);
//     return res.status(200).json({ report: progressReport });
//   }

//   /////////////////////for showing test pr to teacher/////
//   if (report) {
//     progressReport = report.filter(
//       (ws) =>
//         ws.creator === req.query.creator &&
//         ws.grade === req.query.grade &&
//         ws.subject === req.query.subject &&
//         ws.type === "test worksheet"
//     );

//     let sum = 0;
//     let averageScores = 0;

//     if (req.query.title) {
//       progressReport = report.filter(
//         (ws) =>
//           ws.creator === req.query.creator &&
//           ws.grade === req.query.grade &&
//           ws.subject === req.query.subject &&
//           ws.title === req.query.title &&
//           ws.type === "test worksheet"
//       );

//       for (let index = 0; index < progressReport.length; index++) {
//         sum = sum + progressReport[index].scores;
//       }
//       averageScores = sum / progressReport.length;
//     }
//     console.log(progressReport, ".//.../.");
//     return res
//       .status(200)
//       .json({ report: progressReport, averageScores: averageScores });
//   }
// };

// exports.signup = signup;
// exports.confirmEmail = confirmEmail;
// exports.login = login;
// exports.gmailLogin = gmailLogin;
// exports.getUsers = getUsers;
// exports.spellBeeAdmin = spellBeeAdmin;
// exports.matchWord = matchWord;
// exports.getWord = getWord;
// exports.savingHTML = savingHTML;
// exports.getHTML = getHTML;
// exports.matchStudentResponse = matchStudentResponse;
// exports.confirmWorksheets = confirmWorksheets;
// exports.disapprovedWorksheets = disapprovedWorksheets;
// exports.deleteWorksheets = deleteWorksheets;
// exports.uploadFile = uploadFile;
// exports.getFile = getFile;
// exports.approveNotes = approveNotes;
// exports.disapproveNotes = disapproveNotes;
// exports.deleteNotes = deleteNotes;
// exports.attemptedWS = attemptedWS;
// exports.getTitle = getTitle;
// exports.testWSConfirmation = testWSConfirmation;
// exports.getPercentile = getPercentile;
// exports.getTimePercentile = getTimePercentile;
// exports.getAttemptedWSReport = getAttemptedWSReport;
// exports.uploadVideo = uploadVideo;
// exports.getVideo = getVideo;
// exports.approveVideos = approveVideos;
// exports.disapproveVideos = disapproveVideos;
// exports.editWords = editWords;
// exports.editUsers = editUsers;
// exports.deleteVideos = deleteVideos;
// exports.deleteWords = deleteWords;
// exports.deleteUsers = deleteUsers;
