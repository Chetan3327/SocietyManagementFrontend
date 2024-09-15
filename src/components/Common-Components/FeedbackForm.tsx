import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SmileIcon, MehIcon, FrownIcon } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const schema = z.object({
  smileyRating: z.string().nonempty('Rating is required'),
  Feedback: z.string().optional(),
});

const FeedbackForm = () => {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  type FormData = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/feedback`, data, {
      // const response = await axios.post(`http://localhost:8000/api/v1/feedback`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
      setSubmit(true);
      reset();
      setTimeout(() => setSubmit(false), 4000); // Hide message after 4 seconds
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">Let us know your thoughts</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Rating Field */}
        <div className="mb-6">
          <label className="block text-md font-medium mb-2">Give your rating</label>
          <Controller
            name="smileyRating"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className="flex justify-around mt-2">
                <button
                  type="button"
                  className="text-2xl"
                  onClick={() => field.onChange('happy')}
                >
                  <SmileIcon
                    className={`cursor-pointer ${
                      field.value === 'happy' ? 'text-green-500' : 'text-black-900'
                    }`}
                  />
                </button>
                <button
                  type="button"
                  className="text-2xl"
                  onClick={() => field.onChange('neutral')}
                >
                  <MehIcon
                    className={`cursor-pointer ${
                      field.value === 'neutral' ? 'text-yellow-500' : 'text-black-900'
                    }`}
                  />
                </button>
                <button
                  type="button"
                  className="text-2xl"
                  onClick={() => field.onChange('sad')}
                >
                  <FrownIcon
                    className={`cursor-pointer ${
                      field.value === 'sad' ? 'text-red-500' : 'text-black-900'
                    }`}
                  />
                </button>
              </div>
            )}
          />
          {errors.smileyRating && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.smileyRating.message}
            </span>
          )}
        </div>

        {/* Comments Field */}
        <div className="mb-6">
          <label className="block text-md font-medium mb-2">Additional Comments</label>
          <Controller
            name="Feedback"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                placeholder="Please provide your valuable comments"
                {...field}
                className="w-full px-3 py-2 h-20 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            )}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 text-xl bg-blue-600 text-white rounded-md transition-transform duration-200 ease-out ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Success Message */}
      {submit && (
        <div className="mt-6 text-center text-lg text-green-600">
          Thank you for your valuable feedback!
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
