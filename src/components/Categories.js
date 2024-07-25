import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categories: [
            {
                key: 'all',
                name: 'Все'
            },
            {
                key: 'Исторические',
                name: 'Исторические'
            },
            {
                key: 'Морские',
                name: 'Морские'
            },
            {
                key: 'Развлечения',
                name: 'Развлечения'
            }
          ]
        }
    }

  render() {
    return (        
      <div className='categories container' id='excursions'>
        <h2>Экскурсии</h2>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories