---
layout: work
title:  "Safari Feed"
categories: work
image: sf-banner.png
---

SafariFeed is a mobile optimized web app to post and read real-time updates about what's happening at the [San Diego Zoo](http://zoo.sandiegozoo.org/). User's posts are updated with their location so other people on the site can see what's happening and where. 

I'm a big fan of the zoo, sometimes going up to once a week. It's a big zoo though, and it can be easy to miss some of the great moments with the animals. I came up with the idea of Safari Feed in order to solve the problem of knowing where all the fun stuff is going on at the zoo as it's happening. Besides real-time updates, I also added a historic heatmap layer. Since animals are pretty regular with their day to day habits, accumulating a lot of data points over time could give you an idea of where to go even if no one is currently posting updates.

I built the app with [AngularJS](https://angularjs.org/) to manage the forms and views, [Firebase](https://www.firebase.com/) for the database, and [OpenStreetMaps](http://www.openstreetmap.org/) with the [Leaflet library](http://leafletjs.com/) to display the map and pins.

[Check out the code on Github](https://github.com/andrewlaskey/safari-feed)

[Check out Safari Feed next time you're at the zoo!](http://safarifeed.com/)

![Safari Feed Map View]({{ site.url}}/img/work/sf-mapview.png)

![Safari Feed List View]({{ site.url}}/img/work/sf-listview.png)