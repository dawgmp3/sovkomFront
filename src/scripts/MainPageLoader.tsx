import PageHR from "../pages/Page-HR";
import PageCandidate from "../pages/Page-Candidate";
import React, {useState} from "react";
import Login from "../pages/Login";

function MainPageByRole(props: { role: string; }) {
    const isLoggedIn = props.role;
    const [role, setRole] = useState("")

    const fetchData = () => {
        fetch("/")
    }



    if (isLoggedIn == "ROLE_HR") {
        return <PageHR/>;
    }
    else if (isLoggedIn == "ROLE_USER") {
        return <PageCandidate/>;
    }
    else {
        return <Login/>
    }
}


export default MainPageByRole;