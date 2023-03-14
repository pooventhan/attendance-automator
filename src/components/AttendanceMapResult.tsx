import React from "react";

interface AttendanceMapResultProps {
    result: string[]
}

class AttendanceMapResult extends React.Component<AttendanceMapResultProps, {}> {
    render(){
        return (
            <div className="row">
                <label htmlFor="masterIdList">[Step 3] Copy out attendance info: </label>
                <textarea id="attendanceMapResult" rows={25} cols={10} value={this.props.result}/>
            </div>
        );
    }
}

export default AttendanceMapResult;