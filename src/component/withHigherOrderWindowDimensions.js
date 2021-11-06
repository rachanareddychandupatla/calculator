import React, { Component } from "react";

export default function withHigherOrderWindowDimensions(WrappedComponent) {
    return class extends Component {
        state = { width: 0, height: 0 };

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener("resize", this.updateWindowDimensions);
        }

        componentWillUnmount() {
            window.removeEventListener("resize", this.updateWindowDimensions);
        }

        updateWindowDimensions = () => {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        };

        render() {
            console.log('check the view port',this.state.width,this.state.height)
            return (
                <WrappedComponent
                    {...this.props}
                    windowWidth={this.state.width}
                    windowHeight={this.state.height}
                    isMobileSized={this.state.width < 500 } 
                />
            );
        }
    };
}
