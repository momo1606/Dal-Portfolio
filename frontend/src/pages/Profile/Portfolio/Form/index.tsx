//Author: Hatim Patrawala

import {
  Box,
  List,
  Stack,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Button, Icon, SelectField } from "components";
import { useOnMobile, useToast } from "hooks";
import React, { Fragment, useEffect } from "react";
import BioSection from "./Sections/BioSection";
import EducationSection from "./Sections/EducationSection";
import ExperienceSection from "./Sections/ExperienceSection";
import ProjectSection from "./Sections/ProjectSection";
import SkillSection from "./Sections/SkillSection";
import CertificationSection from "./Sections/CertificationSection";
import ConfigurationSection from "./Sections/ConfigurationSection";
import { isEmpty } from "utils/helpers";
import { POST, PUT } from "utils/axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import ResumeSection from "./Sections/ResumeSection";

type Props = {};

const sidebarWidth = "240px";

const sectionOrder = [
  {
    label: "Configuration",
    value: "Configuration",
    icon: "settings",
    key: "configuration",
    component: ConfigurationSection,
  },
  {
    label: "Bio",
    value: "Bio",
    icon: "bio",
    key: "bio",
    component: BioSection,
  },
  {
    label: "Education",
    value: "Education",
    icon: "education",
    key: "education",
    component: EducationSection,
  },
  {
    label: "Experience",
    value: "Experience",
    icon: "work",
    key: "experience",
    component: ExperienceSection,
  },
  {
    label: "Projects",
    value: "Projects",
    icon: "project",
    key: "projects",
    component: ProjectSection,
  },
  {
    label: "Skills",
    value: "Skills",
    icon: "skill",
    key: "skills",
    component: SkillSection,
  },
  {
    label: "Resume",
    value: "Resume",
    icon: "resume",
    key: "resume",
    component: ResumeSection,
  },
  {
    label: "Certifications",
    value: "Certifications",
    icon: "certification",
    key: "certifications",
    component: CertificationSection,
  },
];

