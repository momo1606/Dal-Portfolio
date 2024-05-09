//Author: Hatim Patrawala

import { Box, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Button, InputField } from "components";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import { isError, snakeCase } from "lodash";
import React, { Fragment, useEffect } from "react";
import { isEmpty } from "utils/helpers";
import dayjs from "dayjs";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
  next: Function;
  prev: Function;
};

const formConfig = {
  degree: "",
  field_of_study: "",
  university: "",
  start_date: "",
  end_date: "",
  grade_obtained: "",
  max_grade: "",
  description: "",
};

const sectionId = "education";

const EducationSection = ({ sectionValues, saveValues, next, prev }: Props) => {
  const handleValidation = (values: any) => {
    let errors: any = {};
    values?.education?.forEach((item: any, index: number) => {
      if (!item?.degree) {
        errors[`education.${index}.degree`] = "Required";
      }
      if (!item?.field_of_study) {
        errors[`education.${index}.field_of_study`] = "Required";
      }
      if (!item?.university) {
        errors[`education.${index}.university`] = "Required";
      }
      if (isEmpty(item?.start_date)) {
        errors[`education.${index}.start_date`] = "Required";
      }
      if (!dayjs(item?.start_date)?.isValid()) {
        errors[`education.${index}.start_date`] = "Invalid Date";
      }
      if (isEmpty(item.end_date)) {
        errors[`education.${index}.end_date`] = "Required";
      }
      if (!dayjs(item?.end_date)?.isValid()) {
        errors[`education.${index}.end_date`] = "Invalid Date";
      }
    });

    return errors;
  };

  const [formValues, setFormValues] = React.useState<any>({
    [sectionId]: [formConfig],
  });

  useEffect(() => {
    if (!isEmpty(sectionValues)) {
      setFormValues({ [sectionId]: sectionValues });
    } else {
      setFormValues({ [sectionId]: [formConfig] });
    }
  }, [sectionValues]);

  return (
    <Formik
      initialValues={formValues}
      enableReinitialize
      validate={handleValidation}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, getFieldProps, validateForm }: any) => (
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
            <Form>
              <FieldArray name="education">
                {({ insert, remove, push, replace }) => (
                  <Fragment>
                    {values?.education?.map((ins: any, index: number) => (
                      <Box key={index} sx={{ marginBottom: 3 }}>
                        <Grid
                          sx={{ width: "100%" }}
                          container
                          columns={{ xs: 1, sm: 1, md: 2, xl: 3 }}
                          columnSpacing={{ xs: 1, sm: 2, md: 2, xl: 3 }}
                          rowSpacing={{ xs: 3, sm: 3, md: 3, xl: 3 }}
                        >
                          {[
                            {
                              id: `education-degree-${index}`,
                              name: `education.${index}.degree`,
                              label: "Degree",
                              type: "text",
                              required: true,
                              value: ins?.degree,
                              component: InputField,
                            },
                            {
                              id: `education-field-of-study-${index}`,
                              name: `education.${index}.field_of_study`,
                              label: "Field of Study",
                              type: "text",
                              required: true,
                              value: ins?.field_of_study,
                              component: InputField,
                            },
                            {
                              id: `education-university-${index}`,
                              name: `education.${index}.university`,
                              label: "University",
                              type: "text",
                              required: true,
                              value: ins?.university,
                              component: InputField,
                            },
                            {
                              id: `education-start-date-${index}`,
                              name: `education.${index}.start_date`,
                              label: "Start Date",
                              type: "text",
                              required: true,
                              value: ins?.start_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `education-end-date-${index}`,
                              name: `education.${index}.end_date`,
                              label: "End Date",
                              type: "text",
                              required: true,
                              value: ins?.end_date || "",
                              component: DatePicker,
                              sx: { width: "100%" },
                            },
                            {
                              id: `education-grade-obtained-${index}`,
                              name: `education.${index}.grade_obtained`,
                              label: "Grade Obtained",
                              type: "text",
                              value: ins?.grade_obtained,
                              component: InputField,
                            },
                            {
                              id: `education-max-grade-${index}`,
                              name: `education.${index}.max_grade`,
                              label: "Max Grade",
                              type: "text",
                              value: ins?.max_grade,
                              component: InputField,
                            },
                            {
                              id: `education-description-${index}`,
                              name: `education.${index}.description`,
                              label: "Description",
                              type: "text",
                              value: ins?.description,
                              component: InputField,
                            },
                          ].map((item: any, innerIndex: number) => {
                            const { component: Component, ...rest } = item;
                            return (
                              <Grid
                                item
                                xs={1}
                                md={1}
                                key={`input-item-${innerIndex}`}
                              >
                                <Component
                                  {...rest}
                                  errorText={errors?.[rest?.name]}
                                  isError={!!errors?.[rest?.name]}
                                  fullWidth
                                  {...getFieldProps(rest?.name)}
                                  {...(rest?.name?.includes("date") && {
                                    slotProps: {
                                      textField: {
                                        helperText: errors?.[rest?.name],
                                        required: rest?.required,
                                        error: !!errors?.[rest?.name],
                                      },
                                    },
                                    // @ts-ignore
                                    value: dayjs(rest?.value),
                                    onChange: (value: any, context: any) =>
                                      replace(index, {
                                        ...ins,
                                        [snakeCase(rest?.label)]: value,
                                        // [snakeCase(rest?.label)]: {
                                        //   value: value,
                                        //   context: context,
                                        // },
                                      }),
                                  })}
                                />
                              </Grid>
                            );
                          })}
                        </Grid>
                        <Button
                          sx={{ marginTop: 3 }}
                          label="Remove"
                          onClick={() => remove(index)}
                        />
                      </Box>
                    ))}
                    <Button
                      sx={{ float: "right" }}
                      label="Add Education"
                      onClick={() => push(formConfig)}
                    />
                  </Fragment>
                )}
              </FieldArray>
            </Form>
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
                  saveValues(values?.[sectionId]);
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
                  saveValues(values?.[sectionId]);
                  validateForm();
                }}
              >
                Save
              </Button>
              <Button
                onClick={async () => {
                  saveValues(values?.[sectionId]);
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

export default EducationSection;
