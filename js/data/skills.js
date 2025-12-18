const skillsData = {
    technical: [
        {
            name: "C/C++",
            iconImage: "https://i.postimg.cc/85swW83B/logo-C.png"
        },
        {
            name: "HTML",
            iconImage: "https://i.postimg.cc/kMhsc85p/html-LOGO.png"
        },
        {
            name: "CSS/SASS",
            iconImage: "https://i.postimg.cc/CKxT8k5z/css-LOGO.png"
        },
        {
            name: "JavaScript",
            iconImage: "https://i.postimg.cc/BZrgkKrp/js-LOGO.png"
        },
        {
            name: "Bootstrap",
            iconImage: "https://i.postimg.cc/pLWRQpLn/bootstrap-LOGO.png"
        },
        {
            name: "MongoDB",
            iconImage: "https://i.postimg.cc/jSbmP9vh/Mongo-DBlogo.png"
        },
        {
            name: "MySQL",
            iconImage: "https://i.postimg.cc/L8WyvbV5/My-SQLlogo.png"
        },
        {
            name: "Go",
            iconImage: "https://i.postimg.cc/tTykSZYs/logo-GO.png"
        },
        {
            name: "Git/GitHub",
            iconImage: "https://i.postimg.cc/ht19rF1f/logo-Git-Hub.png"
        },
        {
            name: "React.js",
            iconImage: "https://i.postimg.cc/yYwFpgGD/reactjs-LOGO.png"
        },
        {
            name: "Node.js",
            iconImage: "https://i.postimg.cc/k5wRCBTG/nodejs-LOGO.png"
        },
        {
            name: "Python",
            iconImage: "https://i.postimg.cc/HWF2Rhcr/python-LOGO.png"
        }
    ],
    soft: [
        {
            name: "Trabajo en Equipo",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>`
        },
        {
            name: "Compromiso",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>`
        },
        {
            name: "Aprendizaje Constante",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>`
        },
        {
            name: "Resiliencia",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>`
        },
        {
            name: "Flexibilidad",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>
            </svg>`
        },
        {
            name: "Pensamiento Crítico",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>`
        },
        {
            name: "Proactividad",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="13 17 18 12 13 7"/>
                <polyline points="6 17 11 12 6 7"/>
            </svg>`
        },
        {
            name: "Organización",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>`
        },
        {
            name: "Responsabilidad",
            icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>`
        },
        {
            name: "Motivación",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-fist-icon lucide-hand-fist"><path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"/><path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5"/><path d="M9 5A2 2 0 1 0 5 5V10"/><path d="M9 7V4A2 2 0 1 1 13 4V7.268"/></svg>`
        }
    ]
};