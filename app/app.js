import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'meta-tag-test/config/environment';
import taginsert from 'taginsert';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  constructor() {
    super(...arguments);

    setTimeout(() => {
      const item = {
        title: 'Meta Tags Test App',
        description: 'This is to test meta tags being added in dynamically',
        url: 'http://localhost:4200',
        thumbnailUrl:
          'https://www.arcgis.com/sharing/rest/content/items/4d63f7de557c4a69bab44c376c0d3565/info/thumbnail/thumbnail1564420707532.jpeg',
      };

      taginsert({
        item,
        mapping: {
          w3c: {
            image_src: 'thumbnailUrl',
          },
          twitter: {
            image: 'thumbnailUrl',
          },
          og: {
            image: 'thumbnailUrl',
          },
        },
      });
    }, 0);
  }
}

loadInitializers(App, config.modulePrefix);
