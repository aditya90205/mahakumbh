import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as XLSX from "xlsx";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const Form = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    // Save data to Excel
    const worksheet = XLSX.utils.json_to_sheet([data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
    XLSX.writeFile(workbook, "UserFormData.xlsx");

    // Show success toast
    toast.success("Your form is submitted successfully!");

    // Reset the form
    reset();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 lg:ml-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" w-full p-8 grid grid-cols-1 md:grid-cols-2 gap-8  ">
        {/* Left Section */}
        <div className=" lg:w-[80%]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            We are here to assist you with your spiritual needs. Reach out for
            inquiries about our pujas, chadhava, or prasad delivery services.
          </p>
          <p className="text-lg font-medium">Contact</p>
          <p className="text-gray-700">+91 98123 45678</p>
          <p className="text-lg font-medium mt-4">Support</p>
          <p className="text-gray-700">support@divineconnect.com</p>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4  lg:w-[80%]"
        >
          <div>
            <label className="block text-gray-700 mb-1">
              Enter your first name*
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    {...field}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your first name here"
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Enter your email address*
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <input
                    {...field}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your email address here"
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Your message or inquiry*
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <textarea
                    {...field}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Type your message here"
                  />
                  {error && (
                    <p className="text-red-500 text-sm">{error.message}</p>
                  )}
                </>
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
          >
            Submit your request now
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Form;




