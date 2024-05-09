//Author: Mohammed Noor ul Hasan Kothaliya

import Footer from "pages/Home/Footer";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppStore } from "store";
import { isEmpty } from "utils/helpers";

const faqData = [
  {
    section: "Authentication",
    questions: [
      {
        question: "How do I sign up for Dal Portfolio?",
        answer:
          "To sign up, click the 'Sign Up' button on the homepage and enter your details in the required fields. Make sure you use your Dalhousie email address for registration.",
      },
      {
        question: "Can recruiters register on Dal Portfolio?",
        answer:
          "No, Dal Portfolio is currently open for registrations to Dalhousie current and former students as well as professors to showcase their academic portfolios.",
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          "If you forget your password, use the 'Forgot Password' link on the sign-in page to reset your password securely.",
      },
    ],
  },
  {
    section: "Home Page",
    questions: [
      {
        question: "What features are available on the home page?",
        answer:
          "The home page provides quick access to search functionalities, the latest user portfolios, and navigation to other sections of the app.",
      },
      {
        question:
          "How do I navigate to different sections of Dal Portfolio from the home page?",
        answer:
          "You can navigate using the menu bar, which lists all the sections, or by scrolling through the home page where each section is highlighted.",
      },
    ],
  },
  {
    section: "Search Functionality",
    questions: [
      {
        question: "How does the search functionality work?",
        answer:
          "The search feature allows you to find portfolios using keywords, filters, or a combination of both to refine your search results.",
      },
      {
        question: "Can I save my search queries on Dal Portfolio?",
        answer:
          "Yes, you can save your search queries by clicking the 'Save Search' button after performing a search.",
      },
    ],
  },
  {
    section: "User Profiles",
    questions: [
      {
        question: "How can I edit my profile on Dal Portfolio?",
        answer:
          "You can edit your profile by navigating to your profile page and selecting the 'Edit Profile' option.",
      },
      {
        question: "Is it possible to customize my portfolio template?",
        answer:
          "Yes, Dal Portfolio offers customizable templates. You can add, remove, and rearrange sections to suit your preferences.",
      },
    ],
  },
  {
    section: "Discussion Forums",
    questions: [
      {
        question: "How can I participate in discussion forums?",
        answer:
          "You can participate by navigating to the forums section, selecting a topic of interest, and posting your questions or comments.",
      },
      {
        question: "Are discussions moderated on Dal Portfolio?",
        answer:
          "Yes, to maintain a constructive and respectful environment, our discussions are moderated according to our community guidelines.",
      },
      {
        question: "Can I create a new discussion topic?",
        answer:
          "Yes, users can create new discussion topics. We encourage you to start discussions that are beneficial for the Dalhousie community.",
      },
    ],
  },
  {
    section: "Collaboration",
    questions: [
      {
        question: "How can I collaborate with other students or professors?",
        answer:
          "You can send collaboration requests through the platform's messaging system or respond to collaboration opportunities posted by others.",
      },
      {
        question: "Will I be notified of collaboration requests?",
        answer:
          "Yes, you will receive notifications for any collaboration requests or messages in your Dal Portfolio inbox.",
      },
      {
        question:
          "Can I collaborate with users outside of Dalhousie University?",
        answer:
          "Currently, collaboration is limited to Dalhousie students and faculty members. However, external users can view portfolios and reach out via provided contact information.",
      },
    ],
  },
  {
    section: "Technical",
    questions: [
      {
        question: "What browsers are supported by Dal Portfolio?",
        answer:
          "Dal Portfolio is best viewed on the latest versions of Chrome, Firefox, Safari, and Edge.",
      },
      {
        question: "Is there a mobile app available for Dal Portfolio?",
        answer:
          "At the moment, there is no dedicated mobile app, but our website is mobile-responsive for convenient access on any device.",
      },
      {
        question: "Who do I contact for technical support?",
        answer:
          "For any technical issues, please reach out to our support team through the 'Contact Us' page.",
      },
    ],
  },
  {
    section: "General",
    questions: [
      {
        question: "Is Dal Portfolio free to use?",
        answer:
          "Yes, Dal Portfolio is a free platform for the Dalhousie community.",
      },
      {
        question: "How often is the information on Dal Portfolio updated?",
        answer:
          "Profiles and content are updated regularly as users make changes to their portfolios or when new features are released.",
      },
      {
        question: "Can alumni access Dal Portfolio after graduation?",
        answer:
          "Yes, Dal Portfolio is available to alumni who wish to continue showcasing their academic and professional journey.",
      },
    ],
  },
];

