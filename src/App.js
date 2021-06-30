import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import Admin from "./users/admin/Admin";
import Student from "./users/student/Student";
import Teacher from "./users/teacher/Teacher";
import MainPage from "./spellBee/MainPage";
import ScoreModal from "./ScoreModal";
import SpellLevel from "./spellBee/SpellLevel";
import SpeechToText from "./spellBee/speechTotext/SpeechToText";
import DemoSpellBee from "./spellBee/DemoSpellBee";
import AddWord from "./users/admin/AddWordAdmin";
import Auth from "./Auth";
import Confirmation from "./components/UIElements/Confirmation";
import CreateWorksheets from "./components/Worksheets/CreateWorksheets";
import ShowWorksheets from "./components/Worksheets/ShowWorksheets";
import ApprovedWS from "./components/Worksheets/ApprovedWS";
import MyWorksheets from "./components/Worksheets/MyWorksheets";
import WorksheetsHistory from "./components/Worksheets/WorksheetsHistory";
import English1 from "./Subjects/Grade1/English/English1";
import Maths1 from "./Subjects/Grade1/Mathematics/Maths1";
import Science1 from "./Subjects/Grade1/Science/Science1";
import Computer1 from "./Subjects/Grade1/Computer/Computer1";
import English3 from "./Subjects/Grade3/English/English3";
import Maths4 from "./Subjects/Grade4/Mathematics/Maths4";
import English5 from "./Subjects/Grade5/English/English5";
import Computer4 from "./Subjects/Grade4/Computer4";
import Science5 from "./Subjects/Grade5/Science5";
import Urdu1 from "./Subjects/Grade1/Urdu/Urdu1";
import Urdu4 from "./Subjects/Grade4/Urdu4/Urdu4";
import Islamiyat1 from "./Subjects/Grade1/Islamiyat/Islamiyat1";
import Islamiyat4 from "./Subjects/Grade4/Islamiyat/Islamiyat4";
import StudentVideo from "./users/student/StudentVideo";
import EnglishContent from "./Subjects/Contents/EnglishContent";
import MathContent from "./Subjects/Contents/MathContent";
import ScienceContent from "./Subjects/Contents/ScienceContent";
import ComputerContent from "./Subjects/Contents/ComputerContent";
import Grade3EnglishContent from "./Subjects/Contents/Grade3EnglishContent";
import Grade4MathContent from "./Subjects/Contents/Grade4MathContent";
import Grade5EnglishContent from "./Subjects/Contents/Grade5EnglishContent";
import ComputerContent2 from "./Subjects/Contents/ComputerContent2";
import ScienceContent2 from "./Subjects/Contents/ScienceContent2";
import UrduContent from "./Subjects/Contents/UrduContent";
import UrduContent2 from "./Subjects/Contents/UrduContent2";
import IslamiyatContent from "./Subjects/Contents/IslamiyatContent";
import IslamiyatContent2 from "./Subjects/Contents/IslamiyatContent2";

import StudentGrade from "./users/student/StudentGrade";
import Subjects1 from "./users/student/Subjects1";
import Subjects2 from "./users/student/Subjects2";
import Subjects3 from "./users/student/Subjects3";
import Subjects4 from "./users/student/Subjects4";
import Subjects5 from "./users/student/Subjects5";
import NotesSubject1 from "./users/student/NotesSubject1";
import NotesSubject2 from "./users/student/NotesSubject2";
import NotesSubject3 from "./users/student/NotesSubject3";
import NotesSubject4 from "./users/student/NotesSubject4";
import NotesSubject5 from "./users/student/NotesSubject5";
import NotesContent from "./users/student/NotesContent";
import VideoContent from "./users/student/VideoContent";
import VideoSubject1 from "./users/student/VideoSubject1";
import VideoSubject2 from "./users/student/VideoSubject2";
import VideoSubject3 from "./users/student/VideoSubject3";
import VideoSubject4 from "./users/student/VideoSubject4";
import VideoSubject5 from "./users/student/VideoSubject5";

