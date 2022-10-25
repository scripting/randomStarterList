var myProductName = "randomstarterlist"; myVersion = "0.4.0";    

const fs = require ("fs");
const utils = require ("daveutils"); 
const opml = require ("opml"); 

var config = {
	urlStartersCategory: "http://feedland.org/opml?screenname=davewiner&catname=starters",
	destFilePath: "randomfeeds.opml",
	}

function buildRandomOutline () {
	const whenstart = new Date (), ctFeedsInFile = utils.random (25, 50);
	opml.readOutline (config.urlStartersCategory, function (err, theOutline) {
		if (err) {
			console.log (err.message);
			}
		else {
			var newOutline = {
				opml: {
					head: {
						title: "FeedLand starter feeds",
						description: "A random set of " + ctFeedsInFile + " feeds for people getting started with FeedLand. We regenerate this list periodically.",
						dateCreated: "Fri, 09 Sep 2022 14:27:00 GMT",
						dateModified: whenstart.toUTCString ()
						},
					body: {
						subs: new Array ()
						}
					}
				}
			const sourcelist = theOutline.opml.body.subs, destlist = newOutline.opml.body.subs;
			for (var i = 1; i <= ctFeedsInFile; i++) {
				var ix = utils.random (0, sourcelist.length - 1);
				destlist.push (sourcelist [ix]);
				sourcelist.splice (ix, 1);
				}
			fs.writeFile (config.destFilePath, opml.stringify (newOutline), function (err) {
				if (err) {
					console.log (err);
					}
				else {
					console.log (whenstart.toLocaleTimeString () + ": Build took " + utils.secondsSince (whenstart) + " secs.");
					}
				});
			}
		});
	}

buildRandomOutline ();
utils.runEveryMinute (function () {
	if (new Date ().getMinutes () == 0) {
		buildRandomOutline ();
		}
	});
