import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/pages/welcome/header';
import FrontLayout from '@/components/FrontLayout';

export default function Schools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/v1/schools');
        setSchools(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const schoolElement = schools.map((school) => {
    return (
      <div
        key={school.id}
        className="bg-cover bg-center shadow-lg hover:drop-shadow-2xl hover:cursor-pointer shadow-gray-600 mx-4 my-6 sm:mx-0 sm:w-1/2 md:w-1/3 lg:w-1/4"
        style={{
          backgroundImage: school.logo
            ? `url(${school.logo})`
            : `url(/images/head-659652_1280.png)`,
          height: '250px',
          width: '250px',
        }}
      >
        <div className="bg-black bg-opacity-30 h-full p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-semibold font-alkatra text-white mb-2">
            {school.name}
          </h3>
          <p className="text-gray-200 mb-2">
            <strong>Motto:</strong> {school.motto}
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Address:</strong> {school.address}
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Phone:</strong> {school.phone_number}
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Location:</strong> {school.location}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <FrontLayout>
        <div className="bg-gray-100 min-h-screen py-8">
          <div className="container mx-auto">
            <div className="flex mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                {schoolElement}
              </div>
            </div>
          </div>
        </div>
      </FrontLayout>
    </>
  );
}
