# Dal Portfolio
Dal Portfolio is a comprehensive University Portfolio Management System designed to streamline the presentation of academic and professional achievements. It provides an intuitive interface for students, faculty, and researchers to curate and showcase their portfolios seamlessly. From project details and academic accomplishments to skills and certifications, Dal Portfolio serves as a centralized hub for users to showcase their professional journey at a single platform.
 
- _Date Created_: 28 FEB 2024
- _Last Modification Date_: 28 FEB 2024
- _Git URL_: https://git.cs.dal.ca/patrawala/csci-5709-grp-01
- _Deployment URL_: https://csci-5709-group-1-dal-portfolio.netlify.app/
 
#### Individual branch URLs
 
  - [Hatim Patrawala](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/hatim)
  - [Mohammed Kothaliya](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/mohammed)
  - [Sushank Saini](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/sushank)
  - [Boon Undrajavarapu](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/boon)
  - [Jinay Shah](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/jinay)
  - [Zainuddin Saiyed](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/tree/zainuddin)
 
## Authors
 
- [Hatim Patrawala](ht760280@dal.ca) - _(Owner)_
- [Mohammed Kothaliya](mh478572@dal.ca) - _(Owner)_
- [Sushank Saini](sushank.saini@dal.ca) - _(Owner)_
- [Boon Undrajavarapu](bn540239@dal.ca) - _(Owner)_
- [Jinay Shah](jn851778@dal.ca) - _(Owner)_
- [Zainuddin Saiyed](zainuddin.s@dal.ca) - _(Owner)_
 
## Deployment
 
The app has been set up on Netlify through a process that involves replicating the GitLab repository onto GitHub, which is then linked to Netlify. This method facilitates a seamless and ongoing integration and deployment process, guaranteeing that any recent updates are directly and automatically published to the active site.
 
## Features
 
The Dal Portfolio web application is designed to showcase the talents and achievements of Dalhousie University's community. Our platform is intuitively structured, offering a seamless user experience across several key pages, each tailored to highlight different facets of our community and platform capabilities. Here's an overview of our main features:
 
### Landing Page
 
Our landing page is crafted to immediately capture the visitor's attention and guide them through the essence of what Dalhousie University stands for.
 
- **Hero Section**: A compelling call-to-action that appeals to our audience, encouraging them to explore further and generate leads.
- **Benefits and Usage**: This section outlines the core benefits of joining our platform and how users can leverage it to showcase their achievements and network.
- **Features**: A detailed rundown of what our platform offers, highlighting unique tools and functionalities.
- **Testimonials**: Real-life testimonials from our community members, showcasing their experiences and the impact of our platform on their professional journeys.
 
### FAQs Page
 
Designed to address common inquiries, our FAQs page provides immediate answers to our community's questions, facilitating a smoother user experience and reducing the need for direct inquiries.
 
### Contact Us Page
 
An easily navigable page for users to reach out with their questions, suggestions, or feedback. We ensure that every voice is heard and valued.
 
### About Us Page
 
Get to know more about the mission, vision, and people behind the Dal Portfolio project.
 
- **Goals/Vision**: A deep dive into our long-term objectives and what we aspire to achieve with the Dal Portfolio platform.
- **Our Team**: Meet the talented individuals who have poured their passion and skills into creating and maintaining this platform.
 
### Common Sections for Navigation
 
Every page features a consistently designed header and footer for effortless navigation across the platform. The header includes links to all main sections and a logo, while the footer provides additional resources and contact information.
 
### Dark and Light Mode Toggle
 
Understanding the diverse preferences of our users, we've implemented a toggle feature allowing users to switch between light and dark modes. This feature enhances accessibility and user comfort, catering to different viewing conditions and personal preferences.
 
 
## Built With
 
