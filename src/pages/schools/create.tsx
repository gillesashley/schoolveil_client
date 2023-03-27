import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

export default function CreateSchool() {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone_number: '',
      email: '',
      location: '',
      logo: '',
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('address', values.address);
      formData.append('phone_number', values.phone_number);
      formData.append('email', values.email);
      formData.append('location', values.location);
      formData.append('logo', values.logo);
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/v1/schools/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(response.data);
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const resetForm = () => {
    formik.setValues({
      name: '',
      email: '',
      address: '',
      phone_number: '',
      location: '',
      logo: '',
    });
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            School Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.name}
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="logo" className="block text-gray-700 font-bold mb-2">
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
    </>
  );
}
