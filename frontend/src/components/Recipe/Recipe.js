import React, { Component } from 'react';

class Recipe extends Component{
    render() {
        return (
            <ul>
                {this.state.data.map(contact => {
                    return (
                        <li key={contact.id}>
                            {contact.dish_name}   {contact.category}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Recipe;