# SORTING ALGORITHMS
||| reference

## REF
- https://www.toptal.com/developers/sorting-algorithms/

## sorting algorithm comparison
<html class="layout-wrapper js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths wf-active">
    <head>
        <title>
            Sorting Algorithm Animations | Toptal
        </title>
        <meta content="Animation, code, analysis, and discussion of 8 sorting algorithms on 4 initial conditions." name="description">
            <link href="/blog.rss" rel="alternate" title="Toptal Blog" type="application/rss+xml">
                <link href="/developers/blog.rss" rel="alternate" title="Toptal Engineering Blog" type="application/rss+xml">
                    <link href="/designers/blog.rss" rel="alternate" title="Toptal Design Blog" type="application/rss+xml">
                        <link href="/finance/blog.rss" rel="alternate" title="Toptal Finance Blog" type="application/rss+xml">
                            <link href="https://www.toptal.com/developers/sorting-algorithms" rel="canonical">
                                <meta content="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/og_image_76642a.jpg" property="og:image">
                                    <meta content="Sorting Algorithm Animations" property="og:title">
                                        <meta content="Animation, code, analysis, and discussion of 8 sorting algorithms on 4 initial conditions." property="og:description">
                                            <meta charset="utf-8">
                                                <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
                                                    <script src="https://bam.nr-data.net/1/e3359cee6b?a=30100511&v=1071.385e752&to=JV0NEUYJCQkARxgVEwReCgYbFQoXEVxZAjkHXgQKRg8RDQhGGAwIAlcb&rst=6329&ref=https://www.toptal.com/developers/sorting-algorithms/&ap=154&be=1586&fe=6208&dc=2554&af=err,xhr,stn,ins&perf=%7B%22timing%22:%7B%22of%22:1520825864429,%22n%22:0,%22f%22:575,%22dn%22:578,%22dne%22:629,%22c%22:629,%22s%22:797,%22ce%22:1173,%22rq%22:1173,%22rp%22:1553,%22rpe%22:1754,%22dl%22:1563,%22di%22:2554,%22ds%22:2554,%22de%22:2600,%22dc%22:6207,%22l%22:6207,%22le%22:6248%7D,%22navigation%22:%7B%7D%7D&jsonp=NREUM.setToken" type="text/javascript">
                                                    </script>
                                                    <script src="https://js-agent.newrelic.com/nr-1071.min.js">
                                                    </script>
                                                    <script async="" src="https://a.quora.com/qevents.js" type="text/javascript">
                                                    </script>
                                                    <script async="" src="https://www.googleadservices.com/pagead/conversion_async.js" type="text/javascript">
                                                    </script>
                                                    <script id="hs-analytics" src="//js.hs-analytics.net/analytics/1520825700000/2799924.js" type="text/javascript">
                                                    </script>
                                                    <script async="" src="https://dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5977.js?422451" type="text/javascript">
                                                    </script>
                                                    <script async="" src="https://sjs.bizographics.com/insight.min.js" type="text/javascript">
                                                    </script>
                                                    <script async="" src="//assets.adstage.io/analytics.js">
                                                    </script>
                                                    <script async="" src="https://connect.facebook.net/signals/config/463369723801939?v=2.8.12&r=stable">
                                                    </script>
                                                    <script async="" src="https://connect.facebook.net/en_US/fbevents.js">
                                                    </script>
                                                    <script async="" src="https://cdn.segment.com/analytics.js/v1/jnS4QsHOCAOeG6XvMDCjD9n9bAcQ53Mb/analytics.min.js" type="text/javascript">
                                                    </script>
                                                    <script async="" src="//www.google-analytics.com/analytics.js">
                                                    </script>
                                                    <script async="" src="//platform.twitter.com/widgets.js">
                                                    </script>
                                                    <script type="text/javascript">
                                                        window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"e3359cee6b","applicationID":"30100511","transactionName":"JV0NEUYJCQkARxgVEwReCgYbFQoXEVxZAjkHXgQKRg8RDQhGGAwIAlcb","queueTime":0,"applicationTime":154,"agent":""}
                                                    </script>
                                                    <script type="text/javascript">
                                                        (window.NREUM||(NREUM={})).loader_config={xpid:"VgcEVlJaGwAAVVFSAgAG"};window.NREUM||(NREUM={}),__nr_require=function(t,n,e){function r(e){if(!n[e]){var o=n[e]={exports:{}};t[e][0].call(o.exports,function(n){var o=t[e][1][n];return r(o||n)},o,o.exports)}return n[e].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<e.length;o++)r(e[o]);return r}({1:[function(t,n,e){function r(t){try{s.console&&console.log(t)}catch(n){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,n,e){r(e.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,n){return t}).join(", ")))},{}],2:[function(t,n,e){function r(t,n,e,r,s){try{p?p-=1:o(s||new UncaughtException(t,n,e),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,n,e){this.message=t||"Uncaught error with no additional information",this.sourceURL=n,this.line=e}function o(t,n){var e=n?null:c.now();i("err",[t,e])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,l="nr@seenError",p=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),d=!0)}s.on("fn-start",function(t,n,e){d&&(p+=1)}),s.on("fn-err",function(t,n,e){d&&!e[l]&&(f(e,l,function(){return!0}),this.thrown=!0,o(e))}),s.on("fn-end",function(){d&&!this.thrown&&p>0&&(p-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,n,e){t("loader").features.ins=!0},{}],4:[function(t,n,e){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState",g=t("loader");g.features.stn=!0,t(6);var b=NREUM.o.EV;o.on(m,function(t,n){var e=t[0];e instanceof b&&(this.bstStart=g.now())}),o.on(w,function(t,n){var e=t[0];e instanceof b&&i("bst",[e,n,this.bstStart,g.now()])}),a.on(m,function(t,n,e){this.bstStart=g.now(),this.bstType=e}),a.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),this.bstType])}),s.on(m,function(){this.bstStart=g.now()}),s.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=g.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,n,e){function r(t){for(var n=t;n&&!n.hasOwnProperty(u);)n=Object.getPrototypeOf(n);n&&o(n)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,n){return t[1]}var a=t("ee").get("events"),s=t(18)(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";n.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,n){var e=t[1],r=c(e,"nr@wrapped",function(){function t(){if("function"==typeof e.handleEvent)return e.handleEvent.apply(e,arguments)}var n={object:t,"function":e}[typeof e];return n?s(n,"fn-",null,n.name||"anonymous"):e});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,n,e){var r=t("ee").get("history"),o=t(18)(r);n.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,n,e){var r=t("ee").get("raf"),o=t(18)(r),i="equestAnimationFrame";n.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,n,e){function r(t,n,e){t[0]=a(t[0],"fn-",null,e)}function o(t,n,e){this.method=e,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,e)}var i=t("ee").get("timer"),a=t(18)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";n.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,n,e){function r(t,n){d.inPlace(n,["onreadystatechange"],"fn-",s)}function o(){var t=this,n=u.context(t);t.readyState>3&&!n.resolved&&(n.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){g.push(t),h&&(x?x.then(a):w?w(a):(E=-E,O.data=E))}function a(){for(var t=0;t<g.length;t++)r([],g[t]);g.length&&(g=[])}function s(t,n){return n}function c(t,n){for(var e in t)n[e]=t[e];return n}t(5);var f=t("ee"),u=f.get("xhr"),d=t(18)(u),l=NREUM.o,p=l.XHR,h=l.MO,m=l.PR,w=l.SI,v="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[];n.exports=u;var b=window.XMLHttpRequest=function(t){var n=new p(t);try{u.emit("new-xhr",[n],n),n.addEventListener(v,o,!1)}catch(e){try{u.emit("internal-error",[e])}catch(r){}}return n};if(c(p,b),b.prototype=p.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,n){r(t,n),i(n)}),u.on("open-xhr-start",r),h){var x=m&&m.resolve();if(!w&&!m){var E=1,O=document.createTextNode(E);new h(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===v||a()})},{}],10:[function(t,n,e){function r(t){var n=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!n.aborted){if(e.duration=a.now()-this.startTime,4===t.readyState){n.status=t.status;var i=o(t,this.lastSize);if(i&&(e.rxSize=i),this.sameOrigin){var c=t.getResponseHeader("X-NewRelic-App-Data");c&&(n.cat=c.split(", ").pop())}}else n.status=0;e.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[n,e,this.startTime])}}}function o(t,n){var e=t.responseType;if("json"===e&&null!==n)return n;var r="arraybuffer"===e||"blob"===e||"json"===e?t.response:t.responseText;return h(r)}function i(t,n){var e=c(n),r=t.params;r.host=e.hostname+":"+e.port,r.pathname=e.pathname,t.sameOrigin=e.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var n=this;n.totalCbs=0,n.called=0,n.cbTime=0,n.end=r,n.ended=!1,n.xhrGuids={},n.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){n.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,n){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&n.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,n){var e=this.metrics,r=t[0],o=this;if(e&&r){var i=h(r);i&&(e.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof n.onload))&&o.end(n)}catch(e){try{f.emit("internal-error",[e])}catch(r){}}};for(var s=0;s<d;s++)n.addEventListener(u[s],this.listener,!1)}),f.on("xhr-cb-time",function(t,n,e){this.cbTime+=t,n?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof e.onload||this.end(e)}),f.on("xhr-load-added",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&!this.xhrGuids[e]&&(this.xhrGuids[e]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,n){var e=""+l(t)+!!n;this.xhrGuids&&this.xhrGuids[e]&&(delete this.xhrGuids[e],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],n)}),f.on("removeEventListener-end",function(t,n){n instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],n)}),f.on("fn-start",function(t,n,e){n instanceof m&&("onload"===e&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),f.on("fn-end",function(t,n){this.xhrCbStart&&f.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,n],n)})}},{}],11:[function(t,n,e){n.exports=function(t){var n=document.createElement("a"),e=window.location,r={};n.href=t,r.port=n.port;var o=n.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=n.hostname||e.hostname,r.pathname=n.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!n.protocol||":"===n.protocol||n.protocol===e.protocol,a=n.hostname===document.domain&&n.port===e.port;return r.sameOrigin=i&&(!n.hostname||a),r}},{}],12:[function(t,n,e){function r(){}function o(t,n,e){return function(){return i(t,[f.now()].concat(s(arguments)),n?null:this,e),n?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",p=l+"ixn-";a(d,function(t,n){u[n]=o(l+n,!0,"api")}),u.addPageAction=o(l+"addPageAction",!0),u.setCurrentRouteName=o(l+"routeName",!0),n.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,n){var e={},r=this,o="function"==typeof n;return i(p+"tracer",[f.now(),t,e],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],e),o)try{return n.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],e),t}finally{c.emit("fn-end",[f.now()],e)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,n){h[n]=o(p+n)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now()])}},{}],13:[function(t,n,e){n.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(n){return}}}},{}],14:[function(t,n,e){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),n.exports=r},{}],15:[function(t,n,e){function r(t,n){var e=[],r="",i=0;for(r in t)o.call(t,r)&&(e[i]=n(r,t[r]),i+=1);return e}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],16:[function(t,n,e){function r(t,n,e){n||(n=0),"undefined"==typeof e&&(e=t?t.length:0);for(var r=-1,o=e-n||0,i=Array(o<0?0:o);++r<o;)i[r]=t[n+r];return i}n.exports=r},{}],17:[function(t,n,e){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],18:[function(t,n,e){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;n.exports=function(t,n){function e(t,n,e,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof e?e(r,a):e||{}}catch(f){l([f,"",[r,a,o],s])}u(n+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(n+"err",[r,a,d],s),d}finally{u(n+"end",[r,a,c],s)}}return r(t)?t:(n||(n=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function u(e,r,o){if(!c||n){var i=c;c=!0;try{t.emit(e,r,o,n)}catch(a){l([a,e,r,o])}c=i}}function d(t,n){if(Object.defineProperty&&Object.keys)try{var e=Object.keys(t);return e.forEach(function(e){Object.defineProperty(n,e,{get:function(){return t[e]},set:function(n){return t[e]=n,n}})}),n}catch(r){l([r])}for(var o in t)s.call(t,o)&&(n[o]=t[o]);return n}function l(n){try{t.emit("internal-error",n)}catch(e){}}return t||(t=o),e.inPlace=f,e.flag=a,e}},{}],ee:[function(t,n,e){function r(){}function o(t){function n(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function e(e,r,o,i){if(!l.aborted||i){t&&t(e,r,o);for(var a=n(o),s=h(e),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[y[e]];return d&&d.push([g,e,r,a]),a}}function p(t,n){v[t]=h(t).concat(n)}function h(t){return v[t]||[]}function m(t){return d[t]=d[t]||o(e)}function w(t,n){f(t,function(t,e){n=n||"feature",y[e]=n,n in u||(u[n]=[])})}var v={},y={},g={on:p,emit:e,get:m,listeners:h,context:n,buffer:w,abort:a,aborted:!1};return g}function i(){return new r}function a(){(u.api||u.feature)&&(l.aborted=!0,u=l.backlog={})}var s="nr@context",c=t("gos"),f=t(15),u={},d={},l=n.exports=o();l.backlog=u},{}],gos:[function(t,n,e){function r(t,n,e){if(o.call(t,n))return t[n];var r=e();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(t,n,e){function r(t,n,e,r){o.buffer([t],r),o.emit(t,n,e)}var o=t("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(t,n,e){function r(t){var n=typeof t;return!t||"object"!==n&&"function"!==n?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");n.exports=r},{}],loader:[function(t,n,e){function r(){if(!x++){var t=b.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&n))return u.abort();f(y,function(n,e){t[n]||(t[n]=e)}),c("mark",["onload",a()+b.offset],null,"api");var e=l.createElement("script");e.src="https://"+t.agent,n.parentNode.insertBefore(e,n)}}function o(){"complete"===l.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-b.offset}var s=(new Date).getTime(),c=t("handle"),f=t(15),u=t("ee"),d=window,l=d.document,p="addEventListener",h="attachEvent",m=d.XMLHttpRequest,w=m&&m.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:m,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},g=m&&w&&w[p]&&!/CriOS/.test(navigator.userAgent),b=n.exports={offset:s,now:a,origin:v,features:{},xhrWrappable:g};t(12),l[p]?(l[p]("DOMContentLoaded",i,!1),d[p]("load",r,!1)):(l[h]("onreadystatechange",o),d[h]("onload",r)),c("mark",["firstbyte",s],null,"api");var x=0,E=t(17)},{}]},{},["loader",2,10,4,3]);
                                                    </script>
                                                    <meta content="width=device-width, initial-scale=1.0" name="viewport">
                                                        <script>
                                                            var _rollbarConfig = {
    accessToken: "cc4cbdcfde904714a4fb77535e3229ae",
    captureUncaught: true,
    async: true,
    captureUnhandledRejections: true,
    payload: {
      environment: "production",
      client: {
        javascript: {
          code_version: "e636d7e604c713de9fdbfb50530377b5005df53d",
          source_map_enabled: true,
        }
      },
      server: {
        root: "webpack:///./"
      }
    }
  };
  !function(r){function o(n){if(e[n])return e[n].exports;var t=e[n]={exports:{},id:n,loaded:!1};return r[n].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var e={};return o.m=r,o.c=e,o.p="",o(0)}([function(r,o,e){"use strict";var n=e(1),t=e(4);_rollbarConfig=_rollbarConfig||{},_rollbarConfig.rollbarJsUrl=_rollbarConfig.rollbarJsUrl||"https://cdnjs.cloudflare.com/ajax/libs/rollbar.js/2.3.2/rollbar.min.js",_rollbarConfig.async=void 0===_rollbarConfig.async||_rollbarConfig.async;var a=n.setupShim(window,_rollbarConfig),l=t(_rollbarConfig);window.rollbar=n.Rollbar,a.loadFull(window,document,!_rollbarConfig.async,_rollbarConfig,l)},function(r,o,e){"use strict";function n(r){return function(){try{return r.apply(this,arguments)}catch(r){try{console.error("[Rollbar]: Internal error",r)}catch(r){}}}}function t(r,o){this.options=r,this._rollbarOldOnError=null;var e=s++;this.shimId=function(){return e},window&&window._rollbarShims&&(window._rollbarShims[e]={handler:o,messages:[]})}function a(r,o){var e=o.globalAlias||"Rollbar";if("object"==typeof r[e])return r[e];r._rollbarShims={},r._rollbarWrappedError=null;var t=new p(o);return n(function(){o.captureUncaught&&(t._rollbarOldOnError=r.onerror,i.captureUncaughtExceptions(r,t,!0),i.wrapGlobals(r,t,!0)),o.captureUnhandledRejections&&i.captureUnhandledRejections(r,t,!0);var n=o.autoInstrument;return o.enabled!==!1&&(void 0===n||n===!0||"object"==typeof n&&n.network)&&r.addEventListener&&(r.addEventListener("load",t.captureLoad.bind(t)),r.addEventListener("DOMContentLoaded",t.captureDomContentLoaded.bind(t))),r[e]=t,t})()}function l(r){return n(function(){var o=this,e=Array.prototype.slice.call(arguments,0),n={shim:o,method:r,args:e,ts:new Date};window._rollbarShims[this.shimId()].messages.push(n)})}var i=e(2),s=0,d=e(3),c=function(r,o){return new t(r,o)},p=d.bind(null,c);t.prototype.loadFull=function(r,o,e,t,a){var l=function(){var o;if(void 0===r._rollbarDidLoad){o=new Error("rollbar.js did not load");for(var e,n,t,l,i=0;e=r._rollbarShims[i++];)for(e=e.messages||[];n=e.shift();)for(t=n.args||[],i=0;i<t.length;++i)if(l=t[i],"function"==typeof l){l(o);break}}"function"==typeof a&&a(o)},i=!1,s=o.createElement("script"),d=o.getElementsByTagName("script")[0],c=d.parentNode;s.crossOrigin="",s.src=t.rollbarJsUrl,e||(s.async=!0),s.onload=s.onreadystatechange=n(function(){if(!(i||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){s.onload=s.onreadystatechange=null;try{c.removeChild(s)}catch(r){}i=!0,l()}}),c.insertBefore(s,d)},t.prototype.wrap=function(r,o,e){try{var n;if(n="function"==typeof o?o:function(){return o||{}},"function"!=typeof r)return r;if(r._isWrap)return r;if(!r._rollbar_wrapped&&(r._rollbar_wrapped=function(){e&&"function"==typeof e&&e.apply(this,arguments);try{return r.apply(this,arguments)}catch(e){var o=e;throw"string"==typeof o&&(o=new String(o)),o._rollbarContext=n()||{},o._rollbarContext._wrappedSource=r.toString(),window._rollbarWrappedError=o,o}},r._rollbar_wrapped._isWrap=!0,r.hasOwnProperty))for(var t in r)r.hasOwnProperty(t)&&(r._rollbar_wrapped[t]=r[t]);return r._rollbar_wrapped}catch(o){return r}};for(var u="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,captureEvent,captureDomContentLoaded,captureLoad".split(","),f=0;f<u.length;++f)t.prototype[u[f]]=l(u[f]);r.exports={setupShim:a,Rollbar:p}},function(r,o){"use strict";function e(r,o,e){if(r){var t;"function"==typeof o._rollbarOldOnError?t=o._rollbarOldOnError:r.onerror&&!r.onerror.belongsToShim&&(t=r.onerror,o._rollbarOldOnError=t);var a=function(){var e=Array.prototype.slice.call(arguments,0);n(r,o,t,e)};a.belongsToShim=e,r.onerror=a}}function n(r,o,e,n){r._rollbarWrappedError&&(n[4]||(n[4]=r._rollbarWrappedError),n[5]||(n[5]=r._rollbarWrappedError._rollbarContext),r._rollbarWrappedError=null),o.handleUncaughtException.apply(o,n),e&&e.apply(r,n)}function t(r,o,e){if(r){"function"==typeof r._rollbarURH&&r._rollbarURH.belongsToShim&&r.removeEventListener("unhandledrejection",r._rollbarURH);var n=function(r){var e,n,t;try{e=r.reason}catch(r){e=void 0}try{n=r.promise}catch(r){n="[unhandledrejection] error getting `promise` from event"}try{t=r.detail,!e&&t&&(e=t.reason,n=t.promise)}catch(r){t="[unhandledrejection] error getting `detail` from event"}e||(e="[unhandledrejection] error getting `reason` from event"),o&&o.handleUnhandledRejection&&o.handleUnhandledRejection(e,n)};n.belongsToShim=e,r._rollbarURH=n,r.addEventListener("unhandledrejection",n)}}function a(r,o,e){if(r){var n,t,a="EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");for(n=0;n<a.length;++n)t=a[n],r[t]&&r[t].prototype&&l(o,r[t].prototype,e)}}function l(r,o,e){if(o.hasOwnProperty&&o.hasOwnProperty("addEventListener")){for(var n=o.addEventListener;n._rollbarOldAdd&&n.belongsToShim;)n=n._rollbarOldAdd;var t=function(o,e,t){n.call(this,o,r.wrap(e),t)};t._rollbarOldAdd=n,t.belongsToShim=e,o.addEventListener=t;for(var a=o.removeEventListener;a._rollbarOldRemove&&a.belongsToShim;)a=a._rollbarOldRemove;var l=function(r,o,e){a.call(this,r,o&&o._rollbar_wrapped||o,e)};l._rollbarOldRemove=a,l.belongsToShim=e,o.removeEventListener=l}}r.exports={captureUncaughtExceptions:e,captureUnhandledRejections:t,wrapGlobals:a}},function(r,o){"use strict";function e(r,o){this.impl=r(o,this),this.options=o,n(e.prototype)}function n(r){for(var o=function(r){return function(){var o=Array.prototype.slice.call(arguments,0);if(this.impl[r])return this.impl[r].apply(this.impl,o)}},e="log,debug,info,warn,warning,error,critical,global,configure,handleUncaughtException,handleUnhandledRejection,_createItem,wrap,loadFull,shimId,captureEvent,captureDomContentLoaded,captureLoad".split(","),n=0;n<e.length;n++)r[e[n]]=o(e[n])}e.prototype._swapAndProcessMessages=function(r,o){this.impl=r(this.options);for(var e,n,t;e=o.shift();)n=e.method,t=e.args,this[n]&&"function"==typeof this[n]&&("captureDomContentLoaded"===n||"captureLoad"===n?this[n].apply(this,[t[0],e.ts]):this[n].apply(this,t));return this},r.exports=e},function(r,o){"use strict";r.exports=function(r){return function(o){if(!o&&!window._rollbarInitialized){r=r||{};for(var e,n,t=r.globalAlias||"Rollbar",a=window.rollbar,l=function(r){return new a(r)},i=0;e=window._rollbarShims[i++];)n||(n=e.handler),e.handler._swapAndProcessMessages(l,e.messages);window[t]=n,window._rollbarInitialized=!0}}}}]);
                                                        </script>
                                                        <link href="https://assets.toptal.io/assets/front/static/favicons/favicon_ca7136.png" rel="icon">
                                                            <!--[if IE]><link href="https://assets.toptal.io/assets/front/static/favicons/favicon_68b340.ico" rel="shortcut icon" /><![endif]-->
                                                            <link href="https://assets.toptal.io/assets/front/static/favicons/touch_x57_f72647.png" rel="apple-touch-icon-precomposed" sizes="57x57">
                                                                <link href="https://assets.toptal.io/assets/front/static/favicons/touch_x72_516451.png" rel="apple-touch-icon-precomposed" sizes="72x72">
                                                                    <link href="https://assets.toptal.io/assets/front/static/favicons/touch_x114_1798a8.png" rel="apple-touch-icon-precomposed" sizes="114x114">
                                                                        <link href="https://assets.toptal.io/assets/front/static/favicons/touch_x57_f72647.png" rel="apple-touch-icon-precomposed">
                                                                            <script src="https://assets.toptal.io/assets/jquery_and_modernizr-13a4e14b6617e4a1110b.js">
                                                                            </script>
                                                                            <script>
                                                                                // TODO: Figure out how to override Modernizr test
(function () {
  var isIE, isIE11, noFlexboxClassName;
  isIE = /MSIE/.test(navigator.userAgent) && !/Opera/.test(navigator.userAgent);
  isIE11 = window.MSInputMethodContext && !/\bEdge\/[0-9.]+$/.test(navigator.userAgent);
  if (window.Modernizr && window.Modernizr.flexbox && (isIE || isIE11)) {
    noFlexboxClassName = document.documentElement.className.replace(/\bflexbox\b/, 'no-flexbox ie-flexbox');
    document.documentElement.className = noFlexboxClassName;
  }
})();
                                                                            </script>
                                                                            <script>
                                                                                //<![CDATA[
window.gon={};gon.flash={};gon.env="production";gon.signedin=false;gon.check_session_url="https:\/\/www.toptal.com\/signed_in";gon.shorten_url="https:\/\/www.toptal.com\/shorten_url";gon.geo_target_url="https:\/\/www.toptal.com\/api\/geo_target";gon.recaptcha_site_key="6LeeeDQUAAAAAJVnh-wvGaLmnO-lJ7X8nn0en1gm";gon.recaptcha_url="https:\/\/www.google.com\/recaptcha\/api.js";gon.google_api_browser_key="AIzaSyDED9v55b-c1opDYMEDYBkOgDFGlBMICGY";gon.google_js_maps_key="AIzaSyDspLQumHNqilmD5UHddqqpSjwY1AJpVd0";gon.google_places_api_key="AIzaSyBcP-ExZ1pLLRX2Adlc-faZpjwC3raVQI4";gon.url_share_counter=0;gon.chameleon_current_experiments={"bounce_modal_for_high_traffic_pages":{"google_analytics_dimension":null,"variant_key":"no_show"}};gon.bounce_modal_settings={"show":false,"type":"fullscreen","current_vertical_role_type":null,"template_options":{"blog":{"submit_path":"https:\/\/www.toptal.com\/blog\/subscription","form_vertical":null,"blog_image":"default","blog_type":"Toptal Blog","subtitle":"for the latest research, tutorials, and trends across engineering, design, and finance.","articles":[{"url":"https:\/\/www.toptal.com\/designers\/illustration\/a-step-by-step-guide-to-designing-custom-illustrations-without-any-drawing-skills","image":"https:\/\/uploads.toptal.io\/blog\/cover_image\/120250\/list_inside_cover-illustration-ddb8de15cc6f3c6edd2d128940ae8b10.png","title":"A Step-by-step Guide to Designing Custom Illustrations Without Any Drawing Skills","author":"Tidjane Tall","author_image":"https:\/\/uploads.toptal.io\/user\/photo\/271544\/small_834a3184ed32914981f20be54b1e24e8.jpg","author_position":"Design Blog Editor"},{"url":"https:\/\/www.toptal.com\/finance\/financial-analysts\/ebitda","image":"https:\/\/uploads.toptal.io\/blog\/cover_image\/120400\/list_inside_cover-01C-_2x-02-f139bd98b848533cd406b7d89b49a89b.png","title":"Should We Rethink the Use of EBITDA?","author":"Puneet Gandhi","author_image":"https:\/\/uploads.toptal.io\/user\/photo\/435798\/small_85d8b423cf69bb7c2694acdacba936d5.jpg","author_position":"Finance Expert"},{"url":"https:\/\/www.toptal.com\/javascript\/choosing-best-front-end-framework","image":"https:\/\/uploads.toptal.io\/blog\/cover_image\/120421\/list_inside_cover-Frameworks_WideCover_2x-e43a7949bdfa48d912a485166750db5c.png","title":"How to Choose the Best Front-end Framework","author":"Giorgi Bakradze","author_image":"https:\/\/uploads.toptal.io\/user\/photo\/311218\/small_eb2246b9445dabdb4320763806d4d9f3.jpg","author_position":"Freelance JavaScript Developer"}]},"fullscreen":{"subtitle":"freelance talent","bounce_modal_header_skill":null,"verticals":["developers","designers","finance_experts"],"for_projects":false,"email_validation_api_path":"https:\/\/www.toptal.com\/api\/company_email_validations","submit_path":"https:\/\/www.toptal.com\/api\/leads","default_vertical":"developers","overrides":{"title":"Need to work with an algorithms expert?","subtitle":"Toptal is a network of top algorithm engineers.\u003cbr\u003eTop companies and start-ups choose Toptal algorithm engineers for their mission critical software projects."}}}};
//]]>
                                                                            </script>
                                                                            <link href="https://assets.toptal.io/assets/public_styles-2364b137c880fa63cc2fb358ed85075d.css" media="screen" rel="stylesheet">
                                                                                <link href="https://assets.toptal.io/assets/portal_styles-86630602431d37ea737cf5b28025a166.css" media="screen" rel="stylesheet">
                                                                                    <link href="https://assets.toptal.io/assets/blog_styles-e52dba1767f0fb2d5e1be4258ed9fb7c.css" media="screen" rel="stylesheet">
                                                                                        <script>
                                                                                            if(!window.appinfo) {
  window.onAppInfoLoaded = $.Deferred();
  document.cookie = 'appinfo_id_status=loading_script;'

  window.onAppinfoLoad = function() {
    document.cookie = 'appinfo_id_status=doing_request;'

    window.appinfo.grab('https://appinfo.toptal.com', {
      data: gon['application_info_data'] || {},
      callback: function(response, error) {
        if (!error) {
          document.cookie = 'appinfo_id_status=request_completed;'
          window.onAppInfoLoaded.resolve({
            applicationInfo: response.data
          });
        } else {
          document.cookie = 'appinfo_id_status=request_failed;'
        }
      }
    });
  };

  (function() {
    $.getScript('https://appinfo.toptal.com/script.js').fail(function() {
      document.cookie = 'appinfo_id_status=script_load_failed;'
      window.onAppInfoLoaded.reject();
    });
  })();
}
                                                                                        </script>
                                                                                        <style type="text/css">
                                                                                        </style>
                                                                                        <style type="text/css">
                                                                                        </style>
                                                                                        <script async="" src="//static.criteo.net/js/ld/ld.js">
                                                                                        </script>
                                                                                        <script src="https://www.googleadservices.com/pagead/conversion/948911000/?random=1520825868542&cv=9&fst=1520825868542&num=1&guid=ON&resp=GooglemKTybQhCsO&u_h=800&u_w=1280&u_ah=736&u_aw=1280&u_cd=24&u_his=1&u_tz=540&u_java=true&u_nplug=1&u_nmime=6&frm=0&url=https%3A%2F%2Fwww.toptal.com%2Fdevelopers%2Fsorting-algorithms%2F&tiba=Sorting%20Algorithm%20Animations%20%7C%20Toptal&async=1&rfmt=3&fmt=4">
                                                                                        </script>
                                                                                        <script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/948911000/?random=1520825868558&cv=9&fst=1520825868558&num=1&guid=ON&resp=GooglemKTybQhCsO&u_h=800&u_w=1280&u_ah=736&u_aw=1280&u_cd=24&u_his=1&u_tz=540&u_java=true&u_nplug=1&u_nmime=6&data=name%3Dsorting_algorithms%23index%3Bpath%3D%2Fdevelopers%2Fsorting-algorithms%3Breferrer%3D%3Bsearch%3D%3Btitle%3DSorting%20Algorithm%20Animations%20%7C%20Toptal%3Burl%3Dhttps%3A%2F%2Fwww.toptal.com%2Fdevelopers%2Fsorting-algorithms&frm=0&url=https%3A%2F%2Fwww.toptal.com%2Fdevelopers%2Fsorting-algorithms%2F&tiba=Sorting%20Algorithm%20Animations%20%7C%20Toptal&async=1&rfmt=3&fmt=4">
                                                                                        </script>
                                                                                    </link>
                                                                                </link>
                                                                            </link>
                                                                        </link>
                                                                    </link>
                                                                </link>
                                                            </link>
                                                        </link>
                                                    </meta>
                                                </meta>
                                            </meta>
                                        </meta>
                                    </meta>
                                </meta>
                            </link>
                        </link>
                    </link>
                </link>
            </link>
        </meta>
    </head>
    <body class="layout" data-view="layout#body" id="top">
        <div class="layout_layer" data-view="layout#layout">
            <header class="page_header hide_in_webview" data-role="fixed-header">
                <div class="page_header_line">
                </div>
            </header>
            <main class="layout-main">
                <header class="grid-row page_title-wrapper">
                    <div class="grid-row-inner has-big_padding page_title has-free_height" style="padding-left:0px; padding-right: 0px">
                        <div class="page_title-container">
                            <h1 class="page_title-title">
                                Sorting Algorithms Animations
                            </h1>
                            <div class="page_title-description">
                                The following animations illustrate how effectively data sets from different starting points can be sorted using different algorithms.
                            </div>
                        </div>
                <section class="grid-row" data-view="sorting_algorithms#animation">
                    <div class="has-big_padding has-no_top_padding">
                        <div class="content_body sorting_algorithms-content for-how_to_use">
                            <p>
                                <span class="sorting_algorithms-subtitle">
                                    How to use:
                                </span>
                                Press
                                <strong>
                                    "Play all"
                                </strong>
                                , or choose the
                                <img src="https://assets.toptal.io/assets/front/static/public/primitives/icon/play_blue_8556fc.png" width="15">
                                    button for the individual row/column to animate.
                                </img>
                            </p>
                        </div>
                        <div class="sorting_algorithms_table">
                            <div class="sorting_algorithms_table-try_me sorting_algorithms_table-pulse" data-role="try_me" style="display: none;">
                                Try me!
                            </div>
                            <table class="sorting_algorithms_table-container for-desktop">
                                <thead>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play is-black" data-role="reload_all" href="#">
                                            </a>
                                            <a class="sorting_algorithms_table-play_all" data-role="reload_all" href="#">
                                                Play All
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/insertion-sort">
                                                Insertion
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/selection-sort">
                                                Selection
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/bubble-sort">
                                                Bubble
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/shell-sort">
                                                Shell
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/merge-sort">
                                                Merge
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/heap-sort">
                                                Heap
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/quick-sort">
                                                Quick
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/quick-sort-3-way">
                                                Quick3
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/random-initial-order">
                                                Random
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort_e8e408.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/insertion-sort_997a0c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/insertion-sort_73d4d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/insertion-sort_da381c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/insertion-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/insertion-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/insertion-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort_e8e408.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort_c041bf.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/selection-sort_0ba73d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/selection-sort_d24b13.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/selection-sort_f03ab6.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/selection-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/selection-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/selection-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort_c041bf.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort_295a6a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/bubble-sort_60e1f5.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/bubble-sort_fa12d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/bubble-sort_ee720b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/bubble-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/bubble-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/bubble-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort_295a6a.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort_2221cf.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/shell-sort_3d441c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/shell-sort_21abfa.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/shell-sort_5c15b3.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/shell-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/shell-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/shell-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort_2221cf.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort_eefc49.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/merge-sort_bde955.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/merge-sort_3d471a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/merge-sort_8993d8.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/merge-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/merge-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/merge-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort_eefc49.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort_c24ae0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/heap-sort_cd3c6f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/heap-sort_6422d4.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/heap-sort_f79bb1.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/heap-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/heap-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/heap-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort_c24ae0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort_f9e492.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort_9b5c11.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort_d8a4d4.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort_b49af5.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort_f9e492.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way_562364.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-3-way_66dfa1.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-3-way_6323f8.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-3-way_d176ee.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-3-way-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-3-way-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-3-way-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way_562364.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/nearly-sorted-initial-order">
                                                Nearly Sorted
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort_9308ec.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/insertion-sort_e2d77c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/insertion-sort_335e06.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/insertion-sort_93cefb.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/insertion-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/insertion-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/insertion-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort_9308ec.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort_cd40d7.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/selection-sort_b8dafe.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/selection-sort_ef1364.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/selection-sort_316f7c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/selection-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/selection-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/selection-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort_cd40d7.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort_0b3e0c.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/bubble-sort_bee1a7.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/bubble-sort_009ebe.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/bubble-sort_fe9aa2.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/bubble-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/bubble-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/bubble-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort_0b3e0c.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort_a93035.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/shell-sort_3c3865.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/shell-sort_8486a8.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/shell-sort_d88925.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/shell-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/shell-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/shell-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort_a93035.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort_298f43.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/merge-sort_01775a.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/merge-sort_8a3328.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/merge-sort_53e112.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/merge-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/merge-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/merge-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort_298f43.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort_8b46b4.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/heap-sort_36c8bf.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/heap-sort_d4b09d.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/heap-sort_38af6f.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/heap-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/heap-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/heap-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort_8b46b4.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort_6d0a0f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort_7633d5.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort_bb19d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort_ec1ec0.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort_6d0a0f.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way_591930.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-3-way_72d51d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-3-way_d43a48.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-3-way_0513c0.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-3-way-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-3-way-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-3-way-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way_591930.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/reversed-initial-order">
                                                Reversed
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort_c3fe77.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/insertion-sort_7994ed.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/insertion-sort_a942b6.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/insertion-sort_df4ad2.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/insertion-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/insertion-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/insertion-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort_c3fe77.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort_1cbff0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/selection-sort_077cf2.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/selection-sort_8eea18.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/selection-sort_5a466b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/selection-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/selection-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/selection-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort_1cbff0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort_deb42a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/bubble-sort_50ad90.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/bubble-sort_3c76cd.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/bubble-sort_4ea522.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/bubble-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/bubble-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/bubble-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort_deb42a.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort_d8d8aa.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/shell-sort_f8229e.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/shell-sort_e6d580.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/shell-sort_b6e3a5.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/shell-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/shell-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/shell-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort_d8d8aa.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort_c756d0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/merge-sort_39ad6f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/merge-sort_2144ca.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/merge-sort_050946.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/merge-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/merge-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/merge-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort_c756d0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort_bda2e4.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/heap-sort_9563a3.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/heap-sort_7100f6.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/heap-sort_e9fe4d.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/heap-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/heap-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/heap-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort_bda2e4.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort_b20994.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort_b4ee0d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort_c09d64.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort_fddc1f.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort_b20994.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way_b19aeb.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-3-way_976599.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-3-way_5e2366.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-3-way_fff8b4.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-3-way-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-3-way-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-3-way-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way_b19aeb.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/few-unique-keys">
                                                Few Unique
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort_c6994f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/insertion-sort_de9bff.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/insertion-sort_78bc93.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/insertion-sort_7fda0b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/insertion-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/insertion-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/insertion-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort_c6994f.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort_d0363f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/selection-sort_5e1c40.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/selection-sort_ef5c5d.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/selection-sort_e7de1a.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/selection-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/selection-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/selection-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort_d0363f.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort_26c3f3.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/bubble-sort_f5dd7f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/bubble-sort_e3e515.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/bubble-sort_dadf2d.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/bubble-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/bubble-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/bubble-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort_26c3f3.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort_ae5972.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/shell-sort_44e0d0.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/shell-sort_0b4a42.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/shell-sort_59913c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/shell-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/shell-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/shell-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort_ae5972.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort_770e0a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/merge-sort_520460.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/merge-sort_7fdad1.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/merge-sort_424f96.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/merge-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/merge-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/merge-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort_770e0a.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort_e05cd3.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/heap-sort_38c270.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/heap-sort_860192.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/heap-sort_6fba35.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/heap-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/heap-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/heap-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort_e05cd3.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort_3f91ad.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort_0c1786.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort_478521.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort_ba7e99.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort_3f91ad.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way_ce86e1.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-3-way_85d944.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-3-way_95f230.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-3-way_84116e.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-3-way-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-3-way-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-3-way-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way_ce86e1.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="sorting_algorithms_table-container for-mobile">
                                <thead>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play is-black" data-role="reload_all" href="#">
                                            </a>
                                            <a class="sorting_algorithms_table-play_all" data-role="reload_all" href="#">
                                                Play All
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/random-initial-order">
                                                Random
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/nearly-sorted-initial-order">
                                                Nearly Sorted
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/reversed-initial-order">
                                                Reversed
                                            </a>
                                        </th>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_col" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/few-unique-keys">
                                                Few Unique
                                            </a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/insertion-sort">
                                                Insertion
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort_e8e408.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/insertion-sort_997a0c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/insertion-sort_73d4d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/insertion-sort_da381c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/insertion-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/insertion-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/insertion-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/insertion-sort_e8e408.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort_9308ec.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/insertion-sort_e2d77c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/insertion-sort_335e06.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/insertion-sort_93cefb.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/insertion-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/insertion-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/insertion-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/insertion-sort_9308ec.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort_c3fe77.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/insertion-sort_7994ed.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/insertion-sort_a942b6.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/insertion-sort_df4ad2.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/insertion-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/insertion-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/insertion-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/insertion-sort_c3fe77.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort_c6994f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/insertion-sort_de9bff.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/insertion-sort_78bc93.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/insertion-sort_7fda0b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/insertion-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/insertion-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/insertion-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/insertion-sort_c6994f.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/selection-sort">
                                                Selection
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort_c041bf.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/selection-sort_0ba73d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/selection-sort_d24b13.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/selection-sort_f03ab6.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/selection-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/selection-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/selection-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/selection-sort_c041bf.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort_cd40d7.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/selection-sort_b8dafe.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/selection-sort_ef1364.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/selection-sort_316f7c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/selection-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/selection-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/selection-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/selection-sort_cd40d7.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort_1cbff0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/selection-sort_077cf2.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/selection-sort_8eea18.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/selection-sort_5a466b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/selection-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/selection-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/selection-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/selection-sort_1cbff0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort_d0363f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/selection-sort_5e1c40.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/selection-sort_ef5c5d.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/selection-sort_e7de1a.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/selection-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/selection-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/selection-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/selection-sort_d0363f.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/bubble-sort">
                                                Bubble
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort_295a6a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/bubble-sort_60e1f5.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/bubble-sort_fa12d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/bubble-sort_ee720b.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/bubble-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/bubble-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/bubble-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/bubble-sort_295a6a.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort_0b3e0c.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/bubble-sort_bee1a7.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/bubble-sort_009ebe.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/bubble-sort_fe9aa2.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/bubble-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/bubble-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/bubble-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/bubble-sort_0b3e0c.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort_deb42a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/bubble-sort_50ad90.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/bubble-sort_3c76cd.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/bubble-sort_4ea522.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/bubble-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/bubble-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/bubble-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/bubble-sort_deb42a.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort_26c3f3.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/bubble-sort_f5dd7f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/bubble-sort_e3e515.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/bubble-sort_dadf2d.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/bubble-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/bubble-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/bubble-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/bubble-sort_26c3f3.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/shell-sort">
                                                Shell
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort_2221cf.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/shell-sort_3d441c.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/shell-sort_21abfa.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/shell-sort_5c15b3.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/shell-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/shell-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/shell-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/shell-sort_2221cf.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort_a93035.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/shell-sort_3c3865.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/shell-sort_8486a8.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/shell-sort_d88925.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/shell-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/shell-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/shell-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/shell-sort_a93035.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort_d8d8aa.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/shell-sort_f8229e.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/shell-sort_e6d580.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/shell-sort_b6e3a5.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/shell-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/shell-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/shell-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/shell-sort_d8d8aa.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort_ae5972.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/shell-sort_44e0d0.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/shell-sort_0b4a42.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/shell-sort_59913c.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/shell-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/shell-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/shell-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/shell-sort_ae5972.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/merge-sort">
                                                Merge
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort_eefc49.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/merge-sort_bde955.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/merge-sort_3d471a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/merge-sort_8993d8.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/merge-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/merge-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/merge-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/merge-sort_eefc49.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort_298f43.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/merge-sort_01775a.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/merge-sort_8a3328.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/merge-sort_53e112.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/merge-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/merge-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/merge-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/merge-sort_298f43.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort_c756d0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/merge-sort_39ad6f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/merge-sort_2144ca.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/merge-sort_050946.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/merge-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/merge-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/merge-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/merge-sort_c756d0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card" style="display: none;">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort_770e0a.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/merge-sort_520460.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/merge-sort_7fdad1.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/merge-sort_424f96.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/merge-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/merge-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/merge-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/merge-sort_770e0a.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/heap-sort">
                                                Heap
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort_c24ae0.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/heap-sort_cd3c6f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/heap-sort_6422d4.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/heap-sort_f79bb1.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/heap-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/heap-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/heap-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/heap-sort_c24ae0.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort_8b46b4.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/heap-sort_36c8bf.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/heap-sort_d4b09d.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/heap-sort_38af6f.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/heap-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/heap-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/heap-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/heap-sort_8b46b4.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort_bda2e4.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/heap-sort_9563a3.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/heap-sort_7100f6.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/heap-sort_e9fe4d.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/heap-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/heap-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/heap-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/heap-sort_bda2e4.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort_e05cd3.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/heap-sort_38c270.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/heap-sort_860192.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/heap-sort_6fba35.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/heap-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/heap-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/heap-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/heap-sort_e05cd3.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/quick-sort">
                                                Quick
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort_f9e492.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort_9b5c11.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort_d8a4d4.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort_b49af5.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort_f9e492.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort_6d0a0f.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort_7633d5.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort_bb19d2.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort_ec1ec0.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort_6d0a0f.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort_b20994.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort_b4ee0d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort_c09d64.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort_fddc1f.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort_b20994.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort_3f91ad.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort_0c1786.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort_478521.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort_ba7e99.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort_3f91ad.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <a class="sorting_algorithms_table-play" data-role="reload_row" href="#">
                                            </a>
                                            <a href="/developers/sorting-algorithms/quick-sort-3-way">
                                                Quick3
                                            </a>
                                        </th>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way_562364.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-3-way_66dfa1.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-3-way_6323f8.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-3-way_d176ee.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way-0_dc86a8.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/random-initial-order/quick-sort-3-way-0_436051.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/random-initial-order/quick-sort-3-way-0_65e37a.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/random-initial-order/quick-sort-3-way-0_f83472.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/random-initial-order/quick-sort-3-way_562364.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way_591930.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-3-way_72d51d.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-3-way_d43a48.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-3-way_0513c0.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way-0_2574ce.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/nearly-sorted-initial-order/quick-sort-3-way-0_d7227f.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/nearly-sorted-initial-order/quick-sort-3-way-0_84f462.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/nearly-sorted-initial-order/quick-sort-3-way-0_f0bb4e.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/nearly-sorted-initial-order/quick-sort-3-way_591930.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way_b19aeb.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-3-way_976599.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-3-way_5e2366.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-3-way_fff8b4.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way-0_09cbac.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/reversed-initial-order/quick-sort-3-way-0_1e78fa.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/reversed-initial-order/quick-sort-3-way-0_9c219f.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/reversed-initial-order/quick-sort-3-way-0_e3abff.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/reversed-initial-order/quick-sort-3-way_b19aeb.gif"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sorting_algorithms_table-td" data-role="td">
                                                <div class="sorting_algorithms_table-hover_card" data-role="hover_card">
                                                    <div class="sorting_algorithms_table-hover_card_actions">
                                                        <div class="sorting_algorithms_table-play is-white">
                                                        </div>
                                                        Play animation
                                                    </div>
                                                </div>
                                                <img class="sorting_algorithms_table-image" data-animated='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way_ce86e1.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-3-way_85d944.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-3-way_95f230.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-3-way_84116e.gif"}' data-role="sorting_example" data-static='{"20":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way-0_1f040b.gif","30":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/30/few-unique-keys/quick-sort-3-way-0_cce8c4.gif","40":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/40/few-unique-keys/quick-sort-3-way-0_80e7ea.gif","50":"https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/50/few-unique-keys/quick-sort-3-way-0_fb0f69.gif"}' src="https://assets.toptal.io/assets/front/static/public/blocks/sorting_algorithms/animations/20/few-unique-keys/quick-sort-3-way_ce86e1.gif"/>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="grid-row-inner has-big_padding has-no_top_padding">
                        <div class="sorting_algorithms_grid">
                            <div class="sorting_algorithms_grid-column">
                                <h2 class="sorting_algorithms-subtitle">
                                    Algorithm:
                                </h2>
                                <div class="content_body sorting_algorithms-content">
                                    <ul class="sorting_algorithms-links">
                                        <li>
                                            <a href="/developers/sorting-algorithms/insertion-sort">
                                                Insertion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/selection-sort">
                                                Selection
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/bubble-sort">
                                                Bubble
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/shell-sort">
                                                Shell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/merge-sort">
                                                Merge
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/heap-sort">
                                                Heap
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/quick-sort">
                                                Quick
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/quick-sort-3-way">
                                                Quick3
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h2 class="sorting_algorithms-subtitle">
                                    Initial condition:
                                </h2>
                                <div class="content_body sorting_algorithms-content">
                                    <ul class="sorting_algorithms-links">
                                        <li>
                                            <a href="/developers/sorting-algorithms/random-initial-order">
                                                Random
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/nearly-sorted-initial-order">
                                                Nearly Sorted
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/reversed-initial-order">
                                                Reversed
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/developers/sorting-algorithms/few-unique-keys">
                                                Few Unique
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h2 class="sorting_algorithms-subtitle">
                                    Problem size:
                                </h2>
                                <div class="content_body sorting_algorithms-content">
                                    <ul class="sorting_algorithms-links has-no_margin">
                                        <li>
                                            <a data-role="problem_size" data-size="20" href="#">
                                                20
                                            </a>
                                        </li>
                                        <li>
                                            <a data-role="problem_size" data-size="30" href="#">
                                                30
                                            </a>
                                        </li>
                                        <li>
                                            <a data-role="problem_size" data-size="40" href="#">
                                                40
                                            </a>
                                        </li>
                                        <li>
                                            <a data-role="problem_size" data-size="50" href="#">
                                                50
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sorting_algorithms_grid-column">
                                <h2 class="sorting_algorithms-subtitle">
                                    Key:
                                </h2>
                                <div class="content_body sorting_algorithms-content">
                                    <ul>
                                        <li>
                                            Black values are sorted.
                                        </li>
                                        <li>
                                            Gray values are unsorted.
                                        </li>
                                        <li>
                                            A red triangle marks the algorithm position.
                                        </li>
                                        <li>
                                            Dark gray values denote the current interval (shell, merge, quick).
                                        </li>
                                        <li>
                                            A pair of red triangles marks the left and right pointers (quick).
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-row-inner has-big_padding has-no_top_padding">
                        <h2 class="sorting_algorithms-subtitle">
                            Discussion:
                        </h2>
                        <div class="content_body sorting_algorithms-content">
                            <p>
                                <strong>
                                    These pages show 8 different sorting algorithms on 4 different initial conditions. These visualizations are intended to:
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Show how each algorithm operates.
                                </li>
                                <li>
                                    Show that there is no best sorting algorithm.
                                </li>
                                <li>
                                    Show the advantages and disadvantages of each algorithm.
                                </li>
                                <li>
                                    Show that worse-case asymptotic behavior is not always the deciding factor in choosing an algorithm.
                                </li>
                                <li>
                                    Show that the initial condition (input order and key distribution) affects performance as much as the algorithm choice.
                                </li>
                            </ul>
                            <p>
                                <strong>
                                    The ideal sorting algorithm would have the following properties:
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Stable: Equal keys aren’t reordered.
                                </li>
                                <li>
                                    Operates in place, requiring O(1) extra space.
                                </li>
                                <li>
                                    Worst-case O(n·lg(n)) key comparisons.
                                </li>
                                <li>
                                    Worst-case O(n) swaps.
                                </li>
                                <li>
                                    Adaptive: Speeds up to O(n) when data is nearly sorted or when there are few unique keys.
                                </li>
                            </ul>
                            <p>
                                <strong>
                                    There is no algorithm that has all of these properties, and so the choice of sorting algorithm depends on the application.
                                </strong>
                            </p>
                            <blockquote>
                                <p>
                                    Sorting is a vast topic; this site explores the topic of in-memory generic algorithms for arrays. External sorting, radix sorting, string sorting, and linked list sorting—all wonderful and interesting topics—are deliberately omitted to limit the scope of discussion.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </section>
                <section class="grid-row has-top_border">
                    <div class="grid-row-inner has-big_padding sorting_algorithms_guides">
                        <h2 class="sorting_algorithms_guides-title">
                            Preparing for a technical interview? Check out our interview guides.
                        </h2>
                        <div class="sorting_algorithms_guides-items">
                            <a class="tag has-text_shadow" href="/java#hiring-guide">
                                Java
                            </a>
                            <a class="tag has-text_shadow" href="/javascript#hiring-guide">
                                JavaScript
                            </a>
                            <a class="tag has-text_shadow" href="/c-plus-plus#hiring-guide">
                                C++
                            </a>
                            <a class="tag has-text_shadow" href="/php#hiring-guide">
                                PHP
                            </a>
                            <a class="tag has-text_shadow" href="/python#hiring-guide">
                                Python
                            </a>
                            <a class="tag has-text_shadow" href="/ruby#hiring-guide">
                                Ruby
                            </a>
                            <a class="tag has-text_shadow" href="/c-sharp#hiring-guide">
                                C#
                            </a>
                        </div>
                    </div>
                </section>
                <section class="grid-row has-top_border">
                    <div class="grid-row-inner has-big_padding">
                        <h2 class="sorting_algorithms-title">
                            References
                        </h2>
                        <div class="content_body sorting_algorithms-content">
                            <p>
                                <a href="http://www.informit.com/store/product.aspx?isbn=0201361205" rel="noopener noreferrer">
                                    Algorithms in Java, Parts 1-4, 3rd edition
                                </a>
                                by
                                <a href="http://www.cs.princeton.edu/~rs/" rel="noopener noreferrer">
                                    Robert Sedgewick
                                </a>
                                . Addison Wesley, 2003.
                            </p>
                            <p>
                                <a href="https://www.cs.princeton.edu/~rs/talks/QuicksortIsOptimal.pdf" rel="noopener noreferrer">
                                    Quicksort is Optimal
                                </a>
                                by
                                <a href="http://www.cs.princeton.edu/~rs/" rel="noopener noreferrer">
                                    Robert Sedgewick
                                </a>
                                and Jon Bentley, Knuthfest, Stanford University, January, 2002.
                            </p>
                            <p>
                                Dual Pivot Quicksort:
                                <a href="http://grepcode.com/file/repository.grepcode.com/java/root/jdk/openjdk/7-b147/java/util/DualPivotQuicksort.java" rel="noopener noreferrer">
                                    Code
                                </a>
                                by
                                <a href="http://permalink.gmane.org/gmane.comp.java.openjdk.core-libs.devel/2628" rel="noopener noreferrer">
                                    Discussion
                                </a>
                                .
                            </p>
                            <p>
                                <a href="http://www.youtube.com/watch?v=lyZQPjUT5B4" rel="noopener noreferrer">
                                    Bubble-sort with Hungarian (“Csángó”) folk dance
                                </a>
                                YouTube video, created at Sapientia University, Tirgu Mures (Marosvásárhely), Romania.
                            </p>
                            <p>
                                <a href="http://www.youtube.com/watch?v=Ns4TPTC8whw" rel="noopener noreferrer">
                                    Select-sort with Gypsy folk dance
                                </a>
                                YouTube video, created at Sapientia University, Tirgu Mures (Marosvásárhely), Romania.
                            </p>
                            <p>
                                <a href="http://www.youtube.com/watch?v=SJwEwA5gOkM" rel="noopener noreferrer">
                                    Sorting Out Sorting
                                </a>
                                , Ronald M. Baecker with the assistance of David Sherman, 30 minute color sound film, Dynamic Graphics Project, University of Toronto, 1981. Excerpted and reprinted in SIGGRAPH Video Review 7, 1983. Distributed by Morgan Kaufmann, Publishers.
                                <a href="http://www.youtube.com/watch?v=JdXoUgYQebM" rel="noopener noreferrer">
                                    Excerpt
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer class="hide_in_webview">
                <section class="grid-row page_footer_legal-wrapper has-no_bottom_padding">
                    <div class="grid-row-inner has-medium_padding page_footer_legal is-wide">
                        <div class="logo-wrapper page_footer_legal-logotype">
                            <a class="logo is-mini is-link" href="https://www.toptal.com/">
                                Toptal
                            </a>
                            <p class="logo-motto is-mini">
                                Hire the top 3% of freelance talent
                            </p>
                        </div>
                        <ul class="page_footer_legal-links">
                            <li class="page_footer_legal-links_item is-copyright">
                                <p class="page_footer_legal-copyright no-border">
                                    © Copyright 2010 - 2018 Toptal, LLC
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </footer>
        </div>
        <div class="layout_layer-hover_cover" style="display: none;">
        </div>
        <div class="layout-overlay" data-view="layout#overlay">
        </div>
        <div data-view="bounce_modals#events">
            <div data-view="bounce_modals#modal">
            </div>
        </div>
        <div class="notification-container" data-view="notifications#service">
        </div>
        <script>
            setTimeout(function () {
  classNameWithFont = document.documentElement.className + ' wf-active'
  document.documentElement.className = classNameWithFont
}, 0);
        </script>
        <script src="https://assets.toptal.io/assets/public-1fb27e8673461529abf9.js">
        </script>
        <script src="https://assets.toptal.io/assets/blog-9b092247e43759b074f8.js">
        </script>
        <div class="layout-counters">
            <script>
                if (typeof(window.Widgets) !== 'undefined') {
  var appId = 'UA-21104039-1';
  if (appId.length > 0 && !(window.googleAnalytics instanceof Widgets.GoogleAnalytics)) {
    window.googleAnalytics = new Widgets.GoogleAnalytics(appId, 'auto');
    window.googleAnalytics.bucketRole('', '');

    if (typeof(window.gon) !== 'undefined' && gon['ga_settings']){
      window.googleAnalytics.grouping(gon['ga_settings']['group']);
    }

    if (typeof(window.gon) !== 'undefined' && gon['chameleon_current_experiments']) {
      for (var experiment_key in gon['chameleon_current_experiments']) {
        var experiment = gon['chameleon_current_experiments'][experiment_key];
        if (experiment.google_analytics_dimension !== null) {
          window.googleAnalytics.set(experiment.google_analytics_dimension, experiment.variant_key);
        }
      }
    }

    window.googleAnalytics.trackPageview();
    window.googleAnalytics.track15secondsRead();
  }
}
            </script>
            <script async="" defer="" src="https://cdn.distiltag.com/api/v1/script/A6qhozMiYLpV2VKc8wSHaEmc3saOMhcrxAFcCFAt?GA_TID=UA-21104039-1&GA_CDI=14" type="text/javascript">
            </script>
            <noscript>
                <img src="https://cdn.distiltag.com/api/v1/noscript/A6qhozMiYLpV2VKc8wSHaEmc3saOMhcrxAFcCFAt?GA_TID=UA-21104039-1&amp;GA_CDI=14" />
            </noscript>
            <script>
                // We are checking if window.analytics has the track function in case some dom element has the id equal analytics
if (!window.analytics || typeof window.analytics.track !== 'function') {
  // We do this because if some dom element has id equal analytics we need to override it, otherwise it wouldn't set analytics right
  window.analytics = undefined
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["setAnonymousId", "trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
  analytics.load('jnS4QsHOCAOeG6XvMDCjD9n9bAcQ53Mb');
  }}();
}
(function() {
  function readVisitorIdCookie() {
    var cookieName = 'visitor_id=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].replace(/^\s+|\s+$/g, '');
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.split('=')[1];
      }
    }
  }
  analytics.setAnonymousId(readVisitorIdCookie());
  
  analytics.page('sorting_algorithms#index');
})();
            </script>
            <script async="" defer="" id="hs-script-loader" src="//js.hs-scripts.com/2799924.js" type="text/javascript">
            </script>
            <script>
                var _hsq = window._hsq = window._hsq || [];
            </script>
            <script>
                (function() {
  var accountId = 41085
  if (accountId && window.Widgets && window.Widgets.Criteo && !window.criteo) {
    window.criteo = new Widgets.Criteo(accountId)
  }
})()
            </script>
            <script>
                !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '463369723801939');
fbq('track', 'PageView');
            </script>
            <noscript>
                <img height="1" src="https://www.facebook.com/tr?id=463369723801939&amp;ev=PageView&amp;noscript=1" width="1" />
            </noscript>
            <iframe frameborder="0" height="1" scrolling="no" src="https://www.attributiontracker.com/tracker/account_visit?tt_visit=1" width="1">
            </iframe>
            <script type="text/javascript">
                (function(A, d, S, t, a, g, e) {
    A['AdstageAnalytics'] = a;
    A[a] = A[a] || function() {
      (A[a].q = A[a].q || []).push(arguments)
    };
    A[a].l = 1 * new Date();
    g = d.createElement(S), e = d.getElementsByTagName(S)[0];
    g.async = 1;
    g.src = t;
    e.parentNode.insertBefore(g, e);
  })(window, document, 'script', '//assets.adstage.io/analytics.js', '_as');
  _as('create', 'e2dd65eb-07a1-4d93-874a-fe6dac5a8b64');
  _as('send', 'pageview');
            </script>
            <script>
                setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5977.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
            </script>
            <script type="text/javascript">
                _bizo_data_partner_id = "8663";
            </script>
            <script type="text/javascript">
                (function() {
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = (window.location.protocol === "https:" ? "https://sjs" : "http://js") + ".bizographics.com/insight.min.js";
  s.parentNode.insertBefore(b, s);
})();
            </script>
            <noscript>
                <img height="1" width="1" alt="" style="display:none;" src="//www.bizographics.com/collect/?pid=8663&fmt=gif" />
            </noscript>
        </div>
        <script>
            window.criteo && window.criteo.sendEvent('viewHome')
        </script>
        <iframe frameborder="0" height="0" id="AYAH_iframe1520825867110" scrolling="no" src="https://n-distil.areyouahuman.com/kitten?ak=ed4c61b2c59efe90ae9b0b0d0e054d44d&pk=A6qhozMiYLpV2VKc8wSHaEmc3saOMhcrxAFcCFAt&AYAH_VERSION=2.0&cookiesync=true" style="border: none; overflow: hidden; display: none;" width="0">
        </iframe>
        <iframe allowtransparency="true" frameborder="0" scrolling="no" src="https://platform.twitter.com/widgets/widget_iframe.2e798283373a8137c24e277b9b9620d6.html?origin=https%3A%2F%2Fwww.toptal.com" style="display: none;">
        </iframe>
        <div id="criteo-tags-div" style="display: none;">
        </div>
        <iframe allowfullscreen="true" allowtransparency="true" frameborder="0" id="rufous-sandbox" scrolling="no" style="position: absolute; visibility: hidden; display: none; width: 0px; height: 0px; padding: 0px; border: none;" title="Twitter analytics iframe">
        </iframe>
        <script src="https://px.ads.linkedin.com/collect/?time=1520825870672&pid=8663&url=https%3A%2F%2Fwww.toptal.com%2Fdevelopers%2Fsorting-algorithms%2F&pageUrl=https%3A%2F%2Fwww.toptal.com%2Fdevelopers%2Fsorting-algorithms%2F&ref=&fmt=js&s=1" type="text/javascript">
        </script>
    </body>
</html>