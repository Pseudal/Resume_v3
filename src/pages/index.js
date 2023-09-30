import Image from 'next/image'
import { Inter } from 'next/font/google'
import ReactFullpage from "@fullpage/react-fullpage";
import Aos from "aos";
import "aos/dist/aos.css";
import HomePage from "./components/home/_Home";
import Info1 from "./components/home/_Info1";
import Portolio from "./components/home/_Portolio";
import Snake from "./components/home/_Snake";
import Contact from "./components/home/_Contact";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const
        onLeave = (origin, destination, direction) => {
            console.log("onLeave", { origin, destination, direction });
            // arguments are mapped in order of fullpage.js callback arguments do something
            // with the event
        }

  return (
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
  )
}
