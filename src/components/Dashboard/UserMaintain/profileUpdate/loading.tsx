import Image from "next/image";

const UpdateProfileLoading = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col  min-h-screen justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <div>
                <Image
                  src=""
                  alt="Shoes"
                  height={0}
                  width={0}
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-4 shadow-lg"
                />
              </div>
            </div>
            <div className="mt-5">
              <input
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                accept="image/*"
              />
              <div>
                <button
                  type="submit"
                  className="bg-rose-500 w-full rounded-md py-3 text-white"
                >
                
                </button>
              </div>
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
         
            </h2>
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="sr-only">
                    Age
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Age"
                  />
                </div>
                <div>
                  <label htmlFor="bio" className="sr-only">
                    Bio
                  </label>
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Bio"
                  />
                </div>
              </div>

              <div>
                <button className="bg-rose-500 w-full rounded-md py-3 text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileLoading;