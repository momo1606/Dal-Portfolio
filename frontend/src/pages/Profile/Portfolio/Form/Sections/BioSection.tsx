//Author: Hatim Patrawala

import { Box, Grid } from "@mui/material";
import { Button, InputField } from "components";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
  next: Function;
  prev: Function;
};

const formConfig: any = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  about: "",
  github: "",
  linkedin: "",
  twitter: "",
  facebook: "",
  instagram: "",
  youtube: "",
  gscholar: "",
  other_url: "",
  photo_url: "",
};

const sectionId = "bio";

const BioSection = ({ sectionValues, saveValues, next, prev }: Props) => {
  const handleValidation = (values: any) => {
    const errors: any = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }
    if (!values.last_name) {
      errors.last_name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };

  const [formValues, setFormValues] = useState<any>(formConfig);

  useEffect(() => {
    if (!isEmpty(sectionValues)) {
      setFormValues(sectionValues);
    } else {
      setFormValues(formConfig);
    }
  }, [sectionValues]);

  return (
    <Formik
      initialValues={formValues}
      validate={handleValidation}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, getFieldProps, validateForm }) => (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ height: "90%", overflowY: "scroll", paddingY: 1 }}>
            <Grid
              sx={{ width: "100%" }}
              container
              columns={{ xs: 1, sm: 1, md: 2, xl: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 3 }}
              rowSpacing={{ xs: 3, sm: 3, md: 3, xl: 3 }}
            >
              {[
                {
                  id: "bio-first-name",
                  label: "First Name",
                  name: "first_name",
                  type: "text",
                  required: true,
                  value: values?.first_name,
                  component: InputField,
                },
                {
                  id: "bio-last-name",
                  label: "Last Name",
                  name: "last_name",
                  type: "text",
                  required: true,
                  value: values?.last_name,
                  component: InputField,
                },
                {
                  id: "bio-email",
                  label: "Email",
                  name: "email",
                  type: "email",
                  required: true,
                  value: values?.email,
                  component: InputField,
                },
                {
                  id: "bio-phone",
                  label: "Phone",
                  name: "phone",
                  type: "text",
                  required: false,
                  value: values?.phone,
                  component: InputField,
                },
                {
                  id: "bio-address",
                  label: "Address",
                  name: "address",
                  type: "text",
                  required: false,
                  value: values?.address,
                  component: InputField,
                },
                {
                  id: "bio-city",
                  label: "City",
                  name: "city",
                  type: "text",
                  required: false,
                  value: values?.city,
                  component: InputField,
                },
                {
                  id: "bio-country",
                  label: "Country",
                  name: "country",
                  type: "text",
                  required: false,
                  value: values?.country,
                  component: InputField,
                },
                {
                  id: "bio-about",
                  label: "About",
                  name: "about",
                  type: "text",
                  required: false,
                  value: values?.about,
                  component: InputField,
                },
                {
                  id: "bio-github",
                  label: "Github Url",
                  name: "github",
                  type: "text",
                  required: false,
                  value: values?.github,
                  component: InputField,
                },
                {
                  id: "bio-linkedin",
                  label: "Linkedin Url",
                  name: "linkedin",
                  type: "text",
                  required: false,
                  value: values?.linkedin,
                  component: InputField,
                },
                {
                  id: "bio-twitter",
                  label: "Twitter Url",
                  name: "twitter",
                  type: "text",
                  required: false,
                  value: values?.twitter,
                  component: InputField,
                },
                {
                  id: "bio-facebook",
                  label: "Facebook Url",
                  name: "facebook",
                  type: "text",
                  required: false,
                  value: values?.facebook,
                  component: InputField,
                },
                {
                  id: "bio-instagram",
                  label: "Instagram Url",
                  name: "instagram",
                  type: "text",
                  required: false,
                  value: values?.instagram,
                  component: InputField,
                },
                {
                  id: "bio-youtube",
                  label: "Youtube Url",
                  name: "youtube",
                  type: "text",
                  required: false,
                  value: values?.youtube,
                  component: InputField,
                },
                {
                  id: "bio-gscholar",
                  label: "Google Scholar Url",
                  name: "gscholar",
                  type: "text",
                  required: false,
                  value: values?.gscholar,
                  component: InputField,
                },
                {
                  id: "bio-other-url",
                  label: "Other URL",
                  name: "other_url",
                  type: "text",
                  required: false,
                  value: values?.other_url,
                  component: InputField,
                },
              ]?.map((input: any, index: number) => {
                const { component: Component, ...rest } = input;
                const error: any = errors?.[rest?.name.toString()] || "";
                return (
                  <Grid
                    sx={{ width: "100%" }}
                    item
                    xs={1}
                    md={1}
                    key={`input-item-${index}`}
                  >
                    <Component
                      {...rest}
                      errorText={error}
                      isError={!!error}
                      fullWidth
                      {...getFieldProps(rest?.name)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              height: "8%",
              paddingTop: 1,
              display: "flex",
              justifyContent: "space-between",
              // borderTop: "1px solid",
            }}
          >
            <Box>
              <Button
                onClick={() => {
                  saveValues(values);
                  prev();
                }}
                disabled={!prev}
              >
                Previous
              </Button>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  saveValues(values);
                  validateForm();
                }}
              >
                Save
              </Button>
              <Button
                onClick={async () => {
                  saveValues(values);
                  const _errors = await validateForm();
                  isEmpty(_errors) && next();
                }}
                disabled={!next}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default BioSection;
