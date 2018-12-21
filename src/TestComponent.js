import {Component, Input, Output, imageSocket} from '/dist/js/modules.js';

export default class TestComponent extends Component {
  constructor() {
    super('Test');
  }
  
  builder(node) {
    const input = new Input('image', 'Image', imageSocket);
    const output = new Output('image', 'Image', imageSocket);
  
    return node.addInput(input).addOutput(output);
  }
  
  worker(node, inputs, outputs) {
    if (typeof inputs['image'] !== 'undefined') {
      outputs['image'] = inputs['image'];
    }
  }
}
