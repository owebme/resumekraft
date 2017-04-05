riot.tag2("section-alert",'<div name="wrapper" class="alert__wrapper"> <div class="alert__header"> <h3 class="alert__title">{data.title}</h3> <p if="{data.subtitle}" class="alert__subtitle">{data.subtitle}</p> </div> <div class="alert__buttons"> <div onclick="{onCancel}" onupdate="none" class="alert__button {alert__button--active : data.button === ⁗cancel⁗}">{data.cancel && data.cancel.title ? data.cancel.title : ⁗Отмена⁗}</div> <div onclick="{onSuccess}" onupdate="none" class="alert__button {alert__button--active : data.button === ⁗success⁗}">{data.success && data.success.title ? data.success.title : ⁗OK⁗}</div> </div> </div>',"",'class="alert" data-open="{active}"',function(t){var e=this;$$(e.root);e.active=!1,e.default=function(){return{title:null,subtitle:null}},e.show=function(t){t&&(e.data=_.extend(e.default(),t),e.update({active:!0}))},e.onSuccess=function(){e.data.success&&"function"==typeof e.data.success.callback&&e.data.success.callback(),e.data.button="success",e.hide()},e.onCancel=function(){e.data.cancel&&"function"==typeof e.data.cancel.callback&&e.data.cancel.callback(),e.data.button="cancel",e.hide()},e.hide=function(){e.data.afterHide&&_.isFunction(e.data.afterHide)&&_.onEndTransition(e.wrapper,function(){e.data.afterHide&&e.data.afterHide()}),e.update({active:!1})},e.handleClickOutside=function(t){e.wrapper.contains(t.target)||e.hide()},e.on("updated",function(){e.active?setTimeout(function(){document.addEventListener("click",e.handleClickOutside)},0):document.removeEventListener("click",e.handleClickOutside)})}),riot.tag2("section-loader",'<div class="loader-spinner"></div>',"",'class="loader" data-show="{active}" data-color="{color}"',function(t){var e=this;e.default=function(){return{color:null,active:!0}},e.show=function(t){return e.update(_.extend(e.default(),t)),new Promise(function(t,o){_.onEndTransition(e.root,function(){return t()})})},e.hide=function(){e.update({active:!1})}}),riot.tag2("section-loader-ajax",'<div class="loader-ajax-spinner"></div>',"",'class="loader-ajax" data-color="{state.color}" data-show="{state.active}"',function(t){var e=this;e.default=function(){return{active:!0,color:null}},e.state=e.default(),e.state.active=!1,e.show=function(t){e.state=e.default(),t&&_.extend(e.state,t),e.update(e.state)},e.hide=function(){e.state.active=!1,e.update(e.state)}}),riot.tag2("section-notify",'<div onclick="{hide}" onupdate="none" name="notify" class="notify {\'notify-\' + size}" data-color="{color}" riot-style="{width ? \'width:\' + width : null}">{text}</div>',"",'class="notify-wrapper" data-active="{active}" data-pos="{pos}"',function(t){var e=this;e.active=!1,e.interval=null,e.default=function(){return{active:!0,timeout:1.5,pos:"top-left",size:"m",color:"primary"}},e.on("before-mount",function(){var t=e.default();t.active=!1,_.extend(e,t)}),e.on("mount",function(){app.device.isPhone||setTimeout(function(){e.root.style.display="block"},20)}),e.show=function(t){if(!e.active)return e.active=!0,clearTimeout(e.interval),app.device.isPhone?(e.root.style.display="block",$afterlag.run(function(){e.update(_.extend(e.default(),t))})):e.update(_.extend(e.default(),t)),new Promise(function(t,o){_.onEndTransition(e.notify,function(){return e.autoHide(),t()})})},e.autoHide=function(){e.timeout!==!1&&(e.interval=setTimeout(function(){e.hide()},1e3*e.timeout))},e.hide=function(){clearTimeout(e.interval),e.update({active:!1}),app.device.isPhone&&_.onEndTransition(e.notify,function(){e.root.style.display="none"})}}),riot.tag2("oscreen-loader",'<div class="oScreen__loader__progress" riot-style="width:{status}%" data-anim="{animate}"></div> <div class="oScreen__loader__spinner"></div>',"",'class="oScreen__loader"',function(t){var e=this;e.status=0,e.animate=!1,e.progress=null,e.show=function(t){if(t){if(t.forceShow)return e.html=t.tag(),t.updated&&e.html.one("updated",function(){t.updated(e.html)}),$$(e.parent.scroll).css("transition","none"),e.parent.active=!0,void e.parent.update();e.options=t||{},e.start=t.init||$$.noop,e.beforeShow=t.beforeShow||$$.noop,e.afterShow=t.afterShow||$$.noop,e.callUpdated=t.updated||$$.noop,e.callBeforeUnmount=t.beforeUnmount||$$.noop,e.callUnmount=t.unmount||$$.noop,e.scope=_.isElement(t.scope)?t.scope:$$(t.scope)[0],e.reset(),e.parent.update({loading:!0}),app.device.isMobile&&e.update({animate:!0}),e.start(),_.onEndTransition(e.scope,function(){t.resources?app.loader.resources(t.resources,e.onResourcesLoaded,function(){e.status+=25/t.resources.length,e.updateLoading()}):(e.status+=25,e.onResourcesLoaded(),e.updateLoading())})}},e.init=function(){e.progress.resources&&e.progress.images&&e.progress.html&&(e.status=100,e.updateLoading(),setTimeout(e.hide,175))},e.onImagesLoaded=function(){e.progress.images=!0,e.init()},e.onImagesItemLoaded=function(t,o){e.status+=25/o,e.updateLoading()},e.onResourcesLoaded=function(){e.progress.resources=!0,app.device.isMobile&&(e.animate=!0),$afterlag.run(function(){_.isFunction(e.options.tag)?(e.html=e.options.tag(),e.html?(e.html.one("updated",function(){e.callUpdated(e.html),$afterlag.run(function(){e.onHtmlLoaded(e.options.content)})}),e.refs&&e.html.update()):e.parent.update({loading:!1,animate:!1,active:!1})):e.onHtmlLoaded(e.options.content)}),e.init()},e.onHtmlLoaded=function(t){e.progress.html=!0,e.status+=50,e.animate=!1,e.updateLoading(),app.loader.images($$(t),e.onImagesLoaded,e.onImagesItemLoaded),e.init()},e.hide=function(){e.beforeShow(e.html),e.parent.loading=!1,e.parent.active=!0,e.parent.update(),_.onEndTransition(e.scope,function(){e.afterShow(e.html),e.html.one("before-unmount",function(){e.callBeforeUnmount(e.html)}),e.html.one("unmount",function(){e.callUnmount(e.html)})}),e.reset()},e.reset=function(){e.progress={resources:!1,images:!1,html:!1},e.update({status:0})},e.updateLoading=function(){e.update()}}),riot.tag2("section-pointer",'<div class="oScreen__pointer__shape" riot-style="{state.shape.style}" data-figure="{state.figure}"></div> <div name="msgBox" class="oScreen__pointer__message__wrapper" riot-style="{state.message.style}"> <div class="oScreen__pointer__message fontWeight-{state.fontWeight}" data-position="{state.position}" data-size="{state.size}" data-active="{state.message.active}" riot-style="width:{state.message.width}px">{state.text}</div> </div>',"",'class="oScreen__pointer" data-color="{state.color}" data-open="{active}" active-zone="{state.activeZone}"',function(t){var e=this;e.active=!1,e.on("before-mount",function(){e.state=e.reset()}),e.reset=function(){return{scope:null,shape:{style:null},message:{active:!1,width:480,style:"clear:both"},color:"white",borderColor:"#265cdc",figure:"square",size:"m",fontWeight:"normal",position:null,target:null,text:null,offset:{},width:null,height:null,zoom:null,padding:null,timeout:2,activeZone:!1}},e.on("messageShow",function(){e.state.message.active||(e.state.message.active=!0,_.onEndTransition(e.root,function(){e.update(),setTimeout(function(){e.hide()},1e3*e.state.timeout)}))}),e.show=function(t){if(!t.phone&&app.device.isPhone&&window.$Notify&&t.text)return void $Notify.show({color:"danger",text:t.text});if(!e.active&&t&&(!t||t.target)){_.extend(e.state,t),e.target=e.state.scope?e.state.scope.find(e.state.target):app.$dom.body.find(e.state.target),e.offset=e.target.offset(),"white"==e.state.color||t.borderColor||(e.state.borderColor="white"),e.offset&&(e.offset.top+=e.state.offset.top?e.state.offset.top:0,e.offset.left+=e.state.offset.left?e.state.offset.left:0);var o=e.target.data("width")||e.state.width,a=e.target.data("height")||e.state.height;a&&(e.offset.top-=(parseInt(a)-e.target.outerHeight())/2),o&&(e.offset.left-=(parseInt(o)-e.target.outerWidth())/2);var s=e.target.data("zoom")||e.state.zoom,i=e.target.data("padding")||e.state.padding,n=o?parseInt(o):i?e.target.outerWidth()+2*parseInt(i):e.target.outerWidth(),l=a?parseInt(a):i?e.target.outerHeight()+2*parseInt(i):e.target.outerHeight(),r=s?parseFloat(s):1,c=app.device.isPhone?200:300,d=c/2,p=(i?e.offset.left-parseInt(i):e.offset.left)+n/2,u=(i?e.offset.top-parseInt(i):e.offset.top)+l/2,f=p-d,g=u-d,h=n/c*r,m=l/n*c*r,v=Math.ceil(5/h),b=5*v,w=1e4+20/h,x=null;if("square"==e.state.figure)app.device.isPhone&&(w/=1.05),g=u-m/2,x="-webkit-transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+h+"); transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+h+"); width: "+c+"px; height: "+m+"px; box-shadow: inset 0 0 0 "+v+"px "+e.state.borderColor+", inset 0 0 "+b+"px rgba(0,0,0,0.4); border-radius: "+w+"px";else if("circle"==e.state.figure){var y=Math.sqrt(2)*Math.max(n,l)/2,k=2*y,S=k/c*r,v=Math.ceil(5/S),b=5*v;x="-webkit-transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+S+"); transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+S+"); width: "+c+"px; height: "+c+"px; box-shadow: inset 0 0 0 "+v+"px "+e.state.borderColor+", inset 0 0 "+b+"px rgba(0,0,0,0.4); border-radius: 50%"}e.state.shape.style=x,e.targetWidth=n,e.targetHeight=l,e.cordsMsg(),e.update({active:!0}),e.trigger("messageShow")}},e.cordsMsg=function(){var t=e.offset.top;if(t+e.msgBox.scrollHeight>app.sizes.height-40&&(t=e.offset.top+(app.sizes.height-40)-(t+e.msgBox.scrollHeight)),t<40&&(t=40),app.device.isPhone)e.state.message.width=app.sizes.width-40,"up"==e.state.position?e.state.message.style="top:"+(t+20)+"px; left:20px":"down"==e.state.position&&(e.state.message.style="top:"+(e.offset.top+20+e.targetHeight)+"px; left:20px");else if("right"==e.state.position){e.state.message.style="top:"+t+"px; left:"+(e.offset.left+e.targetWidth)+"px";var o=app.sizes.width-(e.offset.left+e.targetWidth);e.state.message.width=o<e.state.message.width+70?o-70:e.state.message.width}else"left"==e.state.position||"up"==e.state.position?(e.state.message.style="top:"+t+"px; left:"+e.offset.left+"px","left"==e.state.position?e.state.message.width=e.offset.left<e.state.message.width+105?e.offset.left-105:e.state.message.width:"up"==e.state.position&&(e.targetWidth-40<e.state.message.width?e.state.message.style="top:"+t+"px; left:"+(e.offset.left-(e.state.message.width-e.targetWidth+40)/2)+"px":e.state.message.width=e.targetWidth-40)):"down"==e.state.position&&(e.targetWidth-40<e.state.message.width?e.state.message.style="top:"+(e.offset.top+e.targetHeight)+"px; left:"+(e.offset.left-(e.state.message.width-e.targetWidth+40)/2)+"px":(e.state.message.style="top:"+(e.offset.top+e.targetHeight)+"px; left:"+e.offset.left+"px",e.state.message.width=e.targetWidth-40))},e.hide=function(){e.update({active:!1}),_.onEndTransition(e.root,function(){e.update({state:e.reset()})})}}),riot.tag2("section-progress",'<div onclick="{hide}" class="pos-centered"> <div class="anim anim-scale" duration-show="{none : app.device.isPhone}"> <div name="circuful" class="oScreen__progress__circuful"></div> </div> </div>',"",'class="oScreen oScreen__progress {showAnim : animate}" data-color="blue" data-open="{active}"',function(t){var e=this;e.active=!1,e.animate=!1,e.circuful=$$(e.circuful),e.show=function(t){e.update({active:!0}),_.onEndTransition(e.root,function(){e.update({animate:!0}),e.chartRadial(),_.isFunction(t)&&$afterlag.run(function(){t()})})},e.chartRadial=function(){e.circuful.empty().circliful({animation:1,animationStep:2.25,foregroundBorderWidth:app.device.isPhone?10.5:9.5,backgroundBorderWidth:(app.device.isPhone,5),percentageTextSize:28,percent:100,backgroundColor:"rgba(255,255,255,.2)",foregroundColor:"#68fb98",fontColor:"#fff"},function(){e.trigger("loaded")})},e.hide=function(t){_.isFunction(t)?e.one("loaded",function(){e.update({active:!1,animate:!1}),_.onEndTransition(e.root,function(){t()})}):e.update({active:!1,animate:!1})}}),riot.tag2("photo-upload",'<div if="{!uploaded}" class="pos-rel visible-sm visible-xs anim anim-fadeIn zIndex-1 {animated : active}" data-duration="s" delay-show="xs"> <div onclick="{hide}" onupdate="none" class="button__close" data-color="white"></div> </div> <div class="editable__photo__wrapper"> <div class="container anim anim-bt-ease {animated : active}" data-duration="m"> <div class="editable__photo__container col-sm-offset-0 col-sm-24 col-md-offset-1 col-md-22 col-lg-offset-4 col-lg-20" data-uploaded="{uploaded}"> <div class="row image-editor"> <div class="{uploaded ? \'col-xs-24 col-sm-15 col-md-13 col-lg-12\' : \'col-md-24 col-lg-20 text-center\'}"> <div name="imagePreviewEl" class="editable__photo cropit-preview {editable__photo--empty : !uploaded}"> <input name="upload" type="file" class="editable__photo__input cropit-image-input {display-none : uploaded}"> <div if="{app.device.isMobile}" class="editable__photo__text">Выбрать файл</div> <div if="{!app.device.isMobile}" class="editable__photo__text"> Выберите файл <div class="editable__photo__text__or">или</div> перетащите его сюда </div> </div> </div> <div class="editable__photo__control col-xs-24 col-sm-9 col-md-10 col-lg-10 text-left {display-none : !uploaded}"> <div class="pl-s pt-l sm-pl-m xs-p0"> <button class="btn btn-m btn-white-hover btn-strong btn-upper btn-uploadImage mb-l hidden-xs">Другой файл...</button> <div class="c-white fontSize-24 fontFamily-futura mb-m">Масштабирование</div> <div class="mb-l"> <input type="range" class="editable__photo__slider cropit-image-zoom-input"> </div> <div class="nowrap-xs nowrap-md"> <button onclick="{hide}" onupdate="none" class="btn btn-l btn-white-hover btn-strong btn-upper sm-mb-m" type="button">Отменить</button> <button onclick="{onSave}" onupdate="none" class="btn btn-l btn-white-hover btn-strong btn-upper ml-xs sm-ml0" type="button">Сохранить</button> </div> </div> </div> </div> </div> </div> </div>',"",'class="oScreen zIndex-10" data-color="blue" data-open="{active}" style="display:none"',function(t){var e=this,o=$$(e.root);e.active=!1,e.config={export:{type:"image/jpeg",quality:.9,originalSize:!0,maxZoom:1.5}},e.on("mount",function(){e.imageEditor||(e.imageEditor=o.find(".image-editor"),e.imageEditor.cropit({onImageLoaded:function(){e.uploaded||e.update({uploaded:!0}),e.upload.value=""}}),app.config&&app.config.profile&&app.config.profile.photo&&e.init({minWidth:app.config.profile.photo.minWidth,maxHeight:app.config.profile.photo.maxHeight}),o.find(".btn-uploadImage").on("click",function(){$$(e.upload).trigger("click")}))}),e.init=function(t,o){(o||!e.imagePreview&&t)&&(e.imagePreview=$$(e.imagePreviewEl),e.config.minWidth=t.minWidth,e.config.maxHeight=t.maxHeight,e.setInterval=setInterval(function(){e.imageEditor&&e.imageEditor.data&&(clearInterval(e.setInterval),e.init.config(e.imageEditor.data().cropit))},300))},e.init.config=function(t){t.options.maxHeight=e.config.maxHeight,t.options.onSmallImage=function(t){alert("Загружаемое фото слишком маленькое, минимально допустимый размер по ширине "+e.config.minWidth+"px"),e.upload.value=""},t.previewSize={width:e.config.minWidth,height:e.config.maxHeight}},e.show=function(t,a){e.active||(e.active=!0,a&&e.init(a,!0),e.root.style.display="block",$afterlag.run(function(){e.update({uploaded:!1,callback:t?t:null})}),app.device.isPhone||o.on("click",function(t){e.uploaded?o.off("click"):"input"!=t.target.tagName.toLowerCase()&&e.hide()}))},e.onSave=function(t){if(!e.saved){e.saved=!0;var o=$$(t.currentTarget);o.addClass("btn-loading"),setTimeout(function(){var t=e.imageEditor.cropit("export",e.config.export);setTimeout(function(){e.saved=!1,o.removeClass("btn-loading"),e.hide()},300),e.callback(t)},5)}},e.hide=function(){o.off("click"),e.upload.value="",e.update({active:!1}),_.onEndTransition(e.root,function(){e.root.style.display="none"})}}),riot.tag2("share-button",'<div class="shareButton__opener"></div> <div class="shareButton__items"> <div class="shareButton__item" data-social="fb" data-balloon="{\'Поделиться в Facebook\' : opts.tooltip}" data-balloon-color="blue"> <icon-fb></icon-fb> </div> <div class="shareButton__item" data-social="vk" data-balloon="{\'Поделиться в ВКонтакте\' : opts.tooltip}" data-balloon-pos="left" data-balloon-color="blue"> <icon-vk></icon-vk> </div> <div class="shareButton__item" data-social="tw" data-balloon="{\'Поделиться в Twitter\' : opts.tooltip}" data-balloon-pos="left" data-balloon-color="blue"> <icon-tw></icon-tw> </div> <div class="shareButton__item" data-social="dk" data-balloon="{\'Поделиться в Одноклассниках\' : opts.tooltip}" data-balloon-pos="left" data-balloon-color="blue"> <icon-dk></icon-dk> </div> </div>',"",'class="shareButton" data-pos="{opts.pos}"',function(t){this.on("mount",function(){this.share=new app.plugins.share(this.root,{buttons:".shareButton__item",url:"http://resumekraft.ru",share:{title:function(){return $resume.get("post")?$resume.get("post"):app.config.share.title}}})}),this.on("unmount",function(){this.share&&this.share.destroy()})}),riot.tag2("share-button-inline",'<div class="shareButton__inline__item {opts.bgcolor ? \'bg-\' + opts.bgcolor : \'\'} {opts.margin ? \'mlr-\' + opts.margin : \'\'}" data-social="fb" data-balloon="{\'Поделиться в Facebook\' : opts.tooltip}" data-balloon-pos="up"> <icon-fb color="{opts.color}" size="{opts.size}"></icon-fb> </div> <div class="shareButton__inline__item {opts.bgcolor ? \'bg-\' + opts.bgcolor : \'\'} {opts.margin ? \'mlr-\' + opts.margin : \'\'}" data-social="vk" data-balloon="{\'Поделиться в ВКонтакте\' : opts.tooltip}" data-balloon-pos="up"> <icon-vk color="{opts.color}" size="{opts.size}"></icon-vk> </div> <div class="shareButton__inline__item {opts.bgcolor ? \'bg-\' + opts.bgcolor : \'\'} {opts.margin ? \'mlr-\' + opts.margin : \'\'}" data-social="tw" data-balloon="{\'Поделиться в Twitter\' : opts.tooltip}" data-balloon-pos="up"> <icon-tw color="{opts.color}" size="{opts.size}"></icon-tw> </div> <div class="shareButton__inline__item {opts.bgcolor ? \'bg-\' + opts.bgcolor : \'\'} {opts.margin ? \'mlr-\' + opts.margin : \'\'}" data-social="dk" data-balloon="{\'Поделиться в Одноклассниках\' : opts.tooltip}" data-balloon-pos="up"> <icon-dk color="{opts.color}" size="{opts.size}"></icon-dk> </div> <div class="shareButton__inline__item {opts.bgcolor ? \'bg-\' + opts.bgcolor : \'\'} {opts.margin ? \'mlr-\' + opts.margin : \'\'}" data-social="gl" data-balloon="{\'Поделиться в Google+\' : opts.tooltip}" data-balloon-pos="up"> <icon-gl color="{opts.color}" size="{opts.size}"></icon-gl> </div>',"",'class="shareButton__inline" data-size="{opts.size}"',function(t){this.on("mount",function(){this.share=new app.plugins.share(this.root,{buttons:".shareButton__inline__item",url:this.opts.url,share:{title:this.opts.title}})}),this.on("unmount",function(){this.share.destroy()})}),riot.tag2("share-panel",'<div class="share__panel__item" data-social="gl"> <div class="share__panel__item__button" data-balloon="{\'Поделиться в Google+\' : opts.tooltip}" data-balloon-pos="up"> <icon-gl color="{opts.color}" size="{opts.size}"></icon-gl> </div> </div> <div class="share__panel__item" data-social="vk"> <div class="share__panel__item__button" data-balloon="{\'Поделиться в ВКонтакте\' : opts.tooltip}" data-balloon-pos="up"> <icon-vk color="{opts.color}" size="{opts.size}"></icon-vk> </div> </div> <div class="share__panel__item" data-social="fb"> <div class="share__panel__item__button" data-balloon="{\'Поделиться в Facebook\' : opts.tooltip}" data-balloon-pos="up"> <icon-fb color="{opts.color}" size="{opts.size}"></icon-fb> </div> </div> <div class="share__panel__item" data-social="dk"> <div class="share__panel__item__button" data-balloon="{\'Поделиться в Одноклассниках\' : opts.tooltip}" data-balloon-pos="up"> <icon-dk color="{opts.color}" size="{opts.size}"></icon-dk> </div> </div> <div class="share__panel__item" data-social="tw"> <div class="share__panel__item__button" data-balloon="{\'Поделиться в Twitter\' : opts.tooltip}" data-balloon-pos="up"> <icon-tw color="{opts.color}" size="{opts.size}"></icon-tw> </div> </div>',"",'onclick="{hide}" onupdate="none" class="share__panel" data-open="{active}"',function(t){var e=this;e.active=!1,e.on("mount",function(){e.share=new app.plugins.share(e.root,{buttons:".share__panel__item",url:e.opts.url,share:{title:e.opts.title}})}),e.show=function(){e.update({active:!0})},e.hide=function(){e.active=!1,e.parent.update({overlay:!1})},e.on("unmount",function(){e.share.destroy()})}),riot.tag2("text-edit",'<div name="content" class="oScreen__content"> <div class="pos-centered"> <div class="container"> <div class="row"> <div class="textEdit col-sm-22 col-md-20 col-lg-17 centered"> <div class="textEdit__buttons"> <div onclick="{hide}" onupdate="none" class="textEdit__button" data-item="close"></div> <div onclick="{save}" onupdate="none" class="textEdit__button" data-item="save"></div> </div> <textarea name="textarea" class="textarea textarea-xl" placeholder="{item.placeholder}">{item.cursor ? item.cursor.get() : item.value}</textarea> </div> </div> </div> </div> </div>',"",'class="oScreen zIndex-{opts.zindex || \'101\'} c-{opts.textcolor || \'white\'}" data-show="modal" data-color="{opts.color || \'blue\'}" data-open="{active}"',function(t){var e=this;e.active=!1,e.show=function(t){var t=t||{};e.textarea.value=t.cursor?t.cursor.get():t.value,e.update({active:!0,item:t})},e.save=function(){e.item.cursor&&e.item.cursor.set(e.textarea.value),e.item.callback&&e.item.callback(e.textarea.value),e.hide()},e.hide=function(){e.update({active:!1})}}),riot.tag2("section-tutorial",'<div class="tutorial__shape" name="shape" riot-style="{step.style}" data-figure="{step.figure}"></div> <div name="msgBox" class="tutorial__message__wrapper" riot-style="{message.style}"> <div name="msgElem" class="tutorial__message" data-position="{message.position}" data-active="false"> <p class="pos-tr p-m c-grayLight fontSize-m {display-none : !nav.steps}">Шаг {num} из {steps.get().length}</p> <div class="tutorial__message__title">{message.title ? message.title : \'Lorem ipsum dolor sit amet\'}</div> <p class="tutorial__message__text">{message.text ? message.text : \'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\'}</p> <div class="fontSize-0 nowrap {display-none : !nav.buttons}"> <button onclick="{nextStep}" onupdate="none" class="btn btn-{nav.buttons.success.size ?  nav.buttons.success.size : \'m\'} {nav.buttons.success.title ? \'btn-success\' : (endShow ? \'btn-success\' : \'btn-default-hover-success\')} {display-none : nav.buttons.success === false} mr-xs"> <svg if="{endShow && nav.buttons.success === true}" class="btn-svg btn-svg-repeat" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"> <path class="fill-white" d="M 39.78125 5.96875 A 2.0002 2.0002 0 0 0 38 8 L 38 12.5625 C 34.722701 9.1373523 30.10346 7 25 7 C 15.082241 7 7 15.082241 7 25 A 2.0002 2.0002 0 1 0 11 25 C 11 17.243759 17.243759 11 25 11 C 28.816123 11 32.256876 12.535728 34.78125 15 L 31 15 A 2.0002 2.0002 0 1 0 31 19 L 40 19 L 42 19 L 42 17 L 42 8 A 2.0002 2.0002 0 0 0 39.96875 5.96875 A 2.0002 2.0002 0 0 0 39.78125 5.96875 z M 40.78125 22.96875 A 2.0002 2.0002 0 0 0 39 25 C 39 32.757363 32.756392 39 25 39 C 21.184399 39 17.742551 37.46305 15.21875 35 L 19 35 A 2.0002 2.0002 0 1 0 19 31 L 10 31 L 8 31 L 8 33 L 8 42 A 2.0002 2.0002 0 1 0 12 42 L 12 37.4375 C 15.276425 40.860887 19.895994 43 25 43 C 34.917608 43 43 34.918637 43 25 A 2.0002 2.0002 0 0 0 40.96875 22.96875 A 2.0002 2.0002 0 0 0 40.78125 22.96875 z"></path> </svg> {nav.buttons.success.title ? nav.buttons.success.title : (endShow ? \'Повторить\' : \'Далее\')} </button> <button onclick="{hide}" onupdate="none" class="btn btn-m btn-primary-hover {display-none : nav.buttons.cancel === false}">{endShow ? \'Перейти к интерфейсу\' : \'Закрыть помощник\'}</button> </div> </div> </div>',"",'class="tutorial" data-open="{active}" data-animate="{false : app.device.isMobile || options.animate === false}" active-zone="{step.activeZone}" style="display:none"',function(t){var e=this;e.active=!1,e.ready=!1,e.steps=new Baobab([]).root,e.on("before-mount",function(){e.reset()}),e.on("mount",function(){e.borderColor=$$(e.root).find(".tutorial__shape").css("backgroundColor")}),e.on("messageShow",function(){e.message.active||(e.message.active=!0,_.onEndTransition(e.shape,function(){e.cordsMsg(),e.step.target&&e.update(),e.msgElem.setAttribute("data-active",!0),_.onEndTransition(e.msgElem,function(){e.ready=!0})}))}),e.on("messageHide",function(){e.message.active=!1,e.msgElem.setAttribute("data-active",!1),_.onEndTransition(e.msgElem,function(){e.message.position=e.step.position,e.message.title=e.step.title,e.message.text=e.step.text,e.step.target&&e.update()})}),e.on("show",function(){e.update({active:!0})}),e.on("hide",function(){e.update({active:!1})}),e.reset=function(){e.start=!1,e.scope=null,e.message={active:!1,style:"clear:both",position:null,title:null,text:null},e.nav={steps:!0,buttons:{success:!0,cancel:!0}},e.cursor=null,e.target=null,e.beforeTarget=!1,e.num=0,e.step={activeZone:!1,style:"clear:both"},e.arrow=null,e.endShow=!1,e.options={animate:!0,keyboard:!0},e.actions.events?(_.each(e.actions.events,function(t){t.event&&t.elem&&t.elem.off(t.event)}),e.actions.events=[]):e.actions.events=[]},e.show=function(t,o,a){e.active||app.device.isPhone||(_.isArray(o)||app.tutorial[o]?(e.start=!0,e.steps.set(_.isArray(o)?o:app.tutorial[o]),e.scope=$$(t),a&&_.extend(e.options,a),e.active=!0,e.trigger("messageHide"),e.root.style.display="block",e.afterlag(function(){e.nextStep();var t=_.debounce(e.render,100);app.$dom.window.on("resize.tutorial",function(){t(!0)}),e.options.keyboard&&e.navigate.init()})):console.log("Not found tutorial: "+o))},e.nextStep=function(){_.isFunction(e.nav.buttons.success.callback)?e.nav.buttons.success.callback(e,e.target):e.changeStep("right")},e.prevStep=function(){e.num>1&&e.changeStep("left")},e.changeStep=function(t){return e.ready=!1,e.arrow=t,e.cursor?e.trigger("messageHide"):e.trigger("messageShow"),e.endShow&&e.step.actions&&e.step.actions.toggle&&e.step.actions.toggle(e.target),e.cursor&&e.cursor[t]()?(e.step.actions&&e.step.actions.toggle&&e.actions(e.step,e.target,!0),e.cursor=e.cursor[t]()):e.cursor=e.steps.down(),e.step=e.cursor.get().call(),e.target=e.scope.find(e.step.target),e.step.target&&!e.target.length?void e.changeStep("right"):((e.start||!e.start&&!e.beforeTarget)&&(e.message.position=e.step.position,e.message.title=e.step.title,e.message.text=e.step.text),e.beforeTarget=e.step.target,e.render(),void e.afterlag(function(){e.trigger("messageShow"),e.cursor[t]()||"right"!=t?e.endShow=!1:_.onEndTransition(e.msgElem,function(){e.endShow=!0,e.trigger("success")}),e.step.target&&!e.step.nav?e.update():e.start||(e.ready=!0),e.start||e.steps.get().length==e.num&&"right"==t?e.num=1:("right"==t&&e.num++,"left"==t&&e.num--),e.actions(e.step,e.target),e.start=!1}))},e.render=function(t){if(e.step.target){e.offset=e.target.offset(),e.step.offset&&(e.offset.top+=e.step.offset.top?e.step.offset.top:0,e.offset.left+=e.step.offset.left?e.step.offset.left:0);var o=e.target.data("width")||e.step.width,a=e.target.data("height")||e.step.height;e.step.centered&&(a&&(e.offset.top-=(parseInt(a)-e.target.outerHeight())/2),o&&(e.offset.left-=(parseInt(o)-e.target.outerWidth())/2));var s=e.target.data("zoom")||e.step.zoom,i=e.target.data("padding")||e.step.padding,n=o?parseInt(o):i?e.target.outerWidth()+2*parseInt(i):e.target.outerWidth(),l=a?parseInt(a):i?e.target.outerHeight()+2*parseInt(i):e.target.outerHeight(),r=s?parseFloat(s):1,c=150,d=c/2,p=(i?e.offset.left-parseInt(i):e.offset.left)+n/2,u=(i?e.offset.top-parseInt(i):e.offset.top)+l/2,f=p-d,g=u-d,h=n/c*r,m=l/n*c*r,v=Math.ceil(5/h),_=5*v,b=1e4+20/h,w=null;if("square"==e.step.figure)g=u-m/2,w="background:none; -webkit-transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+h+"); transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+h+"); width: "+c+"px; height: "+m+"px; box-shadow: inset 0 0 0 "+v+"px "+e.borderColor+", inset 0 0 "+_+"px rgba(0,0,0,0.4); border-radius: "+b+"px";else if("circle"==e.step.figure){var x=Math.sqrt(2)*Math.max(n,l)/2,y=2*x,k=y/c*r,v=Math.ceil(5/k),_=5*v;w="background:none; -webkit-transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+k+"); transform: translateX("+f+"px) translateY("+g+"px) translateZ(0) scale("+k+"); width: "+c+"px; height: "+c+"px; box-shadow: inset 0 0 0 "+v+"px "+e.borderColor+", inset 0 0 "+_+"px rgba(0,0,0,0.4); border-radius: 50%"}e.navigate.render(),e.step.style=w,e.targetWidth=n,e.targetHeight=l,t===!0&&e.update()}},e.cordsMsg=function(){var t={},o=e.offset.top;o+e.msgBox.scrollHeight>app.sizes.height-40&&(o=e.offset.top+(app.sizes.height-40)-(o+e.msgBox.scrollHeight)),o<40&&(o=40),t.top=o,"right"==e.step.position?(t.left=e.offset.left+e.targetWidth,t=e.offsetMsg(t),e.message.style="top:"+t.top+"px; left:"+t.left+"px"):"left"==e.step.position||"up"==e.step.position?(t.left=e.offset.left,t=e.offsetMsg(t),e.message.style="top:"+t.top+"px; left:"+t.left+"px"):"down"==e.step.position&&(t.top=e.offset.top+e.targetHeight,t.left=e.offset.left,t=e.offsetMsg(t),e.message.style="top:"+t.top+"px; left:"+t.left+"px")},e.offsetMsg=function(t){return e.step.message&&e.step.message.offset&&(e.step.message.offset.top&&(t.top+=e.step.message.offset.top),e.step.message.offset.left&&(t.left+=e.step.message.offset.left)),t},e.actions=function(t,o,a){if(t.actions){if(t.actions.toggle&&e.afterlag(function(){t.actions.toggle(o,a)},{delay:a?0:650,iterations:a?0:5}),t.actions.click){var s="self"==t.actions.click.elem?o:o.find(t.actions.click.elem);s&&_.isFunction(t.actions.click.callback)&&(s.one("click.tutorial",function(){t.actions.click.callback(e,o)}),e.actions.events.push({event:"click.tutorial",elem:s}))}t.actions.callback&&t.actions.callback(e,o,e.arrow)}},e.navigate={init:function(){app.$dom.document.on("keydown.tutorial",function(t){e.ready&&(t.which!=KEY.RIGHT||e.endShow?t.which==KEY.LEFT?e.prevStep():t.which==KEY.ESC&&e.hide():e.nextStep())})},render:function(){e.nav={steps:!0,buttons:{success:!0,cancel:!0}},e.step.nav?_.extend(e.nav,e.step.nav):e.step.nav===!1&&(e.nav={steps:!1,buttons:!1})},destroy:function(){app.$dom.document.off("keydown.tutorial")}},e.hide=function(){e.endShow||e.trigger("close"),e.update({active:!1}),_.onEndTransition(e.root,function(){e.reset(),e.update(),e.trigger("hideAfterAnimate"),e.root.style.display="none"}),e.afterlag(function(){e.actions(e.step,e.target,!0)}),e.navigate.destroy(),e.trigger("hide"),app.$dom.window.off("resize.tutorial")},e.afterlag=function(t,e){var o={delay:0,iterations:1};e&&_.extend(o,e);var a=new Afterlag(o);a.run(t)}});