import React, { useState } from "react";
import "./countrySearch.css";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Home/Widgets/Widgets";

const PostsSearch = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        if (selectedValue === "People") {
            window.location.href = "/PeopleSearch";
        } else if (selectedValue === "Countries") {
            window.location.href = "/CountrySearch";
        } else if (selectedValue === "Posts") {
            window.location.href = "/PostSearch";
        }
    };

    return (
        <div className="searchBar">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <h2>Country search</h2>
                <div className="search-form">
                    <input type="text" placeholder="search here.." />
                    <select className="Select" style={{ fontSize: '20px' }} onChange={handleChange} value={selectedOption}>
                        <option value=""> Search about </option>
                        <option value="People">People</option>
                        <option value="Countries">Countries</option>
                        <option value="Posts">Posts</option>
                    </select>
                </div>
                <div className="border">
                    <div className="people">
                        <img className="peopleImg2" src="/images/medieval-276019_1280.jpg" alt="costume image" />
                        <span className="peopleName2">Friend name <br /><span className="handel2">@Handel</span> </span>
                    </div>
                    <div className="countryName2">
                        <label>Country name</label>
                    </div>
                    <div className="title2">
                        <label>Title</label>
                    </div>
                    <div className="gragh2">
                        <p>
                            Paris, often dubbed the "City of Light," exudes an unparalleled charm that captivates
                            millions of visitors every year. Nestled along the banks of the Seine
                            River in northern France, Paris stands as a timeless symbol of romance, culture, and sophistication.
                            kvnonvsp kfvnfklvndl kvndlkvndjkv ndklvn dvdflkvndk lvndklvmdf
                            kfnvklfdnvldf vfnvknv s lkvn vfkvnov
                            vklfnviovnv vdnvpldf vfkvndf vvdfonvdfpv pom vidfjvm vdfivm vidfifjvm djvmdf vdfovdf vfiovmdfv
                        </p>
                    </div>
                    <div className="img">
                        <img className="countryImg2" src="/images/paris.jpg" alt="country image" />
                    </div>
                </div>



                <div className="border">
                    <div className="people">
                        <img className="peopleImg2" src="/images/medieval-276019_1280.jpg" alt="costume image" />
                        <span className="peopleName2">Friend name <br /><span className="handel2">@Handel</span> </span>
                    </div>
                    <div className="countryName2">
                        <label>Country name</label>
                    </div>
                    <div className="title2">
                        <label>Title</label>
                    </div>
                    <div className="gragh2">
                        <p>
                            Paris, often dubbed the "City of Light," exudes an unparalleled charm that captivates
                            millions of visitors every year. Nestled along the banks of the Seine
                            River in northern France, Paris stands as a timeless symbol of romance, culture, and sophistication.
                            kvnonvsp kfvnfklvndl kvndlkvndjkv ndklvn dvdflkvndk lvndklvmdf
                            kfnvklfdnvldf vfnvknv s lkvn vfkvnov
                            vklfnviovnv vdnvpldf vfkvndf vvdfonvdfpv pom vidfjvm vdfivm vidfifjvm djvmdf vdfovdf vfiovmdfv
                        </p>
                    </div>
                    <div className="img">
                        <img className="countryImg2" src="/images/paris.jpg" alt="country image" />
                    </div>
                </div>
            </div>
            <Widgets/>
        </div>
    );
};

export default PostsSearch;
