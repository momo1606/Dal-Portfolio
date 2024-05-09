# Dal Portfolio
Dal Portfolio is a comprehensive University Portfolio Management System designed to streamline the presentation of academic and professional achievements. It provides an intuitive interface for students, faculty, and researchers to curate and showcase their portfolios seamlessly. From project details and academic accomplishments to skills and certifications, Dal Portfolio serves as a centralized hub for users to showcase their professional journey at a single platform.
 
- _Date Created_: 28 FEB 2024
- _Last Modification Date_: 03 APR 2024
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
### Frontend
The app has been set up on [Netlify](https://www.netlify.com/) through a process that involves replicating the GitLab repository onto GitHub, which is then linked to Netlify. This method facilitates a seamless and ongoing integration and deployment process, guaranteeing that any recent updates are directly and automatically published to the active site.
### Backend

The Node.js backend has been configured on [Render](https://render.com/) by mirroring the GitLab repository to GitHub, which is subsequently connected to Render. This approach ensures continuous and automated integration and deployment, allowing any recent changes to be instantly and automatically rolled out to the live site.

 
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

* [NodeJS](https://nodejs.org/en) - The open-source, cross-platform JavaScript runtime environment.
* [ExpressJS](https://expressjs.com/) - The fast, unopinionated, minimalist web framework for Node.js
* [MongoDB](https://www.mongodb.com/) - The developer data platform.
* [React](https://react.dev/) - The web framework used for building the user interface.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) - JavaScript runtime for executing JavaScript validations and checks.
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js.
* [Nodemailer](https://www.nodemailer.com/) - Module for email sending.
 
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
 

## Backend API and Frontend Functionality

This section explains how the backend API endpoints are mapped to the corresponding frontend functionality, ensuring a seamless flow between client and server operations.

### 1. User Registration
- **Backend Endpoint:** `POST /api/user/register`
- **Frontend Functionality:** `SignUpForm.tsx`
  - This functionality allows users to create a new account. The frontend form collects the user's information and sends it to the backend endpoint. Upon successful registration, users receive an email for verification.

### 2. Email Verification
- **Backend Endpoint:** `GET /api/user/verify-email/:username/:verificationCode`
- **Frontend Functionality:** `EmailVerificationPage.tsx`
  - After signing up, users must verify their email address. The frontend interacts with this endpoint to validate the user's email using the verification code sent to their email address.

### 3. User Login
- **Backend Endpoint:** `POST /api/user/login`
- **Frontend Functionality:** `LoginForm.tsx`
  - Users log in to the system using their credentials. The frontend sends these to the backend for authentication. Successful login grants access and JWT tokens for session management.

### 4. Refresh Token
- **Backend Endpoint:** `POST /api/user/refresh-token`
- **Frontend Functionality:** Integrated in Axios interceptors (`axios.ts`)
  - This endpoint is used to refresh the access token when it expires. The frontend interceptor automatically handles this process, ensuring the user session remains active without manual re-login.

### 5. Session Details
- **Backend Endpoint:** `GET /api/user/session`
- **Frontend Functionality:** Utilized for session validation (`fetchSessionAPI` in `session.ts`)
  - Fetches the current session details to verify user authentication status and to maintain session state across the application.

### 6. Forgot Password
- **Backend Endpoint:** `POST /api/user/forgot-password`
- **Frontend Functionality:** `ForgotPassword.tsx`
  - Allows users to request a password reset link if they forget their password. The backend sends a secure link to the user's email, facilitating password reset.

### 7. Reset Password
- **Backend Endpoint:** `POST /api/user/reset-password`
- **Frontend Functionality:** `ResetPassword.tsx`
  - Users can reset their password using the link received in their email. This page lets users enter a new password, which is then updated in the backend system.

### 8. Logout
- **Backend Endpoint:** `POST /api/user/logout`
- **Frontend Functionality:** `useLogout` hook (`useLogout.ts`)
  - This process securely logs out the user by clearing the session and tokens in both frontend storage and the backend system.

### 9. Add Post
* **/addpost**: This api fulfills the functionality of adding a new post in the StartThreadForm.js frontend component.

### 10. Add Reply
* **/addreply**: This api fulfills the functionality of submitting a reply in DiscussionPost.js frontend component.

### 11. Delete Post
* **/deletepost**: This api fulfills the functionality of deleting a post in MainPost.js frontend component.

### 12. Delete Reply
* **/deletereply**: This api fulfills the functionality of deleting a reply in  ReplyDisplay.js frontend component.

### 13. Get All Posts
* **/getallposts**: This api fulfills the functionality of displaying posts in  DiscussionForumPage.js frontend component. The values fetched here are transferred as a state to DiscussionThreadPage.js when a particular post is opened to view all replies posted on it.

### 14. Search page
* **/search-page**: This API fulfills the functionality of search page based on different filter option in search.tsx. 

### 15. Portfolio feature
* **/portfolio/:portfolio_id**: This route displays the portfolio details corresponding to the portfolio_id. This si done by fetching the required details from the Backend.
* **/portfolio/:portfolo_id**: This api retrives the portolio details from the portfolio collection. This fulfills the functionality of displaying the portfolio details on the portfolio Sections in the frontend for a user.
* **/portfolio/:portfolio_id/project**: This api fulfills the functionality of retrieving all the project details for a project_id present in the portfolio (identified by portfolio_id).

### 16. Collaboration feature
* **/fetch_projects**: 
    - This endpoint is used to retrieve a list of projects.
    - It would return information about various projects available in the system, such as their titles, descriptions, statuses, contributors, etc.
    - Clients can use this endpoint to display a list of projects to users or to fetch specific project details.

* **/fetch_research**: 
    - Similar to **/fetch_projects**, this endpoint retrieves a list of research studies.
    - It returns details about research studies, including titles, descriptions, statuses, contributors, etc.
    - Clients can use this endpoint to display research studies or fetch specific research study details.

* **/fetch_project/:_id**:
    - This endpoint fetches details about a specific project identified by its ID.
    - Clients can provide the ID of the project they're interested in, and the server responds with detailed information about that project.

* **/fetch_research_study/:_id**: 
    - Like **/fetch_project/:_id**, this endpoint fetches details about a specific research study.
    - Clients provide the ID of the research study they want to fetch, and the server responds with the corresponding details.

* **/send_request**: 
    - This endpoint is used to send collaboration requests between users.
    - It accepts data such as the sender's user ID, receiver's user ID, details of projects or research studies being requested, and any additional metadata.
    - The server processes the request and performs the necessary actions, such as storing the request in a database.
* **/fetch_collab_requests**: 
    - This endpoint retrieves a list of collaboration requests.
    - It would return pending requests.
    - Clients can use this endpoint to display collaboration requests to users or to fetch specific request details.

* **/send_update**: 
    - This endpoint is used to update the status or details of a collaboration request.
    - Clients use this endpoint to accept or reject requests, update request metadata, or perform other related actions.

* **/fetch_user**: 
    - This endpoint retrieves information about a specific user.
    - It returns details such as the user's name, email, profile picture, social media links, etc.
    - Clients might use this endpoint to fetch user profiles for display or to access specific user details for application logic.

### 17. User Profile Page
- **/profile/user/:id**: This api fulfills the functionality of getting user details in Profile.tsx frontend component.
- **/profile/user/:id/update**: This api fulfills the functionality of updating the user details using the UserEditModal.tsx component.
- **/profile/user/:id/portfolios**: This api fulfills the functionality of listing all the portfolios for the user in Portfolio.tsx frontend component.
- **/profile/portfolio/:user_id/create**: This api fulfills the functionality of creating new portfolios in PortfolioForm.tsx frontend component.
- **/profile/portfolio/:portfolio_id/delete**: This api fulfills the functionality of deleting existing portfolios in PortfolioForm.tsx frontend component.
- **/profile/portfolio/:portfolio_id/edit**: This api fulfills the functionality of editing existing portfolios in PortfolioForm.tsx frontend component.


## List of files authored by Mohammed
### Frontend
* frontend/src/pages/Auth/SignUpForm.tsx
* frontend/src/pages/Auth/LoginForm.tsx  
* frontend/src/pages/Auth/EmailVerificationPage.tsx 
* frontend/src/pages/Auth/ForgotPassword.tsx
* frontend/src/pages/Auth/ResetPassword.tsx
* frontend/src/pages/Auth/Logout.tsx    
* frontend/src/utils/axios.ts 
* frontend/src/utils/token-service.js
* frontend/src/utils/session.ts
* frontend/src/hooks/useLogout.ts


### Backend
* backend/src/utils/sendEmail.js
* backend/src/utils/sendResetEmail.js
* backend/src/models/resetpassword.js
* backend/src/models/verification.js
* backend/src/api/controllers/user/getSessionDetails.js
* backend/src/api/controllers/user/verifyEmail.js
* backend/src/api/controllers/user/auth/register.js
* backend/src/api/controllers/user/auth/login.js 
* backend/src/api/controllers/user/auth/refreshTokenController.js 
* backend/src/api/controllers/user/auth/forgotPassword.js
* backend/src/api/controllers/user/auth/resetPassword.js
* backend/src/api/controllers/user/auth/logout.js
* backend/src/api/middlewares/auth.js
* backend/src/api/routes/user.js

## List of files authored by Sushank Saini
### Frontend
* frontend\src\components\DiscussionForum\banner.js
* frontend\src\components\DiscussionForum\DeleteConfirmation.js
* frontend\src\components\DiscussionForum\DiscussionPost.js
* frontend\src\components\DiscussionForum\DiscussionPrompt.js
* frontend\src\components\DiscussionForum\MainPost.js
* frontend\src\components\DiscussionForum\ReplyDisplay.js
* frontend\src\components\DiscussionForum\StartThreadForm.js
* frontend\src\pages\DiscussionForum\DiscussionForumPage.js
* frontend\src\pages\DiscussionForum\DiscussionThreadPage.js
* frontend\src\components\DiscussionForum\authorizationFailureDialog.js
* frontend\src\components\DiscussionForum\loginFailureDialog.js

### Backend
* backend\src\api\controllers\discussionforum\addpost.js
* backend\src\api\controllers\discussionforum\addreply.js
* backend\src\api\controllers\discussionforum\deletepost.js
* backend\src\api\controllers\discussionforum\deletereply.js
* backend\src\api\controllers\discussionforum\getallposts.js
* backend\src\api\controllers\discussionforum\index.js
* backend\src\api\routes\discussionforum.js
* backend\src\models\discussionforum\mainpost.js
 
## List of files authored by Jinay Shah
### Frontend
* frontend\src\pages\home\search.tsx

### Backend
* backend\src\api\controllers\portfolio_search\index.js
* backend\src\api\controllers\portfolio_search\search\search.js
* backend\src\api\routes\portfolio_search.js

## List of files authored by Zainuddin
### Frontend
* [frontend\src\pages\Portfolio\index.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/index.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Bio.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Bio.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Certifications.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Certifications.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Contact.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Contact.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Education.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Education.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Projects.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Projects.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Resume.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Resume.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\Skills.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Skills.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Sections\WorkExperience.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/WorkExperience.tsx?ref_type=heads)
* [frontend\src\pages\Portfolio\Project.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Project.tsx?ref_type=heads)
* [frontend\src\hooks\textColor.ts](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/hooks/textColor.ts?ref_type=heads)

### Backend
* [backend\src\api\controllers\portfolio\index.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/index.js?ref_type=heads)
* [backend\src\api\controllers\portfolio\portfolio\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/portfolio/portfolio.js?ref_type=heads)
* [backend\src\api\controllers\portfolio\portfolio\project.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/controllers/portfolio/portfolio/project.js?ref_type=heads)
* [backend\src\api\routes\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/api/routes/portfolio.js?ref_type=heads)
* [backend\src\models\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/models/portfolio.js?ref_type=heads)

## List of files authored by Boon

### Backend

* backend/src/api/controllers/collaboration/fetch_projects.js
* backend/src/api/controllers/collaboration/fetch_research.js
* backend/src/api/controllers/collaboration/fetchCollabRequestsById.js
* backend/src/api/controllers/collaboration/fetchProjectByid.js
* backend/src/api/controllers/collaboration/fetchResearchByid.js
* backend/src/api/controllers/collaboration/fetchUserById.js
* backend/src/api/controllers/collaboration/index.js
* backend/src/api/controllers/collaboration/send_request.js
* backend/src/api/controllers/collaboration/send_update.js

* backend/src/api/routes/collaboration_route.js

* backend/src/models/collabProject.js
* backend/src/models/collabRequests.js
* backend/src/models/collabResearch.js

## List of files authored by Hatim Patrawala

### Frontend

- frontend/src/pages/NotFound.tsx
- frontend/src/pages/Home/Footer.tsx
- frontend/src/pages/Home/Welcome/Hero.tsx
- frontend/src/pages/Profile/Header.tsx
- frontend/src/pages/Profile/index.tsx
- frontend/src/pages/Profile/UserEditModal.tsx
- frontend/src/pages/Profile/Portfolio/index.tsx
- frontend/src/pages/Profile/Portfolio/Form/index.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/BioSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/CertificationSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/ConfigurationSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/EducationSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/ExperienceSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/ProjectSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/ResumeSection.tsx
- frontend/src/pages/Profile/Portfolio/Form/Sections/SkillSection.tsx
- frontend/src/pages/Profile/Settings/index.tsx
- frontend/src/store/AppStore.tsx
- frontend/src/utils/helpers.ts

### Backend

- backend/src/api/controllers/profile/user-details.js
- backend/src/api/controllers/profile/portfolio/create-portfolio.js
- backend/src/api/controllers/profile/portfolio/delete-portfolio.js
- backend/src/api/controllers/profile/portfolio/edit-portfolio.js
- backend/src/api/controllers/profile/portfolio/get-portfolio.js
- backend/src/api/middlewares/rate-limiter.js
- backend/src/api/routes/profile.js
- backend/src/api/validators/portfolio.validator.js
- backend/src/api/validators/user.validator.js
- backend/src/loaders/express.js
- backend/src/loaders/mongoose.js
- backend/src/models/log.js
- backend/src/models/portfolio.js
- backend/src/models/user.js
- backend/src/utils/logger.js
- backend/src/utils/helpers/common.js
- backend/src/utils/helpers/jwt-token.js

## Sources Used
 
#### `backend/src/api/controllers/user/auth/register.js`
- **Lines 10-40**: This section uses `bcryptjs` for password hashing and integrates `mongoose` models for saving the user and email verification data.
```javascript

  const { error, value } = validateRegister(req.body);
  if (error) {
    logger("00025", req?.user?._id ?? "", error.details[0].message, "Validation Error", req);
    return res.status(400).json(errorHelper("00025", req, getText("en", "00025")));
  }

  const { username, email, password, ...otherDetails } = value;

  try {
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      console.log("Username already exists");
      logger("00032", req?.user?._id ?? "", "Username already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00032", req, getText("en", "00032")));
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      logger("00033", req?.user?._id ?? "", "Email already exists", "Conflict", req);
      return res.status(409).json(errorHelper("00033", req, getText("en", "00033")));
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating new user...");
    let newUser = new User({
      username,
      email,
      password: hashedPassword,
      ...otherDetails,
      isVerified: false
    });

```
  - **Original Source:** Basic password hashing methods and MongoDB user creation patterns are documented in official `bcryptjs` and `mongoose` tutorials.
  - **Modification:** Customized to meet security standards of our application, integrating `bcryptjs` for encrypting user passwords before storing them in the database, ensuring that even in the case of a data breach, the actual user passwords remain protected.

#### `backend/src/utils/sendEmail.js`
- **Lines 5-25**: Implements functionality to send an email using `nodemailer`.
```javascript
const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: 'Verify your email address',
  html: `<a href="${verificationLink}">Verify Email</a>`
};
await transporter.sendMail(mailOptions);
```
  - **Original Source:** `nodemailer` library usage in sending emails.
  - **Modification:** Developed a function to automate sending of verification emails post-registration, including a link for the user to verify their account, enhancing security by ensuring that email addresses are verified before account activation.

#### `frontend/src/pages/Auth/SignUpForm.tsx`
- **Lines 262-412**: User registration interface implementation.
```jsx
const SignUpForm = () => {
  // form state management and handlers
  return (
   <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className={classes.container}>
                <Paper component="main" elevation={3} sx={{ p: isMobile ? 2 : 4, mb: 4 }} className={classes.paper}>

                    <Typography component="h3" variant="h5">
                        Join the Dal Community!
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <OutlinedInput id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} label="First Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <OutlinedInput id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} label="Last Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput id="username" name="username" value={formData.username} onChange={handleChange} label="Username" error={!!errors.username} />
                            {errors.username && <FormHelperText error>{errors.username}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput id="email" name="email" value={formData.email} onChange={handleChange} label="Email" error={!!errors.email} />
                            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                        </FormControl>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.password}
                            />
                            {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                        </FormControl>

                        <Box className={classes.passwordRequirements}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasEightCharacters ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        8 characters
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasUpperCase ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        An uppercase
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasSpecialChar ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A special character
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasNumber ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A number
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                label="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.confirmPassword}
                            />
                            {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
                        </FormControl>

                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Create Account
                        </Button>
                        {loading && <CircularProgress />}

                    </form>

                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Verify Your Email</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please check your inbox for the verification link. If verification is done, proceed to login.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Close</Button>
                            <Button onClick={() => {navigate('/login'); }}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
            <Footer />

        </div>
  );
};
```
  - **Original Source:** Material-UI form components and layout design.
  - **Modification:** Developed a customized form for user registration, integrating validations and state management with React hooks, tailored to capture all necessary user information securely.

#### `frontend/src/utils/axios.ts`
- **Lines 5-58**: Setup of Axios instance with interceptors.
```javascript
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = tokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.url === "/api/user/logout") {
      config.data = { refreshToken: tokenService.getRefreshToken() };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      instance
        .post("/api/user/refresh-token", {
          refreshToken: tokenService.getRefreshToken(),
        })
        ?.then((res) => {
          const { accessToken, refreshToken } = res.data;
          tokenService.setAccessToken(accessToken);
          tokenService.setRefreshToken(refreshToken);
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        })
        ?.catch((err) => {
          console.error("Error refreshing token:", err);
          tokenService.clearTokens();
          history.replace("/login");
          return Promise.reject(err);
        });

      return instance(originalRequest);
    }
    return Promise.reject(error);
});

```
  - **Original Source:** Axios HTTP client library documentation.
  - **Modification:** Integrated a request interceptor to automatically attach JWT access tokens to outgoing requests, supporting a secure and seamless user experience while interacting with protected backend routes.

### Password Management and Security

#### `backend/src/api/controllers/user/auth/forgotPassword.js`
-  Backend logic for handling forgot password functionality.

  - **Original Source:** Email sending logic is typically showcased in `nodemailer` examples.
  - **Modification:** Enhanced to include generation 4 uuid of a secure, one-time link sent to the user's email for password reset, ensuring the process is secure and user-friendly.

#### `frontend/src/pages/Auth/ForgotPassword.tsx`
- Builds the forgot password interface for users.
  - **Original Source:** Form handling and dialog presentations in Material-UI examples.
  - **Modification:** Customized to create a specific user flow for requesting a password reset, including error handling and success feedback, ensuring a smooth user experience.



Across the project, the integration of third-party libraries was carefully adjusted to align with the app's security, usability, and aesthetic requirements. Each employed library, like Material-UI for the frontend and `nodemailer` for email functionalities, was not merely used out-of-the-box but was extensively customized to fulfill the specific needs of the DalPortfolio platform. This includes the user interface design, secure email processing in backend operations, and ensuring robust session management through secure token handling in Axios requests, showcasing a comprehensive and thoughtful integration of these tools to build a secure and cohesive application.


### frontend\src\components\DiscussionForum\banner.js

*Lines 8- 29*

```
const Banner = () => {
  return (
    <Grid justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper style={{ background: '#FFC300', padding: '30px', textAlign: 'center', maxWidth: '100%', margin: 0 }}>
        <Grid justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography variant="h4" style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Public Sans', display: 'inline' }}>
            DalPortfolio  
          </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
          <Typography variant="h5" style={{ color: 'black', fontFamily: 'Public Sans', display: 'inline'  }}>
            Discussions
          </Typography>
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

```

The code above was created by adapting the code in [[1]](https://mui.com/material-ui/react-paper/), [[2]](https://mui.com/system/typography/) and [[3]](https://mui.com/material-ui/react-grid/) as shown below, respectively : 

```
[1]
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </Box>
  );
}
```
```
[2]
import * as React from 'react';
import Box from '@mui/material/Box';

export default function Variant() {
  return (
    <div>
      <Box sx={{ typography: 'subtitle2' }}>subtitle2</Box>
      <Box sx={{ typography: 'body1' }}>body1</Box>
      <Box sx={{ typography: 'body2' }}>body2</Box>
    </div>
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TextAlignment() {
  return (
    <Typography component="div">
      <Box sx={{ textAlign: 'justify', m: 1 }}>
        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
        fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
      </Box>
      <Box sx={{ textAlign: 'left', m: 1 }}>Left aligned text.</Box>
      <Box sx={{ textAlign: 'center', m: 1 }}>Center aligned text.</Box>
      <Box sx={{ textAlign: 'right', m: 1 }}>Right aligned text.</Box>
    </Typography>
  );
}
```
```
[3]
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>

```
- <!---Why---> [1]'s Code was used because I wanted a container that would have elevated surface.
- <!---How---> The code in [1] was implemented by using the Paper component of Material UI.
- <!---How---> [1]'s Code was modified  to have specific styling properties such as background color and text alignment. 

- <!---Why---> [2]'s Code was used because I wanted to customize the text within the Paper container.
- <!---How---> The code in [2] was implemented by using Typography from Material UI.
- <!---How---> [2]'s Code was modified by having a different display property i.e inline, font family and font weights. 

- <!---Why---> [3]'s Code was used because I wanted to make my application component responsive and using MUI Grids is one of the many options to do so.
- <!---How---> The code in [3] was implemented by using MUI Grid component. 
- <!---How---> [3]'s Code was modified by adding more parameters for different types of screens like small, medium and large.

### frontend\src\components\DiscussionForum\DiscussionPrompt.js

*Lines 17 - 35*
```
return (
      <>
      {!isStartDiscussionOpen && (
        <Paper style={{ background: '#DDDDDD', padding: '16px', textAlign: 'center', minHeight: '212px', top: 200 }}>
          <Typography variant="h5" style={{ marginTop: '20px', color: 'black', fontWeight: 500 }}>
            Do you have a question or an idea to share?
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: '20px', color: 'white', backgroundColor: 'black' }}
            onClick={handleStartDiscussionClick}
          >
            Start a Discussion
          </Button>
        </Paper>
      )}
      {isStartDiscussionOpen && <StartDiscussion onClose={() => setStartDiscussionOpen(false)} />}
    </>
);
```
Just like for banner.js page, the code above was created by adapting the code in [[1]](https://mui.com/material-ui/react-paper/), [[2]](https://mui.com/system/typography/) and [[3]](https://mui.com/material-ui/react-grid/).

- <!---Why---> [1]'s Code was used because I wanted an container that would have elevated surface.
- <!---How---> The code in [1] was implemented by using the Paper component of Material UI.
- <!---How---> [1]'s Code was modified  to have specific styling properties such as background color and text alignment. 

- <!---Why---> [2]'s Code was used because I wanted to customize the text within the Paper container.
- <!---How---> The code in [2] was implemented by using Typography from Material UI.
- <!---How---> [2]'s Code was modified by having a different display property i.e inline, font family and fontweights. 

- <!---Why---> [3]'s Code was used because I wanted to make my application component responsive and using MUI Grids is one of the many options to do so.
- <!---How---> The code in [3] was implemented by using MUI Grid component. 
- <!---How---> [3]'s Code was modified by adding more parameters for different types of screens like small, medium and large.

### frontend\src\components\DiscussionForum\StartThreadForm.js

*Lines 50 - 58*
```
    date: new Date().toLocaleString('en-US', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // To use 24-hour format
          }),
```
The code above was created by adapting the code in [[4]](https://stackoverflow.com/questions/22347521/change-time-format-to-24-hours-in-javascript) as shown below: 

```
new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    hourCycle: 'h23',
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});
```
- <!---Why---> [4]'s Code was used because I wanted to have Date in the desired format along with the timestamp for when a new post was submitted.
- <!---How---> The code in [4] was implemented by using in-built JavaScript library funcions i.e. Date() and .toLocaleString(). 
- <!---How---> [4]'s Code was modified by assigning different variables or properties to the options of the functions.

*Lines 92 - 117*
```
 <TextField
          label={`Title (${title.length}/${maxTitleCharacters})`}
          fullWidth
          value={title}
          onChange={handleTitleChange}
          multiline
          maxRows={3}
          placeholder='Maximum 200 characters'
          error={errorTitle}
          helperText={errorTitle ? `Title cannot be more than ${maxTitleCharacters} characters` : ''}
          margin="normal"
        />
        <TextField
          label={`Description (${description.length}/${maxDescriptionCharacters})`}
          fullWidth
          required
          multiline
          rows={4}
          maxRows={7}
          placeholder='Maximum 6000 characters'
          value={description}
          onChange={handleDescriptionChange}
          error={errorDescription}
          helperText={errorDescription ? `Description cannot be more than ${maxDescriptionCharacters} characters` : ''}
          margin="normal"
        />
```
The code above was created by adapting the code in [[5]](https://mui.com/material-ui/react-text-field/) as shown below:

```
<TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
<TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
```
- <!---Why---> [5]'s Code was used because I wanted to have two text fields to take input for the discussion thread from the user.
- <!---How---> The code in [5] was implemented by using MUI TextField component. 
- <!---How---> [5]'s Code was modified by adding a customized helperText which shows an error message to the user if the number of characters are more than the maximum limit.

### frontend\src\pages\DiscussionForum\DiscussionForumPage.js
*Lines 11 - 28*
```
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await GET('api/discussionforum/get-all-posts');
        if (response.data && response.data.listOfPosts && Array.isArray(response.data.listOfPosts)) {
          setPosts(response.data.listOfPosts);
        } 
        else {
          console.error('Invalid data format:', response.data);
        }
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);
```
The code above was created by adapting the code in [[6]](https://www.w3schools.com/react/react_useeffect.asp).

- <!---Why---> [6]'s Code was used because I wanted to implement side effect when all the discussion posts are fetched.
- <!---How---> The code in [6] was implemented by using the useEffect() hook of React.js 
- <!---How---> [6]'s Code was modified by adding get api call and having try-catch block to handle errors.

### frontend\src\components\DiscussionForum\DeleteConfirmation.js
*Lines 07 - 39*
```
<Modal
      open={open}
      onClose={onClose}
      aria-labelledby="delete-confirmation-modal"
      aria-describedby="delete-confirmation-message"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      >
        <Typography id="delete-confirmation-message" variant="h6" gutterBottom>
          Are you sure you want to delete this post?
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button onClick={onConfirm} variant="contained" sx={{ mr: 2,color: 'white', backgroundColor: 'black' }}>
            Yes
          </Button>
          <Button onClick={onClose} variant="outlined" sx={{ mr: 2,color: 'black',borderColor: 'black' }}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
```
The code above was created by adapting the code in [[7]](link) as shown below: 
```
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
```
- <!---Why---> [7]'s Code was used because I wanted to implement a dialog box that would pop up to ask for the confirmation if the user wanted to delete something.
- <!---How---> The code in [7]'s was implemented by using MUI's Modal component that provides a solid foundation for creating dialogs, popovers etc.
- <!---How---> [7]'s Code was modified as modal is not getting triggered by a Buttpn but based on the condition that whether the Delete icon is clicked or not. Secondly, the modal has been customized to add text and buttons. Moreover, various styling properties such as bgcolor, border, boxShadow, p, minWidth, and textAlign are applied to the Box component to control its appearance and layout.

### frontend\src\components\DiscussionForum\StartThreadForm.js, frontend\src\components\DiscussionForum\DiscussionPost.js, frontend\src\components\DiscussionForum\ReplyDisplay.js and frontend\src\components\DiscussionForum\MainPost.js, frontend\src\components\DiscussionForum\authorizationFailureDialog.js,frontend\src\components\DiscussionForum\loginFailureDialog.js

*Lines 129-137* for StartThreadForm.js

```
 <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
          </Dialog>

```
*Lines 124-132* for DiscussionPost.js

```
   <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                   <DialogTitle>Success</DialogTitle>
                     <DialogContent>
                      <Typography>Reply Posted Sucessfully!</Typography>
                     </DialogContent>
                <DialogActions>
                   <Button style={{ color: 'black'}} onClick={handleCloseSuccessModal}>Close</Button>
                </DialogActions>
                </Dialog>

```
*Lines 79-87* for ReplyDisplay.js

```
 <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Reply deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseSuccessModal}>Close</Button>
        </DialogActions>
      </Dialog>

```
*Lines 89-96* for MainPost.js

```
<Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Post deleted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: 'black' }} onClick={handleCloseSuccessModal}>Close</Button>
        </DialogActions>
      </Dialog>

```
*Lines 04-16* for authorizationFailureDialog.js
```
const AuthorizationFailureDialog = ({ open, onClose, handleCloseAuthorizationFailureModal }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Authorization Failure</DialogTitle>
      <DialogContent>
        <Typography>You are not authorized to delete this.</Typography>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: 'black' }} onClick={handleCloseAuthorizationFailureModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
```
*Lines 04-16* for loginFailureDialog.js
```
const LoginFailureDialog = ({ open, onClose, handleCloseLoginFailureModal }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login Failure</DialogTitle>
      <DialogContent>
        <Typography>You are not logged in. Please login and try again.</Typography>
      </DialogContent>
      <DialogActions>
        <Button style={{ color: 'black' }} onClick={handleCloseLoginFailureModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
```
The code above was created by adapting the code in [[8]](https://mui.com/material-ui/react-dialog/).

- <!---Why---> [8] Code was used because I wanted to show success and failure messages to the user as pop up.
- <!---How---> The code in [8] was implemented by using MUI's Dialog component which is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
- <!---How---> [8]'s Code was adapted to include the optional related components such as Dialog actions to have a Button in the dialog.

### backend\src\models\discussionforum\mainpost.js

*Lines 02- 22*

```
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const replySchema= new Schema ({  //schema represents a document in a collection
    userName: String,
    description: String,
    date: String
});

const mainPostSchema=new Schema ({   //schema represents a document in a collection
    userName: String,
    title: String,
    description : String,
    date: String,
    replies:[replySchema]},
    {
        timestamps: true //for createdAt and updatedAt fields
    });

const DiscussionPost= mongoose.model("DiscussionPost", mainPostSchema); //model will be a collection in the db.

```
The code above was created by adapting the code in [[9]](https://mongoosejs.com/docs/guide.html) as shown below: 

```
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
const Blog = mongoose.model('Blog', blogSchema);

```
- <!---Why---> [9]'s Code was used because I wanted to create a schema for my DiscussionForum collection so that there is uniformity among others who utilize that collections.
- <!---How---> The code in [9] was implemented by using Mongoose which is a Object Data Modeling (ODM) library for MongoDB and Node.js
- <!---How---> [NAME](link)'s Code was modified by created a nested schema for list of replies and keeping the timestamp to true so that each document will have the fields createdAt and updatedAt.

### backend\src\api\controllers\discussionforum\addpost.js, backend\src\api\controllers\discussionforum\addreply.js, backend\src\api\controllers\discussionforum\deletepost.js,backend\src\api\controllers\discussionforum\deletereply.js,backend\src\api\controllers\discussionforum\getallposts.js

The above files use the static helper functions for CRUD operations provided by the Mongoose model[[10]](https://mongoosejs.com/docs/queries.html) and the Mongoose document save() method [[11]](https://mongoosejs.com/docs/documents.html#updating-using-save). The methods used are highlighted below:

```
Model.find()
Model.save()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndUpdate()
```
### search.js (backend\src\api\controllers\portfolio_search\search\search.js)

*Lines 5-43*

```
export default async (req, res) => {
    try {
        console.log(req.body);
        const searchString = req.body.search;
        console.log(searchString);
        console.log("inside try");
        const regex = new RegExp(searchString, 'i');
        const query = { $or: [
          {'bio.first_name': { $regex: regex } },
          {'bio.last_name': { $regex: regex } },
          {'bio.email': { $regex: regex } },
          {'bio.about': { $regex: regex } },
          {'bio.city' : {$regex:regex}},
          {'bio.country' : {$regex:regex}},
          {'bio.about' : {$regex:regex}},
          {'education.degree': { $regex: regex } },
          {'education.field_of_study': { $regex: regex } },
          {'education.university': { $regex: regex } },
          {'experience.company_name': { $regex: regex } },
          {'experience.role': { $regex: regex } },
          {'projects.title': { $regex: regex } },
          {'projects.description': { $regex: regex } },
          {'skills.name': { $regex: regex } },
          {'certifications.title': { $regex: regex } },
        ] };

        const result = await Portfolio.find(query);
        
        res.status(200).json({
            resultMessage: { en: "Fetched documents successfully", fr: "Documents récupérés avec succès" },
            resultCode: "00703",
            listOfDocuments: result
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json(errorHelper("00704", req, "Error fetching documents"));
    }
};
```

The code above was created by adapting the code from [MongoDB](https://www.mongodb.com/docs/v4.2/reference/operator/query/regex/) &
The code above was created by adapting the code from [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs ) as follows:

```
{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ <field>: { $regex: 'pattern', $options: '<options>' } }
{ <field>: { $regex: /pattern/<options> } }

```
```
app.post('/test', function () {
    let user = 'User';
    let query = 'SELECT [Password] as password FROM [Table] where [User] = ' + SqlString.escape(user);

    let password = (async function () {
        try {
            let pool = await sql.connect(dbConfig);
            let result = await pool.request()
                .query(querys);
            console.dir(result.recordset[0].password) //Value here is OK
            return result.recordset[0].password
        } catch (err) {
            // ... error checks
        }
    })()
    console.log(password); //here I am getting "Promise { pending }"
});
```

- The code was implemented by me for searching document based on search string using **Regex**. I was going through internet to find the solution for this problem and I reffered MongoDB site for fetching document based on regex. So I took reference of [MongoDB](https://www.mongodb.com/docs/v4.2/reference/operator/query/regex/)

- The code was implemented by me for creating the POST API  for  my **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was going through the internet for how to create POST in Node.js framework. Then, I found this site where REST Api is created in Node.js. So I took reference of [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs )

- The given [StackOverflow]( https://stackoverflow.com/questions/48404592/async-post-function-in-nodejs )'s  code was used as a reference to learn how to create REST API's and send/receive data with server.


### search.tsx (frontend\src\pages\Home\search.tsx)

*Lines (174-239)*

```
<Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Department</InputLabel>
                <Select
                  value={filters.department}
                  onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                  label="Department"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Health Sciences">Health Sciences</MenuItem>
                  <MenuItem value="Law">Law</MenuItem>
                  <MenuItem value="Business & Economics">Business & Economics</MenuItem>
                  <MenuItem value="Natural Science">Natural Sciences</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Experience</InputLabel>
                <Select
                  value={filters.experience}
                  onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  label="Experience"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="lessThanSixMonths">Less than 6 months</MenuItem>
                  <MenuItem value="lessThanOneYear">Less than 1 year</MenuItem>
                  <MenuItem value="lessThanTwoYears">Less than 2 years</MenuItem>
                  <MenuItem value="twoToFiveYears">2 to 5 years</MenuItem>
                  <MenuItem value="moreThanFiveYears">More than 5 years</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Academic Level</InputLabel>
                <Select
                  value={filters.academicLevel}
                  onChange={(e) => setFilters({ ...filters, academicLevel: e.target.value })}
                  label="Academic Level"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="undergraduate">Undergraduate</MenuItem>
                  <MenuItem value="graduate">Graduate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
```

The code above was created by adapting the code from [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react)

```
class ItemList extends React.Component {
  constructor(props) {
    super(props)
this.changeItem = this.changeItem.bind(this)
this.state = {
value: 'all' // this would be the initial value
}
    changeItem(event) {
this.setState({value: event.target.value} // where the value will be changed 
}
  }

  render() {
    return (
      <>
      <select onChange={this.changeItem} value:{event.target.value}>
        <option value='all'>all</option>
        <option value='cats'>fruits</option>
        <option value='dogs'>vegetables</option>
      </select>
        <div className="item-list">
          {this.props.items.map((item) =>
          <SingleItem key={item.id}
          item={item} />
          )}
        </div>
      </>
    );
  }
}
```

- The code was created by me for creating drop down filter for **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was learning how to create such dropdown with different option and I came across this code which implements filter with option. So I took reference of [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react).

- The given [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react)'s  code was used as a reference to learn how to create drop down filter.

- The above code was created by me after understanding the concept from [StackOverflow](https://stackoverflow.com/questions/73431384/creating-a-filter-for-a-drop-down-menu-in-react).


*Lines (253-309)*

```
{searchPerformed && filteredResults.length > 0 ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', marginBottom: '30px' }}>
                Search Results
              </Typography>
              {filteredResults.map((document, index) => (
                <Card key={index} sx={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', '&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }, marginBottom: '20px' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: '#ffd600', fontWeight: 'bold', textAlign: 'left' }}>
                    <strong>Profile:</strong> {document.configuration?.name || 'No Title'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Name:</strong> {document.bio?.first_name || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Email:</strong> {document.bio?.email || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Education:</strong> {document.education?.[0]?.field_of_study || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Degree:</strong> {document.education?.[0]?.degree || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Past Experience:</strong> {document.experience?.[0]?.role || 'No Summary'}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '10px', fontWeight: 'medium', textAlign: 'left' }}>
                    <strong>Skills:</strong> 
                    {document.skills.map((skill: { name: string }, id: number) => (
                    <span key={id}>{skill.name}{id !== document.skills.length - 1 ? ', ' : ''}</span>
                    ))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handlePortfolioClick(document._id)}>Visit Portfolio</Button>
                  </CardActions>
                  <CardActions>
                    <Button size="small" onClick={() => handleCollaborateClick(document.user_id)}>Collaborate</Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          ) : (
            searchPerformed && <Typography sx={{ textAlign: 'center', color: 'red', marginTop: 2 }}>No results found.</Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button variant="contained" color="secondary" onClick={handleBackToHomeClick}>
              Back to Home Page
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
  
};

```
The code above was created by adapting the code from [React](https://mui.com/material-ui/react-card/)

```
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
```
- The code was created by me for creating card **SEARCH PAGE**  feature in Assignment 3 in CSCI-5709. I was learning how to create such card  with button and I came across this code which implements card with button. So I took reference of [React](https://mui.com/material-ui/react-card/).

- The given [React](https://mui.com/material-ui/react-card/)'s  code was used as a reference to learn how to create card in react.

- The above code was created by me after understanding the concept from [React](https://mui.com/material-ui/react-card/).

### [frontend\src\pages\Portfolio\Sections\Bio.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Bio.tsx?ref_type=heads)

*Lines 64 - 135*

```
<Stack direction={"row"} spacing={2}>
  {!!portfolio?.bio?.twitter && (
    <a
      href={portfolio.bio?.twitter}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="twitter" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.linkedin && ( 
    <a
      href={portfolio.bio?.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="linkedin" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.github && ( 
    <a
      href={portfolio.bio?.github}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="github" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.gscholar && ( 
    <a
      href={portfolio.bio?.gscholar}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="education" sx={{ fontSize: "30px" }} />
    </a>
  )}
  {!!portfolio?.bio?.facebook && ( 
    <a
      href={portfolio.bio?.facebook}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="facebook" sx={{ fontSize: "30px" }} />
    </a>
  )}

  {!!portfolio?.bio?.instagram && ( 
    <Icon
      component={"a"}
      href="portfolio.bio?.instagram"
      style={{ color: "inherit" }}
      name="instagram"
      sx={{ fontSize: "30px" }}
    />
  )}
  {!!portfolio?.bio?.youtube && ( 
    <a
      href={portfolio.bio?.youtube}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "inherit" }}
    >
      <Icon name="youtube" sx={{ fontSize: "30px" }} />
    </a>
  )}
</Stack>

```

The code above was created by referring the code in [[1]](https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable), and [[2]](https://mui.com/material-ui/react-stack/) as shown below, respectively : 

```
[1]
<a href="https://www.kaiostech.com/store/" target="_blank" rel="noreferrer">
  KaiStore
</a>
```
```
[2]
import * as React from 'react';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
}
```

- <!---Why---> [1]'s Code was used because I wanted to use the link without any vulnerability.
- <!---How---> The code in [1] was implemented by setting the attributes of the Anchor tag with specific values.
- <!---How---> [1]'s Code was modified with specific specific styling properties and setting a custom href fetched from the API response. 


- <!---Why---> [2]'s Code was used because I wanted to a way to arrange the social media links in a row horizontally.
- <!---How---> The code in [2] was implemented by using Stack from Material UI.
- <!---How---> [2]'s Code was modified by having a setting the drection property to row with a spacing of 2 pixels. Additionally, this Stack used is then influenced by a outer Section tag and the inner link and custom Icon component which sets display properties. 

### [frontend\src\pages\Portfolio\Sections\Skills.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Skills.tsx?ref_type=heads)
*Lines 76 - 102*
```
  {portfolio.skills.map((skill: any, index: number) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Paper
        elevation={3}
        style={{
          padding: "1.2rem",
          height: "100%",
          borderRadius: "1rem",
        }}
      >
        <Typography style={{ fontSize: "1.15rem" }}>
          {skill.name}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={skill.rating * 20}
          sx={{
            height: "10px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: getProgressBarColor(skill.rating),
            },
          }}
        />
        <Typography style={{ fontSize: "1.15rem" }}>
          {skill.rating}/5
        </Typography>
      </Paper>
    </Grid>
  ))}
```
The code above was created by adapting the code in [[3]](https://mui.com/material-ui/react-paper/), [[4]](https://mui.com/system/typography/), [[5]](https://mui.com/material-ui/react-grid/) and [[6]](https://mui.com/material-ui/api/linear-progress/).

- <!---Why---> I referred to the code from [2] to create a container with an elevated surface for distinction.
- <!---How---> The implementation of the code in [2] involved using the Paper component from Material UI.
- <!---How---> Modifications were made to [2]'s code to include specific styling attributes, like padding, borderRadius and height. 



- <!---Why---> [3]'s Code was referred to customize the text within the Paper container.
- <!---How---> The code in [3] was implemented by using Typography from Material UI.
- <!---How---> [3]'s Code was modified by having a different display property i.e fontSize from the body of the page.



- <!---Why---> [4]'s Code was reffered to make the skills application component responsive and using MUI Grids is one of approaches.
- <!---How---> The code in [4] was implemented by using MUI Grid component. 
- <!---How---> Modifications were made to [4]'s code by addding parameters targetting different screen sizes such as small, medium, and large. This is used in addition to the custom in-built checker of onMobile() or onTablet() view.



- <!---Why---> [5]'s Code was reffered to display progress bars representing skill ratings within the Skills application component.
- <!---How---> The code in [5] was implemented by using MUI LinearProgress component and dynamically adjusting its value based on the skill rating multiplied by 20. 
- <!---How---> Modifications were made to [5]'s code to customize its appearance by modifying the height of the progress bar, dynamically changing the background color of the progress bar based on the skill rating through utility functions.


### [frontend\src\pages\Portfolio\Sections\Certifications.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/Sections/Certifications.tsx?ref_type=heads)

*Lines 94 - 100*
```
{new Date(
  certification.issue_date
).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}
```

*Lines 106 - 112*
```
{new Date(
  certification.expiry_date
).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})}
```

The code above was created by adapting the code in [[6]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) as shown below: 

```
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(event.toLocaleDateString('de-DE', options));
```
- <!---Why---> [6]'s Code was used to extract the Month and Year only from the datetime object, specifically to display the certification issue date.
- <!---How---> [6]'s Code was implemented using in-built JavaScript Date() and .toLocaleString() functions. 
- <!---How---> Modifications were made to [6]'s Code by modifying the options within the .toLocaleDateString() function to specify the desired format for displaying the date.

### [frontend\src\pages\Portfolio\index.tsx](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/frontend/src/pages/Portfolio/index.tsx?ref_type=heads)
*Lines 90 - 92*
```
  useEffect(() => {
    fetchPortfolio();
  }, []);
```
The code above was created by adapting the code in [[7]](https://www.w3schools.com/react/react_useeffect.asp).

- <!---Why---> The [7]'s Code was referred to call teh backend API to fetch all the portfolio details for that user.
- <!---How---> [7]'s code was implemented by using the useEffect() hook present in React.js 
- <!---How---> Modifications were done in [7]'s code by integrating a GET API call and implementing a try-catch block to effectively manage potential failures and screen loading scenarios.


### [backend\src\models\portfolio.js](https://git.cs.dal.ca/patrawala/csci-5709-grp-01/-/blob/main/backend/src/models/portfolio.js?ref_type=heads)

*Lines 4 - 153*

```
const configurationSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    _id: false,
  }
);

const bioSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    about: { type: String },
    github: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    youtube: { type: String },
    gscholar: { type: String },
    other_url: { type: String },
    photo_url: { type: String },
  },
  {
    _id: false,
  }
);

const educationSchema = new Schema(
  {
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    university: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    grade_obtained: { type: String },
    max_grade: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const experienceSchema = new Schema(
  {
    company_name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    company_url: { type: String },
    description: { type: String },
  },
  {
    _id: false,
  }
);

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["completed", "in-progress"],
      required: true,
    },
    project_url: { type: String },
  },
  {
    _id: false,
  }
);

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    _id: false,
  }
);

const certificationSchema = new Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    issue_date: { type: Date, required: true },
    expiry_date: { type: Date },
    verification_link: { type: String },
  },
  {
    _id: false,
  }
);

const portfolioSchema = new Schema(
  {
    configuration: {
      type: configurationSchema,
      required: true,
    },
    bio: {
      type: bioSchema,
      required: true,
    },
    education: {
      type: [educationSchema],
      required: true,
    },
    experience: {
      type: [experienceSchema],
      required: true,
    },
    projects: {
      type: [projectSchema],
      required: true,
    },
    skills: {
      type: [skillSchema],
      required: true,
    },
    certifications: {
      type: [certificationSchema],
      required: true,
    },
    resume: {
      type: String,
    },
    is_default: { type: Boolean, default: false },
    user_id: { type: Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    collection: "portfolios",
  }
);

const Portfolio = model("Portfolio", portfolioSchema);

```
The code above was referred from the code in [[8]](https://mongoosejs.com/docs/guide.html) as shown below: 

```
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
const Blog = mongoose.model('Blog', blogSchema);

```
- <!---Why---> [8]'s Code was used because I wanted to create a schema for my Portfolio collection, and the multiple sub-sections inside it. This is to have a modularised portfolio data mdoel for accessing portfolio collections.
- <!---How---> [8]'s code was implemented by using Mongoose, an Object Data Modeling (ODM) library compatible with MongoDB and Node.js.
- <!---How---> Modifications were made to the code from [8] by designing a nested schema for portfolio section, by specifying enumerations, required flags, default values, and required portfolio sub-sections.

#### backend/src/api/controllers/collaboration/fetch_projects.js, 

*Line 10*

    const projects = await Portfolio.findOne({ user_id }, "projects");

#### backend/src/api/controllers/collaboration/fetch_research.js, 

*Line 9*

    const research_studies = await CollabResearchStudies.find({ user_id });

#### backend/src/api/controllers/collaboration/fetchCollabRequestsById.js,

*Line 16*

    const collab_requests = await CollabRequests.find({     receiver_user_id });

#### backend/src/api/controllers/collaboration/fetchProjectByid.js, 

*Line 9*

    const project = await CollabProjects.find({ _id: ObjectId(id) }); // Fetch document by _id

#### backend/src/api/controllers/collaboration/fetchResearchByid.js, 

*Line 9*

    const project = await CollabResearchStudies.find({ _id: ObjectId(id) }); // Fetch document by _id

#### backend/src/api/controllers/collaboration/fetchUserById.js, 

*Line 17*

    const user = await User.findOne({ _id: user_id });

#### backend/src/api/controllers/collaboration/send_request.js, 

*Lines 44 - 46*

    const receiver_user_obj = await User.findOne({
      _id: ObjectId(receiver_user_id),
    });

#### backend/src/api/controllers/collaboration/send_update.js

*Lines 33-37*

    const projectUpdateResult = await CollabRequests.updateOne(
      filter,
      projectUpdate,
      projectArrayFilters
    );

All the above snippets are about retrieving or writing or updating data in MongoDB using Mongoose. These are adapted from [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) post about How to Use MongoDB + Mongoose with Node.js. 

```
    const doc = await CompletedSchema.findOne(info)
    doc.slug = 'something-else'
    await doc.save()
```

```
    const res = await CompletedSchema.updateOne(<condition>, <query>).lean()
```

The reason I have to take reference from [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) article is that it demonstrates how to find, find only one, update a document in MongoDB using Mongoose.

I referenced the [freecodecamp](https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/) article as a resource to gain clarity on the syntax required for certain operations, such as find and findOne, in Mongoose. This was necessary due to my unfamiliarity with the syntax at the time of implementation.


#### backend/src/api/controllers/collaboration/send_request.js

*Lines 54 - 76*

```
var transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL, // DalPortfolio email ID
      to: receiver_user_obj.email, // potential collaborator email ID
      subject: "Please respond to the Collaboration Request",
      text: "You received a collaboration request based on your profile. Please respond to the request at your conveinence.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
```

The above code snippet is about sending a mail using nodemailer. This is adapted from [w3schools](https://www.w3schools.com/nodejs/nodejs_email.asp).

```
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

```

- My code uses environment variables **process.env.EMAIL** and **process.env.EMAIL_PASSWORD** to store the DalPortfolio's official email and password, respectively.
    - These environment variables are used for securely storing sensitive information without hardcoding them into the source code.

- The email content in my code is dynamic and personalized. It includes placeholders like **receiver_user_obj.email** to dynamically populate the recipient's email address.

- Additionally, the email subject and text message are customized to indicate a collaboration request based on the recipient's profile.

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

### frontend/src/utils/helpers.ts

_Lines 1-14_

```javascript
/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 */
const isEmpty = (value: any) => {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  );
};
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/a/66186886) as shown below:

```javascript
/**
 * Checks if a JavaScript value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 */
function isEmpty(value) {
  return (
    value === null || // check for null
    value === undefined || // check for undefined
    value === "" || // check for empty string
    (Array.isArray(value) && value.length === 0) || // check for empty array
    (typeof value === "object" && Object.keys(value).length === 0) // check for empty object
  );
}
```

- This code in [Stack Overflow](https://stackoverflow.com/a/66186886) was implemented by defining a utility function that checks for various conditions of what is considered "empty" in JavaScript, including null, undefined, empty strings, empty arrays, and objects with no properties.
- The code from [Stack Overflow](https://stackoverflow.com/a/66186886) was used because it provides a comprehensive and efficient way to check for empty values across different data types, which is a common requirement in form validation and other input processing in the application.
- The original code from [Stack Overflow](https://stackoverflow.com/a/66186886) was used with minor modifications. The function was directly adopted without changes, demonstrating its robustness and versatility for use in various parts of the application for input validation and checking.

### frontend/src/utils/helpers.ts

_Lines 16-28_

```javascript
/**
 * Checks if the given value is a valid email address.
 *
 * @param email - The value to be checked.
 * @returns A boolean indicating whether the value is a valid email address.
 */
const isEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/a/46181) as shown below:

```javascript
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
```

- This code in [Stack Overflow](https://stackoverflow.com/a/46181) was implemented by using a regular expression to match the input value against a pattern that represents the structure of a valid email address. It converts the email to lowercase before testing to ensure case-insensitive validation.
- The code from [Stack Overflow](https://stackoverflow.com/a/46181) was chosen for its accuracy and efficiency in validating email addresses, ensuring that users provide valid email contact information.
- The code was utilized as provided in the [Stack Overflow](https://stackoverflow.com/a/46181) answer without the need for modifications, as it met the project requirements for email validation accurately.

### frontend/src/pages/Profile/UserEditModal.tsx

_Lines 101-254_

```javascript
<Formik
  initialValues={formValues}
  validate={handleValidation}
  enableReinitialize
  onSubmit={(values) => {
    handleSave(values);
  }}
>
  {({
    values,
    setValues,
    errors,
    getFieldProps,
    handleSubmit,
    validateForm,
  }) => (
    <Dialog open={isOpen} onClose={handleClose} fullWidth={true} scroll="paper">
      <DialogContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography component={"h1"} variant="h6">
            Edit Profile
          </Typography>
          <Avatar
            sx={{
              width: "70px",
              height: "70px",
            }}
          />
        </Stack>
        <Box
          sx={{
            width: "100%",
            marginTop: 3,
          }}
        >
          <Grid
            container
            columns={{ xs: 1, sm: 2, md: 2, xl: 2 }}
            columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 2 }}
            rowSpacing={{ xs: 3, sm: 2, md: 3, xl: 3 }}
          >
            {[
              {
                label: "First Name",
                id: "user-first-name",
                name: "first_name",
                type: "text",
                required: true,
                value: values?.first_name,
                component: InputField,
              },
              {
                label: "Last Name",
                id: "user-last-name",
                name: "last_name",
                type: "text",
                required: true,
                value: values?.last_name,
                component: InputField,
              },
              {
                label: "Username",
                id: "user-username",
                name: "username",
                type: "text",
                required: true,
                value: values?.username,
                component: InputField,
              },
              {
                label: "Email",
                id: "user-email",
                name: "email",
                type: "email",
                required: true,
                value: values?.email,
                component: InputField,
              },
              {
                id: `user-gender`,
                name: `gender`,
                label: "Gender",
                type: "text",
                options: [
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ],
                required: true,
                value: values?.gender,
                component: SelectField,
              },
              {
                id: `user-date-of-birth`,
                name: `dob`,
                label: "Date of Birth",
                required: true,
                value: values?.dob,
                component: DatePicker,
                sx: { width: "100%" },
              },
            ].map((input: any, index: number) => {
              const { component: Component, ...rest } = input;
              return (
                <Grid item xs={1} md={1} key={`input-item-${index}`}>
                  <Component
                    {...rest}
                    errorText={errors?.[rest?.name]}
                    isError={!!errors?.[rest?.name]}
                    fullWidth
                    {...getFieldProps(rest?.name)}
                    {...(rest?.name?.includes("dob") && {
                      slotProps: {
                        textField: {
                          helperText: errors?.[rest?.name],
                          required: rest?.required,
                          error: !!errors?.[rest?.name],
                        },
                      },
                      value: dayjs(rest.value),
                      onChange: (value: any, context: any) =>
                        setValues({
                          ...values,
                          [rest?.name]: value,
                        }),
                    })}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions sx={{ padding: 3 }}>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={async () => {
            const _errors = await validateForm();
            isEmpty(_errors) && handleSave(values);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )}
</Formik>
```

This component was developed by integrating Formik for form handling, specifically for managing the state, validation, and submission of user profile editing. Formik is chosen for its simplicity and capability in handling form states, validations, and submissions in React applications.

Source Code for Formik:
The integration of Formik into the UserEditModal component was inspired by the Formik documentation and various community examples. Specifically, the basic setup and usage pattern align with the standard approach recommended in the Formik Documentation(https://formik.org/).

Basic Formik Usage Example (Inspiration):

```javascript
import React from "react";
import { Formik, Form, Field } from "formik";

const MyForm = () => (
  <Formik
    initialValues={{ email: "" }}
    onSubmit={(values, actions) => {
      // Form submission logic
    }}
  >
    <Form>
      <Field type="email" name="email" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);
```

- The basic pattern of using `Formik` to wrap a form, providing initialValues, a validate function, and an onSubmit handler, was adapted to the complex form structure in UserEditModal. The use of Formik simplifies the form handling by managing form states and validations internally.
- Formik was chosen for its comprehensive solution for form handling in React, including state management, validation, and submission, which significantly reduces the boilerplate code and complexity involved in form handling in React applications.
- The adaptation involved customizing the initialValues to populate from user data, implementing a custom validation function handleValidation for various fields, and handling the form submission with handleSave function that integrates with the application's backend API via POST request. Additionally, custom input components such as InputField, SelectField, and DatePicker were integrated with Formik's getFieldProps to maintain the form state and handle validations seamlessly.

### backend/src/api/validators/portfolio.validator.js

_Lines 1-82_

```javascript
import Joi from "joi";

export const validateCreatePortfolio = (body) => {
  const schema = Joi.object({
    configuration: Joi.object({
      name: Joi.string().min(3).required(),
      color: Joi.string().required(),
    }),
    bio: Joi.object({
      // Bio fields...
    }),
    education: Joi.array()
      .items
      // Education validation schema...
      (),
    experience: Joi.array()
      .items
      // Experience validation schema...
      (),
    projects: Joi.array()
      .items
      // Projects validation schema...
      (),
    skills: Joi.array()
      .items
      // Skills validation schema...
      (),
    certifications: Joi.array()
      .items
      // Certifications validation schema...
      (),
    resume: Joi.string().default("").allow(null, ""),
    is_default: Joi.boolean().default(false),
  });
  return schema.validate(body);
};
```

This comprehensive validation schema is implemented using Joi, a powerful schema description language and data validator for JavaScript. It validates the structure and data of the portfolio creation request body to ensure that the incoming data adheres to the expected format and content rules.

Source Code for Joi:
The implementation of Joi in the validateCreatePortfolio function follows the patterns and practices recommended in the Joi Documentation and other authoritative sources within the developer community.

Basic Joi Validation Example (Inspiration):

```javascript
const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

const value = { username: "abc", birth_year: 1994 };

const result = schema.validate(value);
```

- The example above demonstrates basic Joi usage for defining a validation schema with various data type constraints. Similarly, validateCreatePortfolio utilizes Joi to create a nested and complex schema that validates each part of the portfolio data, including objects, arrays, strings, numbers, and date types, each with specific requirements such as minimum length, required status, and allowed values.
- Joi was selected for its robustness, flexibility, and ease of defining complex validation rules that can enforce data integrity and structure within the application. It helps prevent invalid or malicious data from being processed by the backend, ensuring that only correctly formatted requests are accepted.
- The validation rules in validateCreatePortfolio were tailored to match the specific data structure and requirements of the portfolio feature. This includes complex objects with nested arrays and sub-objects, each field having custom validation rules such as minimum lengths, optional fields with defaults, and specific format requirements for dates and URLs. The use of .default("") and .allow(null, "") for optional fields ensures that missing values are handled gracefully, maintaining data consistency while allowing flexibility in the portfolio data provided by users.

## Acknowledgments
 
- Thanks to the creators and contributors of Material-UI for providing a comprehensive UI toolkit for React, instrumental in building this web application.
- Gratitude to Dalhousie University for the inspiration behind the theme and design of the application. The logo and styling cues were inspired by the official Dalhousie University website.
- The Dal Portfolio Logo was inspired by Dalhousie logo but was created from scratch usung [Canva](https://www.canva.com/)
- Appreciation for the developer community for sharing valuable insights and knowledge, which have been crucial in implementing various features of this project.