import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
  	return Bins.find({ ownerId: this.userId });

  });


  //shared bins
  Meteor.publish('sharedBins', function() {
  	const user = Meteor.users.findOne(this.userId);

  	if (!user) { return; } //when user isn't logged in

  	const email = user.emails[0].address;

  	return Bins.find({
  		shardWith: { $elemMatch: { $eq: email } }
  	});
  });
});
