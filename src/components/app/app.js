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
                { label: 'Going to learn Ract', important: false, like: false, id: 1 },
                { label: 'This is awesome!', important: false, like: false, id: 2 },
                { label: 'I need cup of coffee....', important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this)


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
        this.setState(({ data }) => {
            if (newItem.label !== '' && newItem.label.trim()) {//проверя на пустые строки
                const newArr = [...data, newItem]
                return {
                    data: newArr
                }
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, important: !old.important };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }


    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });

    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({ term })
    }

    onFilterSelect(filter) {
        this.setState({ filter })
    }


    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter(item => item.like).length;
        const allPost = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPost={allPost}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}
