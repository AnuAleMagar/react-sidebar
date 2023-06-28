import React,{useState} from "react";
import Analytics from "./Analytic";
import Ecommerce from "./Ecommerce";
function Sidebar(){
     const[showList,setShowList]=useState(false);
       
     function handleShowList(){
        setShowList(!showList);
     }
     const [DashBoardItem,setDashBoardItem]=useState("");
     function handleDashboardItem(event){
        const namee=event.target.name;
        if(namee==="Analytics"){
             setDashBoardItem(<Analytics />);
        }
        else{
            setDashBoardItem(<Ecommerce />);
        }
       
     }
    return (
        <div className="sidebar">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-auto min-vh-100 bg-dark ">
                {/* Sidebar content goes here */}
                <h2 className="text-white">Navigation</h2>
                <ul >
            <li><a  href="#" onClick={handleShowList} className="mt-3 text-decoration-none " >DashBoard</a></li>
            {showList && (
                <ul>
                 <li><a href="#" onClick={handleDashboardItem} className=" mt-3 text-decoration-none " name="Analytics">Analytics</a></li>
                 <li><a href="#"  onClick={handleDashboardItem} className=" mt-3 text-decoration-none " name="Ecommerce">Ecommerce</a></li>

                </ul>
              )}
            <li><a href="#" className=" mt-3 text-decoration-none ">Apps</a></li>
            <li><a href="#" className=" mt-3 text-decoration-none ">About</a></li>
            <li><a href="#" className=" mt-3 text-decoration-none ">Contacts</a></li>
            <li><a href="#" className=" mt-3  text-decoration-none ">Something else here</a></li>
                </ul>
              </div>
              <div className="col bg-white">
                <h2>{DashBoardItem}</h2>
              </div>
            </div>
          </div>
        </div>
      );

}
export default Sidebar;