import React from "react";

export default function PWD() {
    return (
        <div>
            <div>
                <label style={{ marginRight: "25px" }}>First Name</label>
                <input type="text"></input>
                <label style={{ marginRight: "25px" }}>Last Name</label>
                <input type="text"></input>
            </div>
            <div>
                <label style={{ marginRight: "25px" }}>Email</label>
                <input type="email"></input>
                <label style={{ marginRight: "25px" }}>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <label style={{ marginRight: "25px" }}>hobby</label>
                <input type="text"></input>
                <label style={{ marginRight: "25px" }}>age</label>
                <input type="text"></input>
            </div>
            <div>
                <label style={{ marginRight: "25px" }}>designation</label>
                <input type="text"></input>
                <label style={{ marginRight: "25px" }}>All in one</label>
                <input type="text"></input>
            </div>
        </div>
    );
}
