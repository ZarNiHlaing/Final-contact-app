import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignUpMutation } from "../../store/endpoints/auth.endpoints";
import {useToast} from "../../components/ui/use-toast" ;
import AuthGuard from "../../components/Guard/Auth.Guard";

const SignupPage = () => {
  const { toast } = useToast()
  const [fun,data] = useSignUpMutation();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "name should be longer than 2 letter"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be 8 letter"),
    password_confirmation: yup
      .string()
      .required("Password confirm is Required")
      .oneOf(
        [yup.ref("password"), null],
        "Password Confirm should be match with password"
      ),
  });

  const handleSubmit = async (value) => {
   await fun(value);
  };

  console.log(data);

  useEffect(() => {
    if (data.error){
      toast({
        title:"Auth error from server",
        description: data.error.data.message,      });
    }
  },[data])

  return (
    <AuthGuard>
      <div className="w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className="basis-3/4 p-5">
        <CardHeader className="flex flex-row justify-between mb-5">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className="text-basic">
          <Link to="/">  Already have an account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className="flex flex-col gap-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="name"
                  />
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="password"
                  />
                  <Label htmlFor="password_confirmation">Password Confirm</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                    onChange={handleChange}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="confirm_password"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="password_confirmation"
                  />

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-basic w-full text-white mt-3 rounded"
                  >
                    Sign Up {isSubmitting && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
    </AuthGuard>
  );
};

export default SignupPage;
