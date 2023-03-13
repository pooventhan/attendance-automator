import React from "react";

class MasterIdList extends React.Component {
    render(){
        return (
            <div className="row">
                <label htmlFor="masterIdList">[Step 1] Copy and paste the list of Ids: </label>
                <textarea id="masterIdList" rows={25} cols={10}/>
            </div>
        );
    }
}

export default MasterIdList;