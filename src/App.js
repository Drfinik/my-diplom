import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Excursions from "./components/Excursions";
import Contacts from "./components/Contacts";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currehtItems: [],
      items: [
        {
          id: 1,
          title: 'VIP Луксор с Долиной Царей',
          img: '1.jpg',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Исторические',
          price: '1500'
        },
        {
          id: 2,
          title: 'Абу Дабаб — пляж гигантских черепах',
          img: '2.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Морские',
          price: '1500'
        },
        {
          id: 3,
          title: 'Асуан + Абу - Симбел',
          img: '3.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Исторические',
          price: '1500'
        },
        {
          id: 4,
          title: 'Батискаф + снорклинг в Хургаде',
          img: '4.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Исторические',
          price: '1500'
        },
        {
          id: 5,
          title: 'Бухта дельфинов',
          img: '5.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Морские',
          price: '1500'
        },
        {
          id: 6,
          title: 'Гранд аквариум и зоопарк в Хургаде',
          img: '6.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Развлечения',
          price: '1500'
        },
        {
          id: 7,
          title: 'Дайв - Сафари',
          img: '7.jpeg',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Морские',
          price: '1500'
        },
        {
          id: 8,
          title: 'Дельфинарий',
          img: '8.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Развлечения',
          price: '1500'
        },
        {
          id: 9,
          title: 'Джип - сафари на LAND CRUISER',
          img: '9.webp',
          date: 'ежедневно',
          time: '18 часов',
          category: 'Развлечения',
          price: '1500'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currehtItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <About />
        <Categories chooseCategory={this.chooseCategory} />
        <Excursions onShowItem={this.onShowItem} items={this.state.currehtItems} onAdd={this.addToOrder} />
        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Contacts />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currehtItems: this.state.items})
      return
    }
    this.setState({
      currehtItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}


export default App;
