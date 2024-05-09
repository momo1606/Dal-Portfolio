//Author: Hatim Patrawala

import {
  Box,
  Grid,
  Stack,
  Avatar,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

// import { useToast } from "hooks";
import { Button, InputField, SelectField } from "components";
import { isEmail, isEmpty } from "utils/helpers";
import { DatePicker } from "@mui/x-date-pickers";
import { Form, Formik } from "formik";
import { POST } from "utils/axios";
import dayjs from "dayjs";
import { useToast } from "hooks";

interface Props {
  user: any;
  isOpen: boolean;
  onSave: Function;
  handleClose: () => void;
}

const UserEditModal: FC<Props> = ({
  isOpen,
  handleClose,
  onSave,
  user,
}: Props) => {
  const { showSuccess } = useToast();
  const [formValues, setFormValues] = useState<any>(null);

  useEffect(() => {
    if (!isEmpty(user)) {
      setFormValues({
        first_name: user?.profile?.first_name,
        last_name: user?.profile?.last_name,
        username: user?.username,
        email: user?.email,
        gender: user?.profile?.gender,
        dob: user?.profile?.dob,
      });
    }
  }, [user]);

  const handleValidation = (values: any) => {
    const errors: any = {};
    if (isEmpty(values.first_name)) {
      errors.first_name = "Required";
    }
    if (isEmpty(values.last_name)) {
      errors.last_name = "Required";
    }
    if (isEmpty(values.username)) {
      errors.username = "Required";
    }
    if (isEmpty(values.email)) {
      errors.email = "Required";
    } else if (!isEmail(values.email)) {
      errors.email = "Invalid email address";
    }
    if (isEmpty(values.gender)) {
      errors.gender = "Required";
    }
    if (!dayjs(values?.dob)?.isValid()) {
      errors.dob = "Invalid Date";
    }

    return errors;
  };

  const handleSave = (values: any) => {
    const payload: any = {
      username: values.username,
      email: values.email,
      profile: {
        first_name: values.first_name,
        last_name: values.last_name,
        gender: values.gender,
        dob: values?.dob,
      },
    };
    POST(`/api/profile/user/${user?._id}/update`, payload)
      .then((res) => {
        showSuccess(res?.data?.resultMessage?.en);
      })
      .finally(() => {
        onSave();
        handleClose();
      });
  };

  return (
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
        <Dialog
          open={isOpen}
          onClose={handleClose}
          fullWidth={true}
          scroll="paper"
        >
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
  );
};

export default UserEditModal;
