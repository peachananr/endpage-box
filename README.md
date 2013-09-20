#End Page Box by Pete R.
This plugin will let you add an end page box that will display when scrolled to the bottom or in any range on the page. 
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![End Page Box](http://www.thepetedesign.com/images/endpage_box_image.png "End Page Box")](http://www.thepetedesign.com/demos/endpage_box_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/endpage_box_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari, both on desktop and mobile have been tested.

## Basic Usage

To display a box when the users reached the bottom of the page, simply include the latest jQuery library together with `jquery.endpage-box.js` and `endpage-box.css` into your document's `<head>` and call the function as follows:

  
````javascript
$(window).load( function() {
  $("#endpage-box").endpage_box({
    animation: "fade",  // There are several animations available: fade, slide, flyInLeft, flyInRight, flyInUp, flyInDown, or false if you don't want it to animate. The default value is fade.
    from: "50%",  // This option allows you to define where on the page will the box start to appear. You can either send in the percentage of the page, or the exact pixels (without the px). The default value is 50%.
    to: "110%", // This option lets you define where on the page will the box start to disappear. You can either send in the percentage of the page, or the exact pixels (without the px). The default value is 110% (the extra 10% is to support the over scrolling effect you get from OSX's Chrome and Safari)
    content: "Better Add something cool here."  // The plugin will automatically create a container if it doesn't exist. This option will allow you to define the content of the container. This field also supports HTML.
  });
});
````
With this plugin, you can define the range of which the box will appear on the page. You can specify the range in pixels or percentage which the plugin will automatically calculate and convert it into pixels.

Note: It is essential to wrap the function with `$(window).load()` if you are using a percentage as your from/to options so that the plugin will be able incorporate the font into the calculation and perform correctly.

## Further Customisation
You can define several instances with predefined containers by simply adding your containers right above the `</body>` closing tag as shown below:

````html
...
<div id="endpage-box-1" class="endpage-box">...</div>
<div id="endpage-box-2" class="endpage-box">...</div>
</body>
````
and then you can call each functions like this:

````javascript
$("#endpage-box-1").endpage_box({
  animation: "fade",
  from: "10%",
  to: "30%"
});
$("#endpage-box-2").endpage_box({
  animation: "slide",
  from: "40%",
  to: "60%"
});
````

And there you have it. With this plugin, you can direct the users to drill down more content after they've completed the current page, you can use to display extra information or even annotate the page. 

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#design), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)