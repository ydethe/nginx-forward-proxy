// Calomel.org Proxy Auto-Config
//

//
// Define the network paths (direct, proxy and deny)
//

// Default connection
var direct = "DIRECT";

// Alternate Proxy Server
var proxy = "PROXY 192.168.1.100:8080";

// Default localhost for denied connections
var deny = "PROXY 127.0.0.1:65535";

//
// Proxy Logic
//

function FindProxyForURL(url, host)
{

// Use Proxy?
if (dnsDomainIs(host, ".domain.home")
  || dnsDomainIs(host, ".whatsmyip.org"))
  { return proxy; }

// Anti-ads and Anti-porn
if (dnsDomainIs(host, ".doubleclick.com")
  || dnsDomainIs(host, ".doubleclick.net")
  || dnsDomainIs(host, ".googlesyndication.com")
  || dnsDomainIs(host, "google-analytics.com")
  || dnsDomainIs(host, ".rpts.net")
  || dnsDomainIs(host, ".crossmediaservices.com")
  || dnsDomainIs(host, ".safeclick.com")
  || dnsDomainIs(host, ".2mdn.net")
  || dnsDomainIs(host, ".2mdn.com")
  || dnsDomainIs(host, ".globaltrack.com")
  || dnsDomainIs(host, ".burstnet.com")
  || dnsDomainIs(host, ".adbureau.net")
  || dnsDomainIs(host, ".targetnet.com")
  || dnsDomainIs(host, ".humanclick.com")
  || dnsDomainIs(host, ".linkexchange.com")
  || dnsDomainIs(host, ".fastclick.com")
  || dnsDomainIs(host, ".fastclick.net")
  || dnsDomainIs(host, ".admonitor.com")
  || dnsDomainIs(host, ".focalink.com")
  || dnsDomainIs(host, ".websponsors.com")
  || dnsDomainIs(host, ".advertising.com")
  || dnsDomainIs(host, ".cybereps.com")
  || dnsDomainIs(host, ".postmasterdirect.com")
  || dnsDomainIs(host, ".mediaplex.com")
  || dnsDomainIs(host, ".adtegrity.com")
  || dnsDomainIs(host, ".bannerbank.ru")
  || dnsDomainIs(host, ".bannerspace.com")
  || dnsDomainIs(host, ".theadstop.com")
  || dnsDomainIs(host, ".l90.com")
  || dnsDomainIs(host, ".webconnect.net")
  || dnsDomainIs(host, ".avenuea.com")
  || dnsDomainIs(host, ".flycast.com")
  || dnsDomainIs(host, ".engage.com")
  || dnsDomainIs(host, ".imgis.com")
  || dnsDomainIs(host, ".datais.com")
  || dnsDomainIs(host, ".link4ads.com")
  || dnsDomainIs(host, ".247media.com")
  || dnsDomainIs(host, ".hightrafficads.com")
  || dnsDomainIs(host, ".tribalfusion.com")
  || dnsDomainIs(host, ".rightserve.net")
  || dnsDomainIs(host, ".admaximize.com")
  || dnsDomainIs(host, ".valueclick.com")
  || dnsDomainIs(host, ".adlibris.se")
  || dnsDomainIs(host, ".vibrantmedia.com")
  || dnsDomainIs(host, ".coremetrics.com")
  || dnsDomainIs(host, ".vx2.cc")
  || dnsDomainIs(host, ".webpower.com")
  || dnsDomainIs(host, ".everyone.net")
  || dnsDomainIs(host, ".zedo.com")
  || dnsDomainIs(host, ".bigbangmedia.com")
  || dnsDomainIs(host, ".ad-annex.com")
  || dnsDomainIs(host, ".iwdirect.com")
  || dnsDomainIs(host, ".adlink.de")
  || dnsDomainIs(host, ".bidclix.net")
  || dnsDomainIs(host, ".webclients.net")
  || dnsDomainIs(host, ".linkcounter.com")
  || dnsDomainIs(host, ".sitetracker.com")
  || dnsDomainIs(host, ".adtrix.com")
  || dnsDomainIs(host, ".netshelter.net")
  || dnsDomainIs(host, ".rn11.com")
  || dnsDomainIs(host, ".ru4.com")
  || dnsDomainIs(host, "rightmedia.net")
  || dnsDomainIs(host, ".casalemedia.com")
  || dnsDomainIs(host, ".casalemedia.com")
  || dnsDomainIs(host, "quantserve.com")
  || dnsDomainIs(host, "crwdcntrl.net")
  || dnsDomainIs(host, ".commission-junction.com")
  || dnsDomainIs(host, ".qkimg.net")
  || dnsDomainIs(host, ".bluestreak.com")
  || dnsDomainIs(host, ".virtumundo.com")
  || dnsDomainIs(host, ".treeloot.com")
  || dnsDomainIs(host, ".memberprize.com")
  || dnsDomainIs(host, ".internetfuel.net")
  || dnsDomainIs(host, ".internetfuel.com")
  || dnsDomainIs(host, ".peoplecaster.com")
  || dnsDomainIs(host, ".cupidsdatabase.com")
  || dnsDomainIs(host, ".automotive-times.com")
  || dnsDomainIs(host, ".healthy-lifetimes.com")
  || dnsDomainIs(host, ".us-world-business.com")
  || dnsDomainIs(host, ".internet-2-web.com")
  || dnsDomainIs(host, ".my-job-careers.com")
  || dnsDomainIs(host, ".freeonline.com")
  || dnsDomainIs(host, ".exitfuel.com")
  || dnsDomainIs(host, ".netbroadcaster.com")
  || dnsDomainIs(host, ".spaceports.com")
  || dnsDomainIs(host, ".mircx.com")
  || dnsDomainIs(host, ".exitchat.com")
  || dnsDomainIs(host, ".atdmt.com")
  || dnsDomainIs(host, ".partner2profit.com")
  || dnsDomainIs(host, ".centrport.net")
  || dnsDomainIs(host, ".centrport.com")
  || dnsDomainIs(host, ".rampidads.com")
  || dnsDomainIs(host, "commonwealth.riddler.com")
  || dnsDomainIs(host, "banner.freeservers.com")
  || dnsDomainIs(host, "usads.futurenet.com")
  || dnsDomainIs(host, "banners.egroups.com")
  || dnsDomainIs(host, "ngadclient.hearme.com")
  || dnsDomainIs(host, "affiliates.allposters.com")
  || dnsDomainIs(host, "adincl.go2net.com")
  || dnsDomainIs(host, "webads.bizservers.com")
  || dnsDomainIs(host, ".addserv.com")
  || dnsDomainIs(host, ".falkag.net")
  || dnsDomainIs(host, ".interclick.com")
  || dnsDomainIs(host, ".atwola.com")
  || dnsDomainIs(host, "toolbar.aol.com")
  || dnsDomainIs(host, ".adsdk.com")
  || dnsDomainIs(host, "remotead.cnet.com")
  || dnsDomainIs(host, ".1st-dating.com")
  || dnsDomainIs(host, ".mousebucks.com")
  || dnsDomainIs(host, ".yourfreedvds.com")
  || dnsDomainIs(host, ".popupsavings.com")
  || dnsDomainIs(host, ".popupmoney.com")
  || dnsDomainIs(host, ".popuptraffic.com")
  || dnsDomainIs(host, ".popupnation.com")
  || dnsDomainIs(host, ".infostart.com")
  || dnsDomainIs(host, ".popupad.net")
  || dnsDomainIs(host, ".usapromotravel.com")
  || dnsDomainIs(host, ".goclick.com")
  || dnsDomainIs(host, ".trafficwave.net")
  || dnsDomainIs(host, ".popupad.net")
  || dnsDomainIs(host, ".paypopup.com")
  || dnsDomainIs(host, ".webtrendslive.com")
  || dnsDomainIs(host, ".wtlive.com")
  || dnsDomainIs(host, ".web-stat.com")
  || dnsDomainIs(host, ".superstats.com")
  || dnsDomainIs(host, ".allhits.ru")
  || dnsDomainIs(host, ".list.ru")
  || dnsDomainIs(host, ".counted.com")
  || dnsDomainIs(host, ".rankyou.com")
  || dnsDomainIs(host, ".clickcash.com")
  || dnsDomainIs(host, ".clickbank.com")
  || dnsDomainIs(host, ".paycounter.com")
  || dnsDomainIs(host, ".cashcount.com")
  || dnsDomainIs(host, ".clickedyclick.com")
  || dnsDomainIs(host, ".clickxchange.com")
  || dnsDomainIs(host, ".sitestats.com")
  || dnsDomainIs(host, ".site-stats.com")
  || dnsDomainIs(host, ".hitbox.com")
  || dnsDomainIs(host, ".exitdirect.com")
  || dnsDomainIs(host, ".realtracker.com")
  || dnsDomainIs(host, ".etracking.com")
  || dnsDomainIs(host, ".livestat.com")
  || dnsDomainIs(host, ".spylog.com")
  || dnsDomainIs(host, ".freestats.com")
  || dnsDomainIs(host, ".addfreestats.com")
  || dnsDomainIs(host, ".topclicks.net")
  || dnsDomainIs(host, ".mystat.pl")
  || dnsDomainIs(host, ".hitz4you.de")
  || dnsDomainIs(host, ".hitslink.com")
  || dnsDomainIs(host, ".thecounter.com")
  || dnsDomainIs(host, ".roiservice.com")
  || dnsDomainIs(host, ".overture.com")
  || dnsDomainIs(host, ".xiti.com")
  || dnsDomainIs(host, ".cj.com")
  || dnsDomainIs(host, ".anrdoezrs.net")
  || dnsDomainIs(host, ".hey.it")
  || dnsDomainIs(host, ".ppctracking.net")
  || dnsDomainIs(host, ".darkcounter.com")
  || dnsDomainIs(host, ".2o7.com")
  || dnsDomainIs(host, ".2o7.net")
  || dnsDomainIs(host, ".gostats.com")
  || dnsDomainIs(host, ".everstats.com")
  || dnsDomainIs(host, ".onestat.com")
  || dnsDomainIs(host, ".statcounter.com")
  || dnsDomainIs(host, ".trafic.ro")
  || dnsDomainIs(host, ".exitexchange.com")
  || dnsDomainIs(host, "clicktorrent.info")
  || dnsDomainIs(host, "ventimedia.com")
  || dnsDomainIs(host, ".clickability.com")
  || dnsDomainIs(host, ".savethis.com")
  || dnsDomainIs(host, ".extremetracking.com")
  || dnsDomainIs(host, ".extreme-dm.com")
  || dnsDomainIs(host, ".netster.com")
  || dnsDomainIs(host, ".searchmarketing.com")
  || dnsDomainIs(host, ".friendgreetings.com")
  || dnsDomainIs(host, ".permissionedmedia.com")
  || dnsDomainIs(host, ".searchbarcash.com")
  || dnsDomainIs(host, ".zoomerang.com")
  || dnsDomainIs(host, ".quizrocket.com")
  || dnsDomainIs(host, ".aceshigh.com")
  || dnsDomainIs(host, ".idealcasino.net")
  || dnsDomainIs(host, ".casinobar.net")
  || dnsDomainIs(host, ".casinoionair.com")
  || dnsDomainIs(host, ".licensed-collectibles.com")
  || dnsDomainIs(host, ".webdesignprofessional.com")
  || dnsDomainIs(host, ".offshoreclicks.com"))
  { return deny; }
 else
  { return direct; }

// Default DENY
{ return deny; }

}