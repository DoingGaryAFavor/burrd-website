if (Meteor.isClient) {
  Router.configure({
    layoutTemplate: 'layout'  //can be any template name
  });

  Router.route('/', function() {
    this.render('Home');
  });

  Router.route('/about', function() {
    this.render('About');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
