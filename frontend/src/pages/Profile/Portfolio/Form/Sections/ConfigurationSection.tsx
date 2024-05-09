//Author: Hatim Patrawala

import { Box, FormHelperText, Grid, Skeleton } from "@mui/material";
import { Button, InputField } from "components";
import { ErrorMessage, Form, Formik } from "formik";
import { useOnMobile } from "hooks";
import { MuiColorInput } from "mui-color-input";
import React, { useEffect, useState } from "react";
import { isEmpty } from "utils/helpers";

type Props = {
  sectionId: string;
  sectionValues: any;
  saveValues: Function;
  next: Function;
  prev: Function;
};

const formConfig = {
  name: "",
  color: "",
};

const sectionId = "configuration";

const ConfigurationSection = ({
  sectionValues,
  saveValues,
  next,
  prev,
}: Props) => {
  const onMobile = useOnMobile();
  const handleValidation = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.color) {
      errors.color = "Required";
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

  const handleSave = (values: any, validate: Function) => {
    saveValues(values);
    validate();
  };

  return (
    <Formik
      initialValues={formValues}
      enableReinitialize
      validate={handleValidation}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        setValues,
        errors,
        getFieldProps,
        handleSubmit,
        validateForm,
      }: any) => (
        <Form>
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
              <InputField
                id="configuration-name"
                sx={{ width: onMobile ? "100%" : "50%" }}
                label="Portfolio Name"
                isError={!!errors?.name}
                errorText={errors?.name || ""}
                {...getFieldProps("name")}
              />
              <MuiColorInput
                id="configuration-color"
                label="Theme color"
                required={true}
                error={!!errors?.color}
                sx={{ width: onMobile ? "100%" : "50%", marginTop: 3 }}
                name="color"
                {...getFieldProps("color")}
                onChange={(color: any) =>
                  setValues({ ...values, color: color })
                }
              />
              <FormHelperText error={!!errors?.color}>
                {errors?.color}
              </FormHelperText>
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    marginTop: 2,
                    border: `.1px solid ${values?.color}`,
                    borderRadius: "10px",
                    padding: 2,
                    maxWidth: "50%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "space-between",
                    ...(onMobile && {
                      maxWidth: "100%",
                      height: "200px",
                    }),
                  }}
                >
                  <Skeleton
                    sx={{
                      width: "30%",
                      height: "100%",
                      background: values?.color,
                    }}
                    variant="rectangular"
                    animation={false}
                  />
                  <Box
                    sx={{
                      width: "65%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Skeleton variant="rectangular" height={"13%"} />
                    <Skeleton variant="rectangular" height={"13%"} />
                    <Skeleton variant="rectangular" height={"13%"} />
                    <Skeleton variant="rectangular" height={"13%"} />
                    <Skeleton variant="rectangular" height={"13%"} />
                  </Box>
                </Box>
              </Box>
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
                <Button onClick={() => handleSave(values, validateForm)}>
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
        </Form>
      )}
    </Formik>
  );
};

export default ConfigurationSection;
