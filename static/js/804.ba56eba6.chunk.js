"use strict";(self.webpackChunkreddit_lite=self.webpackChunkreddit_lite||[]).push([[804],{3804:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var t=n(9439),i=n(2791),a=n(9434),l=n(9126),r=n(6355),c=n(828),o=n(2426),d=n.n(o),m=n(3853),u=n(8356),h=n(1926),x=n(184);function j(e){var s=e.post,n=function(){document.getElementById(s.id).style.display="none"},t=function(){var e=document.getElementById(s.id+"text");e.style.overflow="none",e.style.maxHeight="100%"};if(!s.hint&&s.url.includes("www.reddit.com")&&!s.is_gallery)return(0,x.jsxs)("div",{className:"text-container",id:s.id+"text",onClick:t,children:[(0,x.jsx)("div",{className:"content-text",children:(0,x.jsx)(u.D,{remarkPlugins:[h.Z],children:s.selftext})}),(0,x.jsx)("div",{className:"text-overlay",id:s.id,onClick:n})]});if(""!==s.selftext)return(0,x.jsxs)("div",{className:"text-container",id:s.id+"text",onClick:t,children:[(0,x.jsx)("div",{className:"content-text",children:(0,x.jsx)(u.D,{remarkPlugins:[h.Z],children:s.selftext})}),(0,x.jsx)("div",{className:"text-overlay",id:s.id,onClick:n})]});if("image"===s.post_hint)return(0,x.jsxs)("div",{className:"image-container",onClick:n,children:[(0,x.jsx)("img",{className:"content-img",src:s.url,alt:"",loading:"lazy",decoding:"async"}),s.over_18&&(0,x.jsx)("div",{className:"nsfw-content",id:s.id,children:(0,x.jsxs)("span",{children:["nsfw",(0,x.jsx)("br",{}),"click to view"]})})]});if("hosted:video"===s.post_hint)return(0,x.jsxs)("div",{className:"video-container",onClick:n,children:[(0,x.jsx)("video",{className:"content-video",src:s.media.reddit_video.fallback_url,preload:"metadata",controls:!0}),s.over_18&&(0,x.jsx)("div",{className:"nsfw-content",id:s.id,children:(0,x.jsxs)("span",{children:["nsfw",(0,x.jsx)("br",{}),"click to view"]})})]});if("link"===s.post_hint||!0===s.is_gallery||"rich:video"===s.post_hint||!s.hint){var i,a=s.url;return a.startsWith("https://www.")?i=a.replace("https://www.","").substring(0,20)+"...":a.startsWith("https://www-")?i=a.replace("https://www-","").substring(0,20)+"...":a.startsWith("https://")&&(i=a.replace("https://","").substring(0,20)+"..."),"default"===s.thumbnail||"nsfw"===s.thumbnail||""===s.thumbnail?(0,x.jsxs)("a",{target:"_blank",href:a,alt:s.title,rel:"noreferrer noopener",children:[i,"\xa0",(0,x.jsx)(m.AlO,{className:"link-icon"})]}):(0,x.jsxs)("div",{className:"link-container",children:[(0,x.jsx)("a",{target:"_blank",href:a,alt:s.title,rel:"noreferrer noopener",children:(0,x.jsxs)("div",{className:"thumbnail-container",children:[(0,x.jsx)("img",{className:"link-image",src:s.thumbnail,alt:""}),s.over_18&&(0,x.jsx)("div",{className:"nsfw-content"})]})}),(0,x.jsxs)("a",{target:"_blank",href:a,alt:s.title,rel:"noreferrer noopener",children:[i,"\xa0",(0,x.jsx)(m.AlO,{className:"link-icon"})]})]})}}function v(e){var s=e.comment,n=(0,i.useState)(0),a=(0,t.Z)(n,2),l=a[0],r=a[1],o=(0,i.useState)(!1),m=(0,t.Z)(o,2),j=m[0],v=m[1],p=(0,i.useState)(!1),f=(0,t.Z)(p,2),w=f[0],N=f[1],k=function(e){1===e?(r(1),v(!0),N(!1)):-1===e&&(r(-1),N(!0),v(!1))};return(0,x.jsxs)("div",{className:"comment",children:[(0,x.jsx)("strong",{children:s.author}),(0,x.jsxs)("span",{children:[" - ",d().unix(s.created_utc).fromNow()]}),(0,x.jsx)(u.D,{remarkPlugins:[h.Z],children:s.body}),(0,x.jsxs)("div",{className:"votes",children:[(0,x.jsx)("span",{onClick:function(){return k(1)},className:j?"upvote-active":"upvote","aria-label":"upvote post",children:(0,x.jsx)(c.zay,{})}),(0,x.jsxs)("p",{children:["\xa0",s.ups+l,"\xa0"]}),(0,x.jsx)("span",{onClick:function(){return k(-1)},className:w?"downvote-active":"downvote","aria-label":"downvote post",children:(0,x.jsx)(c.Ie4,{})})]})]})}function p(){return(0,x.jsx)("div",{className:"subreddits-loader"})}var f=n(9247);function w(e){var s=e.post,n=e.loadComments,o=(0,a.I0)(),m=(0,i.useState)(0),u=(0,t.Z)(m,2),h=u[0],w=u[1],N=(0,i.useState)(!1),k=(0,t.Z)(N,2),g=k[0],b=k[1],y=(0,i.useState)(!1),_=(0,t.Z)(y,2),C=_[0],Z=_[1],I=function(e){1===e?(w(1),b(!0),Z(!1)):-1===e&&(w(-1),Z(!0),b(!1))},S=s.comments.map((function(e){return(0,x.jsx)(i.Suspense,{children:(0,x.jsx)(v,{comment:e})},e.id)}));return(0,x.jsxs)("div",{className:"card",id:s.id,children:[s.over_18?(0,x.jsxs)("h2",{children:[s.title," ",(0,x.jsx)("span",{className:"nsfw-tag",children:"nsfw"})]}):(0,x.jsx)("h2",{children:s.title}),(0,x.jsxs)("span",{className:"header-info",children:[(0,x.jsx)("strong",{onClick:function(){return o((0,f.Cl)(s.subreddit))},children:s.subreddit_name_prefixed})," - Posted by ",s.author,s.stickied&&(0,x.jsx)(l.UVq,{className:"pinned"})]}),(0,x.jsx)(j,{post:s}),(0,x.jsxs)("div",{className:"post-info",children:[(0,x.jsxs)("div",{className:"votes",children:[(0,x.jsx)("span",{onClick:function(){return I(1)},className:g?"upvote-active":"upvote","aria-label":"upvote post",children:(0,x.jsx)(c.zay,{})}),(0,x.jsxs)("p",{children:["\xa0",s.ups+h,"\xa0"]}),(0,x.jsx)("span",{onClick:function(){return I(-1)},className:C?"downvote-active":"downvote","aria-label":"downvote post",children:(0,x.jsx)(c.Ie4,{})})]}),(0,x.jsx)("span",{className:"time-ago",children:d().unix(s.created_utc).fromNow()}),(0,x.jsxs)("div",{className:"comments",onClick:function(){var e=document.getElementById(s.id+"comments");n(s.permalink,s.id),e.style.display="initial"},"aria-label":"show comments",children:[(0,x.jsx)("span",{children:(0,x.jsx)(r.DCG,{})}),(0,x.jsxs)("p",{children:["\xa0",s.num_comments,"\xa0"]})]})]}),(0,x.jsxs)("div",{className:"comment-section",id:s.id+"comments",children:[s.commentsLoading?(0,x.jsx)(p,{}):S,(0,x.jsx)("a",{href:"#"+s.id,className:"hide-comments",onClick:function(){document.getElementById(s.id+"comments").style.display="none"},children:"Hide comments"})]})]})}}}]);
//# sourceMappingURL=804.ba56eba6.chunk.js.map