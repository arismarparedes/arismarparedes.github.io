// creating TAGS.
var tags = [			
	[ "title", page.title ],
	[ "title", page.title ],
	[ "meta", "og:title", page.title ],
	[ "meta", "og:locale", page.locale ],
	[ "meta", "og:description", page.description ],
	[ "meta", "og:image", page.image ],
	[ "meta", "og:type", page.type ],
	[ "meta", "og:url", page.url ],
	[ "meta", "og:site_name", page.site_name ],
	[ "meta", "article:publisher", "https://twitter.com/" + page.twitter ],
	[ "meta", "article:author", "https://twitter.com/" + page.twitter ],
	[ "meta", "article:published_time", page.published_time ],
	[ "meta", "article:modified_time", page.modified_time ],
	[ "meta", "twitter:card", "summary_large_image" ],
	[ "meta", "twitter:site", page.site_name ],
	[ "meta", "twitter:title", page.title ],
	[ "meta", "twitter:description", page.description ],
	[ "meta", "twitter:creator", page.twitter ],
	[ "meta", "twitter:image", page.image ],
	[ "meta", "twitter:domain", page.url ],
	[ "meta", "revised", page.modified_time ],
	[ "meta", "author", "@" + page.twitter ],
	[ "meta", "copyright", page.copyright ],
	[ "meta", "description", page.description ],
	[ "meta", "keywords", page.keywords ],
	[ "meta", "robots", page.robots ],
	[ "meta", "canonical", page.url ],
];
(function( tags ){
	tags.forEach(function(tag){
		var head = document.head;
		var type = tag[0];
		if(type === "meta"){
			// for example in meta tags
			var name = tag[1];
			var content = tag[2];
		}else{
			// for example in title
			var content = tag[1];
		}
		var el = document.createElement( type );
		if(type === "meta"){
			el.name = name;
			el.content = content;
		}else{
			el.innerHTML = content;
		}
		head.appendChild(el);
	})
})( tags );
var templates = {}

templates.projects = function(obj){

	return `<h2 class="subtitle is-size-3 article-center bolder" style="margin: 28px auto">
    ${obj.title}
  </h2>
  <figure class="article-center">
    <img style="max-width: 768px;width: 100%;" class="lazyload" data-src="${obj.source}" alt="${obj.title}">
    <figcaption class="is-sr-only">
      <p>
        ${obj.title}
      </p>
    </figcaption>
  </figure>`
}
templates.skills = function(obj){
	return `<section class="col_6">
      <div style="padding: 12px;">
        <h3 class="has-text-white">${obj.name}</h3>
        <div class="progress-bar"><!-- line -->
          <div class="ball" style="left:${obj.percent}"><!-- ball --></div>
          <progress value="${obj.percent}" max="100" class="is-sr-only"></progress>
        </div>
      </div>
    </section>`
}
templates.socials = function(obj){
	return `
	<figure style="padding:${obj.padding};display:inline-block;" class="article-center">
		<a href="${obj.link}" rel="follow">
			<img style="width:${obj.width};" src="${obj.source}" alt="${obj.name}">
		</a>
	</figure>`
}