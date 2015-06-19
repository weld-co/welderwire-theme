Template.notifications_menu.helpers({
  hasNotifications: function () {
    return !!Herald.collection.find({userId: Meteor.userId(), read: false}).count();
  },
  notifications: function(){
    return Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).fetch();
  },
  notificationsCountWeld: function(){
    var notifications = Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).fetch();
    if (notifications.length==0) {
      return 'No Notifications';
    } else if (notifications.length==1) {
      return '1 Notification';
    } else {
      return notifications.length + ' Notifications';
    }
  }
});
