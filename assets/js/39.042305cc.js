(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{575:function(e,s,t){"use strict";t.r(s);var r=t(5),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"after-you-enter-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#after-you-enter-url"}},[e._v("#")]),e._v(" After you enter URL...")]),e._v(" "),t("p",[e._v("Suppose, you enter the following URL on the browser:")]),e._v(" "),t("p",[t("code",[e._v("http://ngninja.com/posts/javascript-closures-made-super-easy")])]),e._v(" "),t("h3",{attrs:{id:"_1-parse-the-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-parse-the-url"}},[e._v("#")]),e._v(" 1. Parse the URL")]),e._v(" "),t("p",[e._v("The browser first parses the above URL and finds out the following information:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Protocol: HTTP\nHost: ngninja.com\nPort: (not necessary in this case as the server is listening on the default HTTP port)\nPath: /javascript-closures-made-super-easy\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"/images/url1.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-check-the-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-check-the-cache"}},[e._v("#")]),e._v(" 2. Check the cache")]),e._v(" "),t("p",[e._v("Once the browser is finished parsing the above information, it checks its cache to see if any previous request was made to the same URL. If it finds such entry and that cache entry is not expired, it just decodes the response of that request and renders it appropriately "),t("a",{attrs:{href:"#jump"}},[e._v("refer step #7")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/url2.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_3-contact-os-for-the-ip-address-of-the-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-contact-os-for-the-ip-address-of-the-server"}},[e._v("#")]),e._v(" 3. Contact OS for the IP address of the server")]),e._v(" "),t("p",[e._v("If it does not find any such cache object, it checks with the OS of the system- if it has a cached copy of the IP address of the domain (ngninja.com).")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/url3.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_4-os-responds-with-the-ip-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-os-responds-with-the-ip-address"}},[e._v("#")]),e._v(" 4. OS responds with the IP address")]),e._v(" "),t("p",[e._v("If the OS has the IP address- great! It just forwards it to the browser.")]),e._v(" "),t("p",[e._v("If the OS does not have the IP address, a request is made to the configured DNS server of your machine.")]),e._v(" "),t("blockquote",[t("p",[e._v("A DNS server is nothing but a database of network names and its IP addresses.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/url4.jpg",alt:""}})]),e._v(" "),t("p",[e._v("If the requested DNS server knows the domain - you are at luck. If not, it calls another DNS server which is configured for deferring its requests. This process happens recursively until the domain is found, or until the request is timed out.")]),e._v(" "),t("p",[e._v("In case, no record of that domain is found- browser gives an error something like "),t("code",[e._v("Cannot find the server ngninja.com.")])]),e._v(" "),t("p",[e._v("But assuming the record is found, the OS gets the IP address from the DNS server, and it is then forwarded to the browser.")]),e._v(" "),t("h3",{attrs:{id:"_5-http-request-is-made"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-request-is-made"}},[e._v("#")]),e._v(" 5. HTTP request is made")]),e._v(" "),t("p",[e._v("The browser now has a valid IP address for the requested domain. The browser then gathers all the request data to be sent to the server. Then the browser sets up a TCP connection with the server with that IP address and sends the HTTP request to the server.")]),e._v(" "),t("p",[e._v("The request consists of "),t("strong",[e._v("metadata in the header")]),e._v(" of the request and "),t("strong",[e._v("optional data in its body")]),e._v(".")]),e._v(" "),t("p",[e._v("A simple HTTP request will look something like this:")]),e._v(" "),t("h4",{attrs:{id:"general-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-information"}},[e._v("#")]),e._v(" General information:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Request URL: http://ngninja.com/posts/javascript-closures-made-super-easy\nRequest Method: GET\nStatus Code: 200 OK\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h4",{attrs:{id:"header-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#header-content"}},[e._v("#")]),e._v(" Header content:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Accept: text/html,application/xml\nAccept-Language: en-US,en;q=0.8,hi;q=0.6,it;q=0.4\nConnection: keep-alive\nHost: www.cs.virginia.edu\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"_6-server-responds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-server-responds"}},[e._v("#")]),e._v(" 6. Server responds")]),e._v(" "),t("p",[e._v("After the server receives the request from the browser, it processes it and sends back a response to the browser. Type of the response depends on the request being made. The response may contain a JSON object, an XML object, an image file, a video file, or something else.")]),e._v(" "),t("p",[e._v("Also, browsers are intelligent enough to "),t("strong",[e._v("decode errors")]),e._v(" sent by the servers. Based on the error’s status codes it acts appropriately. For example, 200 status code means it’s a successful request. 401 status code means the user is not authorized to make the request, and so on.")]),e._v(" "),t("p",[t("span",{attrs:{id:"jump"}})]),e._v(" "),t("h3",{attrs:{id:"_7-browser-renders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-browser-renders"}},[e._v("#")]),e._v(" 7. Browser renders")]),e._v(" "),t("p",[e._v("Finally, when the browser receives the response, it renders that HTML page. And, if the response is cacheable, the browser "),t("strong",[e._v("stores it in the cache")]),e._v(" for future requests to the same path.")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/_post/render.html"}},[e._v("Rendering Details")]),e._v(" See my blog.")],1)])}),[],!1,null,null,null);s.default=a.exports}}]);