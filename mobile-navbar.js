class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu) ;
        this.navList = document.querySelector(navList) ;
        this.navLinks = document.querySelectorAll(navLinks) ;
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    annimateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
              ? (link.style.animation  )
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.annimateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}