import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formval = z.object({
  SocietyName: z.string().nonempty("Field is required"),
  HeadName: z.string().nonempty("Name is required"),
  Enrollment: z.string().length(11, "Invalid Input"),
  Section: z.string().nonempty("Section is required"),
  email: z.string().nonempty("Email is required"),
  Branch: z.string().nonempty("Enter a branch"),
  Describe: z.string().nonempty("About is required"),
  Phone: z.string().nonempty("Phone no. is required"),
  Category: z.string().nonempty("Select any one category"),
});

const SocietyForm = () => {
  type formData = z.infer<typeof formval>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(formval),
  });

  const onSubmit = (data: formData) => {
    console.log(data);
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium doloremque iure laborum neque quasi illo in reiciendis
              fugit assumenda eius dignissimos vel, architecto, vero quos quia.
              Cum exercitationem in vero? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi voluptas quibusdam odit autem fuga impedit
              quis labore deserunt omnis illum molestias minus excepturi
              explicabo facere odio suscipit reprehenderit consequuntur ab
              necessitatibus molestiae quia eos quae, iusto ratione. Totam
              molestiae sunt maiores fugiat, deleniti nulla eum vitae accusamus
              aperiam autem consequatur!
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
                      <label htmlFor="branch" className="mb-2 font-bold block">
                        Date of Registration
                      </label>
                      <input
                        type="text"
                        {...register("Branch")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Branch..."
                      />
                      {errors.Branch && (
                        <span className="text-red-500 block">
                          {errors.Branch.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 font-bold block">
                        Society Image
                      </label>
                      <input
                        type="text"
                        {...register("email")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Email..."
                      />
                      {errors.email && (
                        <span className="text-red-500 block">
                          {errors.email.message}
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
                    <div>
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
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 font-bold block">
                        Society Head Mobile
                      </label>
                      <input
                        type="text"
                        {...register("Phone")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Phone No...."
                      />
                      {errors.Phone && (
                        <span className="text-red-500 block">
                          {errors.Phone.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 font-bold block">
                        Society Email
                      </label>
                      <input
                        type="text"
                        {...register("Phone")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Phone No...."
                      />
                      {errors.Phone && (
                        <span className="text-red-500 block">
                          {errors.Phone.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 font-bold block">
                        Society Website
                      </label>
                      <input
                        type="text"
                        {...register("Phone")}
                        className="w-full border py-1 px-2 block rounded-lg"
                        placeholder="Enter Society Website...."
                      />
                      {errors.Phone && (
                        <span className="text-red-500 block">
                          {errors.Phone.message}
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
                      className="my-2 bg-orange-600 text-white font-bold w-40 rounded-full text-center py-1"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocietyForm;
