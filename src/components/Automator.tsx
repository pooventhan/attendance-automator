import React from "react";
import AttendanceMapResult from "./AttendanceMapResult";
import FileUpload from "./FileUpload";
import MasterIdList from "./MasterIdList";

class Automator extends React.Component {
    render(){
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm">
                        <MasterIdList/>
                    </div>
                    <div className="col-sm mx-3">
                        <FileUpload/>
                    </div>
                    <div className="col-sm">
                        <AttendanceMapResult/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Automator;