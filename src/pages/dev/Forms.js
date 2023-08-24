import React from 'react';

const Forms = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6 items-center">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6 items-center">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
          >
            Password
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="password"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6 items-center">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 ml-auto"
          >
            Email
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:py-6 items-center">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 ml-auto"
          >
            Password
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="password"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="****"
              />
            </div>
          </div>
        </div>
        <div className="">
          <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5 ml-auto"
          >
            Password
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="****"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
