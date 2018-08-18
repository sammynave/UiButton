import { ComponentManager, setPropertyDidChange } from '@glimmer/component';
import initializeCustomElements from '@glimmer/web-component';
import App from './main';

const app = new App();
const containerElement = document.getElementById('ui-button');

setPropertyDidChange(() => {
  app.scheduleRerender();
});

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager);
  }
});

app.renderComponent('UiButton', containerElement, null);

app.boot();
initializeCustomElements(app, { 'ui-button': 'UiButton' });
