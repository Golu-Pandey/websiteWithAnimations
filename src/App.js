import { Button } from '@material-ui/core';
import React from 'react';

import Bottom from './Bottom';
import Navrbottom from './Navrbottom';

function App() {
  return (
    <div className="AppContainer">
    <div className="AppContainerWelCome01">
     <h1 className="AppContainerWelCome">Welcome to the world of technology</h1>
     <p className="AppContainerWelCome1">Technology is all around us, from the 
                 smartphones and smartwatches to solar-powered street lights 
                 and all-electric cars. So how do we define technology?</p>
     </div>
     <div className="CLOTHANDITSDIScription">
     <div className="sliderdiscription">
      <div className="slide-trackdiscription">
        {/*2 slide */}
          <div className="slidediscription slidediscriptionodd">The information technology (IT) software products 
                 company's stock was trading at its highest level since September 2018. 
                  the stock has zoomed 134 percent from the level of Rs 82.15
          </div>
          <div className="slidediscription slidediscriptioneven">Aurionpro is a leading player in 
                  banking and fintech segment offering IP based solutions, which 
                  include transaction banking platform, iCashPro+ and lending platform
                   – smart lender and ACE platform.
          </div>
          <div className="slidediscription slidediscriptionodd">On March 9, Aurionpro Solutions announced
                  the signing of the strategic partnership with Future-Tech, UK for data center 
                  design and consultancy projects in India and South Asia.
          </div>
          <div className="slidediscription slidediscriptioneven">The management said that Aurionpro has 
                 ventured into this business at a right time as Indian Data Centre market is 
                 likely to reach $4 Billion
          </div>
      </div>
     </div>
     
     <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/01/full/1612203648-8034.jpg"
      className="CLOTHss"></img>
     </div>

    <div className="Knowmoreonclickingbtn">
    <Button ><span className="knowbtnn">Know more</span></Button>
    </div>

      <div>
      <h1 className="AppContainerTodaysOffers">Today's News</h1>
          <Navrbottom />
      </div>
     <div>
     <h1 className="AppContainerOURSEVCES">Latest News </h1>
     <div className="slider">
      <div className="slide-track">
        {/*7 slide */}
        <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2019/10/code-technology-coding-tech-adoption-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
               <span className="slidenameinformation">Technology</span>
               <span className="slidedisinformation">Gaming giant EA hacked</span>
               <span className="slidesizeinformation">source code for games stolen</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/Virus_Outbreak_21104454654980-768x512.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Healthcare</span>
               <span className="slidedisinformation">Claims of Co-WIN system hacking</span>
               <span className="slidesizeinformation">data leak 'baseless': Govt</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/06/Discord-epic-games-350x196.jpg?impolicy=website&width=302&height=169"></img>	
              <div className="slideinformation">
                  <span className="slidenameinformation">Technology</span>
               <span className="slidedisinformation">you can download Discord Nitro</span>
               <span className="slidesizeinformation">free on Epic Games Store;</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/wpiinflation-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Economy</span>
               <span className="slidedisinformation">WPI inflation rises to 12.49% </span>
               <span className="slidesizeinformation"> in May vs 10.49% in April </span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/cybersecurity1-768x432.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Information Technology</span>
               <span className="slidedisinformation">How US managed to get Colonial </span>
               <span className="slidesizeinformation">Pipeline’s Bitcoin  back</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2020/12/rajnathsingh2-768x432.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Economy</span>
               <span className="slidedisinformation">Rajnath Singh approves budgetary</span>
               <span className="slidesizeinformation">support of Rs 499 crore in defence</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/06/G7_Summit_21163822036843-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Healthcare </span>
               <span className="slidedisinformation">G-7 leaders agree on vaccines</span>
               <span className="slidesizeinformation">China and taxing corporations</span>
              </div>
          </div>

          {/* same 7 slide Doubled*/}
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2019/10/code-technology-coding-tech-adoption-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
               <span className="slidenameinformation">Technology</span>
               <span className="slidedisinformation">Gaming giant EA hacked</span>
               <span className="slidesizeinformation">source code for games stolen</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/Virus_Outbreak_21104454654980-768x512.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Healthcare</span>
               <span className="slidedisinformation">Claims of Co-WIN system hacking</span>
               <span className="slidesizeinformation">data leak 'baseless': Govt</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/06/Discord-epic-games-350x196.jpg?impolicy=website&width=302&height=169"></img>	
              <div className="slideinformation">
                  <span className="slidenameinformation">Technology</span>
               <span className="slidedisinformation">you can download Discord Nitro</span>
               <span className="slidesizeinformation">free on Epic Games Store;</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/wpiinflation-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Economy</span>
               <span className="slidedisinformation">WPI inflation rises to 12.49% </span>
               <span className="slidesizeinformation"> in May vs 10.49% in April </span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/04/cybersecurity1-768x432.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Information Technology</span>
               <span className="slidedisinformation">How US managed to get Colonial </span>
               <span className="slidesizeinformation">Pipeline’s Bitcoin  back</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2020/12/rajnathsingh2-768x432.jpg?impolicy=website&width=572&height=387"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Economy</span>
               <span className="slidedisinformation">Rajnath Singh approves budgetary</span>
               <span className="slidesizeinformation">support of Rs 499 crore in defence</span>
                  </div>
          </div>
          <div className="slide">
              <img className="slideimg" src="https://images.cnbctv18.com/wp-content/uploads/2021/06/G7_Summit_21163822036843-780x438.jpg?impolicy=website&width=811&height=464"></img>	
              <div className="slideinformation">
              <span className="slidenameinformation">Healthcare </span>
               <span className="slidedisinformation">G-7 leaders agree on vaccines</span>
               <span className="slidesizeinformation">China and taxing corporations</span>
              </div>
          </div>
      </div>
     </div>
       
     </div>
     <div><Bottom /></div>
    </div>
  );
}

export default App;
