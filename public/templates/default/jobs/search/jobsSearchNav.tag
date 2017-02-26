<jobs-search-nav class="section jobs__search__nav">

    <div class="jobs__search__nav__header">
        <div class="rows">
            <div class="row">
                <div class="col-md-7">
                    <a href="/" class="logotype"></a>
                    <div class="jobs__search__nav__header__vacancy__count">
                        { parent.opts.utils.numberFormat(parent.opts.countsAll, 0, ".", ",") } вакансий
                    </div>
                </div>
                <div class="col-md-12 flex-centered h90 ml--25">
                    <jobs-search-vacancy-form></jobs-search-vacancy-form>
                </div>
                <div class="col-md-5">
                    <div class="jobs__search__nav__header__buttons">
                        <a href="#" class="jobs__search__nav__header__button">
                            <div class="jobs__search__nav__header__button__icon">
                                <svg data-icon="account" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M65.498,63.023c3.289-4.9,5.002-11.303,5.002-17.521c0-12.748-8.41-22-20-22s-20,9.252-20,22  c0,6.219,1.713,12.621,5.002,17.521C25.133,66.43,16.5,72.955,16.5,80.5c0,0.506,0.191,0.994,0.537,1.365  C25.842,91.303,37.727,96.5,50.5,96.5s24.658-5.197,33.463-14.635c0.346-0.371,0.537-0.859,0.537-1.365  C84.5,72.955,75.867,66.43,65.498,63.023z M34.5,45.502c0-8.945,5.496-18,16-18s16,9.055,16,18c0,9.135-4.965,22-16,22  S34.5,54.637,34.5,45.502z M50.5,92.5c-11.375,0-21.979-4.521-29.957-12.752c0.658-5.643,8.605-10.77,17.688-13.398  c3.17,3.158,7.273,5.152,12.27,5.152s9.1-1.994,12.27-5.152c9.082,2.629,17.029,7.756,17.688,13.398  C72.479,87.979,61.875,92.5,50.5,92.5z M50.5,4.5c-25.363,0-46,20.635-46,46c0,6.557,1.35,12.889,4.014,18.822  c0.332,0.742,1.061,1.182,1.826,1.182c0.273,0,0.551-0.057,0.816-0.176c1.008-0.451,1.459-1.635,1.006-2.643  C9.733,62.27,8.5,56.488,8.5,50.5c0-23.158,18.842-42,42-42s42,18.842,42,42c0,5.986-1.232,11.768-3.664,17.184  c-0.451,1.008-0.002,2.191,1.006,2.643c1.008,0.453,2.191,0.004,2.645-1.006C95.149,63.387,96.5,57.055,96.5,50.5  C96.5,25.135,75.864,4.5,50.5,4.5z"/></svg>
                            </div>
                            <div class="jobs__search__nav__header__button__title">Аккаунт</div>
                        </a>
                        <a href="#" class="jobs__search__nav__header__button">
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
                <a class="jobs__search__nav__menu__item__link" href="#">Главная</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="#">Для компаний</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="#">Premium</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="#">Создать резюме</a>
            </div>
            <div class="jobs__search__nav__menu__item" data-active="true">
                <a class="jobs__search__nav__menu__item__link" href="#">Вакансии</a>
            </div>
            <div class="jobs__search__nav__menu__item">
                <a class="jobs__search__nav__menu__item__link" href="#">Компании</a>
            </div>
        </div>
        <div class="jobs__search__nav__buttons">
            <jobs-favorites></jobs-favorites>
        </div>
        <jobs-search-panel></jobs-search-panel>
    </div>

</jobs-search-nav>
