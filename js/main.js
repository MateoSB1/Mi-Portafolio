function initApp() {
    console.log('🚀 Portfolio initialized');

    initNavbar();
    renderSkills();
    initProjectTabs();
    renderProjects('professional');
    initScrollAnimations();

    console.log('✅ All components loaded successfully');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}