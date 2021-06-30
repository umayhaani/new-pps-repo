import React, { useState } from "react";
import "./testWS.css";
import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink, useHistory } from "react-router-dom";
import EnterCode from "../../components/UIElements/EnterCode";
import bow from "../../assets/bow.jpeg";
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
//     MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
// import Admin from "./users/admin/Admin";

export let WorksheetType;

const TestWS = () => {
  const [USERNAME, setUSERNAME] = useLocalStorage("user", "null");
  // const [chapter, setChapter] = useState( () => "");
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [code, setCode] = useState("im code");
  const history = useHistory();

  const worksheetOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "practice worksheet") {
      WorksheetType = e.target.value;
      history.push("/PracticeWS");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };
  const onChangeHandler1 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English1") {
      history.push("/English1");
    }

    if (e.target.value === "Urdu1") {
      history.push("/Urdu1");
    }

    if (e.target.value === "Mathematics1") {
      history.push("/Maths1");
    }

    if (e.target.value === "Science1") {
      history.push("/Science1");
    }

    if (e.target.value === "Islamiyat1") {
      history.push("/Islamiyat1");
    }
  };

  const onChangeHandler2 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English2") {
      history.push("/English2");
    }

    if (e.target.value === "Urdu2") {
      history.push("/Urdu2");
    }

    if (e.target.value === "Mathematics2") {
      history.push("/Maths2");
    }

    if (e.target.value === "Science2") {
      history.push("/Science2");
    }

    if (e.target.value === "Islamiyat2") {
      history.push("/Islamiyat2");
    }
  };

  const onChangeHandler3 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English3") {
      history.push("/English3");
    }

    if (e.target.value === "Urdu3") {
      history.push("/Urdu3");
    }

    if (e.target.value === "Mathematics3") {
      history.push("/Maths3");
    }

    if (e.target.value === "Science3") {
      history.push("/Science3");
    }

    if (e.target.value === "Islamiyat3") {
      history.push("/Islamiyat3");
    }
  };

  const onChangeHandler4 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English4") {
      history.push("/English4");
    }

    if (e.target.value === "Urdu4") {
      history.push("/Urdu4");
    }

    if (e.target.value === "Mathematics4") {
      history.push("/Maths4");
    }

    if (e.target.value === "Science4") {
      history.push("/Science4");
    }

    if (e.target.value === "Islamiyat4") {
      history.push("/Islamiyat4");
    }
  };

  const onChangeHandler5 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English5") {
      history.push("/English5");
    }

    if (e.target.value === "Urdu5") {
      history.push("/Urdu5");
    }

    if (e.target.value === "Mathematics5") {
      history.push("/Maths5");
    }

    if (e.target.value === "Science5") {
      history.push("/Science5");
    }

    if (e.target.value === "Islamiyat5") {
      history.push("/Islamiyat5");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-TestWS">
        <NavLink to="/Student">
          <img className=" logo-TestWS" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-TestWS">{USERNAME}</h1>

        <ul className="nav-menu-TestWS ">
          <div className="nav-links-TestWS">
            <li>
              <NavLink to="/Student" className="nav-links-TestWS">
                Home
              </NavLink>
            </li>
          </div>

          <div className="nav-links-TestWS">
            <li>
              <select
                className="navworksheets-TestWS"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  WORKSHEETS{" "}
                </option> 
                <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  PRACTICE WORKSHEETS{" "}
                </option>
                <option
                  style={{
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="test worksheet"
                >
                  TEST WORKSHEETS{" "}
                </option>
              </select>
              {/* </NavLink> */}
            </li>
          </div>
          
        
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-TestWS">Log out</button>
        </NavLink>
      </nav>
 


<div style={{  marginTop: "20px", paddingBottom:"100px",
    background: "linear-gradient(to bottom right, #ff4382, #ffce00)",
         height:"100%"}}>

<div style={{  textAlign:"center",color:"white" , paddingTop:"30px",
 fontWeight:"bolder",fontSize:"42px", fontFamily:"algerian",
   }} >Test Worksheets</div>


        <div style={{display:"flex", }}>
    
            <div className="pinkDiv1-TestWS"
            //  style={{backgroundColor:"crimson", height:"59px",
            //  width:"195px", color:"white", paddingLeft:"20px",
            //   paddingTop:"10px", marginTop:"90px", marginLeft:"125px",
            //  fontSize:"32px", fontFamily:"algerian", opacity:"0.8"}}
             > 
             GRADE 1
             </div>

             <div className="pinkDiv2-TestWS"
            //  style={{backgroundColor:"crimson", height:"59px",
            //  width:"195px", color:"white", paddingLeft:"20px",
            //   paddingTop:"10px", marginTop:"90px", marginLeft:"40px",
            //  fontSize:"32px", fontFamily:"algerian", opacity:"0.8"}}
             > GRADE 2
             </div>

             <div  className="pinkDiv2-TestWS"> GRADE 3
             </div>

             <div  className="pinkDiv2-TestWS"> GRADE 4
             </div>

             <div  className="pinkDiv2-TestWS"> GRADE 5
             </div>

        </div>


        <div style={{display:"flex", }}>

    <NavLink to="/Student"  >
        <div   className="whiteDiv1-TestWS"
        // style={{backgroundColor:"white", height:"59px",
        // width:"195px", color:"#5f5d5e", paddingLeft:"20px",
        // paddingTop:"10px", marginTop:"0px", marginLeft:"125px",
        // fontSize:"24px", fontFamily:"algerian",   }}
        > English
        </div>
     </NavLink>

     <NavLink to="/Student" >
     <div className="whiteDiv2-TestWS"  > English
     </div>
</NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> English
     </div>
</NavLink>

     <NavLink to="/Student"> 
     <div  className="whiteDiv2-TestWS"> English
     </div>
</NavLink>

     <NavLink to="/Student">
        <div  className="whiteDiv2-TestWS"> English
        </div>
    </NavLink>
</div>


<div style={{display:"flex", }}>
    
<NavLink to="/Student">
    <div  className="whiteDiv2-TestWS" 
    style={{ marginLeft:"125px",  }}>
         Urdu
     </div>
     </NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Urdu
     </div>
     </NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Urdu
     </div>
     </NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Urdu
     </div>
   </NavLink>

   <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Urdu
     </div>
   </NavLink>

</div>

<div style={{display:"flex", }}>
    
<NavLink to="/Student">
    <div  className="whiteDiv2-TestWS"  style={{ marginLeft:"125px",}}> Mathematics
     </div>
</NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Mathematics
     </div>
</NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2"> Mathematics
     </div>
</NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Mathematics
     </div>
</NavLink>

     <NavLink to="/Student">
     <div  className="whiteDiv2-TestWS"> Mathematics
     </div>
</NavLink>

</div>

<div style={{display:"flex", }}>
    
<NavLink to="/Student" >
    <div  className="whiteDiv2-TestWS"  style={{ marginLeft:"125px",}}> Science
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Science
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Science
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Science
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Science
     </div>
</NavLink>

</div>

<div style={{display:"flex", }}>
    
<NavLink to="/Student" >
    <div  className="whiteDiv2-TestWS"  style={{ marginLeft:"125px",}}> Islamiyat
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Islamiyat
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Islamiyat
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Islamiyat
     </div>
</NavLink>

<NavLink to="/Student" >
     <div  className="whiteDiv2-TestWS"> Islamiyat
     </div>
</NavLink>

</div>
</div>


        



      <EnterCode
        openModal={showCodeWin}
        closeModal={() => setShowCodeWin(false)}
        code={code}
      />
    </React.Fragment>
  );
};

export default TestWS;
