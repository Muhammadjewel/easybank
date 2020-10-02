var elPageBody = document.querySelector('.page__body');
var elSiteHeader = document.querySelector('.site-header');

elPageBody.classList.remove('page__body--nojs');
elSiteHeader.classList.remove('site-header--nojs');

var elSiteHeaderToggler = elSiteHeader.querySelector('.site-header__toggler');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});