const PortfolioForm = (props: Props) => {
  const { portfolioId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  console.log("location", location);
  const [activeTab, setActiveTab] = React.useState<string>("Configuration");
  const [formValues, setFormValues] = React.useState<any>({
    configuration: {},
    bio: {},
    education: [],
    experience: [],
    projects: [],
    skills: [],
    certifications: [],
  });

  const [sectionErrors, setSectionErrors] = React.useState<any>({});

  const isEdit = !!portfolioId;

  const onMobile = useOnMobile();

  useEffect(() => {
    if (!isEmpty(location?.state?.portfolio)) {
      prepareFormValues(location?.state?.portfolio);
    }
  }, [location?.state]);

  const prepareFormValues = (data: any) => {
    const {
      configuration,
      bio,
      education,
      experience,
      projects,
      skills,
      certifications,
    } = data;
    setFormValues({
      configuration: configuration || {},
      bio: bio || {},
      education: education || [],
      experience: experience || [],
      projects: projects || [],
      skills: skills || [],
      certifications: certifications || [],
    });
  };

  const handleSubmit = () => {
    let errorList: any = {};
    const validateConfiguration = () => {
      let requiredFields = ["name", "color"];
      let _errors: any = {};
      requiredFields?.forEach((field: string) => {
        if (!formValues?.configuration?.[field]) {
          _errors[field] = "Required";
        }
      });
      errorList.configuration = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        configuration: _errors,
      }));
    };
    const validateBio = () => {
      let requiredFields = ["first_name", "last_name", "email"];
      let _errors: any = {};
      requiredFields?.forEach((field: string) => {
        if (!formValues?.bio?.[field]) {
          _errors[field] = "Required";
        }
      });
      errorList.bio = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        bio: _errors,
      }));
    };
    const validateEducation = () => {
      let requiredFields = [
        "degree",
        "field_of_study",
        "university",
        "start_date",
        "end_date",
      ];
      let _errors: any = [];
      if (isEmpty(formValues?.education)) {
        errorList.education = true;
        setSectionErrors((prevState: any) => ({
          ...prevState,
          education: true,
        }));
        return;
      }
      formValues?.education?.forEach((item: any, index: number) => {
        let errors: any = {};
        requiredFields?.forEach((field: string) => {
          if (!item?.[field]) {
            errors[field] = "Required";
          } else if (
            field.includes("date") &&
            !dayjs(item?.[field])?.isValid()
          ) {
            errors[field] = "Invalid Date";
          }
        });
        !isEmpty(errors) && _errors.push(errors);
      });
      errorList.education = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        education: _errors,
      }));
    };
    const validateExperience = () => {
      let requiredFields = [
        "company_name",
        "role",
        "location",
        "start_date",
        "end_date",
      ];
      let _errors: any = [];
      if (isEmpty(formValues?.experience)) {
        errorList.experience = true;
        setSectionErrors((prevState: any) => ({
          ...prevState,
          experience: true,
        }));
        return;
      }
      formValues?.experience?.forEach((item: any, index: number) => {
        let errors: any = {};
        requiredFields?.forEach((field: string) => {
          if (!item?.[field]) {
            errors[field] = "Required";
          } else if (
            field.includes("date") &&
            !dayjs(item?.[field])?.isValid()
          ) {
            errors[field] = "Invalid Date";
          }
        });
        !isEmpty(errors) && _errors.push(errors);
      });
      errorList.experience = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        experience: _errors,
      }));
    };
    const validateProjects = () => {
      let requiredFields = [
        "title",
        "description",
        "status",
        "start_date",
        "end_date",
      ];
      let _errors: any = [];
      if (isEmpty(formValues?.projects)) {
        errorList.projects = true;
        setSectionErrors((prevState: any) => ({
          ...prevState,
          projects: true,
        }));
        return;
      }
      formValues?.projects?.forEach((item: any, index: number) => {
        let errors: any = {};
        requiredFields?.forEach((field: string) => {
          if (!item?.[field]) {
            errors[field] = "Required";
          } else if (
            field.includes("date") &&
            !dayjs(item?.[field])?.isValid()
          ) {
            errors[field] = "Invalid Date";
          }
        });
        !isEmpty(errors) && _errors.push(errors);
      });
      errorList.projects = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        projects: _errors,
      }));
    };
    const validateSkills = () => {
      let requiredFields = ["name", "rating"];
      let _errors: any = [];
      if (isEmpty(formValues?.skills)) {
        errorList.skills = true;
        setSectionErrors((prevState: any) => ({
          ...prevState,
          skills: true,
        }));
        return;
      }
      formValues?.skills?.forEach((item: any, index: number) => {
        let errors: any = {};
        requiredFields?.forEach((field: string) => {
          if (!item?.[field]) {
            errors[field] = "Required";
          }
        });
        !isEmpty(errors) && _errors.push(errors);
      });
      errorList.skills = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        skills: _errors,
      }));
    };
    const validateCertifications = () => {
      let requiredFields = [
        "title",
        "issuer",
        "issue_date",
        "verification_link",
      ];
      let _errors: any = [];
      if (isEmpty(formValues?.certifications)) {
        errorList.certifications = true;
        setSectionErrors((prevState: any) => ({
          ...prevState,
          certifications: true,
        }));
        return;
      }
      formValues?.certifications?.forEach((item: any, index: number) => {
        let errors: any = {};
        requiredFields?.forEach((field: string) => {
          if (!item?.[field]) {
            errors[field] = "Required";
          } else if (
            field.includes("date") &&
            !dayjs(item?.[field])?.isValid()
          ) {
            errors[field] = "Invalid Date";
          }
        });
        !isEmpty(errors) && _errors.push(errors);
      });
      errorList.certifications = _errors;
      setSectionErrors((prevState: any) => ({
        ...prevState,
        certifications: _errors,
      }));
    };
    validateConfiguration();
    validateBio();
    validateEducation();
    validateExperience();
    validateProjects();
    validateSkills();
    validateCertifications();
    if (!!Object.values(errorList).some((item) => !isEmpty(item))) {
      showError("Please fill all required fields");
      return;
    }
    const payload = {
      configuration: formValues.configuration,
      bio: formValues.bio,
      education: formValues.education,
      experience: formValues.experience,
      projects: formValues.projects,
      skills: formValues.skills,
      certifications: formValues.certifications,
      resume: formValues?.resume?.resume || "",
    };
    const url = isEdit
      ? `/api/profile/portfolio/${portfolioId}/edit`
      : `/api/profile/portfolio/${location?.state?.user?._id}/create`;
    const method = isEdit ? PUT : POST;
    method(url, payload)
      ?.then((res) => {
        showSuccess(res?.data?.resultMessage?.en);
        navigate("/profile");
      })
      .finally(() => {});
  };

  return (
    <Box sx={{ width: onMobile ? "100%" : "70%", margin: "auto", padding: 1 }}>
      <Stack
        sx={{
          justifyContent: "space-between",
          height: "calc(100vh - 100px)",
        }}
      >
        <Box
          sx={{
            height: "6%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h6">
            {isEdit ? "Update Portfolio" : "Create Portfolio"}
          </Typography>
          <Box>
            <Button
              label="Back to Profile"
              onClick={() => navigate("/profile")}
            />
            {activeTab !== "Certifications" && (
              <Button
                label={isEdit ? "Update" : "Create"}
                onClick={handleSubmit}
              />
            )}
          </Box>
        </Box>
        <Box sx={{ height: "94%", width: "100%" }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              paddingTop: 1,
              display: "flex",
              justifyContent: "space-between",
              ...(onMobile && {
                flexDirection: "column",
                justifyContent: "flex-start",
              }),
            }}
          >
            {onMobile ? (
              <Fragment>
                <SelectField
                  variant="filled"
                  id="portfolio-sections-tabs"
                  label="Sections"
                  value={activeTab}
                  onChange={(e: any) => setActiveTab(e?.target?.value)}
                  options={sectionOrder}
                />
                <Divider sx={{ marginY: 1 }} />
              </Fragment>
            ) : (
              <Box sx={{ width: sidebarWidth }}>
                <List>
                  {sectionOrder.map((ins: any, index: number) => (
                    <ListItem
                      key={ins?.label}
                      disablePadding
                      sx={{
                        borderRight: "1px solid #e0e0e0",
                        ...(activeTab === ins?.value && {
                          borderTop: "1px solid #e0e0e0",
                          borderBottom: "1px solid #e0e0e0",
                          borderRight: "none !important",
                        }),
                      }}
                    >
                      <ListItemButton
                        selected={activeTab === ins?.value}
                        onClick={() => setActiveTab(ins?.value)}
                      >
                        <ListItemIcon>
                          <Icon name={ins?.icon} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "center",
                              }}
                            >
                              <Typography>{ins?.label}</Typography>
                              {!isEmpty(sectionErrors?.[ins?.key]) && (
                                <Icon
                                  name="error"
                                  sx={{ color: "red", marginLeft: 1 }}
                                />
                              )}
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            <Box
              sx={{
                width: `calc(100% - ${sidebarWidth})`,
                overflowY: "scroll",
                paddingY: 1,
                paddingLeft: 3,
                marginTop: 1,
                ...(onMobile && {
                  width: "100%",
                  height: "100%",
                  paddingX: 0,
                }),
              }}
            >
              {sectionOrder.map((ins: any, index: number) => {
                const { component: Component } = ins;
                if (activeTab === ins?.value) {
                  return (
                    <Component
                      key={ins?.key}
                      sectionId={ins?.key}
                      sectionValues={formValues?.[ins?.key]}
                      handleSubmit={handleSubmit}
                      isEdit={isEdit}
                      saveValues={(values: any) =>
                        setFormValues((prevState: any) => ({
                          ...prevState,
                          [ins?.key]: values,
                        }))
                      }
                      next={
                        index !== sectionOrder.length - 1
                          ? () => setActiveTab(sectionOrder[index + 1]?.value)
                          : null
                      }
                      prev={
                        index !== 0
                          ? () => setActiveTab(sectionOrder[index - 1]?.value)
                          : null
                      }
                    />
                  );
                }
                return null;
              })}
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PortfolioForm;
