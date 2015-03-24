import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

App.ApplicationRoute = Ember.Route.extend({

    setupController: function(controller){
        alert('hi');
        controller.set('title',"Krishna");
    }
});

//export App.ApplicationRoute;

App.ApplicationController = Ember.Controller.extend({
    appName: 'my first example'
});

//export App.ApplicationController;
export default App;

