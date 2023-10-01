import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import HomePage from "./_Home";
import Info1 from "./_Info1";
import Portolio from "./_Portolio";
import Snake from "./_Snake";
import Contact from "./_Contact";


const _DesktopView = () => {
    const onLeave = (origin, destination, direction) => {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
    }
    return (
        <div>
            <ReactFullpage
                scrollBar='true'
                navigation
                licenseKey = {'GPLv3'}
                onLeave={onLeave}
                scrollHorizontally = {true}
                scrollOverflow= {false}

                render={() =>
                    console.log("render prop change") || (
                        
                        <ReactFullpage.Wrapper>
                            <div style={{height:"100vh", width:'100%', backgroundColor:"red"}} className="section"><HomePage/></div>
                            <div style={{height:"100vh", width:'100%', backgroundColor:"red"}} className="section"><Info1/></div>
                            <div style={{height:"100vh", width:'100%', backgroundColor:"red"}} className="section"><Portolio/></div>
                            <div style={{height:"100vh", width:'100%', backgroundColor:"red"}} className="section"><Snake/></div>
                            <div style={{height:"100vh", width:'100%', backgroundColor:"red"}} className="section"><Contact/></div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </div>
    );
};

export default _DesktopView;