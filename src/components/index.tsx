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
  renderInput(prop) {
    return (
      <Input type={prop.type} value={prop.value} style={{width: prop.style}} />
    );
  }
  renderText(prop) {
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
                return this.renderInput(item.prop);
              case 'text':
                return this.renderText(item.prop);
              default:
                return;
            }
          })
        }
      </div>
    );
  }
}