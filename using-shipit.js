(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{55:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,r=n(t(3)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(a,t,o):a[t]=e[t]}return a.default=e,a}(t(0)),i=n(t(2)),l=n(t(113));function n(e){return e&&e.__esModule?e:{default:e}}function d(e,a,t,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&s)for(var l in s)void 0===a[l]&&(a[l]=s[l]);else a||(a=s||{});if(1===i)a.children=r;else if(i>1){for(var n=new Array(i),d=0;d<i;d++)n[d]=arguments[d+3];a.children=n}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const p=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?s.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/auto/","blog/using-shipit.html")+a),s.default.createElement("a",h({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(s),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40":()=>Promise.resolve({default:{src:{src:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40"},preSrc:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",height:80,width:80}})};class m extends s.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?s.default.createElement(l.default,h({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):d("img",{className:(0,i.default)("image",this.props.className),src:e})}}const b=e=>{var a,t;return t=a=class extends s.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};b(()=>t.e(27).then(t.bind(null,114))),b(()=>t.e(27).then(t.bind(null,115)));var f=d(m,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),g=d("p",{className:"title blogTitle"},void 0,"Stress-free Continuous Delivery with auto"),w=d("span",{},void 0," on May 3, 2019",d("span",{})),y=d("div",{className:"blogBody"},void 0,d("p",{},void 0,d("code",{},void 0,"auto")," makes releasing your code a breeze. Instead of manually calculating a version and doing your whole release process manually, ",d("code",{},void 0,"auto")," takes care of it for you."),d("p",{},void 0,"The main command most users use to interact with ",d("code",{},void 0,"auto")," is the shipit command. shipit does all the heaving lifting when releasing your code."),d("p",{},void 0,"When run on master it will:"),d("div",{className:"has-text-centered learnMore"},void 0,d(p,{to:"/auto/blog/using-shipit.html"},void 0,"Read More"))),P=d(m,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),N=d("p",{className:"title blogTitle"},void 0,"Stress-free Continuous Delivery with auto"),k=d("span",{},void 0," on May 3, 2019",d("span",{})),j=d("p",{},void 0,d("code",{},void 0,"auto")," makes releasing your code a breeze. Instead of manually calculating a version and doing your whole release process manually, ",d("code",{},void 0,"auto")," takes care of it for you."),O=d("p",{},void 0,"The main command most users use to interact with ",d("code",{},void 0,"auto")," is the shipit command. shipit does all the heaving lifting when releasing your code."),C=d("p",{},void 0,"When run on master it will:"),S=d("ol",{},void 0,d("li",{},void 0,"Determine if the last merged PR needs to be released"),d("li",{},void 0,"Update a CHANGELOG.md with all you new changes"),d("li",{},void 0,"Publish to NPM"),d("li",{},void 0,"Make a release on GitHub and mark it as latest")),x=d("p",{},void 0,"When run from a PR or locally it will create a canary version."),R=d("hr",{}),T=d("p",{},void 0,d("code",{},void 0,"auto")," does all this magic through GitHub labels. This makes managing outside contribution super easy. Contributors code, you determine the appropriate label, and ",d("code",{},void 0,"auto")," takes care of the rest."),L=d("p",{},void 0,"There are a few types of labels:"),I=d("ol",{},void 0,d("li",{},void 0,"Release Labels"),d("li",{},void 0,"Changelog Labels"),d("li",{},void 0,"Arbitrary labels")),M=d("hr",{}),A=d("p",{},void 0,"These labels will help you release semantically versioned packages. If no label is present ",d("code",{},void 0,"auto")," assumes the PR is a patch."),H=d("ul",{},void 0,d("li",{},void 0,"major: The PR changes the public API in some way. Create a major release"),d("li",{},void 0,"minor: The PR adds a feature to the public API. Create a minor release"),d("li",{},void 0,"patch: The PR fixes a bug. Create a patch release"),d("li",{},void 0,"skip-release: The PR should not be released. This labels can be used in conjunction with the previous labels for when the PR is actually released"),d("li",{},void 0,"internal: Changes only effect how the app is structured or something that doesn't effect the user. This counts as a patch release")),_=d("p",{},void 0,"These labels can be used to make your changelogs more expressive. Add them to PRs with release labels to override what changelog section the changes display in. Or use them on their own to just create a patch release."),D=d("p",{},void 0,"You can configure more changelog sections, read more here."),E=d("p",{},void 0,d("code",{},void 0,"auto")," doesn't use any extra labels, but you can use whatever labels to power more ",d("code",{},void 0,"auto"),"mated workflows with ",d("code",{},void 0,"auto")," label. This command will return the labels for a PR. Using that information you can choose to run extra CI jobs."),U=d("p",{},void 0,"For example,. the following will only run the test:visual script when the PR has has the Visual label."),q=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,d("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",d("span",{className:"hljs-variable"},void 0,"$PATH"),d("br",{}),d("br",{}),d("span",{className:"hljs-keyword"},void 0,"if")," [ `auto label --pr ",d("span",{className:"hljs-variable"},void 0,"$PR_NUMBER")," | grep -c ",d("span",{className:"hljs-string"},void 0,"'^Visual'"),"` -ne 0 ];",d("br",{}),d("span",{className:"hljs-keyword"},void 0,"then"),d("br",{}),"    npm run ",d("span",{className:"hljs-built_in"},void 0,"test"),":visual",d("br",{}),d("span",{className:"hljs-keyword"},void 0,"fi"),d("br",{}))),B=d("hr",{}),W=d("p",{},void 0,"Now that you know all of the above, you have all you need to release every build as the correct version. No longer worry what tag to publish to or what version. You should never really have to run ",d("code",{},void 0,"auto")," yourself, the CI will do that on each build!"),$=d("p",{},void 0,"All you have to know is what the labels are and when to use them."),G=d("p",{},void 0,"If you have any questions about how to use ",d("code",{},void 0,"auto")," feel free to ask! I hope you guys enjoy the automated release process! 🎁");var F=class extends s.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://images.unsplash.com/photo-1556473062-062e556b0920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")}render(){return d("div",{className:(0,i.default)("blogPost",this.props.className)},void 0,d("p",{},void 0,this.props.heroUrl),d("section",{},void 0,this.props.stub?d("div",{className:"card"},void 0,d("div",{className:"card-content"},void 0,d("div",{className:"media blogHeader"},void 0,d("div",{className:"media-content has-text-centered"},void 0,f,g,d("p",{className:"subtitle is-6 blogSubtitle"},void 0,d(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),w))),y)):d("div",{className:"card"},void 0,d("div",{className:"card-content"},void 0,d("div",{className:"media blogHeader"},void 0,d("div",{className:"media-content has-text-centered"},void 0,P,N,d("p",{className:"subtitle is-6 blogSubtitle"},void 0,d(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),k))),d("div",{className:"blogBody"},void 0,d("div",{},void 0,j,O,C,S,x,R,d("h2",{id:"how-does-it-work%3F"},void 0,"How does it work? ",d(p,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#how-does-it-work%3F","aria-hidden":"true"})),T,L,I,M,d("h3",{id:"release-labels"},void 0,"Release Labels ",d(p,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#release-labels","aria-hidden":"true"})),A,H,d("h3",{id:"changelog-labels"},void 0,"Changelog Labels ",d(p,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-labels","aria-hidden":"true"})),_,D,d("h3",{id:"arbitrary-labels"},void 0,"Arbitrary labels ",d(p,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#arbitrary-labels","aria-hidden":"true"})),E,U,q,B,d("h2",{id:"wrapping-up"},void 0,"Wrapping Up ",d(p,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#wrapping-up","aria-hidden":"true"})),W,$,G))))))}};a.default=F,e.exports=a.default}}]);
//# sourceMappingURL=using-shipit.js.map