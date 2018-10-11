import * as React from 'react';

type InputProps = {
    type?:string;
    key:number;
    value?:any;
    onChange?:Function;
    style:React.CSSProperties;
    styleChange:Function;
}

export class Input extends React.Component<InputProps, {}> {
  public mousePress:boolean = false;
  public mousePosition = {
    x: 0, 
    y: 0,
  };

  dragOver = (ev) => {
    ev.preventDefault();
  }

  componentDidMount() {
    document.addEventListener('dragover', this.dragOver, false);
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', this.dragOver);
  }

  mouseDragStart = (ev) => {
    ev.target.style.opacity = 0.5;
    this.mousePosition.x = ev.clientX;
    this.mousePosition.y = ev.clientY;
  }
  mouseDrag = (ev) => {
    console.log(ev.clientX);
    this.props.styleChange({
      left: ev.target.offsetLeft + (ev.clientX - this.mousePosition.x),
      top: ev.target.offsetTop + (ev.clientY - this.mousePosition.y),
    })
    this.mousePosition.x = ev.clientX;
    this.mousePosition.y = ev.clientY;
  }
  mouseDragEnd = (ev) => {
    ev.target.style.opacity = 1;
  }

  render() {
      return (
          <div
            draggable={true}
            onDragStart={this.mouseDragStart}
            onDrag={this.mouseDrag}
            onDragEnd={this.mouseDragEnd}
            style={this.props.style}
          >
              <input type="text"/>
          </div>
      );
  }
}