import React, { Component } from 'react'
import Excursion from './Excursion'


export class Excursions extends Component {
    render() {
        return (
            <main className='container' >
                {this.props.items.map(el => (
                    <Excursion onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
                ))}
            </main>
        )
    }
}

export default Excursions


