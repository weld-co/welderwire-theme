// TODO: switch over to Tom's migration package.

// database migrations
// http://stackoverflow.com/questions/10365496/meteor-how-to-perform-database-migrations
WeldMigrations = new Meteor.Collection('WeldMigrations');

Meteor.startup(function () {
  allMigrations = Object.keys(weldMigrationsList);
  _.each(allMigrations, function(migrationName){
    runMigration(migrationName);
  });
});

// wrapper function for all migrations
var runMigration = function (migrationName) {
  var migration = Migrations.findOne({name: migrationName});

  if (migration){
    if(typeof migration.finishedAt === 'undefined'){
      // if migration exists but hasn't finished, remove it and start fresh
      console.log('!!! Found incomplete migration "'+migrationName+'", removing and running again.');
      Migrations.remove({name: migrationName});
    }else{
      // do nothing
      // console.log('Migration "'+migrationName+'" already exists, doing nothing.')
      return;
    }
  }

  console.log("//----------------------------------------------------------------------//");
  console.log("//------------//    Starting "+migrationName+" Migration    //-----------//");
  console.log("//----------------------------------------------------------------------//");
  Migrations.insert({name: migrationName, startedAt: new Date(), completed: false});

  // execute migration function
  var itemsAffected = weldMigrationsList[migrationName]() || 0;

  Migrations.update({name: migrationName}, {$set: {finishedAt: new Date(), completed: true, itemsAffected: itemsAffected}});
  console.log("//----------------------------------------------------------------------//");
  console.log("//------------//     Ending "+migrationName+" Migration     //-----------//");
  console.log("//----------------------------------------------------------------------//");
};

var weldMigrationsList = {
  moveWeldProfileProperties: function () {
    var i = 0;
    Meteor.users.find().forEach(function (user) {
      i++;
      console.log("User: "+user._id);
      Meteor.users.update(user._id, {
        $rename: {
          'profile.location': 'telescope.location',
          'profile.membership': 'telescope.membership',
          'profile.site': 'telescope.site',
          'profile.twitter': 'telescope.twitter',
          'profile.instagram': 'telescope.instagram',
          'profile.phone': 'telescope.phone',
          'profile.birthday': 'telescope.birthday',
          'profile.skill1': 'telescope.skill1',
          'profile.skill2': 'telescope.skill2',
          'profile.skill3': 'telescope.skill3',
          'profile.instagramAccessToken': 'telescope.instagramAccessToken',
          'profile.instagramUserID': 'telescope.instagramUserID'
        }
      }, {multi: true, validate: false});
      console.log("---------------------");
    });
    return i;
  }
};