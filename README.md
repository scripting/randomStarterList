# randomStarterList

Generate a new starter OPML file for new FeedLand users every hour.

What's random is the number of feeds, between 25 and 50, and the feeds we chose.

Uses the OPML package for Node to make this utility simple to write.

### How it works

* It runs every hour on the hour. 

* First it reads an <a href="http://feedland.org/opml?screenname=davewiner&catname=starters">OPML file</a> from FeedLand. All the feeds I've put into my <i>starters</i> category. 

* It builds a new OPML file, with a random selection of feeds from the first one. The number of feeds is random too, a number between 25 and 50.

* It saves the file in a folder on my local system that's managed by my <a href="http://publicfolder.io/">Public Folder app</a>. 

* That's the <a href="http://scripting.com/publicfolder/feedland/subscriptionLists/starterfeeds.opml">file</a> FeedLand reads when adding a few feeds for starters. 

* Because the list varies from hour to hour, no single set of feeds will benefit enormously from this placement. And I have a very easy way to manage the set of feeds using the categories UI. 

* The investment in making <a href="https://github.com/scripting/opmlPackage">OPML as easy</a> to read and write as any other format pays off in keeping simple utilities like this simple. 

