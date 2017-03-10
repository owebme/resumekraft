<employer-content class="section col-md-24 col-lg-19 xs-plr0 xs-mlr0 { opts.classname }">

    <div class="section__container">
        <div class="row xs-plr0 xs-mlr0">
            <div class="col-md-7 col-lg-6 xs-plr0 xs-mlr0">
                <h1 if={ opts.isphone } class="title flex-row-left-center">{ opts.item.name }<div if={ opts.item.trusted } class="pos-rel ml-xs mt-xxs" data-balloon="Компания прошла идентификацию"><svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-green" d="M9.392 9.827L3.148 3.584l-2.54 1.04c-.21.116-.422 0-.53-.23-.104-.232-.104-.464 0-.58L2.832.234C2.937.113 3.044 0 3.15 0c.106 0 .212.115.318.232l6.455 8.9a.8.8 0 0 1 0 .695.286.286 0 0 1-.264.173.292.292 0 0 1-.265-.173" transform="matrix(1 0 0 -1 3 13)"/></svg></div></h1>
                <div class="employer__sidebar">
                    <img if={ opts.item.logo_urls } src="{ opts.item.logo_urls.original }" class="employer__logotype">
                    <div class="mt-m mb-l xs-mb-m">
                        <div class="c-gray mb-xxs">
                            { opts.item.area.name }
                        </div>
                        <a if={ opts.item.site_url } target="_blank" href="{ opts.item.site_url }" class="link">
                            { opts.item.site_url }
                        </a>
                    </div>
                    <div class="mb-l xs-mb-m">
                        <div><strong>Вакансии</strong></div>
                        <a href="#vacancies" if={ opts.items.length } class="link link__to__vacancies">{ opts.items.length } активных вакансий</a>
                        <span if={ !opts.items.length } class="c-gray">Сейчас нет открытых</span>
                    </div>
                    <div class="employer__type">
                        <span if={ opts.item.type == "company" }>Компания является прямым работодателем</span>
                        <span if={ opts.item.type == "agency" }>Компания является кадровым агентством</span>
                        <span if={ opts.item.type == "private_recruiter" }>Частный рекрутер</span>
                    </div>
                </div>
            </div>
            <div class="col-md-17 col-lg-18 xs-plr0 xs-mlr0 employer__content">
                <h1 if={ !opts.isphone } class="title flex-row-left-center">{ opts.item.name }<div if={ opts.item.trusted } class="pos-rel ml-xs mt-xxs" data-balloon="Компания прошла идентификацию"><svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="fill-green" d="M9.392 9.827L3.148 3.584l-2.54 1.04c-.21.116-.422 0-.53-.23-.104-.232-.104-.464 0-.58L2.832.234C2.937.113 3.044 0 3.15 0c.106 0 .212.115.318.232l6.455 8.9a.8.8 0 0 1 0 .695.286.286 0 0 1-.264.173.292.292 0 0 1-.265-.173" transform="matrix(1 0 0 -1 3 13)"/></svg></div></h1>
                <div class="employer__description">
                    <raw-content content="{ opts.item.description }">{ opts.item.description }</raw-content>
                </div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

</script>

</employer-content>
