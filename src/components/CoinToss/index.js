// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {coinTotal: 0, heads: 0, tails: 0}
  onClickBtn = () => {
    const {heads, tails} = this.state
    let img_input = ''
    let countHeads = heads
    let countTails = tails
    const tailsResult = Math.floor(Math.random() * 2)
    if (tailsResult === 0) {
      img_input = headsUrl
      countHeads += 1
    } else {
      img_input = tailsUrl
      countTails += 1
    }
    this.setState({
      coinTotal: img_input,
      heads: countHeads,
      tails: countTails,
    })
  }
  render() {
    const {coinTotal, heads, tails} = this.state
    const totalCoin = heads + tails
    return (
      <div className="background-co">
        <div className="coinTossGame-co">
          <h1 className="coinTossGame-head">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={coinTotal} className="img" alt="toss result" />
          <button type="button" onClick={this.onClickBtn} className="button">
            Toss Coin
          </button>
          <div className="countBtn-co">
            <p className="total-coins">Total:{totalCoin}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
