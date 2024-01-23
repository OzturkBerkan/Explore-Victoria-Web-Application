import React, {Component} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import SaveDelete from './SaveDelete'


function LongDescription({value, children, ...props }){
  const [showFirstElement, setShowFirstElement] = useState(false);
  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);

<div style={{border: "1px solid black", margin: "10px"}}></div>

  // only show the collapsible button if there is a long description
  if (value) {
    return (
      <>
      <div >
        <Button onClick={toggleFirstElement}>Show More Details</Button>
        <MDBCollapse show={showFirstElement} className='mt-3'>
          <MDBCardText>
              {value}
          </MDBCardText>
        </MDBCollapse>
        </div>
      </>
    )
  }
}

class Styling {
  fontsize;
  fontstyle;
  fontweight;
  constructor (size, style, weight ) {
      this.fontsize = size;
      this.fontstyle = style;
      this.fontweight = weight;
  }
}
var eventTitleStyling = new Styling(40, "italic", "bold");



class Event extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {}
  }


  render() {
    return (
      <MDBCard style={{margin: 10}}>
        <MDBCardBody>
            <MDBCardTitle style={{fontSize:eventTitleStyling.fontsize, fontStyle:eventTitleStyling.fontstyle, fontWeight:eventTitleStyling.fontweight}  }>
                {this.props.title}
            </MDBCardTitle>
            <MDBCardText>
                {this.props.startDate}
            </MDBCardText>
            <MDBCardText>
                {this.props.endDate}
            </MDBCardText>
            <MDBCardText>
                {this.props.shortDescription}
            </MDBCardText>
            <LongDescription value={this.props.longDescription}/>
            <MDBCardText>
                {this.props.image}
            </MDBCardText>
            <div > 
            <SaveDelete value={[this.props.id, this.props.saved]} />
            </div>
        </MDBCardBody>
    </MDBCard>
    )
  }   
}

export default Event;