// import English1 from "./Subjects/Grade1/English/English1";
// import English2 from "./Subjects/Grade2/English/English2";
// import English3 from "./Subjects/Grade3/English/English3";
// import English4 from "./Subjects/Grade4/English/English4";
// import English5 from "./Subjects/Grade5/English/English5";
// import Maths1 from "./Subjects/Grade1/Mathematics/Maths1";
// import Maths2 from "./Subjects/Grade2/Mathematics/Maths2";
// import Maths3 from "./Subjects/Grade3/Mathematics/Maths3";
// import Maths4 from "./Subjects/Grade4/Mathematics/Maths4";
// import Maths5 from "./Subjects/Grade5/Mathematics/Maths5";
//import Contents from "./Subjects/Contents";
import LectureNotes from "./users/teacher/LectureNotes";
import StudentNotes from "./users/student/StudentNotes";
import ConfirmNotes from "./users/admin/ConfirmNotes";
import ConfirmVideos from "./users/admin/ConfirmVideos";
//import MyNotes from "./users/teacher/MyNotes";
import NotesHistory from "./users/teacher/NotesHistory";
import UploadVideo from "./users/teacher/UploadVideo";
//import MyVideos from "./users/teacher/MyVideos";
import VideosHistory from "./users/teacher/VideosHistory";
//import ProgressReport from "./users/student/ProgressReport";
import ListOfProgressReport from "./ProgressReport/ListOfProgressReport";
import ProgressReportTeacher from "./ProgressReport/ProgressReportTeacher";
// import VideoNotesStudent from "./users/student/VideoNotesStudent";
import GetUsers from "./users/admin/GetUsers";
import FillInTheBlanks from "./components/Worksheets/FillInTheBlanks";
import Mcqs from "./components/Worksheets/Mcqs";
import PracticeWS from "./users/student/PracticeWS";
import PracticeWSTitles from "./components/Worksheets/PracticeWSTitles";
import SubjectwisePR from "./ProgressReport/subjectwise/SubjectwisePR";
import ChooseSubject from "./ProgressReport/subjectwise/ChooseSubject";
import SelectSubject from "./ProgressReport/overall/SelectSubject";
import PercentilePR from "./ProgressReport/overall/PercentilePR";
import EditWord from "./users/admin/EditWord";
//import TestingComponent from "./TestingComponent";
import AdminsDetail from "./users/admin/AdminsDetail";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/Auth" exact>
          <Auth />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/getUsers" exact>
          <GetUsers />
        </Route>
        <Route path="/student" exact>
          <Student />
        </Route>
        <Route path="/teacher" exact>
          <Teacher />
        </Route>
        <Route exact path="/Student/SpellBee">
          <MainPage />
        </Route>
        <Route exact path="/Student/SpellBee">
          <ScoreModal />
        </Route>
        <Route exact path="/SpellBee/SpellLevel">
          <SpellLevel />
        </Route>
        <Route exact path="/SpeechToText">
          <SpeechToText />
        </Route>
        <Route exact path="/DemoSpellBee">
          <DemoSpellBee />
        </Route>
        <Route exact path="/addWord">
          <AddWord />
        </Route>
        <Route exact path="/Confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/CreateWorksheets">
          <CreateWorksheets />
        </Route>
        <Route exact path="/ShowWorksheets">
          <ShowWorksheets />
        </Route>
        <Route exact path="/confirmWorksheets">
          <ApprovedWS />
        </Route>
        <Route exact path="/WorksheetsHistory">
          <WorksheetsHistory />
        </Route>
        <Route exact path="/PracticeWSTitles">
          <PracticeWSTitles />
        </Route>
        <Route exact path="/FillInTheBlanks">
          <FillInTheBlanks />
        </Route>
        <Route exact path="/Mcqs">
          <Mcqs />
        </Route>
        <Route path="/PracticeWS" exact>
          <PracticeWS />
        </Route>
        <Route exact path="/LectureNotes">
          <LectureNotes />
        </Route>
        <Route exact path="/MyWorksheets">
          <MyWorksheets />
        </Route>
        <Route exact path="/english">
          <English1 />
        </Route>
        <Route exact path="/maths">
          <Maths1 />
        </Route>
        <Route exact path="/science">
          <Science1 />
        </Route>
        <Route exact path="/Computer">
          <Computer1 />
        </Route>
        {/* <Route exact path="/english2">
          <English2 />
        </Route> */}
        <Route exact path="/english3">
          <English3 />
        </Route>
        {/* <Route exact path="/english4">
          <English4 />
        </Route> */}
        <Route exact path="/english45">
          <English5 />
        </Route>
        <Route exact path="/computer45">
          <Computer4 />
        </Route>
        <Route exact path="/science45">
          <Science5 />
        </Route>
        <Route exact path="/Urdu">
          <Urdu1 />
        </Route>
        <Route exact path="/Urdu45">
          <Urdu4 />
        </Route>
        <Route exact path="/Islamiyat">
          <Islamiyat1 />
        </Route>
        <Route exact path="/Islamiyat45">
          <Islamiyat4 />
        </Route>

        <Route exact path="/maths45">
          <Maths4 />
        </Route>

        <Route exact path="/EnglishContent">
          <EnglishContent />
        </Route>
        <Route exact path="/MathContent">
          <MathContent />
        </Route>
        <Route exact path="/ScienceContent">
          <ScienceContent />
        </Route>
        <Route exact path="/ComputerContent">
          <ComputerContent />
        </Route>
        <Route exact path="/ComputerContent2">
          <ComputerContent2 />
        </Route>
        <Route exact path="/ScienceContent2">
          <ScienceContent2 />
        </Route>
        <Route exact path="/UrduContent">
          <UrduContent />
        </Route>
        <Route exact path="/UrduContent2">
          <UrduContent2 />
        </Route>
        <Route exact path="/IslamiyatContent">
          <IslamiyatContent />
        </Route>
        <Route exact path="/IslamiyatContent2">
          <IslamiyatContent2 />
        </Route>
        <Route exact path="/Grade3EnglishContent">
          <Grade3EnglishContent />
        </Route>
        <Route exact path="/MathContent2">
          <Grade4MathContent />
        </Route>
        <Route exact path="/EnglishContent2">
          <Grade5EnglishContent />
        </Route>
        {/* <Route exact path="/Contents">
          <Contents />
        </Route> */}
        <Route exact path="/StudentNotes">
          <StudentNotes />
        </Route>
        <Route exact path="/ConfirmNotes">
          <ConfirmNotes />
        </Route>
        <Route exact path="/ConfirmVideos">
          <ConfirmVideos />
        </Route>
        {/* <Route exact path="/MyNotes">
          <MyNotes />
        </Route> */}
        {/* <Route exact path="/videos">
          <VideoNotesStudent />
        </Route> */}
        <Route exact path="/NotesHistory">
          <NotesHistory />
        </Route>
        <Route exact path="/UploadVideo">
          <UploadVideo />
        </Route>
        {/* <Route exact path="/MyVideos">
          <MyVideos />
        </Route> */}
        <Route exact path="/VideosHistory">
          <VideosHistory />
        </Route>
        {/* <Route exact path="/ProgressReport">
          <ProgressReport />
        </Route> */}
        <Route exact path="/ListOfProgressReport">
          <ListOfProgressReport />
        </Route>
        <Route exact path="/ProgressReportTeacher">
          <ProgressReportTeacher />
        </Route>
        <Route path="/ChooseSubject" exact>
          <ChooseSubject />
        </Route>
        <Route path="/SubjectwisePR" exact>
          <SubjectwisePR />
        </Route>
        <Route path="/SelectSubject" exact>
          <SelectSubject />
        </Route>
        <Route path="/OverallScorePR" exact>
          <PercentilePR />
        </Route>
        <Route exact path="/EditWord">
          <EditWord />
        </Route>
        <Route path="/AdminsDetail" exact>
          <AdminsDetail />
        </Route>

        {/* <Route path="/t" exact>
          <TestingComponent />
        </Route> */}

        <Route exact path="/StudentGrade">
          <StudentGrade />
        </Route>

        <Route exact path="/Subjects1">
          <Subjects1 />
        </Route>

        <Route exact path="/Subjects2">
          <Subjects2 />
        </Route>

        <Route exact path="/Subjects3">
          <Subjects3 />
        </Route>

        <Route exact path="/Subjects4">
          <Subjects4 />
        </Route>

        <Route exact path="/Subjects5">
          <Subjects5 />
        </Route>

        <Route exact path="/NotesContent">
          <NotesContent />
        </Route>

        <Route exact path="/NotesSubject1">
          <NotesSubject1 />
        </Route>

        {/* <Route exact path="/NotesSubject2">
          <NotesSubject2 />
        </Route>

        <Route exact path="/NotesSubject3">
          <NotesSubject3 />
        </Route>

        <Route exact path="/NotesSubject4">
          <NotesSubject4 />
        </Route>

        <Route exact path="/NotesSubject5">
          <NotesSubject5 />
        </Route> */}

        <Route exact path="/VideoContent">
          <VideoContent />
        </Route>

        {/* <Route exact path="/VideoSubject1">
          <VideoSubject1 />
        </Route>

        <Route exact path="/VideoSubject2">
          <VideoSubject2 />
        </Route>

        <Route exact path="/VideoSubject3">
          <VideoSubject3 />
        </Route>

        <Route exact path="/VideoSubject4">
          <VideoSubject4 />
        </Route> */}

        {/* <Route exact path="/VideoSubject5">
          <VideoSubject5 />
        </Route> */}
        <Route exact path="/videos">
          <StudentVideo />
        </Route>
      </Router>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Route } from "react-router-dom";
