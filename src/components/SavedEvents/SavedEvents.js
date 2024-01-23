import React from 'react';
import Event from '../common/Event'
import EventFetcher from '../common/EventFetcher'

const containerStyle = {
    display: "flex",
    flexFlow: "row wrap",
}

const childStyle = {
    width: "400px",
    margin: " 10px auto",
}

export default function SavedEvents() {
    let saved = []
    var savedEvents = localStorage.getItem('savedEventIds')
    var e = JSON.parse(savedEvents);
    let data = null

    for(let i = 0; i < e.IDs.length; i++){
        data = EventFetcher("http://localhost:3000/resources/id/"+e.IDs[i][0])
        // data = EventFetcher("http://localhost:3000/resources/"+e.IDs[i][1])
        console.log(data)
        saved.push(data)
    }

    if(saved.length === 0){
        return (
            <h1>You currently have no Saved Events</h1>
        )
    }
    return (
        <>
            <h1>Saved Events</h1>
            <div style={containerStyle}>
                <div style={childStyle}>
                    {saved.map(item => <Event
                        id={item.id} 
                        title={item.title} 
                        startDate = {item.startdate}
                        endDate = {item.endDate}
                        shortDescription = {item.shortDescription}
                        longDescription = {item.longDescription}
                        image={item.image}
                        saved={true}
                    ></Event>)}
                </div>
            </div>
        </>
    )

    return (
        <>  
            <SavedEvent value={data} />
        </>
    )   
}

function SavedEvent({ value, name, children, ...props }){
    let saved = []
    var savedEvents = localStorage.getItem('savedEventIds')
    var e = JSON.parse(savedEvents);
    for(let i = 0; i < e.IDs.length; i++){
        for(let j = 0; j < value.length; j++){
            if(e.IDs[i] === value[j].id){
                saved.push(value[j]) 
            }
        }
    }
    if(saved.length === 0){
        return (
            <h1>You currently have no Saved Events</h1>
        )
    }
    return (
        <>
            <h1>Saved Events</h1>
            <div style={containerStyle}>
                <div style={childStyle}>
                    {saved.map(item => <Event
                        type={item.type}
                        id={item.id} 
                        title={item.title} 
                        startDate = {item.startdate}
                        endDate = {item.endDate}
                        shortDescription = {item.shortDescription}
                        longDescription = {item.longDescription}
                        image={item.image}
                    ></Event>)}
                </div>
            </div>
        </>
    )
}