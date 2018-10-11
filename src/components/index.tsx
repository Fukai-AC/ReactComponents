import * as React from 'react';
import { Input } from './input';
import { Text } from './text';


export class Root extends React.Component<{}, {}>{
  public state = {
    cmpConf: [
      {
        type: 'input',
        prop: {
          value: 'test',
          type: 'text',
          style: {
            width: '100px',
            height: '30px',
            left: 0,
            top: 0
          }
        }
      },
      {
        type: 'text',
        prop: {
          value: 'test',
          style: {
            width: '100px',
            height: '30px',
            left: 0,
            top: 0
          }
        }
      }
    ]
  }

  styleChange = (key, data) => {
    const { cmpConf } = this.state;
    cmpConf[key].prop.style = Object.assign({}, cmpConf[key].prop.style, data);
    this.setState({cmpConf});
  }

  renderInput(prop, key) {
    return (
      <Input
        type={prop.type}
        value={prop.value}
        key={key}
        style={{
          width: prop.style.width,
          position: 'fixed',
          left: prop.style.left + 'px',
          top: prop.style.top + 'px'
        }}
        styleChange={(data) => { this.styleChange(key, data) }}
      />
    );
  }
  renderText(prop, key) {
    return (
      <Text value={prop.value} />
    );
  }
  render() {
    return (
      <div>
        {
          this.state.cmpConf.map((item, key) => {
            switch (item.type) {
              case 'input':
                return this.renderInput(item.prop, key);
              case 'text':
                return this.renderText(item.prop, key);
              default:
                return;
            }
          })
        }
      </div>
    );
  }
}