// //import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Admin from "./users/admin/Admin";
// import Student from "./users/student/Student";
// import Teacher from "./users/teacher/Teacher";
// import MainPage from "./spellBee/MainPage";
// import SpellLevel from "./spellBee/SpellLevel";
// import SpeechToText from "./spellBee/speechTotext/SpeechToText";
// import AddWord from "./users/admin/AddWordAdmin";
// import Auth from "./Auth";
// import Confirmation from "./components/UIElements/Confirmation";
// import CreateWorksheets from "./components/Worksheets/CreateWorksheets";
// import ShowWorksheets from "./components/Worksheets/ShowWorksheets";
// import ApprovedWS from "./components/Worksheets/ApprovedWS";
// import MyWorksheets from "./components/Worksheets/MyWorksheets";
// import WorksheetsHistory from "./components/Worksheets/WorksheetsHistory";
// import ConfirmNotes from "./users/admin/ConfirmNotes";
// import English1 from "./Subjects/Grade1/English/English1";
// import English2 from "./Subjects/Grade2/English/English2";
// import English3 from "./Subjects/Grade3/English/English3";
// import English4 from "./Subjects/Grade4/English/English4";
// import English5 from "./Subjects/Grade5/English/English5";
// import Maths1 from "./Subjects/Grade1/Mathematics/Maths1";
// import Maths2 from "./Subjects/Grade2/Mathematics/Maths2";
// import Maths3 from "./Subjects/Grade3/Mathematics/Maths3";
// import Maths4 from "./Subjects/Grade4/Mathematics/Maths4";
// import Maths5 from "./Subjects/Grade5/Mathematics/Maths5";
// import Contents from "./Subjects/Contents";
// import LectureNotes from "./users/teacher/LectureNotes";
// import StudentNotes from "./users/student/StudentNotes";
// import BasicTable from "./components/Table/BasicTable";
// import ProgressReportTeacher from "./ProgressReport/ProgressReportTeacher";
// import NotesHistory from "./users/teacher/NotesHistory";
// import DropDown from "./DropDown";
// import ListOfProgressReport from "./ProgressReport/ListOfProgressReport";
// import UploadVideo from "./users/teacher/UploadVideo";
// import ConfirmVideos from "./users/admin/ConfirmVideos";
// import VideoNotesStudent from "./users/student/VideoNotesStudent";
// import VideosHistory from "./users/teacher/VideosHistory";
// import Timer from "./components/UIElements/Timer";
// import GetUsers from "./users/admin/GetUsers";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Route path="/" exact>
//           <Auth />
//         </Route>

