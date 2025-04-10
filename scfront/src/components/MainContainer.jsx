import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/maincontainer.css";
import Menu from '../img/menu.png'
import Close from '../img/close.png'

const MainContain = () => {
  const nav = useNavigate();

  return(
  <main className="subMain">
    <header id="subHeader" className="mainHeader">
        <div className="subHeaderWrapper">
            
            <button className="headerMenu">
                <img src={Menu} alt="menu" width="36px" />
            </button>
         </div>
        {/* <div className="gnbBackground">
          <div className="gnbslider">
            <header className="gnbHeader">
              <button className="gnbClose">
                <img src={Close} alt="menu" width="32px" />
              </button>
            </header>

            <nav className="gnbNav">
              로그인
            </nav>
          </div>
        </div>  */}
    </header>
   {/* <div id="MainPage">
    <section className="mainVisual">
      <div className="inner">
          <h1>시세조회 할 <br/>
            휴대폰정보를 선택해주세요.</h1>
            <hr />
      </div>
    </section>
          
    </div>        */}
  </main>

 
  )
};

export default MainContain;