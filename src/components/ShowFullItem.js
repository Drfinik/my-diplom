import React, { Component } from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                    <h3>{this.props.item.title}</h3>
                    <p><CiCalendar /> {this.props.item.date}</p>
                    <p><MdOutlineWatchLater /> {this.props.item.time}</p>
                    <b>{this.props.item.price}$</b>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem