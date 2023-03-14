import React from "react";
import AttendanceMapResult from "./AttendanceMapResult";
import FileUpload from "./FileUpload";
import MasterIdList from "./MasterIdList";

interface AutomatorState {
    masterIdList: string[],
    mapResult: string[]
}

class Automator extends React.Component<{}, AutomatorState > {
    constructor(props: any) {
        super(props);

        // Set initial state.
        this.state = { masterIdList:[], mapResult:[] };
    }

    getMasterIdList = (list: string[]) => {
        this.setState({ masterIdList: list, mapResult: this.state.mapResult })
    }

    getResult = (result: string[]) => {
        this.setState({ masterIdList: this.state.masterIdList, mapResult: result })
    }

    render(){
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm">
                        <MasterIdList getList={ this.getMasterIdList }/>
                    </div>
                    <div className="col-sm mx-3">
                        <FileUpload masterList={this.state.masterIdList} resultCallback={ this.getResult }/>
                    </div>
                    <div className="col-sm">
                        <AttendanceMapResult result={this.state.mapResult}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Automator;