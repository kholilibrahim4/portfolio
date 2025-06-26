import { createContext } from 'react'

export const DataContext = createContext()


export default function DataContextProviderFun({ children }) {
    const allData = {
        navBar: ['home', 'about', 'portfolio', 'work', 'contract'],


        heroText: ['creative', 'designer', 'awesome', 'trustable'],
        about: {
            title: 'About Me',
            aboutImg: 'about/about.jpg',
            desc: [
                "Hi! I'm Md. Ibrahim Kholil, a passionate aspiring web designer with a strong interest in web programming. I’m currently focused on learning web design, exploring everything from react to more complex coding. I’m always excited to discover new techniques and stay updated on the latest trends in the tech world.",
                "My hobbies include diving into online resources to improve my programming skills and experimenting with building websites. I enjoy the challenge of turning creative ideas into functional, user-friendly designs.",
                "I’m eager to further expand my knowledge and pursue a career in web design, where I can combine my love for design and technology."
            ],
        },
        services: [
            {
                title: 'Web Design',
                icon: 'fa-solid fa-desktop',
                desc: "As a professional web designer, I specialize in creating responsive, user-friendly websites tailored to your brand's unique identity. I focus on delivering visually appealing and functional websites that enhance your online presence and engage your target audience."
            },
            {
                title: 'Branding Identity',
                icon: 'fa-solid fa-file-contract',
                desc: "Professional brand identity services develop cohesive visual elements—logos, color schemes, typography—to establish and enhance your brand's presence."
            },
            {
                title:"Hand Code",
                icon:'fa-solid fa-code',
                desc:"A fresh web developer hand-coding with HTML, CSS and JavaScript-building everything from scratch without using AI tools."
            }
        ],

        portfolio: {
            filtersMenu: ['all', 'html', 'bootstrap', 'codepen', 'react'],
            portfolioItems: [
                {
                    categories: 'html bootstrap all',
                    portfolioImg: 'portfolios/img-24.jpg',
                    title: 'Mehedee Hasan Portfolio',
                    tagline: 'Date: 14 July, 2023',
                    hrefLink: 'https://hasanrony364.github.io/portfolio/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg24}`
                },

                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-1.jpg',
                    title: 'Jean Cote',
                    tagline: 'The Business Automation Architec',
                    hrefLink: 'https://www.jeancotemarketing.com/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg1}`
                },
                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-2.jpg',
                    title: 'Eeasy Rooms',
                    tagline: 'Online Hotels',
                    hrefLink: '#',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg2}`
                },
                {
                    categories: 'codepen all',
                    portfolioImg: 'portfolios/img-8.jpg',
                    title: 'Codepen',
                    tagline: 'My Codepen Works',
                    hrefLink: 'https://codepen.io/mdnayan',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg8}`
                },
                {
                    categories: 'html bootstrap codepen all',
                    portfolioImg: 'portfolios/img-25.jpg',
                    title: 'Bootstrap Tab',
                    tagline: 'Singin & Signup by bootstrap tab',
                    hrefLink: 'https://codepen.io/mdnayan/pen/vZbZMw',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg25}`
                },
                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-3.jpg',
                    title: 'Green Design',
                    tagline: 'Innovative & Sustainable Solutions',
                    hrefLink: 'http://www.greendesign.ca/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg3}`
                },
                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-4.jpg',
                    title: 'We Monitor Email',
                    tagline: 'Solve your email problems',
                    hrefLink: 'https://www.wemonitoremail.com/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg4}`
                },
                
                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-5.jpg',
                    title: 'Ipac',
                    tagline: 'Western Austrakia',
                    hrefLink: 'http://ipacwa.com.au/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg5}`
                },
                {
                    categories: 'html all',
                    portfolioImg: 'portfolios/img-6.jpg',
                    title: 'Jenna Forster',
                    tagline: 'Master The Inner Game Of Happiness',
                    hrefLink: 'http://kennethpugmire.com/jenna/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'html',
                    portfolioImg: 'portfolios/img-10.jpg',
                    title: 'James P Friel',
                    tagline: 'James P Friel Design',
                    hrefLink: 'http://kennethpugmire.com/james/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },

                {
                    categories: 'html',
                    portfolioImg: 'portfolios/img-11.jpg',
                    title: 'AS Alexston',
                    tagline: 'AS Alexston Design',
                    hrefLink: '/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },

                {
                    categories: 'html',
                    portfolioImg: 'portfolios/img-13.jpg',
                    title: 'Travel Your Dream',
                    tagline: 'Travel Web Design',
                    hrefLink: '/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'html bootstrap',
                    portfolioImg: 'portfolios/img-14.jpg',
                    title: 'Rusty',
                    tagline: 'practice bootstrap template',
                    hrefLink: 'https://kholilibrahim4.github.io/practice/html/rusty/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'react',
                    portfolioImg: 'portfolios/img-30.jpg',
                    title: 'Topic',
                    tagline: 'First react template practice',
                    hrefLink: 'https://kholilibrahim4.github.io/topic/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'react',
                    portfolioImg: 'portfolios/img-29.jpg',
                    title: 'Mediplus',
                    tagline: 'Another react template practice',
                    hrefLink: 'https://kholilibrahim4.github.io/mediplus/',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },

                {
                    categories: 'codepen',
                    portfolioImg: 'portfolios/img-28.jpg',
                    title: 'Owl Carousel + animate css',
                    tagline: 'Owl Carousel + animate css',
                    hrefLink: 'https://codepen.io/mdnayan/pen/zdxWMa',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'codepen',
                    portfolioImg: 'portfolios/img-26.jpg',
                    title: 'Progress Bar',
                    tagline: 'Editable/Custom Progress Bar by JavaScript',
                    hrefLink: 'https://codepen.io/mdnayan/pen/QWYgdzy',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'codepen',
                    portfolioImg: 'portfolios/img-12.jpg',
                    title: 'Responsive Hamburger / Slide Menu',
                    tagline: 'Responsive Hamburger / Slide Menu',
                    hrefLink: 'https://codepen.io/mdnayan/pen/ZQwNyd',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'codepen',
                    portfolioImg: 'portfolios/img-27.jpg',
                    title: 'File validation',
                    tagline: 'File validation (function or Class Object) by JavaScript',
                    hrefLink: 'https://codepen.io/mdnayan/pen/KKBVwRQ',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'codepen',
                    portfolioImg: 'portfolios/img-9.jpg',
                    title: 'Flex box',
                    tagline: 'CSS flex box',
                    hrefLink: 'https://codepen.io/mdnayan/pen/poZRNpR',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                {
                    categories: 'codepen react',
                    portfolioImg: 'portfolios/img-7.jpg',
                    title: 'React Dynamic Nested Dropdown Menu',
                    tagline: 'Nested Dropdown Menu',
                    hrefLink: 'https://codepen.io/mdnayan/pen/QwbwZaK?editors=0010',
                    workType: 'Work Type: ',
                    // projectBgNumber: `${styles.projectBg6}`
                },
                
            ],
        },
        blogs: {
            secTitle: 'Latest Works',
            blogItems: [
                {
                    title: 'Mediplus',
                    blogImg: 'blogImg/blog-5.jpg',
                    descr: 'This was another React project of mine, which was much less difficult to do than my previous one, because I had mastered many things on my first one, but I am happy that I was able to solve all the problems that came up while doing this one.',
                    blogDate: "24 December, 2024",
                    author:'',

                },
                {
                    title: 'Topic',
                    blogImg: 'blogImg/blog-4.jpg',
                    descr: 'This was my first React project, which I had a hard time doing because it was my first. However, I was able to solve all the problems that came up while doing it, except for one, which was the animation that occurs during vertical scrolling of the "How does it work?" section. Still, I\'m happy that I was able to do it.',
                    blogDate: "21 November, 2024",
                    author:'',

                },
                
                
            ],
        },
        socialMedia: [
            {
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/md.nayan.h'
            },
            {
                icon: 'fa-brands fa-twitter',
                link: 'https://x.com/kholilibrahim41'
            },
            {
                icon: 'fa-brands fa-github',
                link: 'https://github.com/kholilibrahim4'
            },
            {
                icon: 'fa-brands fa-codepen',
                link: 'https://codepen.io/mdnayan'
            },
        ],
        contractInfo: {
            secTitle: 'GET IN TOUCH',
            info:[
                {
                    icon:'fa-regular fa-map',
                    desc:'Chandpur 3602, Bangladesh',
                },
                {
                    icon:'fa-regular fa-envelope',
                    desc:'kholilibrahim4@gmail.com',
                },
                {
                    icon:'fa-brands fa-whatsapp',
                    desc:'+971567734864'
                },
            ],
            leaveMsg: 'Leave us a message',
        },

        footer: {
            copyRight: 'Copyright © 2018 Nayan, All rights Reserved.',
            createdBy: 'Created by Nayan'
        }
    }

    return (
        <DataContext.Provider value={allData}>
            {children}
        </DataContext.Provider>
    )
}