import EventFetcher from "../common/EventFetcher";
import Event from "../common/Event";

export default function SearchResults () {
    var url = window.location.href
    const searchTerm = url.split('?').pop().replace('%20', ",");
    console.log(searchTerm)

    let data = EventFetcher(`http://localhost:3000/search/${searchTerm}`)

    return (
        <>  
            <EventType value={data}/>  
        </>
    )
}

function EventType({ value, children, ...props }){
    let eventMap = new Map();

    for(var item = 0; item < value.length; item++) {
        eventMap.set(
            <Event 
            id={value[item].id} 
            title={value[item].title} 
            startDate = {value[item].startDate}
            endDate = {value[item].endDate}
            shortDescription = {value[item].shortDescription}
            longDescription = {value[item].longDescription}
            image={value[item].image}
            saved={false}
            ></Event>
        )     
    }

    if(value.length !== 0){
        return (
            <div style={{margin: "10px"}}>
                <h1>Search Results</h1>
                {eventMap}
            </div>
        ) 
    }else {
        return (
            <div style={{margin: "10px"}}>
                <h1>No Search Results</h1>
            </div>
        )
    } 
}