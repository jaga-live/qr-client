import { Card, Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { CONFIG_TYPE, LOGIN_AUTH_PROPS } from "@/model";
import { CustomButton, RecursiveContainer } from "@/components";

const LoginPageWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  place-items: center;
  background-color: lightblue;
`;

const LoginCardWrapper = styled(Card)(
  ({ theme }) => `
    width: 90%;
    max-width: 600px;
    height: fit-content;
    min-height: 200px;
    padding: 30px;
    display: flex;
    .image {
        display: block;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("/img/scan-qr.jpg");
        width: 50%;
    }
    ${theme.breakpoints.down("sm")} {
        .image {
            display: none;
        }
    }
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
`
);

export const LoginContent: React.FC = () => {
  const handleSubmit = async (data: LOGIN_AUTH_PROPS) => {
    console.log(data);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  const fields: CONFIG_TYPE = [
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
  ];

  return (
    <LoginPageWrapper container>
      <LoginCardWrapper>
        <Box className="image" />
        <Box className="login-form">
          <Typography variant="h4">Welcome</Typography>
          <RecursiveContainer config={fields} formik={formik} />
          <CustomButton
            fullWidth
            type="submit"
            sx={{ borderRadius: "3px", mt: 1 }}
          >
            Login
          </CustomButton>
        </Box>
      </LoginCardWrapper>
    </LoginPageWrapper>
  );
};