//         <Route path="/admin" exact>
//           <Admin />
//         </Route>
//         <Route path="/getUsers" exact>
//           <GetUsers />
//         </Route>
//         <Route path="/student" exact>
//           <Student />
//         </Route>
//         <Route path="/teacher" exact>
//           <Teacher />
//         </Route>
//         <Route exact path="/Student/SpellBee">
//           <MainPage />
//         </Route>

//         {/* <Route exact path="/Student/SpellBee">
//           <ScoreModal />
//         </Route> */}

//         <Route exact path="/SpellBee/SpellLevel">
//           <SpellLevel />
//         </Route>
//         <Route exact path="/SpeechToText">
//           <SpeechToText />
//         </Route>
//         <Route exact path="/addWord">
//           <AddWord />
//         </Route>
//         <Route exact path="/Confirmation">
//           <Confirmation />
//         </Route>
//         <Route exact path="/CreateWorksheets">
//           <CreateWorksheets />
//         </Route>

//         <Route exact path="/ShowWorksheets">
//           <ShowWorksheets />
//         </Route>
//         <Route exact path="/confirmWorksheets">
//           <ApprovedWS />
//         </Route>

//         <Route exact path="/WorksheetsHistory">
//           <WorksheetsHistory />
//         </Route>

//         <Route exact path="/LectureNotes">
//           <LectureNotes />
//         </Route>

