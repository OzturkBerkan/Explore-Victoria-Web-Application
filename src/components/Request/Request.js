export default function Request() {
    return (
    <div className="container-for-request-form" style={{height:'100vh'}}>
        <form className="request-form">
            <h2 className="margin-bottom">Create Your Own Event</h2>
            <input className="form-styling" type={"text"} id={"type"} placeholder={"Event Type"} required></input>
            <input className="form-styling" type={"text"} id={"name"} placeholder={"Event Name"} required></input>
            <input className="form-styling" type={"text"} id={"start"} placeholder={"Event Start Date"} required></input>
            <input className="form-styling" type={"text"} id={"end"} placeholder={"Event End Date"} required></input>
            <input className="form-styling" type={"text"} id={"shortdes"} placeholder={"Event Short Description"} required></input>
            <input className="form-styling" type={"text"} id={"longdes"} placeholder={"Event Long Description"} required></input>
            <button className="form-submit" type="submit">Submit</button>
        </form>
    </div>
    );
}
