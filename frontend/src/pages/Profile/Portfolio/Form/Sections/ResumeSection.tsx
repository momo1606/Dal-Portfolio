//Author: Hatim Patrawala

import { Box, Grid } from "@mui/material";
import { Button, InputField } from "components";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
  next: Function;
  prev: Function;
};

const formConfig: any = {
  resume: "",
};

const sectionId = "resume";

const ResumeSection = ({ sectionValues, saveValues, next, prev }: Props) => {
  const handleValidation = (values: any) => {
    const errors: any = {};
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
                  id: `${sectionId}-resume`,
                  label: "Resume Url",
                  name: "resume",
                  type: "text",
                  required: true,
                  value: values?.resume,
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

export default ResumeSection;
