import React, { useEffect } from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Loader2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useCreateMutation } from "../../../store/endpoints/contact.endpoint";

const FormTool = () => {

  const initialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [fun,{data,isError,isLoading}] = useCreateMutation();

  const validationSchema = yup.object({
    name: yup
    .string()
    .required("name field is required")
    .min(3, "name must be 3 length"),
    email: yup
      .string()
      .required("email field is required")
      .email("that should be email format"),
    phone: yup
      .string()
      .required("phone field is required")
      .min(9, "that should be vaild phone number")
      .max(11, "that should be vaild phone number"),
    address: yup.string().required("Address Is Required"),
  });

  
  const handleSubmit =  (value) => {
    // await fun(value);
    // action.reset();
    fun(value);
  };

  useEffect(() => {
    
    console.log("Hello world",data,isError,isLoading);
  },[data,isError,isLoading])


  return (
    <div className="h-full">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validationSchema}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {({ handleBlur, handleChange, values, isSubmitting }) => (
          <>
            <Form className="flex flex-col gap-4 h-full justify-between pb-10">
              <div className=" space-y-5 mt-5">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.phone}
                    onChange={handleChange}
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="phone"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    onBlur={handleBlur}
                    value={values.address}
                    onChange={handleChange}
                    type="address"
                    name="address"
                    id="address"
                  />
                  <ErrorMessage
                    className="text-danger text-sm"
                    component={"p"}
                    name="address"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                {/* <SheetClose ref={CloseRef} className="w-full mt-3">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    type="button"
                    className="w-full text-basic border-basic"
                  >
                    Cancel
                    {isSubmitting && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </SheetClose> */}
                      <Button
                    variant="outline"
                    // onClick={handleClose}
                    disabled={isSubmitting}
                    type="button"
                    className="w-full text-basic border-basic"
                  >
                    Cancel
                    {isSubmitting && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-basic mt-3"
                >
                  Create
                  {isSubmitting && (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormTool;
