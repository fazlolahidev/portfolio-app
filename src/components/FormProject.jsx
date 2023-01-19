import React from "react";
import { Formik, Form, Field } from "formik";

//* Data *//
import { SignupSchema } from "../constant/schema";
import TextareaField from "./Formik/TextareaField";
import TextInput from "./Formik/TextInput";

const FormProject = () => (
  <div className="md:col-span-3">
    <h1 className="w-[80%] mx-auto text-center mb-5">Write me your porject</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col gap-5  w-[80%] mx-auto">
        <div className='h-[100px] flex flex-col gap-1' >
          <TextInput
            label="name"
            name="name"
            type="text"
            placeholder="insert your name"
          />
        </div>

        <div className='h-[100px] flex flex-col gap-1' >
          <TextInput
            label="email"
            name="email"
            type="email"
            placeholder="insert your email"
          />
        </div>

        <div className='h-[200px]  flex flex-col gap-1' >
          <TextareaField
            label="Project"
            name="message"
            rows="6"
            placeholder="Write all details about your project here ..."
          />
        </div>

        <div className="">
          <button type="submit" className="border bg-black rounded-lg px-5 py-2 text-white" >Submit</button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default FormProject;
