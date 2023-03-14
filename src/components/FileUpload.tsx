import React from "react";
import { read, utils } from 'xlsx';

interface FileUploadProps {
    masterList: string[],
    resultCallback(result: string[]): void
}

interface Attendance {
    Email: string
}

class FileUpload extends React.Component<FileUploadProps, {file: File}> {

    constructor(props: any) {
        super(props);

        // Set initial state.
        this.state = { file: new File([], 'empty.txt') };

        // Binding this keyword.
        this.handleFileInputChange = this.handleFileInputChange.bind(this)
        this.performWork = this.performWork.bind(this)
    }

    findDuplicates(arr: string[]) {
        return arr.filter((currentValue, currentIndex) =>
        arr.indexOf(currentValue) !== currentIndex);
    }

    async performWork(){
        const file = this.state.file;
        const data = await file.arrayBuffer();
        const workbook = read(data);
        const workbookJson = utils.sheet_to_json<Attendance>(workbook.Sheets[workbook.SheetNames[0]]);
        console.log(`Workbook size: (${workbookJson.length})`);

        if(workbookJson.length === 0){
            this.props.resultCallback([`Please select a workbook to continue or ensure it contains valid records.`]);
            return;
        }

        const duplicated = this.findDuplicates(this.props.masterList);
        if(duplicated.length !== 0){
            this.props.resultCallback([`There are some duplicated items in master list: ${duplicated.toString()}`]);
            return;
        }

        if(this.props.masterList.length < workbookJson.length){
            this.props.resultCallback([`Master list record count (${this.props.masterList.length}) is lesser than attendance record (${workbookJson.length}) !`]);
            return;
        }
        
        const mapped = this.props.masterList.map(id => {
            const record = workbookJson.find(attendance => {
                const strippedEmail = attendance.Email.substring(0, attendance.Email.lastIndexOf('@'));
                return strippedEmail.includes(id);
            });

            return record ? "1" : "0";
        }).join('\n')

        this.props.resultCallback([mapped]);
        return;
    }

    handleFileInputChange(event: any) {
        // get first file
        this.setState({ file: event.target.files[0] });   
    }

    render(){
        return (
            <div className="row">
                <label htmlFor="formFile" className="form-label">[Step 2] Select attendance file:</label>
                <input className="form-control" type="file" id="formFile" accept=".xlsx" onChange={this.handleFileInputChange} ></input>
                <br/>
                <button type="button" className="btn btn-primary mt-2" onClick={this.performWork} >Map Attendance</button>
            </div>
        );
    }
}

export default FileUpload;