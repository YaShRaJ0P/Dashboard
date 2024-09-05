"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const AddUserWithModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
  });

  const submitForm = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    if (formData.image) {
      data.append("image", formData.image);
    }

    // axios.post("apiRequest", data).catch((err) => {
    //   console.error("Form submission error: ", err);
    // });

    setIsShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setIsShowModal(true)}
        className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-sm shadow-sm flex items-center gap-3 max-md:text-sm"
      >
        <FaPlus />
        Add User
      </button>

      {isShowModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New User
            </h2>
            <form
              encType="multipart/form-data"
              onSubmit={submitForm}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter user's name"
                />
              </div>

              <div>
                <label
                  htmlFor="EmailID"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="EmailID"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter user's email"
                />
              </div>

              <div>
                <label
                  htmlFor="Image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  name="Image"
                  id="Image"
                  onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : null;
                    setFormData({ ...formData, image: file });
                  }}
                  className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsShowModal(false);
                    setFormData({ name: "", email: "", image: null });
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-sm transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-sm transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
