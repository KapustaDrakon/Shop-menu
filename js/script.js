// Убираю поле поиска при скролле вниз
const navigationButtonsDesktop = document.querySelector(".header__navigation");

document.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    navigationButtonsDesktop.style.display = "none";
  } else {
    navigationButtonsDesktop.style.display = "block";
  }
});

// Определяю мобилка или десктоп

const checkMobile = () => {
if (window.innerWidth < 1298) return true;
else return false;
}


// Отрыть/закрыть МЕНЮ (MOBILE)
const menuButtonMobile = document.getElementById("header__button-menu-mobile");
const catalogs = document.querySelector(".main__catalogs");
const menu = document.querySelector(".main__menu");

menuButtonMobile.addEventListener("click", () => {
  if (catalogs.classList.contains("main__catalogs_display")) {
    catalogs.classList.remove("main__catalogs_display");
    // menu.classList.remove('main__menu_display');
    menuButtonMobile.classList.remove("header__button-menu_active");

    catalog.classList.remove("catalog_display");
    giftSets.classList.remove("gift-sets_display");

    phones.classList.remove("catalog-phones_display");
    gadgets.classList.remove("catalog-gadgets_display");
    forWhom.classList.remove("for-whom_display");
  } else {
    catalogs.classList.add("main__catalogs_display");
    menu.classList.add("main__menu_display");
    menuButtonMobile.classList.add("header__button-menu_active");

    giftSets.classList.remove("gift-sets_display");
    forWhom.classList.remove("for-whom_display");
  }
});

// Отрыть/закрыть МЕНЮ (DESKTOP)
const menuButtonDesktop = document.getElementById(
  "header__button-menu-desktop"
);

menuButtonDesktop.addEventListener("click", () => {
  if (catalogs.classList.contains("main__catalogs_display")) {
    catalogs.classList.remove("main__catalogs_display");
    // menu.classList.remove('main__menu_display');
    menuButtonDesktop.classList.remove("header__button-menu_active");
    catalog.classList.remove("catalog_display");
    giftSets.classList.remove("gift-sets_display");
    events.classList.remove("events_display");

    forWhom.classList.remove("for-whom_display");
    phones.classList.remove("catalog-phones_display");
    gadgets.classList.remove("catalog-gadgets_display");
    catalogs.classList.remove('main__catalogs_left-258px');
    catalogs.classList.remove('main__catalogs_left-737px');
  } else {
    catalogs.classList.add("main__catalogs_display");
    catalog.classList.add("catalog_display");
    menuButtonDesktop.classList.add("header__button-menu_active");

    giftSets.classList.remove("gift-sets_display");
    events.classList.remove("events_display");
    forWhom.classList.remove("for-whom_display");
  }
});

// Отрыть/закрыть КАТАЛОГ
const catalog = document.querySelector(".catalog");
const backButtonCatalog = document.getElementById("catalog__button-back");
const catalogButton = document.getElementById("menu__button-catalog");

catalogButton.addEventListener("click", () => {
  if (checkMobile()) {
    if (catalog.classList.contains("catalog_display")) {
      catalog.classList.remove("catalog_display");
    } else {
      catalog.classList.add("catalog_display");
      menu.classList.remove("main__menu_display");
    }
  } else {
    if (catalog.classList.contains("catalog_display")) {
      catalog.classList.remove("catalog_display");
    } else {
      catalog.classList.add("catalog_display");
    }
  }
});

backButtonCatalog.addEventListener("click", () => {
  catalog.classList.remove("catalog_display");
  menu.classList.add("main__menu_display");
});

// Открыть/закрыть КАТАЛОГ ГОРЯЧИХ ПРЕДЛОЖЕНИЙ

const containerCatalogs = document.querySelector(".main__catalogs");
const giftSets = document.querySelector(".gift-sets");
const backButtonGiftSets = document.getElementById("gift-sets__button-back");
const giftSetsButtons = document.querySelectorAll(".menu__button-gift-sets");

giftSetsButtons.forEach((el) =>
  el.addEventListener("click", () => {
    if (checkMobile()) {
      if (giftSets.classList.contains("gift-sets_display")) {
        giftSets.classList.remove("gift-sets_display");
        
      } else {
        
        giftSets.classList.add("gift-sets_display");
        menu.classList.remove("main__menu_display");
      }
    } else {
      if (giftSets.classList.contains("gift-sets_display")) {
        menuButtonDesktop.click();
        menuButtonDesktop.classList.remove("header__button-menu_active");
        
        // giftSets.classList.remove("gift-sets_display");
        // containerCatalogs.classList.remove("main__catalogs_display");
        // forWhom.classList.remove("for-whom_display");
      } else {
        menuButtonDesktop.click();
        containerCatalogs.classList.add("main__catalogs_display");
        giftSets.classList.add("gift-sets_display");
        catalogs.classList.add('main__catalogs_left-258px');

        catalog.classList.remove("catalog_display");
        phones.classList.remove("catalog-phones_display");
        gadgets.classList.remove("catalog-gadgets_display");

        menuButtonDesktop.classList.add("header__button-menu_active");
      }
    }
  })
);

