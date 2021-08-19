import React from 'react';

import AppHeader from '../app-header/appHeader';
import SearchPanel from '../search-panel/searchPanel';
import PostStatusFilter from '../post-status-filter/postStatusFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';
import './app.css';


const App = () => {

    const data = [ //типа данные с server =)
        {label: 'Going to learn Ract', important: true, id: 'qwer'},
        {label: 'This is awesome!', important: false, id: 'tyu'},
        {label: 'I need cup of coffee....', important: false, id: "uio"}
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}
export default App;