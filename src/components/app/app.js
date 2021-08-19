import React, { Component } from 'react';

import AppHeader from '../app-header/appHeader';
import SearchPanel from '../search-panel/searchPanel';
import PostStatusFilter from '../post-status-filter/postStatusFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';
import './app.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ //типа данные с server =)
                { label: 'Going to learn Ract', important: true, id: 1 },
                { label: 'This is awesome!', important: false, id: 2 },
                { label: 'I need cup of coffee....', important: false, id: 3 }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);//Узнаем на каком месте стоит елемент

            const before = data.slice(0, index);//Копирует часть масива до нужного елемента
            const after = data.slice(index + 1);//Копирует часть масива после нужного елемента

            const newArr = [...before, ...after]//Spread operator объеденяем 2 части нового массива

            return {
                data: newArr
            }
            // data.splice(index, 1);//Изменяем state напрямую чего делать нельзя
            // return {
            //     data: data
            // }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            import: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}
