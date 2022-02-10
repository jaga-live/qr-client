import { Guest } from "@/guard";
import { NextPage } from "next";
import { LoginContent } from "@/content/auth";

const Login: NextPage = () => {
  return <LoginContent />;
};

Login.getLayout = (page) => <Guest>{page}</Guest>;

export default Login;
