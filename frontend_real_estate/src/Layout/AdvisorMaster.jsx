import { Outlet } from "react-router-dom";
import AdvisorHeader from "./AdvisorHeader";

export default function AdvisorMaster(){
    return(
        <>
        <AdvisorHeader/>
        <Outlet/>
        </>
    )
}