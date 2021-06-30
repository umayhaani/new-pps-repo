import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import ApprovedModal from "../../components/Worksheets/ApprovedModal";
// import DisapprovedModal from "../../components/Worksheets/DisapprovedModal";
import logo from "../../assets/PPS5.jpeg";
import { useLocalStorage } from "../../LocalStorage/Local";
// import { USERNAME } from "../../Auth";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import "../admin/confirmNotes.css";
// import uuid from "react-uuid";
// import { ListItemAvatar } from "@material-ui/core";


const ProgressReport = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
const [csvData, setcsvData] = useState([])
const [data,setdata]=useState([{name:"umay"}])
    // {
    // name: 'rihard',
    // email: 'abc@gmail.com'
    // },
    // {
    //    name: 'rihard',
    //     email: 'abc@gmail.com'
    // },
// )
useEffect(()=>{
          getCsvData();
},[])
const getCsvData = async()=>{
  try {
    const response = await fetch(
      "http://localhost:5000/gettingCsvData"
    );
   let responseData = await response.json();
    console.log(responseData.csvData.map((n)=>n.name));
    if(responseData){
      setcsvData(responseData.csvData)
    }
    // worksheet = responseData.ws.join("");
  } catch (err) {
    console.log(err);
  }
}


const exportCsv =  () => {
    var CsvRow =[];
    var A= [['id','name','Email']];
    var re = csvData;
   console.log( re.length)
    for (var item =0;  item< re.length; item++)
    {
     // console.log(item);
        A.push([item, re[item].name,re[item].email]);
            
    }
    console.log(A);

    for(var i=0; i<A.length; ++i)
    {
        CsvRow.push(A[i].join(","))
               
    }

    console.log(CsvRow)
    var csvString= CsvRow.join("%0A");

    var a=document.createElement("a");
    a.href = 'data:attachment/csv,' + csvString;
    a.target="_Blank";
    a.download="testfile.csv";
    document.body.appendChild(a);
    a.click();
console.warn(csvString);
}

return (
    <>
    <div
    //   style={{
    //     // background: "black",
    //     minWidth: "100%",
    //     minHeight: "100%",
    //     backgroundSize: "cover",
    //     paddingBottom:"200px",
    //     // paddingTop:"23px"
    //   }}
    >
        <nav className="NavbarItems-approvedNotes">
          <NavLink to="/admin">
            <img className="logo " src={logo} alt="Logo" />
          </NavLink>
          {/* <h1 className="navbar-logo-approvedNotes">Admin's Portal</h1> */}
          <h1 className="navbar-logo-student">{USERNAME}</h1>
          <ul className="nav-menu-approvedNotes ">
            <div className="nav-links-approvedNotes">
              <li>
                <NavLink to="/admin" className="nav-links-approvedNotes">
                  Home
                </NavLink>
              </li>
            </div>


          </ul>

          <NavLink to="/#">
            {" "}
            <button className="button-approvedNotes">Log out</button>
          </NavLink>
        </nav>


        <div style={{marginRight: "0px",
              paddingTop: "20px",
              // paddingBottom: "20px",
              backgroundColor: "white"}}> </div>

 
        <div style={{   backgroundColor:"black",    marginTop:"2px", paddingBottom: "10px"}}> 
                <p style={{ color:"rgb(245, 87, 13)",
                            fontSize:"50px",
                            fontWeight:"bolder",
                            marginLeft:"500px",
                            paddingTop:"5px" ,
       }}>
                   Progress Reports
                </p>
        </div>

        <div style={{marginRight: "0px",
              paddingTop: "20px",
              // paddingBottom: "20px",
              backgroundColor: "white"}}> </div>

<div style={{ paddingTop:"23px" }} ></div>

     <button onClick={exportCsv}>Export </button>
      </div>   
      </>
  );
};

export default ProgressReport;






  