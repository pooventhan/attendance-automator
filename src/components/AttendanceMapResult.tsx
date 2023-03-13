import React from "react";

class AttendanceMapResult extends React.Component {
    render(){
        return (
            <div className="row">
                <label htmlFor="masterIdList">[Step 3] Copy out attendance info: </label>
                <textarea id="attendanceMapResult" rows={25} cols={10}/>
            </div>
        );
    }
}

export default AttendanceMapResult;