backButtonGiftSets.addEventListener("click", () => {
  giftSets.classList.remove("gift-sets_display");
  menu.classList.add("main__menu_display");
});

// Открыть/закрыть КАТАЛОГ КОМУ

const forWhom = document.querySelector('.for-whom');
const backButtonForWhom = document.getElementById('for-whom__button-back');
const forWhomButton = document.getElementById('for-whom__button');

forWhomButton.addEventListener('click', () => {
    if (checkMobile()) {
    if (forWhom.classList.contains("for-whom_display")) {
      forWhom.classList.remove("for-whom_display");
    } else {
      forWhom.classList.add("for-whom_display");
      giftSets.classList.remove("gift-sets_display");
    }
  } else {
    if (forWhom.classList.contains("for-whom_display")) {
        forWhom.classList.remove("for-whom_display");
    } else {
        forWhom.classList.add("for-whom_display");
    }
  }
});

backButtonForWhom.addEventListener('click', () => {
    forWhom.classList.remove("for-whom_display");
    giftSets.classList.add("gift-sets_display");
})

// Открыть/закрыть КАТАЛОГ СОБЫТИЙ

const events = document.querySelector('.events');
const backButtonEvents = document.getElementById('events__button-back');
const eventsButtons = document.querySelectorAll('.menu__button-events');

eventsButtons.forEach((el) => el.addEventListener('click', () => {
  if (checkMobile()) {
      if (events.classList.contains("events_display")) {
        events.classList.remove("events_display");
      } else {  
        events.classList.add("events_display");
        menu.classList.remove("main__menu_display");
      }
    } else {
      if (events.classList.contains("events_display")) {
        menuButtonDesktop.click();
        menuButtonDesktop.classList.remove("header__button-menu_active");
      } else {
        menuButtonDesktop.click();
        containerCatalogs.classList.add("main__catalogs_display");
        events.classList.add("events_display");
        catalogs.classList.add('main__catalogs_left-737px');

        catalog.classList.remove("catalog_display");
        phones.classList.remove("catalog-phones_display");
        gadgets.classList.remove("catalog-gadgets_display");

        menuButtonDesktop.classList.add("header__button-menu_active");
      }
    }
}));

backButtonEvents.addEventListener('click', () => {
  events.classList.remove("events_display");
  menu.classList.add("main__menu_display");
})

// Отрыть/закрыть КАТАЛОГ СМАТФОНОВ
const phones = document.querySelector(".catalog-phones");
const backButtonPhones = document.getElementById("catalog-phones__button-back");
const phonesButton = document.getElementById("catalog-phones__phones");

phonesButton.addEventListener("click", () => {
  if (checkMobile()) {
    if (phones.classList.contains("catalog-phones_display")) {
      phones.classList.remove("catalog-phones_display");
    } else {
      phones.classList.add("catalog-phones_display");
      catalog.classList.remove("catalog_display");
    }
  } else {
    if (phones.classList.contains("catalog-phones_display")) {
      //   phones.classList.remove("catalog-phones_display");
    } else {
      phones.classList.add("catalog-phones_display");
    }
  }
});

backButtonPhones.addEventListener("click", () => {
  phones.classList.remove("catalog-phones_display");
  catalog.classList.add("catalog_display");
});

// Отрыть/закрыть КАТАЛОГ ГАДЖЕТОВ
const gadgets = document.querySelector(".catalog-gadgets");
const backButtonGadgets = document.getElementById(
  "catalog-gadgets__button-back"
);
const gadgetsButton = document.getElementById("catalog-phones__gadgets");

gadgetsButton.addEventListener("click", () => {
  if (checkMobile()) {
    if (gadgets.classList.contains("catalog-gadgets_display")) {
      gadgets.classList.remove("catalog-gadgets_display");
    } else {
      gadgets.classList.add("catalog-gadgets_display");
      phones.classList.remove("catalog-phones_display");
    }
  } else {
    if (gadgets.classList.contains("catalog-gadgets_display")) {
      //   gadgets.classList.remove("catalog-gadgets_display");
    } else {
      gadgets.classList.add("catalog-gadgets_display");
    }
  }
});

backButtonGadgets.addEventListener("click", () => {
  gadgets.classList.remove("catalog-gadgets_display");
  phones.classList.add("catalog-phones_display");
});
