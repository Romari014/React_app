import React, { Component } from 'react';

import './postAddForm.css';
import { Button } from 'reactstrap'


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value 
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: '' //очищаем поле ввода, без value не будет очищать
        })
    }

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What do You thing right now?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}//контролируемый елемент
                />
                <Button
                    type="submit"
                    outline
                    color="secondary"
                    >
                    Add post</Button>
            </form>
        )
    }
}

