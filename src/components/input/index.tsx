import * as React from 'react';

type InputProps = {
    type?:string;
    value?:any;
    onChange?:Function;
    style:React.CSSProperties;
}

export class Input extends React.Component<InputProps, {}> {
    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" style={this.props.style} />
            </div>
        );
    }
}