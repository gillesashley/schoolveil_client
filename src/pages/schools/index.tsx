import { useEffect, useState } from 'react';
import axios from 'axios';

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
      <div key={school.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl font-semibold mb-4">{school.name}</h3>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {school.email}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Address:</strong> {school.address}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong> {school.phone_number}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Location:</strong> {school.location}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Status:</strong> {school.status}
        </p>
      </div>
    );
  });

  return (
    <>
      <h1>Schools</h1>
      {schoolElement}
    </>
  );
}
