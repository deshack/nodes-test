import {Component, Input, Output, imageSocket} from '/dist/js/modules.js';

export default class TestComponent extends Component {
  constructor() {
    super('Test');
  }
  
  builder(node) {
    //const input = new Input('imageIn', 'Image', imageSocket);
    const output = new Output('imageOut', 'Image', imageSocket);
  
    return node//.addInput(input)
      .addOutput(output);
  }
  
  worker(node, inputs, outputs) {
    let image = inputs['imageIn'].length ? inputs['imageIn'][0] : undefined;
    if (typeof image !== 'undefined') {
      image = image.cloneNode(true);
      outputs['imageOut'] = image;
    }
  }
}
