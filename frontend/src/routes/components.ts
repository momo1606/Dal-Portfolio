import React from "react";

const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "pages/Home").then((module) => ({
    default: module.Welcome,
  }))
);

const ContactUsPage = React.lazy(() =>
  import(/* webpackChunkName: "ContactUs" */ "pages/Home").then((module) => ({
    default: module.ContactUs,
  }))
);

const AboutUsPage = React.lazy(() =>
  import(/* webpackChunkName: "AboutUs" */ "pages/Home").then((module) => ({
    default: module.AboutUs,
  }))
);

const FAQPage = React.lazy(() =>
  import(/* webpackChunkName: "FAQ" */ "pages/Home").then((module) => ({
    default: module.FAQ,
  }))
);

const ProfilePage = React.lazy(() =>
  import(/* webpackChunkName: "Profile" */ "pages/Profile").then((module) => ({
    default: module.default,
  }))
);

const PortfolioPage = React.lazy(() =>
  import(/* webpackChunkName: "Portfolio" */ "pages/Portfolio/").then((module) => ({
    default: module.default,
  }))
);

const ProjectPage = React.lazy(() =>
  import(/* webpackChunkName: "Project" */ "pages/Portfolio/").then((module) => ({
    default: module.default,
  }))
);

const SearchPage = React.lazy(() =>
  import(/* webpackChunkName: "Search" */ "pages/Home").then((module) => ({
    default: module.SearchPage,
  }))
);

const SignUpPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.SignUp,
  }))
);

const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.Login,
  }))
);

const LogoutPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.Logout,
  }))
);

const ForgotPasswordPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.ForgotPassword,
  }))
);

const ResetPasswordPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.ResetPassword,
  }))
);

const EmailVerificationPage = React.lazy(() =>
  import(/* webpackChunkName: "SignUp" */ "pages/Auth").then((module) => ({
    default: module.EmailVerification,
  }))
);


const NotFoundPage = React.lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ "pages/NotFound").then(
    (module) => ({
      default: module.default,
    })
  )
);

const CreatePortfolioPage = React.lazy(() =>
  import(
    /* webpackChunkName: "CreatePortfolioPage" */ "pages/Profile/Portfolio/Form"
  ).then((module) => ({
    default: module.default,
  }))
);

export { HomePage, ContactUsPage, FAQPage, NotFoundPage, AboutUsPage, ProfilePage, PortfolioPage, ProjectPage, CreatePortfolioPage, SignUpPage, LoginPage, ForgotPasswordPage, SearchPage,  ResetPasswordPage, EmailVerificationPage, LogoutPage };
