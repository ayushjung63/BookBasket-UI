import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {

    // API Endpoints
    custom_file_upload_url = 'http://localhost:8085/api/upload';


    constructor(props) {
        super(props);
        this.state = {
            image_file: null,
            image_preview: '',
        }
    }

    // Image Preview Handler
    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
        })
    }

    // Image/File Submit Handler
    handleSubmitFile = () => {

        if (this.state.image_file !== null){

            let formData = new FormData();
            formData.append('myfile', this.state.image_file);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile
            
            axios.post(
                this.custom_file_upload_url,
                formData,
                {
                    headers: {
                        "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                        "Content-type": "multipart/form-data",
                    },
                }
            )
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(formData)
                    console.log(err);
                })
        }
    }


    // render from here
    render() {
        return (
            <div>
                {/* image preview */}
               {/* <img src={this.state.image_preview} alt="image preview"/>*/}

                {/* image input field */}
                <input
                    type="file"
                    onChange={(e)=>this.handleImagePreview(e)}
                />
                <label>Upload file</label>
                <input type="submit" onClick={()=>this.handleSubmitFile()} value="submit"/>
            </div>
        );
    }
}

export default ImageUpload;