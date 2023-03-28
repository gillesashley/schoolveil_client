export default function Services() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Here are some of the services we provide:
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Student Management
                  </div>
                  <p className="text-gray-700 text-base">
                    Our student management system helps you keep track of your
                    students&apos; progress and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Teachers Management
                  </div>
                  <p className="text-gray-700 text-base">
                    Our teachers management system helps you manage your
                    teachers&apos; schedules and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Reports</div>
                  <p className="text-gray-700 text-base">
                    Our reporting system provides you with detailed reports on
                    your students&apos; and teachers&apos; performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Attendance Tracking
                  </div>
                  <p className="text-gray-700 text-base">
                    Our attendance tracking system helps you keep track of your
                    students&apos; attendance.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-6">
              <div className="bg-white shadow-lg rounded-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Timetable Management
                  </div>
                  <p className="text-gray-700 text-base">
                    Our timetable management system helps you manage your
                    school&apos;s class schedules and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
