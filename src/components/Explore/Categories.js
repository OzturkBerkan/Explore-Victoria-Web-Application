import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { BsCalendarCheck, BsBriefcase } from "react-icons/bs";
import { FaBasketballBall, FaUtensils, FaChalkboardTeacher, FaSlideshare, FaUserAlt } from "react-icons/fa";


export default function Categories() {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    return (
        <MDBContainer className="container py-5 h-100">
            <MDBTypography className="pb-2" tag="h4">Explore Categories</MDBTypography>
            <MDBCol>
                <MDBCol>
                    <MDBBtn onClick={() => routeChange('/explore/events')} color="outline-primary" className="square-xl">
                        <BsCalendarCheck size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            EVENTS
                        </MDBRow>
                    </MDBBtn>
                    <MDBBtn onClick={() => routeChange('/explore/sports')} color="outline-primary" className="square-xl">
                        <FaBasketballBall size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            SPORTS
                        </MDBRow>
                    </MDBBtn>
                    <MDBBtn onClick={() => routeChange('/explore/restaurants')} color="outline-primary" className="square-xl">
                        <FaUtensils size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            RESTAURANTS
                        </MDBRow>
                    </MDBBtn>
                </MDBCol>
                <MDBCol>
                    <MDBBtn onClick={() => routeChange('/explore/school-clubs')} color="outline-primary" className="square-xl">
                        <FaSlideshare size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            SCHOOL CLUBS
                        </MDBRow>
                    </MDBBtn>
                    <MDBBtn onClick={() => routeChange('/explore/learning-opportunities')} color="outline-primary" className="square-xl">
                        <FaChalkboardTeacher size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            LEARNING OPPORTUNITIES
                        </MDBRow>
                    </MDBBtn>
                    <MDBBtn onClick={() => routeChange('/explore/jobs')} color="outline-primary" className="square-xl">
                        <BsBriefcase size={50} />
                        <MDBRow className="justify-content-center align-items-center h-50">
                            JOBS
                        </MDBRow>
                    </MDBBtn>
                </MDBCol>
                <MDBBtn onClick={() => routeChange('/explore/recommendations')} color="outline-primary" className="square-xxl">

                    <FaUserAlt size={50} />
                    RECOMMENDATIONS FOR YOU
                </MDBBtn>
            </MDBCol>
        </MDBContainer>
    )
}

