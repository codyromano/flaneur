//const shortid = require('shortid');

export default function mapActivitiesAssignId() {
  return (activity) => {
    //activity.id = shortid.generate();
    activity.id = activity.about
      .toLowerCase()
      .replace(/ /g,'-')
      .slice(0, 30);

    return activity;
  };
}