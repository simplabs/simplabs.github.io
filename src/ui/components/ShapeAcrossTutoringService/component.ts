import Component from '@glimmer/component';

export default class ShapeAcrossTutoringService extends Component {
  constructor(options) {
    super(options);

    this.key = this.args.key || 'acrossTutoringService';
  }
}
