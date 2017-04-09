riot.tag2("section-editable",'<div onclick="{onClose}" class="section__editable__close hidden-sm hidden-xs"></div> <div class="section__editable__scroll" name="scroll"> <div name="wrapper" class="section__editable__wrapper container"> <div class="row"> <editable-photo></editable-photo> <editable-name></editable-name> <editable-text></editable-text> <editable-salary></editable-salary> <editable-tags></editable-tags> <editable-social></editable-social> <editable-works></editable-works> <editable-skills></editable-skills> <editable-education></editable-education> <editable-courses></editable-courses> <editable-languages></editable-languages> <editable-jobs></editable-jobs> <editable-hobby></editable-hobby> <editable-more></editable-more> <editable-visible></editable-visible> </div> </div> <ui-help-switch-visible if="{!app.device.isPhone}"></ui-help-switch-visible> </div> <ui-help if="{!app.device.isPhone}"></ui-help>',"",'class="section__editable" data-open="false"',function(e){var t=this,s=$$(t.root);t.el=s,t.editable=null,t.editSimple=["photo","name","text","salary","tags","social","more"],t.on("mount",function(){app.device.isMobile&&app.device.isTablet&&(t.scrollPos=app.$dom.document.scrollTop(),app.$dom.window.on("scroll",function(){t.scrollPos=app.$dom.document.scrollTop()}))}),t.on("editTarget",function(e){t.root.setAttribute("data-target",e)}),t.on("editable",function(e,i){"show"==e&&i?(app.device.isPhone||t.editSimple.indexOf(i)!==-1||t.wrapper.setAttribute("data-large",!0),s.find("editable-"+i).attr("id","active"),t.editable=i):"hideAnimated"==e&&(t.editable?s.find("editable-"+t.editable).removeAttr("id"):s.find(".section__editable__container#active").removeAttr("id"),t.wrapper.setAttribute("data-large",!1),t.editable=!1)}),t.show=function(e,s,i){"editing"===$State.get("mode")&&($Editable.autosuggest.items=[],i?t.component.init(t.tags["editable-"+e],s):t.tags["editable-"+e].init(s),t.trigger("editable","show",e,s.update),t.scrollTo(),t.root.setAttribute("data-open",!0),app.device.isPhone||(app.device.isMobile&&app.device.isTablet&&(t.savedScrollPos=t.scrollPos,$Resume.el.css({transform:"translateY("+-t.savedScrollPos+"px)"}),app.$dom.html.addClass("overflow-hidden")),app.$dom.body.addClass("no-scroll")),_.onEndTransition(t.wrapper,function(){t.trigger("editable","showAnimated",e,s.update)}))},t.hide=function(e){t.root.setAttribute("data-open",!1),app.device.isMobile?t.trigger("editable","hideAnimated"):t.trigger("editable","hide"),app.device.isPhone||(app.$dom.body.removeClass("no-scroll"),app.device.isMobile&&app.device.isTablet&&($Resume.el.removeAttr("style"),app.$dom.html.removeClass("overflow-hidden"),app.$dom.document.scrollTop(t.savedScrollPos))),_.onEndTransition(t.wrapper,function(){app.device.isMobile||t.trigger("editable","hideAnimated"),t.component.editing&&(t.trigger("editTarget",!1),t.component.editing=null),$Editable.autosuggest.items=[],e&&e()})},t.open=function(e,t,s,i,a,o){if("editing"===$State.get("mode")){o&&o.before&&o.before($Editable.tags["editable-"+t]);var n=$store.resume.select("sections").get({name:t}).active;$Editable.show(t,{active:n,title:s.opts.title,component:t,store:$resume[t],defaults:i,requires:a,target:e&&e.target,handler:o&&o.handler||null,callback:function(e,i){$store.resume.select("sections",{name:t}).set("active",e),$resume[t]=_.any(_.values(_.omit(i,"title")))?i:null,s.trigger("editable","hide")}},!0),o&&o.after&&o.after($Editable.tags["editable-"+t]),s.editable=!0}},t.onClose=function(){t.tags["editable-"+t.editable].hide?t.tags["editable-"+t.editable].hide():t.component.tag?t.component.onCancel.call(t.component.tag):$Editable.hide()},t.component={tag:null,name:null,editing:null,init:function(e,s){if(this.tag=e,e.switcher=e.tags["ui-switcher"],this.name=s.component,s.target&&s.store){var i=$$(s.target).closest("."+s.component+"-item");if(i&&i.length&&i.attr("data-id")){var a=_.findWhere(s.store.items,{id:String(i.attr("data-id"))});a&&(t.trigger("editTarget",!0),t.component.editing=_.copyArray(a))}}!s.store&&s.defaults&&(s.store=s.defaults.root()),e.update({active:s.active,title:s.title,store:s.store,data:_.copyArray(s.store),defaults:s.defaults,requires:s.requires,handler:s.handler||null,callback:s.callback?s.callback:null})},createItem:function(){t.component.editing=this.defaults.item(),t.scrollTo("content")},editItem:function(){t.trigger("editTarget",!0),$Editable.autosuggest.items=[],t.component.editing=_.copyArray(this.data.items[this.i]),t.scrollTo("content")},textEdit:function(e){var s=this.editing||this.data,i=e.currentTarget.getAttribute("data-name"),a=e.currentTarget.getAttribute("placeholder");$Sections.textEdit.show({value:s[i],placeholder:a||null,callback:function(e){s[i]=e,t.component.tag.update()}})},removeItem:function(){this.data.items.splice(this.i,1),t.component.editing&&t.component.editing.id==this.item.id&&t.component.cancelEditing()},cancelEditing:function(){t.trigger("editTarget",!1),t.component.editing=null,t.scrollTo()},autoCommit:function(e){this.data[e.target.getAttribute("data-name")]=_.clean(e.target.value)},autoCommitItems:function(e){var s,i=e.target.getAttribute("data-name").split("."),a=t.component.editing,o=_.clean(e.target.value);for(s=0;s<i.length;s++)s==i.length-1?a[i[s]]=o:a=a[i[s]];e.target.getAttribute("autosuggest")&&$Editable.autosuggest.onInput.call(this,e,t.component.autoCommitItems)},saveItem:function(){var e=!0;if(this.requires&&this.requires.length&&_.each(this.requires,function(s){e&&!_.clean(t.component.editing[s.field])&&(e=!1,!app.device.isPhone&&window.$Notify?$Notify.show({color:"dark",text:s.alert}):alert(s.alert))}),e){var s=_.findWhere(this.data.items,{id:t.component.editing.id});if(s){var i=_.indexOf(this.data.items,s);this.data.items[i]=_.copyArray(t.component.editing)}else _.isArray(this.data.items)||(this.data.items=[]),this.data.items.push(t.component.editing);t.trigger("editTarget",!1),t.component.editing=null,t.scrollTo()}},onCancel:function(){this.title_data&&(this.title_data.value=this.store&&this.store.title?this.store.title:$store.resume.placeholder[t.component.name].title()),this.text_data&&(this.text_data.value=this.store&&this.store.text?this.store.text:""),$Editable.hide()},onSave:function(){if(t.component.editing&&t.component.saveItem.call(this),this.callback){if(this.data&&this.data.items){if(this.data.items.length&&_.isObject(this.data.items[0]))for(var e=0;e<this.data.items.length;e++)(!_.clean(this.data.items[e].title)||this.data.items[e].title&&void 0!==this.data.items[e].value&&!_.clean(this.data.items[e].value))&&(this.data.items.splice(e,1),e--);this.data.items=this.data.items.length?this.data.items:null}this.callback(this.switcher.value,this.handler?this.handler(this.data):this.data)}$Editable.hide(),$Resume.tags["ux-"+t.component.name]&&$Resume.tags["ux-"+t.component.name].update()}},t.autosuggest={el:null,tag:null,commit:null,items:[],onInput:function(e,s){e.target&&e.target.value&&e.target.getAttribute("autosuggest")&&(t.autosuggest.el=e.target,t.autosuggest.tag=this,t.autosuggest.commit=s,t.suggest(e.target.getAttribute("autosuggest"),e.target.value),document.removeEventListener("click",t.autosuggest.handleClickOutside),document.addEventListener("click",t.autosuggest.handleClickOutside))},select:function(){t.autosuggest.update([]),t.autosuggest.el.value=this.item.text,_.isFunction(t.autosuggest.commit)&&(t.autosuggest.commit.call(this,{target:t.autosuggest.el}),t.autosuggest.items=[])},request:function(e,s){s.length>1?app.request(e,s).then(function(e){if(e.items){if("1"==e.items.length&&s==e.items[0].text)return void(t.autosuggest.items=[]);t.autosuggest.update(e.items)}}):t.autosuggest.update([])},update:function(e){t.autosuggest.items=e,t.autosuggest.tag.update()},handleClickOutside:function(e){t.autosuggest.el&&!t.autosuggest.el.contains(e.target)&&setTimeout(function(){t.autosuggest.update([])},20),document.removeEventListener("click",t.autosuggest.handleClickOutside)}},t.suggest=_.debounce(t.autosuggest.request,app.device.isMobile?300:150),t.scrollTo=function(e){var s=app.device.isPhone?80:100,e=e?"content"===e?s:e:0;t.scroll.scrollTop=e}}),riot.tag2("section-percentage",'<div class="percentage__container" riot-style="transform:translateY({tY}%)"> <div class="percentage__score">{p}%</div> </div>',"",'class="section percentage"',function(e){var t=this;t.on("before-mount",function(){t.result($store.resume.percentage.calc("premium",$store.resume))}),t.on("mount",function(){var e=_.debounce($store.resume.percentage.calc,100);$store.resume.on("update",function(s){t.recalc||e("premium",$store.resume,t.result)})}),t.result=function(e){t.recalc=!0,t.update({p:e,tY:e>90?10:100-e}),$store.resume.select("percent").set(e),setTimeout(function(){t.recalc=!1},20)},t.on("unmount",function(){$store.resume.off("update")})}),riot.tag2("section-info",'<div class="info-opener" onclick="{show}"> <svg class="info-opener-icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"> <path class="info-opener-icon-color" d="M 25 0 C 11.204726 0 0 11.204726 0 25 C 0 38.795274 11.204726 50 25 50 C 38.795274 50 50 38.795274 50 25 C 50 11.204726 38.795274 0 25 0 z M 25 2 C 37.714394 2 48 12.285606 48 25 C 48 37.714394 37.714394 48 25 48 C 12.285606 48 2 37.714394 2 25 C 2 12.285606 12.285606 2 25 2 z M 23.78125 12.90625 C 23.56625 12.90625 23.4375 13.035 23.4375 13.25 L 23.4375 15.875 C 23.4375 16.09 23.56525 16.25 23.78125 16.25 L 26.21875 16.25 C 26.43275 16.25 26.5625 16.09 26.5625 15.875 L 26.5625 13.25 C 26.5625 13.035 26.43375 12.90625 26.21875 12.90625 L 23.78125 12.90625 z M 23.71875 20.125 C 23.587969 20.175578 23.5 20.3075 23.5 20.46875 L 23.5 36.9375 C 23.5 37.1525 23.62875 37.28125 23.84375 37.28125 L 26.15625 37.28125 C 26.37125 37.28125 26.5 37.1535 26.5 36.9375 L 26.5 20.46875 C 26.5 20.25375 26.37225 20.125 26.15625 20.125 L 23.84375 20.125 C 23.79025 20.125 23.762344 20.108141 23.71875 20.125 z"></path> </svg> <svg class="info-opener-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="info-opener-close-color" d="M54.08,49.999l17.537-17.535c1.127-1.127,1.127-2.953,0-4.08c-1.127-1.127-2.953-1.127-4.08,0L50,45.919 L32.463,28.384c-1.127-1.127-2.953-1.127-4.08,0c-1.127,1.127-1.127,2.953,0,4.08L45.92,49.999L28.383,67.536 c-1.127,1.127-1.127,2.953,0,4.08c1.127,1.127,2.953,1.127,4.08,0L50,54.079l17.537,17.537c0.564,0.564,1.302,0.845,2.04,0.845 s1.476-0.282,2.04-0.845c1.127-1.127,1.127-2.953,0-4.08L54.08,49.999z"></path></svg> </div> <div name="wrapper" class="info-wrapper"> <div class="info-photo" riot-style="background-image:url(\'{$resume.commons.photo}\')"></div> <div class="info-name">{$resume.commons.name}{$resume.commons.surname ? ⁗ ⁗ + $resume.commons.surname : null}, <span if="{$store.resume.get(⁗sections⁗, {⁗name⁗: ⁗salary⁗}).active}" class="info-salary">{$resume.salary.amount / 1000}K ₽</span></div> <div class="info-city">{$resume.commons.birthday.hidden ? $store.resume.take.birthday.age() : $store.resume.take.birthday.date()}, {$resume.commons.contacts.city.name}, {$store.resume.take.relocation()}</div> <div class="info-email" if="{$resume.commons.contacts.email}"><a href="mailto:{$resume.commons.contacts.email}">{$resume.commons.contacts.email}</a></div> <div class="info-phone" if="{$resume.commons.contacts.phone}"><a href="tel:{$resume.commons.contacts.phone}">{$resume.commons.contacts.phone}</a></div> <div class="info-post" if="{$resume.post}">{$resume.post}</div> <div class="info-social"> <ux-social-items classname="social {app.device.isPhone ? \'social-s\' : \'social-xs\'}"></ui-social-items> </div> <div class="info-close" onclick="{hide}"></div> </div>',"",'class="info" data-open="{active}"',function(e){var t=this;t.active=!1,t.on("mount",function(){app.device.isMobile&&$$(t.wrapper).on("swipeLeft",function(){t.hide()})}),t.show=function(){t.update({active:!app.device.isPhone||!t.active})},t.hide=function(){t.update({active:!1})}}),riot.tag2("section-nav",'<div name="container" class="container nav__container"> <div onclick="{onChange}" each="{item in items}" no-reorder class="col-md-3"> <div class="nav__item" data-active="{item.step == step}" data-step="{item.step}">{item.title}</div> </div> <div name="slider" class="nav__slider"></div> </div>',"",'class="nav"',function(e){var t=this,s=$$(t.root),i=$$(t.container);t.step=1,t.left=0,t.sliding=!1,t.on("mount",function(){var e=_.debounce(t.onScroll,50);app.$dom.window.on("scroll",function(){_.raf(e)}),t.on("updated",function(){t.items&&t.onSlide(t.step)})}),t.refresh=function(){app.device.isPhone||t.update({items:$Resume.screenItems})},t.onChange=function(){t.step=this.item.step;var e=Math.abs(this.item.offset-app.$dom.document.scrollTop()),s=e/5;s=s<500?500:s,t.onSlide(t.step,s),app.$dom.body.animate({scrollTop:this.item.offset},s)},t.onSlide=function(e,a){t.sliding=!0;var o=s.find(".nav__item[data-step='"+e+"']");return!o.length||o.length&&t.left==o.offset().left?void(t.sliding=!1):(t.left=o.offset().left,t.slider.style[app.prefixed["transition-duration"]]=a?a+"ms":"",t.slider.style[app.prefixed.transform]="translate3d("+(t.left-i.offset().left)+"px, 0, 0)",t.slider.style.width=o.width()+"px",void _.onEndTransition(t.slider,function(){t.sliding=!1,t.onScroll()}))},t.onScroll=function(){if(!t.sliding){var e=app.$dom.document.scrollTop(),s=app.sizes.height/1.3,i=_.findWhere(t.items,{step:t.step}),a=_.findWhere(t.items,{step:t.step+1}),o=t.step>1?_.findWhere(t.items,{step:t.step-1}):null;if(a&&e+s>a.offset){var n=!1;_.each(_.sortArray(t.items,"step","desc"),function(i){n||e+s>i.offset&&(n=!0,t.update({step:i.step}))})}else if(o&&e+s<i.offset){var n=!1;_.each(t.items,function(i){n||e-s<i.offset&&(n=!0,t.update({step:i.step}))})}}}}),riot.tag2("salary-graph",'<div onclick="{hide}" onupdate="none" class="button__close opacity-100" data-color="gray"></div> <div class="salary-graph-title">{$i18n(⁗resume.premium.template.Desired salary growth schedule⁗)}</div> <div class="salary-graph-content"> <div each="{item, i in _.copyArray($resume.salary.graph.items).reverse()}" no-reorder class="salary-graph-item"> <div class="salary-graph-item-month">{get.month(i)} месяц</div> <div class="salary-graph-item-amount" riot-style="margin-right:{get.padding(item)}%">{item / 1000}K <span if="{$resume.salary.currency != ⁗1⁗}">{$store.currency.getTitleById($resume.salary.currency)}</span> <svg if="{$resume.salary.currency == ⁗1⁗}" class="salary-graph-item-amount-ruble" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="salary-graph-item-amount-ruble-color" d="M58.464,57.316c8.139,0,14.264-2.073,18.374-6.218C80.945,46.951,83,41.146,83,33.674 c0-7.468-2.055-13.277-6.163-17.421c-4.109-4.146-10.235-6.22-18.374-6.22H27.771v38.32H17.267v8.963h10.504v8.544H17.267v8.962 h10.504v15.211h10.644V74.822h28.746V65.86H38.415v-8.544H58.464z M38.415,18.998h16.462c6.05,0,10.477,1.251,13.277,3.754 c2.803,2.503,4.203,6.145,4.203,10.922c0,4.782-1.4,8.424-4.203,10.925c-2.8,2.503-7.227,3.754-13.277,3.754H38.415V18.998z"></path></svg> </div> </div> </div>',"",'class="section-hidden salary-graph" data-pos="right" data-short="{!app.device.isPhone}" data-open="{active}"',function(e){var t=this,s=$$(t.root);t.active=!1,t.on("before-mount",function(){t.max=_.max($resume.salary&&$resume.salary.graph&&$resume.salary.graph.items?$resume.salary.graph.items:5e4)}),t.on("mount",function(){app.device.isMobile&&s.on("swipeRight",function(){t.hide()})}),t.get={month:function(e){return 0==e?"24":1==e?"18":2==e?"12":3==e?"6":4==e?"3":5==e?"1":void 0},padding:function(e){return 75*(1-e/t.max)}},t.show=function(){t.infoActive=$Info.active,$root.trigger("mode","hidden",!0),t.update({active:!0}),t.infoActive||app.device.isPhone||(!app.device.isMobile||app.device.isTablet&&"landscape"==app.device.orientation)&&_.onEndTransition(t.root,function(){$Info.show()})},t.hide=function(){$root.trigger("mode","hidden",!1),t.update({active:!1}),t.infoActive||app.device.isPhone||$Info.hide()}}),riot.tag2("salary-graph-opener",'<div if="{$resume.salary.currency != ⁗1⁗}" class="salary-graph-opener-valuta">{$store.currency.getTitleById($resume.salary.currency)}</div> <svg if="{$resume.salary.currency == ⁗1⁗}" class="salary-graph-opener-ruble" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 32 32"> <path class="salary-graph-opener-ruble-color" d="M 11 6 L 11 7 L 11 16 L 9 16 L 9 18 L 11 18 L 11 20 L 9 20 L 9 22 L 11 22 L 11 26 L 13 26 L 13 22 L 18 22 L 18 20 L 13 20 L 13 18 L 19 18 C 22.301625 18 25 15.301625 25 12 C 25 8.6983746 22.301625 6 19 6 L 12 6 L 11 6 z M 13 8 L 19 8 C 21.220375 8 23 9.7796254 23 12 C 23 14.220375 21.220375 16 19 16 L 13 16 L 13 8 z"></path> </svg>',"",'if="{$resume.salary && $resume.salary.graph.active}" onclick="{openGraph}" onupdate="none" class="salary-graph-opener"',function(e){this.openGraph=function(){$Salary.graph.show()}}),riot.tag2("section-sendmail",'<div class="sendmail-button" onclick="{shift}" onupdate="none"> <icon-email color="none"></icon-email> </div>',"",'class="sendmail"',function(e){var t=this;t.contactsOffset=null,t.on("mount",function(){app.device.isPhone||$afterlag.run(function(){var e=$Resume.el.find(".screen[data-section='contacts']");t.contactsOffset=e?e.offset().top:null})}),t.shift=function(){if(app.device.isPhone)$Resume.screens.nav("feedback");else{if(!t.contactsOffset)return;var e=Math.abs(t.contactsOffset-app.$dom.document.scrollTop()),s=e/5;s=s<500?500:s,app.$dom.body.animate({scrollTop:t.contactsOffset},s)}}}),riot.tag2("section-menu",'<div class="hidden-xs menu__overlay"></div> <menu-sections></menu-sections> <menu-items if="{!app.device.isMobile}"></menu-items>',"",'class="menu {section-hidden : app.device.isPhone}" data-pos="right" data-open="false"',function(e){var t=this;$$(t.root);t.active=!1,t.on("before-mount",function(){t.sections=t.tags["menu-sections"],t.items=app.device.isMobile?null:t.tags["menu-items"]}),t.show=function(e){t.active?t.hide():(t.active=!0,app.device.isPhone?(t.root.setAttribute("data-open",!0),$root.trigger("mode","hidden",!0)):(app.$dom.body.addClass("no-scroll"),$root.trigger("mode","menu",!0)),e&&t.items&&t.items.open[e]&&t.items.open[e].call(),_.onEndTransition(t.sections.root,function(){t.sections.settings.update()}))},t.hide=function(){t.active=!1,app.device.isPhone?(t.root.setAttribute("data-open",!1),$root.trigger("mode","hidden",!1)):($root.trigger("mode","menu",!1),app.$dom.body.removeClass("no-scroll")),_.onEndTransition(app.device.isPhone?t.root:t.sections.root,function(){$afterlag.run(function(){t.sections.refresh()})})}}),riot.tag2("menu-items",'<div class="rows"> <div class="row"> <div class="menu__item col-md-12"> <div onclick="{open.contacts}" onupdate="none" class="menu__item__button" data-active="{section == ⁗contacts⁗}"> <div class="menu__item__icon"> <svg data-icon="contacts" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M65.498,63.023c3.289-4.9,5.002-11.303,5.002-17.521c0-12.748-8.41-22-20-22s-20,9.252-20,22 c0,6.219,1.713,12.621,5.002,17.521C25.133,66.43,16.5,72.955,16.5,80.5c0,0.506,0.191,0.994,0.537,1.365 C25.842,91.303,37.727,96.5,50.5,96.5s24.658-5.197,33.463-14.635c0.346-0.371,0.537-0.859,0.537-1.365 C84.5,72.955,75.867,66.43,65.498,63.023z M34.5,45.502c0-8.945,5.496-18,16-18s16,9.055,16,18c0,9.135-4.965,22-16,22 S34.5,54.637,34.5,45.502z M50.5,92.5c-11.375,0-21.979-4.521-29.957-12.752c0.658-5.643,8.605-10.77,17.688-13.398 c3.17,3.158,7.273,5.152,12.27,5.152s9.1-1.994,12.27-5.152c9.082,2.629,17.029,7.756,17.688,13.398 C72.479,87.979,61.875,92.5,50.5,92.5z M50.5,4.5c-25.363,0-46,20.635-46,46c0,6.557,1.35,12.889,4.014,18.822 c0.332,0.742,1.061,1.182,1.826,1.182c0.273,0,0.551-0.057,0.816-0.176c1.008-0.451,1.459-1.635,1.006-2.643 C9.733,62.27,8.5,56.488,8.5,50.5c0-23.158,18.842-42,42-42s42,18.842,42,42c0,5.986-1.232,11.768-3.664,17.184 c-0.451,1.008-0.002,2.191,1.006,2.643c1.008,0.453,2.191,0.004,2.645-1.006C95.149,63.387,96.5,57.055,96.5,50.5 C96.5,25.135,75.864,4.5,50.5,4.5z"></path></svg> </div> <div class="menu__item__title">Контактные данные</div> </div> </div> <div class="menu__item col-md-12"> <div onclick="{open.settings}" onupdate="none" class="menu__item__button" data-active="{section == ⁗settings⁗}"> <div class="menu__item__icon"> <svg data-icon="settings" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M52.037,48.713V14.806c0-1.081-0.876-1.957-1.957-1.957c-1.081,0-1.957,0.876-1.957,1.957v33.907 c-4.792,0.918-8.427,5.136-8.427,10.193c0,5.056,3.635,9.274,8.427,10.193v15.14c0,1.081,0.876,1.957,1.957,1.957 c1.081,0,1.957-0.876,1.957-1.957v-15.14c4.792-0.918,8.427-5.136,8.427-10.193C60.464,53.849,56.829,49.631,52.037,48.713z M50.08,65.375c-3.568,0-6.47-2.902-6.47-6.47s2.902-6.47,6.47-6.47c3.568,0,6.47,2.902,6.47,6.47S53.648,65.375,50.08,65.375z M26.7,31.361V14.806c0-1.081-0.876-1.957-1.957-1.957c-1.081,0-1.957,0.876-1.957,1.957v16.555 c-4.792,0.918-8.427,5.136-8.427,10.193c0,5.056,3.634,9.274,8.427,10.193v31.736c0,1.081,0.876,1.957,1.957,1.957 c1.081,0,1.957-0.876,1.957-1.957V51.746c4.792-0.918,8.427-5.136,8.427-10.193C35.127,36.497,31.493,32.279,26.7,31.361z M24.744,48.023c-3.568,0-6.47-2.902-6.47-6.47c0-3.545,2.867-6.43,6.403-6.467c0.023,0.001,0.044,0.007,0.067,0.007 s0.044-0.006,0.067-0.007c3.537,0.036,6.403,2.922,6.403,6.467C31.214,45.121,28.311,48.023,24.744,48.023z M85.64,41.553 c0-5.056-3.635-9.274-8.427-10.193V15.762c0-1.081-0.876-1.957-1.957-1.957c-1.081,0-1.957,0.876-1.957,1.957v15.598 c-4.792,0.918-8.427,5.136-8.427,10.193c0,5.056,3.635,9.274,8.427,10.193v33.449c0,1.081,0.876,1.957,1.957,1.957 c1.081,0,1.957-0.876,1.957-1.957V51.746C82.005,50.827,85.64,46.609,85.64,41.553z M75.256,48.023c-3.568,0-6.47-2.902-6.47-6.47 c0-3.568,2.902-6.47,6.47-6.47c3.568,0,6.47,2.902,6.47,6.47C81.727,45.121,78.824,48.023,75.256,48.023z"></path></svg> </div> <div class="menu__item__title">Настройки</div> </div> </div> </div> <div class="row"> <div class="menu__item col-md-12"> <div onclick="{open.coverletter}" onupdate="none" class="menu__item__button" data-active="{section == ⁗coverletter⁗}"> <div class="menu__item__icon"> <svg data-icon="coverletter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 42 62.5" style="enable-background:new 0 0 42 50;" xml:space="preserve"><rect x="11" y="26.5" width="20" height="1"></rect><rect x="11" y="22.5" width="20" height="1"></rect><rect x="11" y="18.5" width="12" height="1"></rect><rect x="11" y="30.5" width="20" height="1"></rect><rect x="11" y="34.5" width="20" height="1"></rect><path d="M38.085,14.116L27.458,3.843C26.898,3.302,26.151,3,25.373,3H6C4.343,3,3,4.343,3,6v38c0,1.657,1.343,3,3,3h30 c1.657,0,3-1.343,3-3V16.273C39,15.459,38.67,14.681,38.085,14.116z M27.586,6.748L35.088,14h-7.502V6.748z M37,44 c0,0.551-0.449,1-1,1H6c-0.551,0-1-0.449-1-1V6c0-0.551,0.449-1,1-1h19.373c0.074,0,0.142,0.026,0.213,0.041V14c0,1.103,0.897,2,2,2 h9.358C36.97,16.089,37,16.178,37,16.273V44z"></path></svg> </div> <div class="menu__item__title trY--s">Сопроводительное письмо</div> </div> </div> <div class="menu__item col-md-12"> <div if="{!app.demo}" class="menu__item__button"> <div onclick="{onPreview}" onupdate="none" class="menu__item__icon"> <svg data-icon="preview" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 256 320" enable-background="new 0 0 256 256" xml:space="preserve"><g><path d="M179.974,219H52.184c-5.276,0-9.184-3.855-9.184-9.131V40.278C43,35.001,46.908,31,52.184,31h95.882 c3.621,1,5.934,4.023,5.934,7.957v1.189v6.824v12.394c0,5.478,4.789,9.635,10.265,9.635h8.783h6.739h1.275 c4.339,0,7.937,3.517,8.937,7.703v11.122c3.29,2.969,6.298,6.241,9,9.761V70.251c0-5.248-1.876-10.222-5.513-14.005l-27.83-29.013 C161.849,23.272,156.576,21,151.08,21H52.184C41.553,21,33,29.647,33,40.278v169.59C33,220.5,41.553,229,52.184,229h127.79 c5.848,0,11.008-2.581,14.478-6.665l-6.704-6.704C185.865,217.719,183.01,219,179.974,219z"></path><path d="M234.437,221.833l-41.903-41.902c8.024-10.671,12.785-23.938,12.785-38.318c0-35.246-28.573-63.819-63.82-63.819 c-35.246,0-63.818,28.573-63.818,63.819c0,35.246,28.572,63.818,63.818,63.818c13.652,0,26.294-4.301,36.673-11.603l42.135,42.135 c1.951,1.951,4.508,2.927,7.065,2.927s5.114-0.976,7.065-2.927C238.339,232.062,238.339,225.735,234.437,221.833z M141.499,188.758 c-26.036,0-47.146-21.108-47.146-47.146c0-26.038,21.109-47.146,47.146-47.146c26.038,0,47.147,21.108,47.147,47.146 C188.646,167.65,167.537,188.758,141.499,188.758z"></path><path d="M115,121v8h63.37c-0.961-3-2.234-5-3.785-8H115z"></path><path d="M115,147h65.015c0.282-1,0.431-3.824,0.431-5.793c0-0.741-0.025-1.207-0.066-2.207H115V147z"></path><path d="M115,166h57.059c1.934-3,3.58-5,4.888-8H115V166z"></path></g></svg> </div> <div class="menu__item__title">Предпросмотр</div> </div> <div if="{app.demo}" class="menu__item__button"> <a href="/?signup&plan=premium" class="menu__item__icon"> <svg data-icon="addUser" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 125" x="0px" y="0px"><path d="M71.79,34.25A21.66,21.66,0,1,0,40.11,53.44a33.56,33.56,0,0,0-23.48,32,2,2,0,0,0,4,0,29.53,29.53,0,0,1,29.5-29.5A21.68,21.68,0,0,0,71.79,34.25ZM50.14,51.91A17.66,17.66,0,1,1,67.79,34.25,17.68,17.68,0,0,1,50.14,51.91ZM85.23,72a2,2,0,0,1-2,2H71.79V85.41a2,2,0,1,1-4,0V74H56.36a2,2,0,0,1,0-4H67.79V58.55a2,2,0,0,1,4,0V70H83.23A2,2,0,0,1,85.23,72Z"></path></svg> </a> <div class="menu__item__title">Создать аккаунт</div> </div> </div> </div> </div>',"",'class="menu__items"',function(e){var t=this;t.section="contacts",t.open={contacts:function(){$Menu.sections.slider.nav("contacts"),t.open._update("contacts")},settings:function(){$Menu.sections.slider.nav("settings"),t.open._update("settings")},coverletter:function(){$Menu.sections.slider.nav("coverletter"),t.open._update("coverletter")},_update:function(e){t.update({section:e})}},t.onPreview=function(){app.demo||(app.request("setResume",{data:$store.resume.get()},{loader:!1,notify:!1}),window.open("/resume/"+$store.resume.get("_id"),"_blank"))}}),riot.tag2("menu-opener",'<svg class="menu__opener__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 43 47.50125" enable-background="new 0 0 43 38.001" xml:space="preserve"><g><g><path class="menu__opener__icon__color" d="M4,8h35c2.209,0,4-1.792,4-4c0-2.211-1.789-4-3.998-4H4C1.792,0,0,1.789,0,4C0,6.208,1.792,8,4,8z M39,14.999H4c-2.209,0-4,1.791-4,4.002c0,2.209,1.792,4,4,4h35c2.209,0,4-1.791,4-4C43,16.79,41.209,14.999,39,14.999z M39,29.999H4c-2.209,0-4,1.791-4,4.002c0,2.209,1.792,4,4,4h35c2.209,0,4-1.791,4-4C43,31.79,41.209,29.999,39,29.999z"></path></g></g></svg> <svg class="menu__close" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"> <path class="menu__close__color" d="M25,3C12.869,3,3,12.869,3,25s9.869,22,22,22s22-9.869,22-22S37.131,3,25,3z M34.207,32.793 c0.391,0.391,0.391,1.023,0,1.414C34.012,34.402,33.756,34.5,33.5,34.5s-0.512-0.098-0.707-0.293L25,26.414l-7.793,7.793 C17.012,34.402,16.756,34.5,16.5,34.5s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L23.586,25l-7.793-7.793 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L25,23.586l7.793-7.793c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414 L26.414,25L34.207,32.793z"></path> </svg>',"",'onclick="{open}" onupdate="none" class="menu__opener"',function(e){this.open=function(){$Menu.show()}}),riot.tag2("menu-section-contacts",'<div class="rows section__slider__item__content"> <div if="{app.device.isPhone}" class="row mt--m mb30"> <div class="col-md-24 flex-centered"> <div onclick="{open.changePhoto}" onupdate="none" if="{$store.resume.get(\'commons\', \'photo\')}" class="user__photo"> <div class="user__photo__image" riot-style="background-image:url({$store.resume.get(\'commons\', \'photo\')})"></div> </div> <div onclick="{open.changePhoto}" onupdate="none" if="{!$store.resume.get(\'commons\', \'photo\')}" class="user__photo" data-place="true"> <span class="user__photo__text">загрузить свою фотографию</span> </div> </div> </div> <div class="row mb-m"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title">Имя</span> </div> <div class="col-sm-16"> <ui-input placeholder="Имя" update="name" cursor="{data.select()}" size="l"></ui-input> </div> </div> <div class="row mb-m"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title">Фамилия</span> </div> <div class="col-sm-16"> <ui-input placeholder="Фамилия" update="surname" cursor="{data.select()}" size="l"></ui-input> </div> </div> <div class="row mb-m"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title">Дата рождения</span> </div> <div class="col-xs-8 col-sm-4"> <ui-select update="day" cursor="{data.select(\'birthday\')}" items="{_.range(1, 32)}" size="l" short></ui-select> </div> <div class="col-xs-16 col-sm-6 xs-mb-m"> <ui-select update="month" cursor="{data.select(\'birthday\')}" items="{$store.month.getItems($store.resume.get(⁗lang⁗))}" size="l" short></ui-select> </div> <div class="col-xs-24 col-sm-6"> <ui-select update="year" cursor="{data.select(\'birthday\')}" items="{_.range(1940, new Date().getFullYear() + 1)}" size="l" short></ui-select> </div> </div> <div class="row mb-l pt-xxs"> <div class="hidden-xs col-sm-8 pt-s pr-m"> <span class="title">Ваш пол</span> </div> <div class="col-xs-12 col-sm-7 text-left pt-s"> <ui-checkbox update="gender" cursor="{data.select()}" group="gender" title="Мужской" size="l" theme="blue" value="male"></ui-checkbox> </div> <div class="col-xs-12 col-sm-6 text-left pt-s"> <ui-checkbox update="gender" cursor="{data.select()}" group="gender" title="Женский" size="l" theme="blue" value="female"></ui-checkbox> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="visible-md visible-lg title">Электронная почта</span> <span class="visible-sm title">Эл. почта</span> </div> <div class="col-sm-16"> <ui-input update="email" cursor="{data.select(\'contacts\')}" size="l"></ui-input> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="visible-md visible-lg title">Город проживания</span> <span class="visible-sm title">Город</span> </div> <div class="col-xs-24 col-sm-16"> <ui-input update="city" value="name" cursor="{data.select(\'contacts\')}" autosuggest="getSuggestCity" autosuggestsize="l" dataonlysuggest="true" size="l"></ui-input> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="visible-md visible-lg title">Мобильный телефон</span> <span class="visible-sm title">Телефон</span> </div> <div class="col-xs-24 col-sm-16"> <ui-input update="phone" cursor="{data.select(\'contacts\')}" mask="phone" size="l"></ui-input> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title">Skype</span> </div> <div class="col-xs-24 col-sm-16"> <ui-input update="skype" cursor="{data.select(\'contacts\')}" size="l"></ui-input> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title">Предпочитаемый вид связи</span> </div> <div class="col-xs-24 col-sm-16"> <ui-select update="primary" cursor="{data.select(\'contacts\')}" items="{$store.dictionary.get(⁗contactsPrimary⁗)}" size="l"></ui-select> </div> </div> <div class="row"> <div class="col-xs-24 {app.device.isPhone ? \'flex-centered\' : \'text-right\'}"> <button onclick="{onCancel}" onupdate="none" class="btn btn-{app.device.isPhone ? \'l2 h55\' : \'xl\'} cancel mr-xs xs-plr-m">Отменить</button> <button name="btnSave" onclick="{onSave}" onupdate="none" class="btn btn-{app.device.isPhone ? \'l2 h55\' : \'xl\'} success">Сохранить</button> </div> </div> </div>',"",'class="section__slider__item"',function(e){
var t=this;t.btnSave=$$(t.btnSave),t.data=new Baobab($store.resume.select("commons").deepClone()),t.open={changePhoto:function(){$Editable.show("photo",{title:"Ваша фотография",callback:function(e){app.demo?($store.resume.select("commons","photo").set(e),t.update(),$Resume.sections.photo.update()):app.request("setResumePhoto",{id:$store.resume.get("_id"),image:e},{loader:!1}).then(function(e){e&&e.image&&($store.resume.select("commons","photo").set(e.image+"?"+_.newId()),t.update(),$Resume.sections.photo.update())})}})}},t.onSave=function(){t.btnSave.addClass("btn-loading"),setTimeout(function(){$store.resume.select("commons").set(t.data.get()),$Resume.update(),$Resume.one("updated",function(){$afterlag.run(function(){t.btnSave.removeClass("btn-loading"),$Menu.hide()},{iterations:2})})},5)},t.onCancel=function(){$Menu.hide()}}),riot.tag2("menu-section-coverletter",'<div class="rows section__slider__item__content"> <div class="row xs-mb-m"> <div class="col-xs-17 col-sm-12 pr-m"> <span class="title black">Активный</span> </div> <div class="col-xs-7 col-sm-12"> <ui-switcher commit="{autoCommit.visible}" value="{active}"></ui-switcher> </div> </div> <div class="pos-rel pt-m xs-pt-xs xs-pb-xxs"> <div class="row mb-m"> <div class="hidden-xs col-sm-8 pt-xs pr-m"> <span class="title black">Цветовая схема</span> </div> <div class="col-xs-24 col-sm-16"> <span class="input-title">Цветовая схема</span> <ui-select update="color" cursor="{data.select()}" items="{$store.coverletter.get()}" size="l"></ui-select> </div> </div> <div class="row mb-m"> <div class="col-xs-24"> <ui-textarea update="text" placeholder="Резюме отражает ваш опыт, а сопроводительное письмо должно отражать вашу мотивацию, объяснять, почему вы хотите попасть в ту или иную компанию и аргументировать, почему именно вы нужны работодателю. Этот текст будет видет в режиме просмотра вашего резюме." cursor="{data.select()}" size="xl"></ui-textarea> </div> </div> <div class="pos-abs-full zIndex-1 bg-white transition-s {active ? \'opacity-0 pointerEvents-none\' : \'opacity-75\'}"></div> </div> <div class="row"> <div class="col-md-24 {app.device.isPhone ? \'flex-centered\' : \'text-right\'}"> <button onclick="{onCancel}" onupdate="none" class="btn btn-{app.device.isPhone ? \'l2 h55\' : \'xl\'} cancel mr-xs xs-plr-m">Отменить</button> <button onclick="{onSave}" onupdate="none" class="btn btn-{app.device.isPhone ? \'l2 h55\' : \'xl\'} success">Сохранить</button> </div> </div> </div>',"",'class="section__slider__item"',function(e){var t=this;t.active=$store.resume.select("sections").get({name:"coverletter"}).active,t.data=new Baobab($store.resume.select("coverletter").clone()),t.autoCommit={visible:function(e){t.update({active:e})}},t.onSave=function(){$store.resume.select("coverletter").set(t.data.get()),$store.resume.select("sections",{name:"coverletter"}).set("active",t.active),$Resume.sections.coverletter&&$Resume.sections.coverletter.update(),$Menu.hide()},t.onCancel=function(){$Menu.hide()}}),riot.tag2("menu-section-settings",'<div class="rows section__slider__item__content"> <div class="row mb-m"> <div class="hidden-xs col-sm-12 pt-xs pr-m"> <span class="title">Язык резюме</span> </div> <div class="col-xs-24 col-sm-12 select-uppercase"> <span class="input-title">Язык резюме</span> <ui-select update="lang" cursor="{$store.resume.select()}" items="{$store.langs.get()}" size="l"></ui-select> </div> </div> <div class="row mb-m"> <div class="hidden-xs col-sm-12 pt-xs pr-m"> <span class="title">Семейство шрифта</span> </div> <div class="col-xs-24 col-sm-12 select-uppercase"> <span class="input-title">Семейство шрифта</span> <ui-select update="font" cursor="{$State.select()}" items="{$store.fonts.get()}" size="l"></ui-select> </div> </div> <div class="row mb-m xs-pb-xxs"> <div class="hidden-xs col-sm-12 pt-xs pr-m"> <span class="title">Цветовая схема</span> </div> <div class="col-xs-24 col-sm-12 select-uppercase"> <span class="input-title">Цветовая схема</span> <ui-select update="color" cursor="{$State.select()}" items="{$store.colors.getItems(⁗ru⁗)}" size="l"></ui-select> </div> </div> <div class="row h50 mb-m"> <div class="col-xs-17 col-sm-12 pt-xs pr-m"> <span class="title">Получать лайки</span> </div> <div class="col-xs-7 col-sm-12 pt-xs"> <ui-switcher update="active" cursor="{$store.resume.select(⁗config⁗, ⁗likes⁗)}"></ui-switcher> </div> </div> <div class="row h50 mb-m"> <div class="col-xs-17 col-sm-12 pt-xs pr-m"> <span class="title">Показывать лайки</span> </div> <div class="col-xs-7 col-sm-12 pt-xs"> <ui-switcher update="count" cursor="{$store.resume.select(⁗config⁗, ⁗likes⁗)}"></ui-switcher> </div> </div> <div class="row h50 mb-m hidden-xs"> <div class="col-xs-17 col-sm-12 pt-xs pr-m"> <span class="title">Оживить резюме анимацией</span> </div> <div class="col-xs-7 col-sm-12 pt-xs"> <ui-switcher update="animate" cursor="{$store.resume.select(⁗config⁗)}"></ui-switcher> </div> </div> <div class="row mb-m"> <div class="hidden-xs col-sm-12 pt-xs pr-m"> <span class="title">Фотофильтр</span> </div> <div class="col-xs-24 col-sm-12 select-uppercase"> <span class="input-title">Фотофильтр</span> <ui-select update="filter" cursor="{$State.select(⁗photo⁗)}" items="{$store.photoFilter.get()}" size="l"></ui-select> </div> </div> <div class="row h50"> <div class="col-xs-17 col-sm-12 pt-xs pr-m"> <span class="title">Киноэффект на фото</span> </div> <div class="col-xs-7 col-sm-12 pt-xs"> <ui-switcher update="noise" cursor="{$State.select(⁗photo⁗)}"></ui-switcher> </div> </div> </div>',"",'class="section__slider__item"',function(e){var t=this;t.autoCommit={feedback:function(e){$store.resume.select("sections",{name:"feedback"}).set("active",e)}}}),riot.tag2("menu-sections",'<div class="section__slider__navbar menu__sections__navbar"></div> <div class="section__slider__container"> <menu-section-contacts></menu-section-contacts> <menu-section-settings></menu-section-settings> <menu-section-coverletter></menu-section-coverletter> </div>',"",'class="menu__sections"',function(e){var t=this,s=$$(t.root);t.items=[{_id:"contacts",title:"Контактные данные"},{_id:"settings",title:"Настройки"},{_id:"coverletter",title:(app.device.isPhone?"Сопровод-ное":"Сопроводительное")+" письмо"}],t.on("before-mount",function(){t.contacts=t.tags["menu-section-contacts"],t.settings=t.tags["menu-section-settings"],t.coverletter=t.tags["menu-section-coverletter"]}),t.on("mount",function(){app.device.isPhone&&s.on("swipeRight",function(){$Menu.hide()}),$afterlag.run(function(){t.slider=new app.plugins.scroll.slider(s,{items:t.items,scroll:!0}),t.slider.init(),app.device.isPhone||t.slider.on("change",function(e,t){$Menu.items&&$Menu.items.update({section:e})})})}),t.refresh=function(){t.contacts.data.set($store.resume.select("commons").deepClone()),t.coverletter.data.set($store.resume.select("coverletter").deepClone()),t.coverletter.active=$store.resume.select("sections").get({name:"coverletter"}).active,t.contacts.update(),t.coverletter.update()}});