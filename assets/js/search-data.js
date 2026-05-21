// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Portfolio/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio/blog/";
          },
        },{id: "nav-case-studies",
          title: "case studies",
          description: "Deep dives into systems I designed, shipped, and measured in production.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio/case-studies/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my CV or view it below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Portfolio/cv/";
          },
        },{id: "projects-qa-automation-engine",
          title: 'QA Automation Engine',
          description: "ML pipeline to automate and prioritize test cases for failure detection, saving 4 hours per week in manual QA effort.",
          section: "Projects",handler: () => {
              window.location.href = "/Portfolio/projects/1_qa_automation_engine/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/Portfolio/assets/pdf/intial_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%6B%6B%6F%6C%32%30%31%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ankkol2011", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ankit-shaw08", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
