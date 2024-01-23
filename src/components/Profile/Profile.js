import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default function Profile() {
    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/Profile/EditProfile`; 
        navigate(path);
    }
    const savedEventPage = () => {
        let path = `/SavedEvents/SavedEvents`; 
        navigate(path);
    }
    const profile = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : [];
    const interests = profile.interests ? profile.interests: [];
    const home_country = profile.home_country ? profile.home_country.label: '';
    const degree = profile.degree ? profile.degree.label: '';


    return (
        <div className="vh-100" style={{backgroundColor: '#eee'}}>
            <MDBContainer className="container py-3 h-100">
                <MDBTypography className="mb-4 pb-2" tag="h1">My Profile</MDBTypography>
                <MDBRow className="justify-content-center align-items-left h-75">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="text-center">
                                <div className="mt-3 mb-4 pb-2">
                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                    className="rounded-circle" fluid style={{ width: '150px' }} />
                                </div>
                                <MDBTypography tag="h4" className="pb-3">User Name</MDBTypography>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBCardText className="text-end mb-4">
                                        Home Country
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBCardText className="text-start text-muted mb-4">
                                        {home_country}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBCardText className="text-end mb-4">
                                        Degree
                                        </MDBCardText>
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBCardText className="text-start text-muted mb-4">
                                        {degree}
                                        </MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <MDBBtn onClick={routeChange} rounded size="lg">
                                Edit Profile
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" xl="7" style={{height: '50px'}}>
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="text-center">
                                <MDBTypography tag="h4" className="mb-4">Your Interests</MDBTypography>
                                <div className="mb-4 pb-2">
                                    {interests.map(interest => <MDBBtn color={'primary'} style={{ margin: 7}}>{interest}</MDBBtn>)}
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>    
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

