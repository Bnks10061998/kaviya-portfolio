# routes.json
# https://stackoverflow.com/questions/56454157/how-to-pass-props-to-lazy-loading-components
# https://www.npmjs.com/package/@rollup/plugin-dynamic-import-vars
# https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom











































## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ Made with React\
⚡️ Fully Responsive\
⚡️ Easily Customizable\
⚡️ Well organized documentation

```bash
# Clone the repository
$ git clone 


## Customization Instructions:

### Step 1 - DATA & IMAGES

All customizable files are inside the `public/` folder, organised mainly into `public/images/` and `public/profile/`.
- `public/images` contains all the image assets that can be customized on website
- `public/profile` contains all text and info inside json files that can be customized according to need

### (1) NavBar

- Open `public/profile/navbar.json` 
It has 2 keys, *logo* and *sections*.

```
{
    "logo" : {
        "source": "images/logo.png",
        "height" : 45,
        "width" : 50
    },
    "sections": [
        {
            "title": "Home",
            "href": "/"
        },
        {
            "title": "About",
            "href": "/about"
        },
        {
            "title": "Skills",
            "href": "/skills"
        },
        {
            "title": "Education",
            "href": "/education"
        },
        {
            "title": "Experience",
            "href": "/experience"
        },
        {
            "title": "Projects",
            "href": "/projects"
        },
        {
            "title": "Resume",
            "href": "",
            "type": "link"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| logo | image you want to show as brand image on NavBar. It can be also be a simple logo with just your intitials|
| logo.source | path to the logo image |
| logo.height | height of logo |
| logo.width | width of logo |
| sections | array of sections that you want to show on Navbar as links | 
| sections.title | title of the section | 
| sections.href | link to that section. Same as *path* mentioned in `routes.json` | 
| sections.type | Opens in a new tab if value is *link*. `optional` field | 

### (2) Routes
- open `public/profile/routes.json`

```
{
    "sections": [
        {
            "component": "About",
            "path": "/about",
            "headerTitle": "About"
        },
        {
            "component": "Skills",
            "path": "/skills",
            "headerTitle": "Skills"
        },
        {
            "component": "Education",
            "path": "/education",
            "headerTitle": "Education"
        },
        {
            "component": "Experience",
            "path": "/experience",
            "headerTitle": "Experience"
        },
        {
            "component": "Projects",
            "path": "/projects",
            "headerTitle": "Projects"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| sections | array of sections that you want to create route for | 
| sections.component | name of the Component. No need to change it unless you want to customize the entire Component. | 
| sections.path |  for the particular section. this is the path where the particular section will be accessible | 
| sections.headerTitle | title to be shown on the top of that section page | 

- For component customization, create a component of your own inside `src/components/` and use name of that component here.

### (3) Home Section

#### Home Info
- open `public/profile/home.json`

```
{
    "name": "Your Name",
    "roles": ["a Developer"]
}
```

| key | Description |
| ----------- | ----------- |
| name | your name | 
| roles | string array separated by `,`. mention your roles here | 

#### Social Links
- open `public/profile/social.json`

```
{
    "social": [
        {
            "network" : "linkedin",
            "href": "https://linkedin.com/"
        },
        {
            "network" : "github",
            "href": "https://github.com/"
        },
        {
            "network" : "email",
            "href": "mailto:test@test.com"
        }
    ]
}
```

| key | Description |
| ----------- | ----------- |
| social | array of social links | 
| social.network | network name as provided in [react-social-icons] |
| social.href | link for particular social network |



### (4) About Section

- open `public/profile/about.json`

```
{
    "about": " This is where you can describe about **yourself**.",
    "imageSource": "images/about/profile.png"
    
}
```

| key | Description |
| ----------- | ----------- |
| about | write about yourself, your works and goals here. `markdown` supported | 
| imageSource | path to your profile image. (recommended size 400 x 450) |

### (5) Skills Section

- open `public/profile/skills.json`

```
{
    "intro": "I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:",
    "skills": [{
     
            ......
    }
]}
```

| key | Description |
| ----------- | ----------- |
| intro | small introduction line related to your skills. `markdown` supported | 
| skills | array containing skills under different categories |
| skills.title | title for category under which you want to list particular skills |
| skills.items | array containing skills for this category |
| skills.items.icon | path to skill logo |
| skills.items.title | title of skill |

- many pre existing skill logos are available inside `public/images/skills`.

### (6) Education Section

- open `public/profile/education.json`

```
{
    "education":[
        ..........
    ]
}
```

| key | Description |
| ----------- | ----------- |
| education | array containing education history of a person | 
| education.title | date range during which this education was pursued or passing date |
| education.cardTitle | degree or course name |
| education.cardSubtitle | school or institute name |
| education.cardDetailedText | extra info such as marks or cgpa |
| education.icon | icon shown on the timeline. `optional` field|
| education.icon.src | path to icon |

### (7) Experience Section

- open `public/profile/experiences.json`

```
{
    "experiences": [
        .......
    ]
}
```

| key | Description |
| ----------- | ----------- |
| experiences | array containing work experiences of a person | 
| experiences.title | role or designation title |
| experiences.subtitle | company or organization name. `optional` field |
| experiences.workType | type of work experience. example - internship, freelance, full-time. `optional` field |
| experiences.workDescription | string array to highlight specific points related to that work experiece. `markdown` supported |
| experiences.dateText | date range text during which particular work experience was pursued. |

### (8) Projects Section

- open `public/profile/projects.json`

```
{
    "projects" : [
        ............
        ............
    ]
}
```


| key | Description |
| ----------- | ----------- |
| projects | array containing projects information |
| projects.image | add project poster here. `optional` field. |
| projects.title | title of the project |
| projects.bodyText | description of project. `markdown` supported |
| projects.links | clickable links related to the project. `optional` field |
| projects.links.text | title of link to display |
| projects.links.href | actual link to be redirected to on click of the button |
| projects.tags | string array containing tags related to projects. `optional` field | 

### (9) Resume Section

- It is a clickable link which opens the link provided (generally drive link of resume file) in the navbar.json under Resume.


### Step 2 - STYLES

Change the color theme of the website -

Go to `/src/theme/themes.js` and change the values of the required components both under lightTheme and darkTheme with your prefered HEX color.


```theme
//Default Values
export const lightTheme = {
  background: '#fff',
  color: '#121212',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: 'white',
    cardForeColor: 'black',
    titleColor: 'white',
  },
  timelineLineColor: '#ccc',
  cardBackground: '#fff',
  cardFooterBackground: '#f7f7f7',
  cardBorderColor: '#00000020',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'light',
  bsSecondaryVariant: 'dark',
  socialIconBgColor: '#121212',
};

export const darkTheme = {
  background: '#121212',
  color: '#eee',
  accentColor: '#3D84C6',
  chronoTheme: {
    cardBgColor: '#1B1B1B',
    cardForeColor: '#eee',
    titleColor: 'black',
  },
  timelineLineColor: '#444',
  cardBackground: '#060606',
  cardFooterBackground: '#181818',
  cardBorderColor: '#ffffff20',
  navbarTheme: {
    linkColor: '#dedede',
    linkHoverColor: '#fefefe',
    linkActiveColor: '#fefefe',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
  socialIconBgColor: '#fefefe',
};

```

### Step 3 - EXTRA

Go to `public/index.html`. Change *title* and *logo* if you want to customize it.











