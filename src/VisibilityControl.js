import React, { Component } from "react";

export class VisibilityControl extends Component {
    render() {
        return (
            <div>
                {this.props.description}
                <input
                    type="checkbox"
                    checked={this.props.isChecked}
                    onClick={() => {
                        this.props.callback(!this.props.isChecked);
                    }}
                ></input>
            </div>
        );
    }
}
