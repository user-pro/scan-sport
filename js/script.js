const body = document.querySelector(`body`);
const asideBurger = document.querySelector(`.aside-menu__burger`),
   aside = document.querySelector(`.aside-menu`);
class TabList {
  constructor(buttonsContainer, tabsWrapper) {
    this.buttonsContainer = buttonsContainer;
    this.tabsWrapper = tabsWrapper;
    console.log(this.buttonsContainer);
    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest('.documents-download__filter-btn').dataset.value;
      buttonsContainer.querySelector('.active').classList.remove('active');
      event.target.closest('.documents-download__filter-btn').classList.add("active");
      this.openTab(index);
    });
  }

  openTab(index) {
    this.tabsWrapper.querySelector('.active-tab').classList.remove('active-tab');
    this.tabsWrapper.querySelector(`.tab--${index}`).classList.add('active-tab');
  }
};

const tabButtons = document.querySelector(`.documents-download__filter-buttons`),
   tabs = document.querySelector(`.documents-download__tabs`);
const documentDownloadTabs = new TabList(tabButtons, tabs);
function initBurger(burgerSelector, menuSelector, body) {
   const burger = document.querySelector(`${burgerSelector}`),
      menu = document.querySelector(`${menuSelector}`);

   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      if (!body.classList.contains('lock')) {
         body.classList.add(`lock`);
      }
      if (!aside.classList.contains(`active`) && !burger.classList.contains('active')) {
         body.classList.remove(`lock`);
      }
      // body.classList.toggle(`lock`);

   });
};
initBurger('.header__burger', '.header__menu', body);


function onResize() {
   headerPhoneChange();
}
function onLoad() {
   headerPhoneChange();
}


const headerActionsMenuBtn = document.querySelector(`.header-actions-menu__btn`),
   headerActionsMenuList = document.querySelector(`.header-actions-menu__list`);


if (headerActionsMenuBtn) {

   headerActionsMenuBtn.addEventListener("click", () => {
      headerActionsMenuBtn.classList.toggle('active');
      headerActionsMenuList.classList.toggle('active');

   });
}

const headerTopLinkPhone = document.querySelector(`.header-top__link_phone`);
const phoneNumber = headerTopLinkPhone.textContent;

function headerPhoneChange() {
   if (document.documentElement.clientWidth < 496) {
      headerTopLinkPhone.innerHTML = `
      <svg aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class=""><path fill="#000" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" class=""></path></svg>
      `;
      headerTopLinkPhone.classList.add(`mobile`);
   } else if (headerTopLinkPhone.classList.contains(`mobile`)) {
      headerTopLinkPhone.innerHTML = phoneNumber;
      headerTopLinkPhone.classList.remove(`mobile`);
   }
}



const asideLinks = document.querySelectorAll(".aside-menu__link");
asideLinks.forEach(item => {
   if (item.getAttribute(`data-binding`) == pageName) {
      item.classList.add('active');
   }
});





asideBurger.addEventListener('click', () => {
   asideBurger.classList.toggle('active');
   asideBurger.parentElement.classList.toggle('active');
   aside.classList.toggle('active');
   if (!body.classList.contains('lock')) {
      body.classList.add(`lock`);
   } else {
      body.classList.remove(`lock`);
   }

});

window.addEventListener(`resize`, onResize);

document.addEventListener("DOMContentLoaded", onLoad);