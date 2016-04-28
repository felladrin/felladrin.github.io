---
published: true
title: About creating a timelapse video
layout: post
---
Recently had my first time experience with timelapse video creation, and here I am to share my thoughts:

[Chronolapse](https://www.chronolapse.com/) was the best tool I've found to take sequential screenshots in a custom interval. I've set it up to take a shot every 30 seconds.
Later I've tried with 60s interval, but it was not good for a game development timelapse. Go with 30s.
Also, remember to disabled the option to print a timestamp on the image, it doesn't help.

Later I've used [BulkRename Utility](http://www.bulkrenameutility.co.uk/) to rename the screenshots sequentially. (But you can try using the built-in renamed from Chronolapse).

Then I've taken [VirtualDub](http://www.virtualdub.org/) to make a video from the screenshots, at 10 FPS. The screenshots need to be numbered sequentially for VirtualDub detect the right sequence. You only open the first screenshot and VirtualDub imports the rest of the sequence.

Finally I've edited the video on [Sony Vegas](http://www.sonycreativesoftware.com/vegassoftware) to add fade in/out and the soundtrack.

For the soundtrack I'd recommend musics like [Frigia](https://soundcloud.com/stevemoore2600/frigia).

That's it! Here you can see the results of this experience: <https://youtu.be/WKV9eB3anYM>