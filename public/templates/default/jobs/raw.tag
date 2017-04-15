<raw-content>
    <script>
    this.on("update", function(){
        try {
            if (this.opts.content && this.opts.content.length){
                 var content = this.opts.content;
                 content = content.replace(/<[^\/]>[\s|\r|\n]{0,}<\/.+?>/gi, "");

                 content = content.replace(/(&nbsp;)+/gi, " ");
                 content = content.replace(/\s+/gi, " ");
                 content = content.replace(/(<br \/>)+/gi, "");

                 content = content.replace(/<p><br \/><strong>/gi, "<p><strong>");
                 content = content.replace(/<strong>(.+?)<\/strong>:/gi, "<strong>$1:</strong>");
                 content = content.replace(/<em><strong>(.+?)<\/strong><\/em>/gi, "<strong>$1</strong>");
                 content = content.replace(/<strong><em>(.+?)<\/em><\/strong>/gi, "<strong>$1</strong>");
                 content = content.replace(/<\/(\w+)>\s+<(\w+)/gi, "</$1><$2");

                 content = content.replace(/<p><strong>([a-zа-яё\s\.,]+):[\s|\r|\n]?<\/strong><\/p>/gi, "<p class='h'>$1:</p>");
                 content = content.replace(/<strong>([a-zа-яё\s\.,]+):[\s|\r|\n]?<\/strong>/gi, "<p class='h'>$1:</p>");
                 content = content.replace(/<p class='h'>(.+?):<\/p>/gi, "<p class='h'><strong>$1:</strong></p>");
                 content = content.replace(/<p><strong>([a-zа-яё\s\.,]+)(?!:)[\s|\r|\n]?<\/strong><\/p><ul>/gi, "<p class='h'><strong>$1:</strong></p><ul>");
                 content = content.replace(/<p>([a-zа-яё\s\.,]+):[\s|\r|\n]?<\/p><ul>/gi, "<p class='h'><strong>$1:</strong></p><ul>");

                 content = content.replace(/<li>[\s|\r|\n]?<strong>(.+?)<\/strong>[\s|\r|\n]?<\/li>/gi, "<li class='s'><strong>$1</strong></li>");

                 content = content.replace(/<li>[\s|\r|\n]?<p>(.+?)<\/p>[\s|\r|\n]?<\/li>/gi, "<li>$1</li>");

                 content = content.replace(/http:\/\/www\./gi, "http://");

                 var urlRegex =/\b((ht|f)tp(s)?:\/\/[\w]+[^ \,\"\n\r\t<]*)\b/gi;
                 content = content.replace(urlRegex, function(url) {
                     return '<a href="' + url + '" target="_blank">' + url + '</a>';
                 });

                 this.root.innerHTML = convertVideoLinks(content);
            }
            else {
                this.root.innerHTML = 'Компания еще не добавила описание о себе.';
            }
        } catch(e){
            this.root.innerHTML = this.opts.content && this.opts.content.length && this.opts.content || 'Компания еще не добавила описание о себе.';
        }
    	function convertVideoLinks(html)
    	{
    		var iframeStart = '<iframe src="',
    			iframeEnd = '" frameborder="0" allowfullscreen></iframe>',
                regexps = {
                    youtube: /(?:<a\s.+>)https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(&.+)?(?:<\/a>)/gi,
                    vimeo: /(?:<a\s.+>)https?:\/\/(www\.)?vimeo.com\/(\d+)(?:<\/a>)/,
                    image: /((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/ig,
                    url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/ig,
                }

    		if (html.match(regexps.youtube))
    		{
    			html = html.replace(regexps.youtube, iframeStart + '//www.youtube.com/embed/$1' + iframeEnd);
    		}

            if (html.match(regexps.vimeo))
    		{
    			html = html.replace(regexps.vimeo, iframeStart + '//player.vimeo.com/video/$2' + iframeEnd);
    		}

    		return html;
    	}
    })
    </script>
</raw-content>
