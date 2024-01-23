import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    const search = (e) => {
        e.preventDefault();
    };

    const onClick = () => {
        navigate("/Explore/search-results?" + input);
    }




    return (
        <form onSubmit={search}>
            <label htmlFor="header-search">
                <span className="visually-hidden">Search</span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                onChange={(e) => { 
                    setInput(e.target.value);
                }} 
            />
            <button type="submit" onClick={onClick}>Search</button>
        </form>
    );
};