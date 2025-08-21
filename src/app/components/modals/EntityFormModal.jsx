'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { IoMdClose } from 'react-icons/io'
import Button from './ModalButton' // Assuming you have this from a previous step
import IconPicker from './IconPicker'
import BackgroundPicker from './BackgroundPicker'

// A small helper for the text input to match the new design
const TextInput = ({ field, form, ...props }) => (
  <input
    {...field}
    {...props}
    className="
      h-[49px] w-full rounded-lg border border-[#BEDBB0] bg-[#1F1F1F]
      px-4 text-sm text-white shadow-inner
      focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500/50
    "
  />
);

export default function EntityFormModal({ config, initialValues, onSubmit, onClose }) {
  const { title, actionButtonText, validationSchema, fields } = config

  const handleFormSubmit = async (values, { setSubmitting }) => {
    await onSubmit(values)
    setSubmitting(false)
    onClose()
  }

  return (
    // Updated container styles to match Figma
    <div className="w-[350px] rounded-lg border border-green-200/50 bg-[#151515] p-6 font-poppins">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <IoMdClose size={24} />
        </button>
      </div>

      <Formik
        initialValues={initialValues || config.initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-6">
              {/* --- DYNAMIC FIELD RENDERING --- */}
              {fields.map((field) => {
                switch (field.type) {
                  case 'icon-picker':
                    return <IconPicker key={field.name} name={field.name} />
                  case 'background-picker':
                    return <BackgroundPicker key={field.name} name={field.name} />
                  case 'text':
                  default:
                    return (
                      <div key={field.name}>
                        <label className="mb-2 block text-sm font-medium text-white">
                          {field.label}
                        </label>
                        <Field
                          name={field.name}
                          placeholder={field.placeholder}
                          component={TextInput}
                        />
                        <div className="mt-1 text-xs text-red-400">
                          <ErrorMessage name={field.name} />
                        </div>
                      </div>
                    )
                }
              })}
            </div>

            <div className="mt-10">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : actionButtonText}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}