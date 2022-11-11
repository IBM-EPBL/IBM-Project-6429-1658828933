import React from "react";

const Dashboard = (props) => {
    const {  
        handleLogout
    } = props;
    return (
        <div>
            <iframe
                title="Node-RED Dashboard"
                style={{
                    width: "100%",
                    height: "100%",
                    overflowY: "hidden",
                    top: 0,
                    left: 0,
                    position: "absolute",
                }}
                src="https://node-red-ejfms-2022-11-09.au-syd.mybluemix.net/ui/"                
            ></iframe>
            <div>
                <button className="button3" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;