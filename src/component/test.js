import Mreact from '../utils'
const { Component } = Mreact

export default class SmallHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aaa: 1
        }
        // let aaa = 1
    }
    compomentDidMount() {
        this.setState({
            aaa: this.state.aaa++
        })
    }
    render() {
        return (
            <h5>{this.state.aaa} +++ 这是内部component</h5>
        )
    }
}
