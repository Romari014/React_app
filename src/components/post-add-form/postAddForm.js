import React from 'react';

import './postAddForm.css';
import { Button } from 'reactstrap'

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What do You thing right now?"
                className="form-control new-post-label"
            />
            <Button
                type="submit"
                outline 
                color="secondary"
                onClick={() => onAdd('Hello')}>
                Add post</Button>
        </div>
    )
}

export default PostAddForm;