//         <Route exact path="/StudentNotes">
//           <StudentNotes />
//         </Route>

//         <Route exact path="/MyWorksheets">
//           <MyWorksheets />
//         </Route>

//         <Route exact path="/BasicTable">
//           <BasicTable />
//         </Route>

//         <Route exact path="/english1">
//           <English1 />
//         </Route>

//         <Route exact path="/english2">
//           <English2 />
//         </Route>

//         <Route exact path="/english3">
//           <English3 />
//         </Route>

//         <Route exact path="/english4">
//           <English4 />
//         </Route>

//         <Route exact path="/english5">
//           <English5 />
//         </Route>

//         <Route exact path="/maths1">
//           <Maths1 />
//         </Route>

//         <Route exact path="/maths2">
//           <Maths2 />
//         </Route>

//         <Route exact path="/maths3">
//           <Maths3 />
//         </Route>

//         <Route exact path="/maths4">
//           <Maths4 />
//         </Route>

//         <Route exact path="/maths5">
//           <Maths5 />
//         </Route>

//         <Route exact path="/Contents">
//           <Contents />
//         </Route>

//         <Route exact path="/confirmNotes">
//           <ConfirmNotes />
//         </Route>
//         <Route exact path="/notesHistory">
//           <NotesHistory />
//         </Route>

//         <Route exact path="/ProgressReportTeacher">
//           <ProgressReportTeacher />
//         </Route>
//         <Route exact path="/DropDown">
//           <DropDown />
//         </Route>
//         <Route exact path="/ListOfProgressReport">
//           <ListOfProgressReport />
//         </Route>
//         <Route exact path="/UploadVideo">
//           <UploadVideo />
//         </Route>
//         <Route exact path="/ConfirmVideos">
//           <ConfirmVideos />
//         </Route>
//         <Route exact path="/videos">
//           <VideoNotesStudent />
//         </Route>
//         <Route exact path="/VideosHistory">
//           <VideosHistory />
//         </Route>

//         <Route exact path="/Timer">
//           <Timer />
//         </Route>
//         {/* <Route exact path="/NotesStudent"> */}
//         {/* <NotesStudent />
//         </Route> */}

//         {/* <Redirect to="/" /> */}
//       </Router>
//     </div>
//   );
// }

// export default App;