type Props = {};

const FAQ = (props: Props) => {
  const [state, dispatch] = useAppStore();
   if (!isEmpty(state?.currentUser)) {
    console.log("User is logged in", state?.currentUser);
   }
   else{
    console.log("User is not logged in");
   }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedSection, setSelectedSection] = useState(faqData[0].section);

  //const [selectedQuestion, setSelectedQuestion] = useState(faqData[0].questions[0].question);

  const [expanded, setExpanded] = useState<string | false>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const refs = faqData.reduce(
    (acc: { [key: string]: React.RefObject<HTMLDivElement> }, value) => {
      acc[value.section] = React.createRef<HTMLDivElement>();
      return acc;
    },
    {}
  );

  const handleSectionChange = (event: any) => {
    const section = event.target.value;
    setSelectedSection(section);
    handleListItemClick(section);
  };

  const handleListItemClick = (section: string) => {
    const sectionRef = refs[section]?.current;
    if (sectionRef && contentRef.current) {
      const topPosition = sectionRef.offsetTop - contentRef.current.offsetTop;
      contentRef.current.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      setExpanded(`${section}-0`);
    }
    //return section;
  };

  useEffect(() => {
    if (expanded) {
      const section = expanded.split("-")[0];
      setTimeout(() => {
        const sectionRef = refs[section]?.current;
        if (sectionRef) {
          const offsetTop = sectionRef.offsetTop;
          const adjustedOffset = offsetTop - 1400;
          window.scrollTo({
            top: adjustedOffset,
            behavior: "smooth",
          });
        }
      }, 3);
    }
  }, [expanded, refs]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          borderBottom: "2px solid #ffd400",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: "100%",
        }}
      >
        {isMobile ? (
          <FormControl fullWidth>
            <InputLabel id="section-select-label">Select Section</InputLabel>
            <Select
              labelId="section-select-label"
              id="section-select"
              value={selectedSection}
              label="Select Section"
              onChange={handleSectionChange}
              sx={{ mb: 2 }}
            >
              {faqData.map((section) => (
                <MenuItem key={section.section} value={section.section}>
                  {section.section}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Box
            sx={{
              width: "20%",
              borderRight: "1px solid #ccc",
              position: "sticky",
              top: 0,
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <List component="nav">
              {faqData.map((section) => (
                <ListItem key={section.section} disablePadding>
                  <ListItemButton
                    onClick={() => handleListItemClick(section.section)}
                  >
                    <span>
                      <ListItemText
                        primary={section.section}
                        sx={{ borderBottom: "2px solid #ffd400" }}
                      />
                    </span>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Box
          sx={{
            width: isMobile ? "100%" : "80%",
            overflowY: "auto",
            p: 3,
            maxHeight: "100vh",
          }}
          ref={contentRef}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Frequently Asked Questions
          </Typography>
          {faqData.map((section, sectionIndex) => (
            <Box key={section.section} ref={refs[section.section]}>
              <Typography variant="h6" sx={{ my: 2 }}>
                {section.section}
              </Typography>
              {section.questions.map((faq, index) => (
                <Accordion
                  key={`${sectionIndex}-${index}`}
                  expanded={expanded === `${section.section}-${index}`}
                  onChange={handleChange(`${section.section}-${index}`)}
                  sx={{ my: 2, border: 1, borderColor: "divider" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Q: {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ pt: 2, borderTop: 1, borderColor: "divider" }}
                  >
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default FAQ;
