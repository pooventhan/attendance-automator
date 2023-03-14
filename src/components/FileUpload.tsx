import React from "react";
import { read, utils } from 'xlsx';

interface FileUploadProps {
    masterList: string[],
    resultCallback(list: string[]): void
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

    async performWork(){
        const file = this.state.file;
        /* get raw data */
        const data = await file.arrayBuffer();
        /* data is an ArrayBuffer */
        const workbook = read(data);
        /* do something with the workbook here */
        console.log(utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]));
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