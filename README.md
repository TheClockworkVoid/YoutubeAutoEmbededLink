# YoutubeAutoEmbededLink
Quick, janky embeded link for youtube video pages to fight anti-adblock.

What this script counters:

If Youtube disables your player, this will help you to play the video

How?:

Turns out, Youtube is not checking /embed/videoID. That means, if you manage to put a link on your page, by just one click, it will open a playable video in a new tab.



**************************************************************************
Installation:


1) Download Tampermonkey

   Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/

   Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

   Opera: https://addons.opera.com/en/extensions/details/tampermonkey-beta/

   Edge: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd

   Safari: https://www.tampermonkey.net/index.php?browser=safari&locale=en

3) Create a new script
   
   Either directly from the icon "Create new Script"
   
   Or by opening the Dashboard and clicking on "+" icon (top-right)

5) Copy-paste the .js file
   
   Copy the code as-is. The only thing you may need to change is the interval length.

6) Save



************************************************************************
Usage:

Open any video. Wait ~1-3 seconds. Click a red button link that will appear near the video title. Enjoy.

Possible issue:

Youtube runs as a single-page app, and the script cannot be triggered each time you click on a video.

The generated link actually does exist behind the scenes once created.

That means, the script must check in a loop, whether you have changed URL to update the existing link.

If you will be clicking too fast (and your PC/internet connection will keep up), it may happen, you will be faster than the update interval and you may open a previously displayed video. In that case, just slow down.

************************************************************************

TBD

1) move from interval loop to some observer to make it more performance-efficient
2) Make direct embeded link buttons from the main page
3) Make direct embeded link buttons from side panel and other places, where video blocks can be displayed

