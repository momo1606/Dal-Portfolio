//Author: Hatim Patrawala

import { Box, Grid } from "@mui/material";
import { Button, InputField, SelectField } from "components";
import { ErrorMessage, FieldArray, Form, Formik } from "formik";
import React, { Fragment, useEffect } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
  next: Function;
  prev: Function;
};

const formConfig: any = {
  name: "",
  rating: "",
};

const sectionId = "skills";

const SkillSection = ({ sectionValues, saveValues, next, prev }: Props) => {
  const handleValidation = (values: any) => {
    let errors: any = {};
    values?.skills?.forEach((item: any, index: number) => {
      if (!item?.name) {
        errors[`skills.${index}.name`] = "Required";
      }
      if (!item?.rating) {
        errors[`skills.${index}.rating`] = "Required";
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
      validate={handleValidation}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setValues, errors, getFieldProps, validateForm }) => (
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
              <FieldArray name={sectionId}>
                {({ insert, remove, push, replace }) => (
                  <Fragment>
                    {values?.[sectionId]?.map((ins: any, index: number) => (
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
                              id: `${sectionId}-name-${index}`,
                              name: `${sectionId}.${index}.name`,
                              label: "Skill Name",
                              type: "text",
                              required: true,
                              value: ins?.name,
                              component: InputField,
                            },
                            {
                              id: `${sectionId}-rating-${index}`,
                              name: `${sectionId}.${index}.rating`,
                              label: "Rating",
                              options: [1, 2, 3, 4, 5]?.map((item: any) => ({
                                label: item,
                                value: item,
                              })),
                              required: true,
                              value: ins?.rating,
                              component: SelectField,
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
                                  error={!!errors?.[rest?.name]}
                                  fullWidth
                                  {...getFieldProps(rest?.name)}
                                  {...(rest?.name?.includes("rating") && {
                                    slotProps: {
                                      select: {
                                        helperText: errors?.[rest?.name],
                                        required: rest?.required,
                                        error: !!errors?.[rest?.name],
                                      },
                                    },
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
                      label="Add Skill"
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

export default SkillSection;
