window.$18n = {};

$i18n = function(arg){
    return i18n.localise(arg);
};

$i18n.lang = function(lang){
    i18n.setLanguage(lang);
};
