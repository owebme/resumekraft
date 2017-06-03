<jobs-search-nav class="section jobs__search__nav">

    <div class="jobs__search__nav__header">
        <div class="rows">
            <div class="row">
                <div class="col-md-6 col-lg-7">
                    <a href="/jobs/search" class="logotype logotype-m">
                        <div class="logotype__label"></div>
                        <div class="logotype__title">hunter<span>Next</span></div>
                    </a>
                    <div if={ parent.opts.countsAll } class="jobs__search__nav__header__vacancy__count visible-lg">
                        { parent.opts.utils.numberFormat(parent.opts.countsAll, 0, ".", ",") } вакансий
                    </div>
                </div>
                <div class="col-md-14 col-lg-12 flex-centered h90 ml--25">
                    <jobs-search-form></jobs-search-form>
                </div>
                <div class="col-md-4 col-lg-5">
                    <div class="jobs__search__nav__header__buttons">
                        <a href="/?signin" class="jobs__search__nav__header__button">
                            <div class="jobs__search__nav__header__button__icon">
                                <svg data-icon="account"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><ellipse cx="50" cy="43.583" rx="18" ry="18.357"/><path d="M50,5C25.147,5,5,25.147,5,50c0,24.853,20.147,45,45,45c24.853,0,45-20.147,45-45C95,25.147,74.853,5,50,5z   M77.619,77.507C71.725,71.782,61.558,68,50,68c-11.558,0-21.725,3.782-27.619,9.507C15.352,70.449,11,60.724,11,50  c0-21.505,17.495-39,39-39c21.505,0,39,17.495,39,39C89,60.724,84.648,70.449,77.619,77.507z"/></svg>
                            </div>
                            <div class="jobs__search__nav__header__button__title">Войти</div>
                        </a>
                        <a href="/?signup" class="jobs__search__nav__header__button">
                            <div class="jobs__search__nav__header__button__icon">
                                <svg data-icon="addUser" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><g><path d="M86,43h-7v-7c0-1.105-0.895-2-2-2h-2c-1.105,0-2,0.895-2,2v7h-7c-1.105,0-2,0.895-2,2v2c0,1.105,0.895,2,2,2h7v7    c0,1.105,0.895,2,2,2h2c1.105,0,2-0.895,2-2v-7h7c1.105,0,2-0.895,2-2v-2C88,43.895,87.105,43,86,43z"/><g><path d="M29.837,46.772c2.201,0,4.218-1.017,5.85-2.58c-1.711-3.055-2.689-6.512-2.689-9.829c0-2.813,0.682-5.466,1.882-7.809     c-1.488-0.908-3.227-1.44-5.093-1.44c-5.453,0-9.874,4.464-9.874,9.97C19.912,40.588,24.383,46.772,29.837,46.772z"/><path d="M36.479,51.501c-0.964-0.207-1.961-0.322-2.987-0.322h-7.343C18.335,51.18,12,57.506,12,65.309l0.033,1.671     c0,2.18,1.77,3.948,3.953,3.948h7.24C23.582,62.246,28.928,54.844,36.479,51.501z"/><path d="M50.044,48.857c6.762,0,12.182-7.668,12.182-14.495C62.225,27.535,56.743,22,49.981,22     c-6.762,0-12.244,5.535-12.244,12.362C37.738,41.19,43.282,48.857,50.044,48.857z"/><path d="M72.12,71.843c0-9.676-7.855-17.52-17.544-17.52h-9.105c-9.69,0-17.544,7.844-17.544,17.52l0.042,2.072     c0,2.703,2.195,4.895,4.902,4.895h34.39c2.707,0,4.902-2.192,4.902-4.895L72.12,71.843z"/></g></g></g></svg>
                            </div>
                            <div class="jobs__search__nav__header__button__title">Создать</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jobs__search__nav__panel">
        <div class="jobs__search__nav__menu">
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="/">На главную</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="/premium/">Премиум резюме</a>
            </div>
            <div class="jobs__search__nav__menu__item hidden-sm hidden-md">
                <a class="jobs__search__nav__menu__item__link" href="/?signup">Создать резюме</a>
            </div>
            <div class="jobs__search__nav__menu__item" data-active={ parent.opts.section == "search" }>
                <a class="jobs__search__nav__menu__item__link" href="/jobs/search">Вакансии</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="/jp-test/">JP-тест 2.0</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="/blog/">Блог</a>
            </div>
        </div>
        <div class="jobs__search__nav__buttons">
            <jobs-panel-favorite></jobs-panel-favorite>
        </div>
        <jobs-search-panel if={ parent.opts.section == "search" }></jobs-search-panel>
    </div>

</jobs-search-nav>
