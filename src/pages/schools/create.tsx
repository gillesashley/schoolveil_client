import { useFormik } from 'formik';
import axios from 'axios';
import API_URL from '@/config/api';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import FrontLayout from '@/components/FrontLayout';

export default function CreateSchool() {
  // Create a validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    motto: Yup.string(),
    address: Yup.string(),
    phone_number: Yup.string()
      .min(10, 'Too Short1')
      .max(11, 'Too Long')
      .required(),
    email: Yup.string().email('Invalid email address').required('Required'),
    location: Yup.string().required(),
    logo: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      motto: '',
      address: '',
      phone_number: '',
      email: '',
      location: '',
      logo: '',
    },
    validationSchema: validationSchema, // add validationSchema

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('motto', values.motto);
      formData.append('address', values.address);
      formData.append('phone_number', values.phone_number);
      formData.append('email', values.email);
      formData.append('location', values.location);
      formData.append('logo', values.logo);
      try {
        const response = await axios.post(`${API_URL}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data); // Displaying school info for debugging purposes
        // Display success message
        await Swal.fire({
          icon: 'success',
          title: `Congratulations <span class="font-alkatra">${response.data.name}!</span>`,
          html:
            '<b class="text-md">Thank you for creating your school with us.</b><br>' +
            '<span class="text-red-800 text-lg font-bold">Visit your inbox for further instructions.</span>',
          showCloseButton: true,
        });
        resetForm();
      } catch (error) {
        console.error(error); // Error in console for debugging purposes
      }
    },
  });

  const resetForm = () => {
    formik.setValues({
      name: '',
      motto: '',
      email: '',
      address: '',
      phone_number: '',
      location: '',
      logo: '',
    });
  };

  return (
    <>
      <FrontLayout>
        <div className="my-28 py-2">
          <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
            <h1 className="my-10 text-4xl font-bold">Create Your School</h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                School Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : ''
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                School Motto
              </label>
              <input
                type="text"
                name="motto"
                id="motto"
                className={`
                  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                `}
                value={formik.values.motto}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone_number"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                className={`
                  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.phone_number && formik.errors.phone_number
                      ? 'border-red-500'
                      : ''
                  }
                `}
                value={formik.values.phone_number}
                onChange={formik.handleChange}
              />
              {formik.touched.phone_number && formik.errors.phone_number ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.phone_number}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={`
                  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : ''
                  }
                `}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className={`
                  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.location && formik.errors.location
                      ? 'border-red-500'
                      : ''
                  }
                `}
                value={formik.values.location}
                onChange={formik.handleChange}
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.location}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="logo"
                className="block text-gray-700 font-bold mb-2"
              >
                School Logo
              </label>
              <input
                type="file"
                name="logo"
                id="logo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={formik.handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create School
            </button>
          </form>
        </div>
      </FrontLayout>
    </>
  );
}
