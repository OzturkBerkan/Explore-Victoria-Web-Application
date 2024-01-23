// import { NavLink } from "react-router-dom";  
import {
    // MDBCol, 
    // MDBContainer, 
    // MDBRow, MDBCard, 
    // MDBCardText, 
    // MDBCardBody, 
    // MDBCardImage, 
    MDBBtn, 
    // MDBTypography 
} from 'mdb-react-ui-kit';
import {
    // Route,
    // Routes,
    // Switch,
    Navigate,
    useNavigate
} from "react-router-dom"

const headerStyle = {
    position: "relative",
    height: "40vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
};

const h1Style = {
    position: "relative",
    color: "#00008B", 
    fontSize: "9rem",
    lineHeight: "0.9",
    textAlign: "center",
    top: "-30px",
    zIndex: "0"
};

const homeMain = {
    display: "grid",
    gridTemplateAreas:`
        'header header'
        'left right'
    `,
    gap: 10
}

const header = {
    gridArea: "header"
}

const newStudent = {
    gridArea: "left",
    margin: 10
}

const returnStudent = {
    gridArea: "right",
    margin: 10
}

export default function Home() {
    let navigate = useNavigate(); 
    const routeChangeNew = () => { 
        let path = `/Profile/EditProfile`; 
        navigate(path);
    }
    const routeChangeReturning = () => { 
        let path = `/Profile`; 
        navigate(path);
    }
    if(1){
        return (
            <div>
                <header style={headerStyle} className="banner">
                    <h1 style={h1Style}>Welcome to Victoria</h1>
                </header>
                <main style={homeMain} className="home-main">
                    <div style={header}>
                        <h3 className="home-h3"><span>Your</span> journey starts here</h3>
                        <div className="line"></div>
                    </div>
                    
                    <h2 style={newStudent}>New Students</h2>
                    <MDBBtn onClick={routeChangeNew} rounded size="lg">
                        Create Profile
                    </MDBBtn>
                    <h2 style={returnStudent}>Returning Students</h2>
                    <MDBBtn onClick={routeChangeReturning} rounded size="lg">
                        View Profile
                    </MDBBtn>
                </main>
            </div>
            
        );
    }else {
        return (
            <Navigate to="/Profile" />
        );
    }
}