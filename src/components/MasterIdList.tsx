import React from "react";

interface MasterIdListProps {
    getList(list: string[]): void
}

class MasterIdList extends React.Component<MasterIdListProps, {}> {
    constructor(props: any) {
        super(props);
    }

    handleOnChange = (event: any) => {
        const value = event.target.value as string;
        const list = value.trim().split("\n");
        this.props.getList(list);
    }

    render = () => {
        return (
            <div className="row">
                <label htmlFor="masterIdList">[Step 1] Copy and paste the list of Ids: </label>
                <textarea id="masterIdList" rows={25} cols={10} onChange={this.handleOnChange}/>
            </div>
        );
    }
}

export default MasterIdList;