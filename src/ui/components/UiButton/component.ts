import Component, { tracked } from '@glimmer/component';

export default class UiButton extends Component {
  @tracked public clickCount = 0;

  @tracked('clickCount')
  get hasClicks() {
    return this.clickCount > 0;
  }

  public click() {
    this.clickCount = this.clickCount + 1;
  }
}
