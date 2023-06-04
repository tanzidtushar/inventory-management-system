import React from "react";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log("Mounted!");
    }

    componentDidUpdate() {
        console.log("updated!");
    }
    componentWillUnmount() {
        console.log("cleanup!");
    }
    imclicked() {
        this.setState({ count: this.state.count + 1 });
        console.log("clicked!")
        this.props.destroy(false);
    }
    render() {
        return (
            <div>
                <p>clicked: {this.state.count}</p>
                <button className="btn btn-dark" onClick={() =>
                    this.imclicked()
                }>
                    Click Me!
                </button>
            </div>
        )
    }
}
export default Test;
