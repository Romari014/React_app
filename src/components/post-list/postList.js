import React from 'react';

import PostListItem from '../post-list-item/postListItem';
import { ListGroup} from 'reactstrap';
import './postList.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className = "list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)} />  
                    {/*  label={item.label} ...item - Spread operator ES8
                     important={item.important}  */}
            </li>
        )
    });

    return (
        <ListGroup className="app-list ">
            {elements}
        </ListGroup>
    )
}

export default PostList;