* [React](https://react.dev/) - The web framework used for building the frontend  user interfaces. Used for creating dynamic and responsive user interfaces for Dal Portfolio project.
 
* [Material UI](https://mui.com/material-ui/) - Comprehensive UI Framework with open source React components, adhering to the material design specification. Used for creating a consistent and seamless/elegant user interface design in Dal Portfolio project.
 
* [Yarn](https://yarnpkg.com/) - Used as package manager that acts as the project manager.
* [TypeScript](https://www.typescriptlang.org/) - A strongly typed JavaScript language which adds syntax for types. Used to enhance code maintainability and catch potential errors early in Dal Portfolio project.
 
## Getting Started
 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
 
### Prerequisites
 
Before running this project locally, ensure you have the following software installed:
 
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Yarn: [https://yarnpkg.com/](https://yarnpkg.com/)
 
### Installing
 
Follow these steps to get a development environment running:
 
1. Clone the repository:
   ```
   git clone https://git.cs.dal.ca/patrawala/csci-5709-grp-01
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install dependencies with Yarn:
   ```
   yarn install
   ```
4. Start the development server:
   ```
   yarn start
   ```
5. Visit `http://localhost:3000` to view the application.
 
 
## Sources Used
 
### Material-UI Components Customization
 
All Material-UI components used in this project were extensively customized to fit the design requirements of the Dal Portfolio web application. This involved theme customization for colors, component overrides for paddings and margins, and responsive design adjustments using Material-UI's grid system. For example, the `Testimonials` component was adapted from Material-UI's `Carousel` component documentation:
 
- Original Source: [https://mui.com/components/carousel/](https://mui.com/components/carousel/)
- Customization: Adjusted carousel settings, integrated custom media queries for responsive design, and added personalized styling and layout adjustments to fit our design schema.
 
_NOTE: The Material UI component is used in all the pages that are rendered to display to the client._
 
## Material Icons
Icons such as CollaborationIcon and CustomizationIcon from Material Icons were used in Features section in Landin Page. The color scheme, margins, and responsive behavior have been customized to align with the design language of the DalPortfolio application.
 
### Features.tsx
*Lines 32 - 73*
 
- _File path:_ `frontend\src\pages\Home\Welcome\`
```
  const features = [
    {
      icon: <AccountCircleIcon fontSize="large" />,
      title: 'Authentication',
      description: 'Secure signup and sign-in with easy recovery options.'
    },
    {
      icon: <HomeIcon fontSize="large" />,
      title: 'Home Page',
      description: 'Extensive robust search capabilities with easy navigation.'
    },
    {
      icon: <SearchIcon fontSize="large" />,
      title: 'Search/Discover Portfolios',
      description: 'Efficiently find portfolios with advanced filters.'
    },
    {
      icon: <PersonIcon fontSize="large" />,
      title: 'User Profile',
      description: 'Showcase your skills with editable templates.'
    },
    {
      icon: <TemplateIcon fontSize="large" />,
      title: 'Tailored Templates',
      description: 'Default templates tailored for various university sfaculties.'
    },
    {
      icon: <ForumIcon fontSize="large" />,
      title: 'Discussion Forums',
      description: 'Collaborative learning and knowledge sharing.'
    },
    {
      icon: <CollaborationIcon fontSize="large" />,
      title: 'Collaboration',
      description: 'Enhance communication with internal and external users.'
    },
    {
      icon: <CustomizationIcon fontSize="large" />,
      title: 'Custom Templates',
      description: 'Flexible content creation with customizable templates.'
    },
  ];
```
The icon attribute in the JSON is the Material UI icon used for representing each feature of the DalPortfolio project.
 
### AboutUs.tsx
*Lines 43*
 
- _File path:_ `frontend\src\pages\Home\`
```
<EmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'#fcd405'}} />
```
This is a Email Icon imported from Material UI icons library, to display a envelop besides the conatct email fro aesthetic purposes.
 
### ConatctUs.tsx
*Lines 150-152, 206-208, 263-265, 320-322, 370-372*
 
- _File path:_ `frontend\src\pages\Home\`
```
<EmailIcon
    style={{ verticalAlign: "middle", marginRight: "5px" }}
/>
```
This is a Email Icon imported from Material UI icons library, to display a envelop besides the conatct email fro aesthetic purposes.
 
 
Images used in the "About Us" page were generated using [GPT4](https://openai.com/gpt-4) and are placeholders for illustrative purposes:
 
- `test1.jpg` to `test8.jpg` in [AboutUS.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Home/AboutUs.tsx?ref_type=heads) are fictional representations created to enhance the user interface design.
 
The project structure and initial setup were inspired by the public repository [https://github.com/karpolan/react-typescript-mui-with-auth-starter](https://github.com/karpolan/react-typescript-mui-with-auth-starter), but were heavily modified to meet the specific features and functionalities of the Dal Portfolio project, including custom flows, page layouts, and TypeScript integration.

## Acknowledgments
 
- Thanks to the creators and contributors of Material-UI for providing a comprehensive UI toolkit for React, instrumental in building this web application.
- Gratitude to Dalhousie University for the inspiration behind the theme and design of the application. The logo and styling cues were inspired by the official Dalhousie University website.
- The Dal Portfolio Logo was inspired by Dalhousie logo but was created from scratch usung [Canva](https://www.canva.com/)
- Appreciation for the developer community for sharing valuable insights and knowledge, which have been crucial in implementing various features of this project.