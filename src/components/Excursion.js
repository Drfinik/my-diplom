import React, { Component } from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

export class Excursion extends Component {
    render() {
        return (
            <div className='excursion'>
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                <h4>{this.props.item.category}</h4>
                <h3>{this.props.item.title}</h3>
                <p><CiCalendar/> {this.props.item.date}</p>
                <p><MdOutlineWatchLater/> {this.props.item.time}</p>
                <b>{this.props.item.price}$</b>
                <div className='add-to-cart'onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default Excursion