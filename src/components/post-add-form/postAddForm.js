import React from 'react';

import './postAddForm.css';
import { Button } from 'reactstrap'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What do You thing right now?"
                className="form-control new-post-label"
            />
            <Button
                type="submit"
                outline 
                color="secondary">
                Add post</Button>
        </form>
    )
}

export default PostAddForm;