import React, { Component } from "react"

function loader() {
    document.getElementById("cssloader").style.visibility = "hidden"
}


function Preloader() {

    setTimeout(() => {
        loader()
    }, 10000);

    return (
        <div id="cssloader">
            <div class="loader">
                <ul>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                </ul>
                <h4 className="loaderText">Calculating</h4>
            </div>
        </div>

    )

}

export default Preloader;
