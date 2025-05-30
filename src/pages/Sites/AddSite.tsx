// import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SitePayload } from './interface';
import { useCreateSiteMutation } from './redux/api';
import Modal from '../../components/Modal';

export default function AddSite(props: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { isOpen, onClose, onSuccess } = props;
  const [onSubmit, { isLoading, isSuccess: SuccessAdd, reset: resetMutation }] =
    useCreateSiteMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SitePayload>();

  async function handleFormSubmit(data: SitePayload) {
    await onSubmit(data);
  }
  useEffect(() => {
    if (SuccessAdd) {
      onSuccess();
      onClose();
      resetMutation()
    }
  }, [SuccessAdd, onClose, onSuccess]);

  const provinceOptions = [
    'EASTERN',
    'NORTHERN',
    'SOUTHERN',
    'WESTERN',
    'KIGALI',
  ];

  function handleClose() {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="relative">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white p-2">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-theme-light dark:text-white">
                Add Site
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="updateProductModal"
                onClick={handleClose}
              >
                <IoCloseOutline />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Site name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Site name is required',
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    // placeholder="Site name"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="province"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Province
                  </label>
                  <div className="relative">
                    <select
                      className="w-full rounded-lg border border-stroke bg-gray-50 p-2.5 text-gray-900 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      defaultValue=""
                      {...register('province', {
                        required: {
                          value: true,
                          message: 'Province is required',
                        },
                      })}
                    >
                      <option value="" disabled defaultValue={""} hidden>
                        Select province
                      </option>
                      {provinceOptions.map((province, idx) => (
                        <option key={idx} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.province && (
                    <div className="text-red-500">
                      {errors.province.message}
                    </div>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="district"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    District
                  </label>
                  <input
                    type="text"
                    id="district"
                    {...register('district', {
                      required: {
                        value: true,
                        message: 'district is required',
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                  {errors.district && (
                    <div className="text-red-500">
                      {errors.district.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="text-red-600 inline-flex items-center hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? 'Adding...' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}
