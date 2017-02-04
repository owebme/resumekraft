riot.tag2("ux-contacts",'<div class="row"> <div class="col-xs-24 col-lg-23 col-lg-offset-2 p0"> <div class="row flex-row-center-stretch"> <ux-feedback if="{$store.resume.select(⁗sections⁗).get({⁗name⁗: ⁗feedback⁗}).active}"></ux-feedback> <ux-contacts-content></ux-contacts-content> <div class="hidden-xs hidden-sm hidden-md col-lg-8 p0"> <div class="contacts-cover" style="background-image:url(\'/assets/images/resume/bg4.jpg\')"></div> </div> </div> </div> </div>',"",'class="component" data-feedback="{false : !$store.resume.select(⁗sections⁗).get({⁗name⁗: ⁗feedback⁗}).active}"',function(e){}),riot.tag2("ux-contacts-content","<div class=\"pos-rel p-m xs-p0\"> <btn-editable if=\"{$State.get('mode') === ⁗editing⁗}\" data=\"true\"></btn-editable> <div onclick=\"{openEditable}\" onupdate=\"none\"> <div class=\"hidden-xs c-primary f-primary fontSize-20 fontWeight-bold mb-xs\">Моя</div> <div class=\"hidden-xs c-blackLight f-primary fontSize-30 fontWeight-8 mb-l\">Контактная информация</div> <div class=\"flex-row-left-center w100p pt30 xs-mb-m\"> <div class=\"flex-centered {app.device.isPhone ? 'w100' : 'w80'} h80 ml--m\"> <icon-city color=\"primary\" size=\"{app.device.isPhone ? 'l' : 'm'}\"></icon-city> </div> <div class=\"p h80 c-blackLight pt-s whiteSpace-normal\"> {$store.resume.get('commons', 'contacts', 'city')} </div> </div> <div class=\"flex-row-left-center w100p xs-mb-m\"> <div class=\"flex-centered {app.device.isPhone ? 'w100' : 'w80'} h80 ml--m pt-xxs\"> <icon-phone color=\"primary\" size=\"{app.device.isPhone ? 'l' : 'm'}\"></icon-phone> </div> <div class=\"h80 c-blackLight f-primary {app.device.isPhone ? 'fontSize-22' : 'fontSize-20'} fontWeight-bold pt-m\"> {$store.resume.get('commons', 'contacts', 'phone')} </div> </div> <div class=\"flex-row-left-center w100p xs-mb-m\"> <div class=\"flex-centered {app.device.isPhone ? 'w100' : 'w80'} h80 ml--m\"> <icon-feedback color=\"primary\" size=\"{app.device.isPhone ? 'l' : 'm'}\"></icon-feedback> </div> <div class=\"h80 pt-m text-truncate minW-70p maxW-70p\"> <a class=\"p link-primary link-underline {pointerEvents-none : $State.get('mode') === 'editing'} whiteSpace-normal\" href=\"mailto:{$store.resume.get('contacts', 'email')}\">{$store.resume.get('commons', 'contacts', 'email')}</a> </div> </div> <div class=\"flex-row-left-center w100p xs-mb-m\"> <div class=\"flex-centered {app.device.isPhone ? 'w100' : 'w80'} h80 ml--m pb-xxs\"> <icon-skype color=\"primary\" size=\"{app.device.isPhone ? 'l' : 'm'}\"></icon-skype> </div> <div class=\"h80 pt-m text-truncate minW-70p maxW-70p\"> <a class=\"p link-primary {pointerEvents-none : $State.get('mode') === 'editing'} whiteSpace-normal\" href=\"skype:{$store.resume.get('contacts', 'skype')}\">{$store.resume.get('commons', 'contacts', 'skype')}</a> </div> </div> <div if=\"{$resume.social}\" class=\"mt-m\"> <ux-social-items classname=\"social social-{app.device.isPhone ? 'm' : 's'}\"></ui-social-items> </div> </div> </div>","",'class="col-sm-12 col-md-12 col-lg-8 p-l pr0 xs-p0 {bg-snow : !app.device.isPhone} zIndex-1"',function(e){var t=this;t.openEditable=function(){return"editing"!==$State.get("mode")||void $Menu.show("contacts")}}),riot.tag2("ux-courses",'<h3 class="title">{$resume.courses && $resume.courses.title ? $resume.courses.title : opts.title}</h3> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.courses}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{blur : !$resume.courses}"> <p if="{!$resume.courses || $resume.courses && $resume.courses.text}" class="mb-l pos-rel editing editing-text editing-courses-text">{$resume.courses && $resume.courses.text ? $resume.courses.text : $store.resume.placeholder.courses.text}</p> <div> <div if="{$resume.courses && $resume.courses.items}" each="{item, i in _.sortArray($resume.courses.items, ⁗year⁗, ⁗desc⁗)}" class="pos-rel courses-item mtb-xl editing editing-text editing-courses-item" data-id="{item._id}"> <h3 class="c-primary mb-s"><strong>{item.year}</strong> &ndash; {item.name}</h3> <h3 class="c-black mb-s"><strong>{item.title}</strong></h3> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"courses",t,{root:function(){return{title:null,text:null,items:null}},item:function(){return{_id:_.newId(),name:null,title:null,year:(new Date).getFullYear()}}},[{field:"name",alert:"Название площадки или школы"},{field:"title",alert:"Введите название курса"}])}}),riot.tag2("ux-coverletter",'<div class="row coverletter__text"> <div class="col-xs-24 col-md-15 centered"> <div if="{$resume.photo}" class="coverletter__photo" riot-style="background-image:url(\'{$resume.photo}\')"></div> <div class="mb30 xs-mb0">{$resume.coverletter.text}</div> <button onclick="{hide}" class="hidden-xs btn btn-xl btn-{$resume.coverletter.color == \'1\' ? \'white-hover\' : \'primary\'} text-uppercase">Перейти к резюме</button> </div> </div>',"",'class="coverletter"',function(e){this.hide=function(){$root.trigger("mode","coverletter",!1)}}),riot.tag2("ux-education",'<h3 class="title">{$resume.education && $resume.education.title ? $resume.education.title : opts.title}</h3> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.education}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{blur : !$resume.education}"> <p if="{!$resume.education || $resume.education && $resume.education.text}" class="mb-l pos-rel editing editing-text editing-edu-text">{$resume.education && $resume.education.text ? $resume.education.text : $store.resume.placeholder.education.text}</p> <div> <div if="{$resume.education && $resume.education.items}" each="{item, i in _.sortArray($resume.education.items, ⁗year⁗, ⁗desc⁗)}" class="pos-rel education-item mtb-xl editing editing-text editing-edu-item" data-id="{item._id}"> <h3 class="c-primary mb-s"><strong>{item.year}</strong> &ndash; {$store.education.getTitleById(item.level)}</h3> <p class="mb-s" style="line-height:28px">{item.title}<span if="{item.level != ⁗8⁗ && item.faculty}" class="h4 c-primary"><br>{item.faculty}</span></p> <h3 if="{item.level != ⁗8⁗ && item.speciality}" class="c-black mb-s">Специальность &ndash; <strong>{item.speciality}</strong></h3> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"education",t,{root:function(){return{title:null,text:null,items:null}},item:function(){return{_id:_.newId(),level:"1",title:null,faculty:null,speciality:null,year:(new Date).getFullYear()}}},[{field:"title",alert:"Введите название учебного заведения"}])}}),riot.tag2("ux-feedback",'<div class="p-m xs-p0"> <div class="hidden-xs c-grayLight f-primary fontSize-20 fontWeight-bold mb-xs">Связаться</div> <div class="hidden-xs c-white f-primary fontSize-30 fontWeight-8 mb-l">Отправить приглашение</div> <div class="form mb-m"> <div class="form-item"> <label class="form-title">Представтесь / Компания</label> <input class="form-input"> </div> <div class="form-item"> <label class="form-title">Email</label> <input class="form-input"> </div> <div class="form-item"> <label class="form-title">Сообщение</label> <textarea class="form-textarea"></textarea> </div> </div> <button class="btn btn-{app.device.isPhone ? \'xl display-block centered\' : \'l\'} btn-primary">Отправить</button> </div>',"","class=\"form-wrapper col-sm-12 col-md-12 col-lg-8 p-l pb-xl xs-p0 zIndex-1\" data-color=\"{app.device.isPhone ? 'white' : 'black'}\"",function(e){var t=this;t.on("mount",function(){$afterlag.run(function(){$Resume.el.find("ux-feedback").find(".form-input, .form-textarea").on("focus blur",function(e){var t=$$(this).parent();"focus"===e.type?t.addClass("focus"):t.removeClass("focus")})})})}),riot.tag2("ux-hobby",'<h3 class="title">{$resume.hobby && $resume.hobby.title ? $resume.hobby.title : opts.title}</h3> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.hobby}"></btn-editable> <div class="{blur : !$resume.hobby}"> <p onclick="{openEditable}" onupdate="none" data-target="text" if="{!$resume.hobby || $resume.hobby && $resume.hobby.text}" class="pos-rel editing editing-text editing-hobby-text">{$resume.hobby && $resume.hobby.text ? $resume.hobby.text : $store.resume.placeholder.hobby.text}</p> <div onclick="{openEditable}" onupdate="none" data-target="hobby" class="pos-rel editing editing-text editing-hobby-items"> <div class="row hobby-items"> <div each="{item in $resume.hobby.items}" no-reorder class="col-xs-12 col-md-6"> <div class="hobby-item"> <div class="hobby-icon icon-hobby icon-hobby-{item}"></div> <div class="hobby-title">{$store.hobby.getTitleById(item)}</div> </div> </div> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"hobby",t,{root:function(){return{title:null,text:null,items:null}}},!1,{before:function(t){var s=e.currentTarget.getAttribute("data-target");s&&t.show[s].call()}})}}),riot.tag2("ux-jobs",'<div class="row"> <div class="col-xs-24 col-md-18 col-md-offset-6"> <div class="screen__inner"> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.jobs}"></btn-editable> <h3 class="title">{$resume.jobs && $resume.jobs.title ? $resume.jobs.title : opts.title}</h3> <div if="{!$resume.jobs || $resume.jobs && $resume.jobs.text}" onclick="{openEditable}" onupdate="none" class="{blur : !$resume.jobs}"> <div class="row mb-l"> <div class="col-xs-24 pb-xs"> <p class="editing editing-text editing-jobs-text">{$resume.jobs && $resume.jobs.text ? $resume.jobs.text : $store.resume.placeholder.jobs.text}</p> </div> </div> </div> </div> </div> </div> <div onclick="{openEditable}" onupdate="none" class="row job-items"> <div class="col-xs-24 col-lg-22 col-lg-offset-2"> <div class="pt-xl pb-m plr-l sm-plr0 xs-pt-l xs-plr-xxs xs-pb-l bg-primary"> <div class="bg-section bg-primary"></div> <div if="{$State.get(\'mode\') === ⁗editing⁗ && (!$resume.jobs || !$resume.jobs.items)}" class="aspectRatio-169"> <div class="job-empty pos-centered pb-xl xs-pb-m"> <button class="btn btn-xl btn-editable btn-white btn-upper" type="button"><svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="btn-svg-color" d="M87.754,45.284H54.716V12.246c0-2.605-2.111-4.716-4.716-4.716c-1.302,0-2.481,0.528-3.334,1.382 c-0.853,0.853-1.381,2.032-1.382,3.334v33.038l-33.038,0c-1.302,0-2.481,0.528-3.334,1.382C8.058,47.519,7.53,48.698,7.53,50 c0,2.605,2.111,4.716,4.716,4.716l33.038,0l0,33.038c0,2.605,2.111,4.716,4.716,4.716c2.604,0,4.716-2.112,4.716-4.716l0-33.038 h33.038c2.604,0,4.716-2.112,4.716-4.716C92.47,47.395,90.359,45.284,87.754,45.284z"></path></svg>Добавить место работы</button> </div> <div class="job-empty-text">Подробнее расскажите о своем профессиональном опыте. Для потенциального работодателя важен результат вашей работы, постарайтесь ярче, желательно в цифрах, описать его.</div> </div> <div each="{item in sort($resume.jobs.items)}" class="jobs-item editing editing-jobs-item" data-id="{item._id}"> <div class="row pl-m pt-xxs sm-pl0"> <div class="col-md-14"> <h3 class="job-title">{item.post}</h3> <h4 class="job-subtitle">{get.period(item)}</h4> </div> <div class="col-md-10"> <div class="job-year">{get.year(item)}</div> <h3 class="job-title text-right">{item.company} &ndash; {item.city}</h3> </div> </div> <div class="row pl-m pt-xxs pb-xl sm-pl0"> <div class="col-xs-24 col-lg-22"> <div class="job-text"> {item.text} </div> </div> </div> </div> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.get={period:function(e){var t=(new Date).getDate(),s=0,i=0,l=$store.month.getTitleById(e.from.month)+" "+e.from.year;if(e.last){var a="по настоящее время";s=moment().diff(e.from.year+"-"+(e.from.month<10?"0"+e.from.month:e.from.month)+"-"+(t<10?"0"+t:t),"month")}else{var a=$store.month.getTitleById(e.to.month)+" "+e.to.year;s=moment(e.to.year+"-"+(e.to.month<10?"0"+e.to.month:e.to.month)+"-"+(t<10?"0"+t:t)).diff(e.from.year+"-"+(e.from.month<10?"0"+e.from.month:e.from.month)+"-"+(t<10?"0"+t:t),"month")}return s>0&&(i=Math.floor(s/12),i+="1"==i?" год":i>1&&i<5?" года":" лет"),s&&(s-=12*Math.floor(s/12),s+="1"==s?" месяц":s>1&&s<5?" месяца":" месяцев"),i?l+" — "+a+" ("+i+(parseInt(s)>0?", "+s:"")+")":s?l+" — "+a+" ("+s+")":l+" — "+a},year:function(e){return e.last?(new Date).getFullYear():e.to.year}},t.sort=function(e){return _.sortBy(e,function(e){return t.get.year(e)}).reverse()},t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"jobs",t,{root:function(){return{title:null,text:null,items:null}},item:function(){return{_id:_.newId(),company:null,city:null,post:null,from:{month:"1",year:"2000"},to:{month:"1",year:"2000"},text:null,last:!1}}},[{field:"post",alert:"Введите должность"},{field:"company",alert:"Введите название компании"},{field:"city",alert:"Введите город"},{field:"text",alert:"Введите описание"}])}}),riot.tag2("ux-languages",'<h3 class="title">{$resume.languages && $resume.languages.title ? $resume.languages.title : opts.title}</h3> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.languages}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{blur : !$resume.languages}"> <p if="{!$resume.languages || $resume.languages && $resume.languages.text}" class="mb-l">{$resume.languages && $resume.languages.text ? $resume.languages.text : $store.resume.placeholder.languages.text}</p> <div class="row"> <div class="editing editing-text editing-lang-items"> <div each="{item in ($resume.languages && $resume.languages.items ? $resume.languages.items : $store.resume.placeholder.languages.items )}" no-reorder class="col-xs-24 col-sm-24 col-md-{item.title == \'native\' || item.title == \'de\' ? \'11\' : \'13\'}"> <h3 class="{\'c-primary\' : item.title == \'native\'} mb-l">{$store.languages.getTitleById(item.title)}<span class="plr-xs">&ndash;</span> <strong if="{item.title == ⁗native⁗}"> {$store.languages.native.getTitleById(item.value)} </strong> <strong if="{item.title != ⁗native⁗}" class="{\'c-grayDark\' : item.value == ⁗1⁗}"> {$store.languages.select.getTitleById(item.value)} </strong> </h3> </div> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"languages",t,{root:function(){return{title:null,text:null,items:[{title:"native",value:"4"},{title:"en",value:"1"},{title:"de",value:"1"},{title:"fr",value:"1"}]}}})}}),riot.tag2("ux-likes",'<div class="row"> <div class="col-xs-24 likes centered" data-gender="{$resume.commons.gender}"> <div class="likes__cover anim anim-group1 anim-scale"> <div if="{$resume.photo}" class="likes__cover__photo" riot-style="background-image:url(\'{$resume.photo}\')"></div> <div if="{$resume.config.likes.count && $resume.likes.length}" class="likes__cover__badge">{$resume.likes.length}</div> </div> <div class="likes__text mb-m anim anim-group1 anim-tb-ease">Если вам понравилось мое резюме поставте лайк</div> <div class="anim anim-group1 anim-scale-ease"> <div onclick="{liked}" class="btn btn-xl2 btn-strong btn-white-hover">Мне нравиться</div> </div> <div class="pos-centered-v flex-column-centered w100p pb-l pointerEvents-none"> <div class="ui-icon-check_circle_white w50 h50 mb-s anim-group2 anim-scale" delay-show="xl"></div> <div class="anim-group2 anim-bt-soft plr-l likes__text" delay-show="s" data-duration="l">Спасибо за ваш голос, он будет учтен.</div> </div> </div> </div>',"","class=\"display-block {isLiked ? 'showAnim-group2' : 'showAnim-group1'}\"",function(e){this.isLiked=!1,this.liked=function(){this.isLiked=!0,app.demo||app.request("addResumeLike",{id:$resume._id},{loader:!1,notify:!1})}}),riot.tag2("ux-name",'<btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$store.resume.get(⁗commons⁗, ⁗name⁗)}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{opts.classname} {blur : !$store.resume.get(\'commons\', \'name\')}"> {$store.resume.get(⁗commons⁗, ⁗name⁗) ? $store.resume.get(⁗commons⁗, ⁗name⁗) + \' \' + $store.resume.get(⁗commons⁗, ⁗surname⁗) : $store.resume.placeholder.name} </div>',"",'class="component"',function(e){var t=this,s=$$(t.root);this.on("mount",function(){"editing"!==$State.get("mode")&&s.children().unwrap()}),t.openEditable=function(){return"editing"!==$State.get("mode")||void $Editable.show("name",{title:t.opts.title,data:{name:$store.resume.get("commons","name"),surname:$store.resume.get("commons","surname")},callback:function(e){$store.resume.select("commons","name").set(_.clean(e.name,"")),$store.resume.select("commons","surname").set(_.clean(e.surname,"")),t.update()}})}}),riot.tag2("ux-photo",'<div if="{$resume.photo}" class="{photo-changer : $State.get(\'mode\') === \'editing\'}"> <div class="photo" riot-style="background-image:url(\'{$resume.photo}\')" data-noise="{$State.get(\'photo\', \'noise\')}"></div> <div if="{$State.get(\'mode\') === ⁗editing⁗}" class="photo-changer-bg"> <div class="photo-changer-title">Сменить фото</div> </div> </div> <div if="{!$resume.photo}" class="photo-placeholder"> <div if="{$State.get(\'mode\') === ⁗editing⁗}" class="photo-placeholder-icon"> <svg class="photo-placeholder-icon-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path class="photo-placeholder-icon-svg-color" d="M527.4,2.94c-6.42,0-11.64,5.22-11.64,11.64V53.5c0,6.42,5.22,11.64,11.64,11.64c6.42,0,11.64-5.22,11.64-11.64V14.58 C539.04,8.16,533.82,2.94,527.4,2.94z M533.04,53.5c0,3.11-2.53,5.64-5.64,5.64s-5.64-2.53-5.64-5.64V14.58 c0-3.11,2.53-5.64,5.64-5.64s5.64,2.53,5.64,5.64V53.5z"></path></g><g><path class="photo-placeholder-icon-svg-color" d="M549.5,47.51v6.35c0,11.17-8.32,20.43-19.1,21.89v6.85h8.94c1.66,0,3,1.35,3,3c0,1.66-1.34,3-3,3h-23.88 c-1.65,0-3-1.34-3-3c0-1.65,1.35-3,3-3h8.94v-6.85c-10.77-1.46-19.1-10.72-19.1-21.89v-6.35c0-1.66,1.34-3,3-3s3,1.34,3,3v6.35 c0,8.88,7.22,16.1,16.1,16.1s16.1-7.22,16.1-16.1v-6.35c0-1.66,1.35-3,3-3C548.16,44.51,549.5,45.85,549.5,47.51z"></path></g><g><path class="photo-placeholder-icon-svg-color" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M527.403-29.274"></path></g><g><path class="photo-placeholder-icon-svg-color" d="M95,50.004c0,15.618-11.046,29.433-26.266,32.85c-0.226,0.055-0.46,0.078-0.686,0.078c-1.428,0-2.715-0.983-3.042-2.434 c-0.374-1.685,0.679-3.354,2.364-3.729c12.396-2.785,21.39-14.042,21.39-26.765c0-15.126-12.31-27.436-27.436-27.436 c-9.938,0-19.081,5.367-23.941,14.042c-0.008,0.008-0.008,0.016-0.008,0.023c-0.507,1.373-1.935,2.247-3.432,1.997 c-1.037-0.172-2.106-0.257-3.167-0.257c-10.773,0-19.534,8.76-19.534,19.534c0,10.765,8.76,19.526,19.534,19.526 c10.641,0,19.323-8.565,19.518-19.159l-3.128,3.128c-1.225,1.225-3.198,1.217-4.415,0c-1.217-1.217-1.217-3.191,0-4.408 l8.464-8.472c0.585-0.585,1.381-0.913,2.208-0.913c0.827,0,1.623,0.328,2.208,0.913l8.464,8.472c1.225,1.217,1.225,3.191,0,4.408 c-0.608,0.608-1.404,0.913-2.2,0.913c-0.803,0-1.599-0.304-2.208-0.913l-3.152-3.144c-0.187,14.042-11.67,25.416-25.759,25.416 C16.561,83.673,5,72.112,5,57.906c0-14.213,11.561-25.774,25.774-25.774c0.655,0,1.303,0.023,1.958,0.078 c6.132-9.845,16.905-15.883,28.591-15.883C79.897,16.327,95,31.43,95,50.004z"></path></g></svg> <div class="photo-placeholder-title">Загрузить фото</div> </div> </div>',"",'onclick="{openEditable}" onupdate="none" class="display-block"',function(e){var t=this;t.openEditable=function(){return"editing"!==$State.get("mode")||void $Editable.show("photo",{title:t.opts.title,callback:function(e){$resume.photo=e,t.update()}})}}),riot.tag2("ux-salary",'<btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.salary}"></btn-editable> <div class="{blur : !$resume.salary}"> <div class="row"> <div onclick="{openEditable}" onupdate="none" data-screen="salary" class="col-xs-24 col-sm-12 col-md-24"> <div class="{opts.classname}"> {$resume.salary.amount ? _.numberFormat($resume.salary.amount, 0, ⁗.⁗, ⁗.⁗) : $store.resume.placeholder.salary.amount} {$store.currency.getTitleById($resume.salary.currency)} <sup class="flex-centered pos-tl c-white bg-primary fontSize-14 lineHeight-1 borderRadius-xxxl plr-xs nowrap ml-s" style="left:100%; height:22px; padding-bottom:1px;">{$resume.salary.worktime ? $store.worktime.getTitleById($resume.salary.worktime) : $store.worktime.getTitleById($store.resume.placeholder.salary.worktime)}</sup> </div> </div> <div if="{$resume.salary.graph.active}" onclick="{$State.get(\'mode\') === ⁗editing⁗ ? openEditable : graph.open}" onupdate="none" data-screen="graph" class="col-xs-24 col-sm-12 col-md-24"> <div class="salary-graph-mini"> <span class="salary-graph-mini-bar">{$resume.salary.graph.items.join(⁗,⁗)}</span> <span class="salary-graph-mini-title">график роста</span> </div> </div> </div> </div>',"",'class="component"',function(e){var t=this;$$(t.root);t.on("mount",function(){if(!_.isEmpty($resume.salary.graph)){var e=$Resume.el.find(".screen[data-section='commons']").find(".salary-graph-mini"),s=app.device.isPhone?app.sizes.width-157.5+"px":"220px";e.css("width",s),t.chart=e.find(".salary-graph-mini-bar").peity("bar",{width:s,height:"40px"})}}),t.graph={open:function(){"editing"!==$State.get("mode")&&$Salary.graph.show()},refresh:function(){t.chart.text($resume.salary.graph.items.join(",")),t.chart.peity("bar",{fill:[$State.get("color")]})}},t.on("updated",function(){t.graph.refresh()}),t.openEditable=function(e){return"editing"!==$State.get("mode")||($Editable.show("salary",{active:$store.resume.select("sections").get({name:"salary"}).active,title:t.opts.title,salary:$resume.salary,screen:e.currentTarget.getAttribute("data-screen"),callback:function(e,s){$store.resume.select("sections",{name:"salary"}).set("active",e),$resume.salary=s?s:null,t.update({editable:!1})}}),void(t.editable=!0))}}),riot.tag2("ux-skills",'<h3 class="title">{$resume.skills && $resume.skills.title ? $resume.skills.title : opts.title}</h3> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.skills}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{blur : !$resume.skills}"> <div class="row"> <div if="{$resume.skills && $resume.skills.header}" class="col-md-24 col-lg-12"> <div class="screen2-col-left"> <h2 class="lineHeight-xxxl c-primary mb-l sm-mb-xl md-pr-l editing editing-text editing-skills-header">{$resume.skills && $resume.skills.header ? $resume.skills.header : $store.resume.placeholder.skills.header}</h2> </div> </div> <div if="{$resume.skills && $resume.skills.items || !$resume.skills}" class="col-md-21 {$resume.skills.header ? \'col-lg-12\' : \'col-lg-17 mt-m\'}"> <div class="screen2-col-right pb-l {\'pl-m\' : $resume.skills.header}"> <div class="progress progress-m w100p editing editing-text editing-skills-progress"> <div each="{item in ($resume.skills && $resume.skills.items ? $resume.skills.items : (!$resume.skills ? $store.resume.placeholder.skills.items : []))}" no-reorder class="progress-item mb-m"> <div class="progress-title f-primary">{item.title}</div> <div class="progress-score">{item.value}%</div> <div class="progress-line" riot-style="width:{item.value}%"></div> </div> </div> </div> </div> <div if="{!$resume.skills || $resume.skills && $resume.skills.text}" class="col-xs-24 editing editing-text editing-skills-text"> <p class="clear">{$resume.skills && $resume.skills.text ? $resume.skills.text : $store.resume.placeholder.skills.text}</p> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){if("editing"!==$State.get("mode"))return!0;for(var s=[],i=0;i<4;i++)s.push({title:"",value:"100"});$Editable.open(e,"skills",t,{root:function(){return{title:null,header:null,text:null,items:s}},item:function(){return{title:"",value:"100"}}})}}),riot.tag2("ux-social",'<btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.social}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{blur : !$resume.social}"> <div class="pos-rel editing editing-text editing-social-items"> <p class="c-black text-uppercase f-primary fontWeight-bold mb-m">{$resume.social && $resume.social.title ? $resume.social.title : $store.resume.placeholder.social.title}</p> <ux-social-items classname="{opts.classname}"></ui-social-items> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"social",t,{root:function(){return{title:null,items:[]}}})}}),riot.tag2("ux-social-items",'<a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'fb\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'fb\'}).value}" class="social-btn"> <svg class="social-btn-fb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="fill-primary" d="M60.5 32.5c-1.7-.6-4.8-.7-6.5-.7-5.1 0-7.2 4.1-7.2 8.9v3.2h-3v6.4h3V68H53V50.3h6v-6.4h-6v-3.8c0-1.6 2.6-2.4 3.7-2.4 1 0 2 .2 2.9.5l.9-5.7"></path></svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'vk\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'vk\'}).value}" class="social-btn"> <svg class="social-btn-vk" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="fill-primary" d="M56.7 49.5v-.1c2.3-1 3.5-3.1 3.5-5.6 0-5.6-5.2-6-9.5-6h-9.9v26h10.8c5.1 0 10.3-2 10.3-8 0-3.4-2-5.6-5.2-6.3zm-8.9-7h1.9c1.9 0 3.9.2 3.9 2.6 0 2.7-2 2.9-4.1 2.9h-1.8v-5.5h.1zM50 59h-2.2v-6.5h3c2.3 0 4.5.3 4.5 3.2 0 3.1-2.9 3.3-5.3 3.3z"></path></svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'dk\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'dk\'}).value}" class="social-btn"> <svg class="social-btn-dk" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="fill-primary" d="M56.3 52.2c-2 .9-4.1 1.5-6.3 1.5-2.3 0-4.1-.6-6.2-1.5-.4-.2-.8-.3-1.3-.3-1.5 0-2.7 1.2-2.7 2.6 0 2.6 4.5 3.5 6.6 4l-5.3 4.9c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.7 2.6.7 0 1.4-.2 1.9-.7l5-4.7 5 4.7c.5.5 1.2.7 1.9.7 1.5 0 2.7-1.2 2.7-2.6 0-.7-.3-1.3-.8-1.8l-5.3-4.9c2.2-.4 6.6-1.5 6.6-4 0-1.3-1.2-2.6-2.7-2.6-.2-.1-.6 0-1 .3M50.1 34.3c-5.3 0-9.2 4-9.2 8.7 0 4.6 4 8.7 9.2 8.7 5.3 0 9.2-4 9.2-8.7 0-4.6-4-8.7-9.2-8.7zm0 12.3c-2.2 0-3.8-1.7-3.8-3.6 0-1.9 1.7-3.6 3.8-3.6 2.2 0 3.8 1.7 3.8 3.6 0 1.9-1.7 3.6-3.8 3.6z"></path></svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'tw\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'tw\'}).value}" class="social-btn"> <svg class="social-btn-tw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="fill-primary" d="M63.8 41.8c1.5-.8 2.6-2.1 3.1-3.6-1.4.7-2.9 1.3-4.5 1.6-1.3-1.3-3.2-2-5.1-2-3.9 0-7 2.9-7 6.5 0 .5 0 1 .2 1.5-5.6-.4-10.9-2.8-14.5-6.9-.6 1-.9 2.1-.9 3.3 0 2.2 1.2 4.2 3.1 5.4-1.2 0-2.2-.3-3.2-.8v.1c-.1 3.1 2.3 5.7 5.6 6.3-.6.2-1.2.2-1.9.2-.4 0-.9 0-1.3-.1.9 2.6 3.6 4.5 6.5 4.5-2.5 1.8-5.5 2.8-8.7 2.8-.5 0-1.1 0-1.6-.1 3.2 1.9 6.9 2.9 10.8 2.9 8.1 0 14.9-4 18.2-10.9 1.1-2.4 1.8-4.9 1.8-7.5v-.9c1.4-.9 2.6-2 3.5-3.3-1.4.5-2.7.9-4.1 1z"></path></svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'gl\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'gl\'}).value}" class="social-btn"> <svg class="social-btn-gl" enable-background="new 0 0 128 128" version="1.1" viewbox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><rect clip-rule="evenodd" fill="none" fill-rule="evenodd"></rect><path class="fill-primary" clip-rule="evenodd" d="M40.654,55.935v16.13 c0,0,15.619-0.021,21.979-0.021C59.189,82.5,53.834,88.194,40.654,88.194c-13.338,0-23.748-10.832-23.748-24.194 s10.41-24.194,23.748-24.194c7.052,0,11.607,2.483,15.784,5.944c3.344-3.35,3.065-3.828,11.573-11.877 c-7.222-6.586-16.822-10.6-27.357-10.6C18.201,23.273,0,41.507,0,64c0,22.493,18.201,40.727,40.654,40.727 c33.561,0,41.763-29.275,39.044-48.792H40.654z M113.912,56.742V42.628h-10.063v14.113H89.358v10.081h14.491v14.517h10.063V66.823 H128V56.742H113.912z" fill-rule="evenodd"></path></g></g></svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'in\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'in\'}).value}" class="social-btn"> <svg class="social-btn-in" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"> <path class="fill-primary" d="M 15 2 C 7.832 2 2 7.832 2 15 L 2 35 C 2 42.168 7.832 48 15 48 L 35 48 C 42.168 48 48 42.168 48 35 L 48 15 C 48 7.832 42.168 2 35 2 L 15 2 z M 38 10 C 39.105 10 40 10.895 40 12 C 40 13.105 39.105 14 38 14 C 36.895 14 36 13.105 36 12 C 36 10.895 36.895 10 38 10 z M 25 13 C 31.617 13 37 18.383 37 25 C 37 31.617 31.617 37 25 37 C 18.383 37 13 31.617 13 25 C 13 18.383 18.383 13 25 13 z M 25 15 C 19.486 15 15 19.486 15 25 C 15 30.514 19.486 35 25 35 C 30.514 35 35 30.514 35 25 C 35 19.486 30.514 15 25 15 z"></path> </svg> </a> <a target="_blank" href="{$store.resume.select(\'social\', \'items\').get({\'title\': \'lk\'}).value}" if="{$store.resume.select(\'social\', \'items\').get({\'title\': \'lk\'}).value}" class="social-btn"> <svg class="social-btn-lk" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50"> <path class="fill-primary" d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M16,34.9 V42H8V19h8V34.9z M12,16.5c-2.4,0-4-1.7-4-3.8C8,10.6,9.6,9,12,9s3.9,1.6,4,3.7C16,14.8,14.5,16.5,12,16.5z M42,42h-8 c0,0,0-12.1,0-13s-0.1-4-3.5-4c-3,0-3.5,2.9-3.5,4s0,13,0,13h-8V19h8v3.1c0,0,1.6-3.1,6.3-3.1c4.8,0,8.7,3.3,8.7,10V42z"></path> </svg> </a>',"","if=\"{_.any(_.pluck($store.resume.get('social', 'items'), ⁗value⁗))}\" class=\"{opts.classname} display-block\"",function(e){}),riot.tag2("ux-tags",'<btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.tags}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{opts.classname} {blur : !$resume.tags}"> <div class="tag" each="{item in ($resume.tags ? $resume.tags : $store.resume.placeholder.tags)}" no-reorder>{item}</div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(){return"editing"!==$State.get("mode")||($Editable.show("tags",{active:$store.resume.select("sections").get({name:"tags"}).active,title:t.opts.title,tags:$resume.tags,callback:function(e,s){$store.resume.select("sections",{name:"tags"}).set("active",e),$resume.tags=s?s:null,t.update({editable:!1})}}),void(t.editable=!0))}}),riot.tag2("ux-text",'<btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{opts.cursor.get(opts.update)}"></btn-editable> <div onclick="{openEditable}" onupdate="none" class="{opts.classname} {blur : !opts.cursor.get(opts.update)}"> <div class="{\'editing editing-text editing-commons-text\' : opts.update != ⁗post⁗}">{opts.cursor.get(opts.update) ? opts.cursor.get(opts.update) : $store.resume.placeholder[opts.update]}</div> </div>',"",'class="component"',function(e){var t=this,s=$$(t.root);this.on("mount",function(){"editing"!==$State.get("mode")&&(t.opts.cursor.get(t.opts.update)?s.children().unwrap():s.remove())}),t.openEditable=function(){return"editing"!==$State.get("mode")||($Editable.show("text",{active:t.opts.activity?$store.resume.select("sections").get({
name:t.opts.update}).active:null,title:t.opts.title,type:t.opts.type,update:t.opts.update,editing:t.opts.cursor.get(t.opts.update),callback:function(e,s){null!==e&&$store.resume.select("sections",{name:t.opts.update}).set("active",e),t.opts.cursor.set(t.opts.update,s?s:null),t.update({editable:!1})}}),void(t.editable=!0))}}),riot.tag2("ux-works",'<div class="row"> <div class="col-xs-24 col-md-18 col-md-offset-6"> <div class="screen__inner"> <btn-editable if="{$State.get(\'mode\') === ⁗editing⁗}" data="{$resume.works}"></btn-editable> <h3 class="title">{$resume.works && $resume.works.title ? $resume.works.title : $store.resume.placeholder.works.title}</h3> <div if="{!$resume.works || $resume.works && $resume.works.text}" onclick="{openEditable}" onupdate="none" class="{blur : !$resume.works}"> <div class="row mb-l"> <div class="col-xs-24 pb-xs"> <p class="editing editing-text editing-works-text">{$resume.works && $resume.works.text ? $resume.works.text : $store.resume.placeholder.works.text}</p> </div> </div> </div> </div> </div> </div> <div onclick="{openEditable}" onupdate="none" class="row work-items"> <div class="col-xs-24 col-lg-22 col-lg-offset-2"> <div class="pt-xl pb-m plr-l sm-plr0 xs-pt-l xs-plr-xxs xs-pb-l bg-primary"> <div class="bg-section bg-primary"></div> <div class="row pl-m pt-xxs sm-pl0"> <div if="{$State.get(\'mode\') === ⁗editing⁗ && (!$resume.works || !$resume.works.items)}" class="aspectRatio-169"> <div class="work-empty pos-centered pb-xl xs-pb-m"> <button class="btn btn-xl btn-editable btn-white btn-upper" type="button"><svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewbox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path class="btn-svg-color" d="M87.754,45.284H54.716V12.246c0-2.605-2.111-4.716-4.716-4.716c-1.302,0-2.481,0.528-3.334,1.382 c-0.853,0.853-1.381,2.032-1.382,3.334v33.038l-33.038,0c-1.302,0-2.481,0.528-3.334,1.382C8.058,47.519,7.53,48.698,7.53,50 c0,2.605,2.111,4.716,4.716,4.716l33.038,0l0,33.038c0,2.605,2.111,4.716,4.716,4.716c2.604,0,4.716-2.112,4.716-4.716l0-33.038 h33.038c2.604,0,4.716-2.112,4.716-4.716C92.47,47.395,90.359,45.284,87.754,45.284z"></path></svg>Добавить проекты</button> </div> <div class="work-empty-text">Расскажите о своих проектах, в каких проектах или работах вы учавствовали, каких достигли успехов, возможно указать ссылки на фото и видео материалы.</div> </div> <div each="{item, i in _.sortArray($resume.works.items, ⁗year⁗, ⁗desc⁗)}" class="works-item col-md-12 editing editing-works-item" data-id="{item._id}"> <div class="work-num hidden-xs">{i < 9 ? \'0\' + ( i + 1 ) : i + 1}.</div> <div class="row"> <div if="{isYears()}" class="col-md-4"> <h3 class="work-title">{item.year}</h3> </div> <div class="{isYears() ? \'col-md-20\' : \'col-md-24\'}"> <div class="work-num visible-xs">{i < 9 ? \'0\' + ( i + 1 ) : i + 1}.</div> <h3 class="work-title">{item.title}</h3> <div class="work-text">{item.text}</div> <div class="work-item-links"> <div class="work-item-links-container"> <a if="{item.links && item.links.url && item.links.url.value}" target="_blank" href="{item.links.url.value}" class="work-item-link" data-balloon="{item.links.url.title}" data-icon="url"></a> <a if="{item.links && item.links.image && item.links.image.value}" target="_blank" href="{item.links.image.value}" class="work-item-link" data-balloon="{item.links.image.title}" data-icon="image"></a> <a if="{item.links && item.links.video && item.links.video.value}" target="_blank" href="{item.links.video.value}" class="work-item-link" data-balloon="{item.links.video.title}" data-icon="video"></a> </div> </div> </div> </div> </div> </div> </div> </div> </div>',"",'class="component"',function(e){var t=this;t.openEditable=function(e){return"editing"!==$State.get("mode")||void $Editable.open(e,"works",t,{root:function(){return{title:null,text:null,items:null}},item:function(){return{_id:_.newId(),year:(new Date).getFullYear(),title:null,text:null,links:{url:{title:null,value:null},image:{title:null,value:null},video:{title:null,value:null}}}}},[{field:"title",alert:"Введите название проекта"},{field:"text",alert:"Введите описание проекта"}])},t.isYears=function(){return _.any(_.pluck($resume.works.items,"year"))}});