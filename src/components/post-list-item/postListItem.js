import React, { Component } from 'react';


import './postListItem.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false, //default false для постов
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {//смена false у постов на противоположное important: !important
        this.setState(({important}) => ({
            important: !important //true
        }))
    }
    onLike() {
        this.setState(({like}) => ({
            like: !like 
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important"//нужен пробел, иначе ошибка
        }

        if (like) {
            classNames += " like"//нужен пробел, иначе ошибка
        }

        return (
            <div className={classNames}>
                <span onDoubleClick={this.onLike} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                            className="btn-star btn-sm"
                            onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
