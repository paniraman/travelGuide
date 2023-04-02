import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    travelList: [],
  }

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'

    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.packages.map(product => ({
        id: product.id,
        name: product.name,
        imageUrl: product.image_url,
        description: product.description,
      }))
      this.setState({
        travelList: updatedData,
      })
    }
  }

  render() {
    const {travelList} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Travel Guide</h1>
        <ul className="list-container">
          {travelList.map(obj => (
            <li key={obj.id} className="item-container">
              <img src={obj.imageUrl} alt={obj.name} className="img-style" />
              <h1 className="name-heading">{obj.name}</h1>
              <p className="para">{obj.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
