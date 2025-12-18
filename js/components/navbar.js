function initNavbar() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            toggleMobileMenu(mobileMenuBtn, mobileMenu);
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu(mobileMenuBtn, mobileMenu);
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    closeMobileMenu(mobileMenuBtn, mobileMenu);
                }
                
                smoothScrollTo(this.getAttribute('href'));
            }
        });
    });
}