import Link from 'next/link';

export default function About() {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/pexels-cdc-3992949.jpg')",
          paddingTop: '64px',
        }}
      >
        <div className="container mx-auto px-6 py-40 md:py-60">
          <h2 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-8">
            WELCOME TO{' '}
            <span className="text-blue-900 font-alkatra">SCHOOL VEIL</span>
          </h2>
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Unveiling the{' '}
            <span className="text-orange-500 font-alkatra">
              Beauty of Education
            </span>
          </h2>
          <div className="flex justify-center">
            <Link
              href="/schools/create"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full"
            >
              Create Your School
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
