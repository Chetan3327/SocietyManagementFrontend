import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState} from "react";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const formval = z.object({
  SocietyName: z.string().nonempty("Field is required"),
  HeadName: z.string().nonempty("Name is required"),
  DateOfRegistration : z.string().nonempty("Select Date"),
  SocietyImage: z.string().url("Invalid URL for society image"),
  Category: z.string().nonempty("Select any one category"),
  MobileNo: z.string().nonempty("MobileNo is required"),
  Email: z.string().nonempty("Email is required"),
  Website: z.string().url("Enter the Society's website URL"),
  Describe: z.string().nonempty("About is required"),
});

const SocietyForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  type formData = z.infer<typeof formval>;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(formval)
  })

  const onSubmit = async (data: formData) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/createSociety`, data, {
      // const response = await axios.post(`http://localhost:8000/api/v1/createSociety`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Success:", response.data);
      setIsSubmitted(true);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <>
      <div className="relative w-full mx-auto">
        <img
          className="h-screen md:h-80 w-full object-cover"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="BPIT img"
        />
        <div className="absolute inset-0 bg-black opacity-70 flex justify-center items-center flex-col">
          <h2 className="font-bold text-xl lg:text-5xl text-white">
            Create Your Legacy
          </h2>
          <p className="text-zinc-300 text-md lg:text-xl mx-auto">
            Register Your Society Today and Lead the Way in Innovation
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        <div className="w-10/12 max-w-4xl">
          <h2 className="font-bold text-xl lg:text-2xl text-center mb-4">
            Register Your New Society and Transform Campus Life
          </h2>
          <hr className="mb-6" />
          <div className="flex flex-col md:flex-row gap-10 mb-8">
            <p className="text-justify">
            Welcome to the College Society Registration Page! To register your new society and get started on campus, you need to prepare a comprehensive proposal 
            outlining the mission and goals of your society, as well as planned events and activities.
            Your application will be reviewed, and you might need to make some changes based on feedback. Once approved, your society will be officially recognized,
            and you will gain access to college resources and support.
            </p>
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="college"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="my-6">
            <h1 className="text-center bg-muted mb-3 py-2">
              Fill the form below with Society and Society Head details
            </h1>
            <Card>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full max-w-screen-md flex flex-col items-center gap-y-4">
                    <h2 className="text-3xl font-bold text-center text-green-800">
                      Thank you!
                    </h2>
                    <p className="text-center text-green-700 mb-4">
                      Your Joining Request has been submitted. The Requested Society will get back to you soon.
                    </p>
                  </div>
                ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex flex-col space-y-4"
                >
                  <div className="flex flex-col space-y-4">

                    <div>
                      <label htmlFor="name" className="mb-2 font-bold block">
                        Society Name
                      </label>
                      <input
                        type="text"
                        {...register("SocietyName")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Society's Name..."
                      />
                      {errors.SocietyName && (
                        <span className="text-red-500 block">
                          {errors.SocietyName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="headname"
                        className="mb-2 font-bold block"
                      >
                        Society Head Name
                      </label>
                      <input
                        type="text"
                        {...register("HeadName")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter full Name..."
                      />
                      {errors.HeadName && (
                        <span className="text-red-500 block">
                          {errors.HeadName.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="dateOfRegistration" className="mb-2 font-bold block">
                        Date of Registration
                      </label>
                      <input
                        type="date"
                        {...register("DateOfRegistration")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Select Date"
                      />
                      {errors.DateOfRegistration && (
                        <span className="text-red-500 block">
                          {errors.DateOfRegistration.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="SocietyImage" className="mb-2 font-bold block">
                        Society Image
                      </label>
                      <input
                        type="text"
                        {...register("SocietyImage")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Society's image link..."
                      />
                      {errors.SocietyImage && (
                        <span className="text-red-500 block">
                          {errors.SocietyImage.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="mb-2 font-bold block"
                      >
                        Category
                      </label>
                      <select
                        {...register("Category")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        defaultValue=""
                      >
                        <option value="">Choose Category</option>
                        <option value="Technical">Technical</option>
                        <option value="Non-Technical">Non-Technical</option>
                      </select>
                      {errors.Category && (
                        <span className="text-red-500 block">
                          {errors.Category.message}
                        </span>
                      )}
                    </div>

                    {/* <div>
                      <label
                        htmlFor="enrollmentno"
                        className="mb-2 font-bold block"
                      >
                        Marking Scheme
                      </label>
                      <input
                        type="text"
                        {...register("Enrollment")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Enrollment No..."
                      />
                      {errors.Enrollment && (
                        <span className="text-red-500 block">
                          {errors.Enrollment.message}
                        </span>
                      )}
                    </div> */}
                    <div>
                      <label htmlFor="phone" className="mb-2 font-bold block">
                        Society Head Mobile No.
                      </label>
                      <input
                        type="text"
                        {...register("MobileNo")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Phone No...."
                      />
                      {errors.MobileNo && (
                        <span className="text-red-500 block">
                          {errors.MobileNo.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 font-bold block">
                        Society Email
                      </label>
                      <input
                        type="text"
                        {...register("Email")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Phone No...."
                      />
                      {errors.Email && (
                        <span className="text-red-500 block">
                          {errors.Email.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 font-bold block">
                        Society Website
                      </label>
                      <input
                        type="text"
                        {...register("Website")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Society Website...."
                      />
                      {errors.Website && (
                        <span className="text-red-500 block">
                          {errors.Website.message}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <label htmlFor="about" className="mb-2 font-bold block">
                        Description of Society
                      </label>
                      <textarea
                        {...register("Describe")}
                        className="w-full h-full border p-2 block rounded-lg"
                        placeholder="Enter Society Details and Objectives"
                      />
                      {errors.Describe && (
                        <span className="text-red-500 block">
                          {errors.Describe.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <button
                      type="submit"
                      className="my-2 bg-orange-600 text-white font-bold w-40 rounded-full text-center py-1 transform transition-transform duration-200 ease-out hover:scale-105"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocietyForm;
