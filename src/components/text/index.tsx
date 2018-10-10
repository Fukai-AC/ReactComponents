import * as React from 'react';

type TextProps = {
    value:string;
}

export class Text extends React.Component<TextProps, {}> {
    render() {
        console.log(this.props);
        return (
            <div style={{position: 'fixed'}}>
                <span>{this.props.value}</span>
            </div>
        );
    }
}