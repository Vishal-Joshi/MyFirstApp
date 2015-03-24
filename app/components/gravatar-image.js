import Ember from 'ember';
import App from '../app';

App.GravatarImageComponent = Ember.Component.extend({
    size: 200,
    email: '',

    gravatarUrl: function() {
        var email = this.get('email'),
            size = this.get('size');

        return 'http://www.gravatar.com/avatar/' + window.md5(email) + '?s=' + size;
    }.property('email', 'size')

});

export default App.GravatarImageComponent;