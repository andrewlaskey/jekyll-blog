---
layout: post
title:  "Building Safari Feed"
date:   2014-03-31 14:04:00
categories: blog
excerpt: "A run down of some of the tools and libraries that went in to building SafariFeed."
---

This past fall I put together a new side project, [SafariFeed](http://www.safarifeed.com). I'm a huge fan of the San Diego Zoo, and I thought it would be great if there was some kind of app where people could post updates of what was happening there and everyone else with the app would see it. Rather than just let that idea linger I decided to put something together, and now a couple months later, it's up and running and not too bad for a first version.

I thought I would do a run down of some of the different tools and tech I used to put it together.

### Firebase

[Firebase](https://www.firebase.com) is a realtime database that removes all the hassle of building a backend for your web application. If you make an update to a collection, that change is reflected across all browsers accessing the data immediately without a refresh. Firebase is what made SafariFeed possible, and after reading their documentation one afternoon, I knew SafariFeed was an idea I should start building right away rather than putting it off.

### Leaflet.js

Google Maps is great and has been the backbone for a lot of cool web apps, but it has limitations. OpenStreetMaps is an open source project that is essentially the Wikipedia of geographical data. Their FAQ explains some of the issues with using Google Maps:

> If your project's mapping needs can be served simply by using the Google Maps API, fine. That's not true of every project, though. We need a free dataset which will enable programmers, social activists, cartographers and the like to fulfill their plans without being limited either by Google's API or by their <a href="http://www.google.com/intl/en_ALL/help/terms_local.html" rel="nofollow">Terms of Service</a>. The data used in <a href="http://local.google.com/" rel="nofollow">Google Maps</a> is either owned by Google itself, or sourced from <a href="http://www.navteq.com/" rel="nofollow">NAVTEQ</a> and <a href="http://www.teleatlas.com/index.htm" rel="nofollow">Tele Atlas</a>, two big mapping companies. They, in turn, have obtained some of this data from national mapping agencies (such as the <a href="http://www.ordsvy.gov.uk/" rel="nofollow">Ordnance Survey</a>). Since they've made significant financial investments to gather this data, these organisations are understandably protective of their copyright.
> 
> If you collect data from Google Maps in this way, you are creating a "derived work". Any such data retains the copyright conditions of the original. In practice, this means your data is subject to the licensing fees, and contractual restrictions, of these map providers.

Luckily, someone made [Leaflet.js](http://leafletjs.com/" target="_blank">Leaflet.js), an open-source library for working with maps. It has wide browser support, works on mobile devices, and makes working with map layers, markers, and vectors extremely easy. If you are doing any kind of mapping for your web project, there is no reason not to be using open source alternatives to Google Maps like OpenStreetMaps and Leaflet.

Also if you find OpenStreetMaps data to be limiting, fix it! When I started SafariFeed, the data for the San Diego Zoo was very incomplete, so in a couple hours I was able to log in to OpenStreetMaps and add roads, trails, and buildings and fix up some of the old mistakes. My changes went live in minutes, and now the whole world has access to better map data on the San Diego Zoo.

### Leaflet Plugins

Another advantage of Leaflet is, just like Wordpress, that there is a large community of developers working on plugins to fill in missing features.

#### [leaflet-providers](https://github.com/leaflet-extras/leaflet-providers)

If you don't want to use OpenStreetMaps data, or you don't want to use their default map layer, this plugin makes it easy to switch it out for another provider.

#### [heatcanvas](https://github.com/sunng87/heatcanvas)

I knew from the beginning that I wanted to be able to show a heatmap of zoo activity on SafariFeed. While it was a little tricky to get up and running, eventually I was able to figure it out. Take a look at the author's [Leaflet example](http://sunng.info/heatcanvas/leaflet.html) or look at SafariFeed on [Github](https://github.com/andrewlaskey/safari-feed) to see how to implement it.

####  [Leaflet.Awesome-Markers](https://github.com/lvoogdt/Leaflet.awesome-markers)

This plugin was built for showing Font Awesome icon fonts, but you can substitute that any font icons you want to use. For SafariFeed this was indispensable since I had to show if a comment was positive or negative, but in general I think adding an icon to the markers is a nice informational detail for any mapping app.

### CSS/SASS

If you're not using [Sass](http://sass-lang.com/), [Less](http://lesscss.org/), or some other css preprocessor you should be. It might be the biggest one tool to increase the speed and ease of front end development. It takes a little bit of terminal know-how, but it really is not difficult to get running and quickly experimenting in just a couple minutes. Which preprocessor is up to you. I personally favor Sass, though they are all very similar.

#### Bourbon

[Bourbon](http://bourbon.io/) is a small library of mixins or what you might consider Sass functions that give you some helpful tools such as converting pixels to ems or handling CSS3 properties without worring about vendor prefixes

#### SUIT CSS

[SUIT](http://suitcss.github.io/) is basically a method for writing and organizing your CSS to keep it modular and encapsulated. [This article from Nicholas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) describes basically the philosophy behind this architecture. By splitting classes up into "components" and "utilities" you can avoid repeating yourself and avoid problems of inheritance. Since building SafariFeed, I'm not sure I agree with their exact syntax, specifically using camel case for components, but that's just a personal preference.

#### IcoMoon

[Icomoon](http://icomoon.io/app/) is an amazingly useful web app for building icon font libraries to use on your websites with @font-face. For example rather than using all of the popular [Font Awesome fonts](http://fortawesome.github.io/Font-Awesome/) you could build a custom font that only includes the icons you need, so you reduce the file size and load time for your site. Or you could mix and match those icons with other icon libraries or icons you create yourself and upload as an svg.