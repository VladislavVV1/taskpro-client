'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { IoMdClose } from 'react-icons/io'
import Button from './ModalButton' // Assuming you have this from a previous step
import IconPicker from './IconPicker'
import BackgroundPicker from './BackgroundPicker'
import LabelColorPicker from './LabelPicker'
import DatePickerField from './DatePicker.jsx'
import AvatarUploader from './AvatarUploader'
import PasswordInput from './PasswordInput'
// A small helper for the text input to match the new design
const TextInput = ({ field, form, ...props }) => (
  <input
    {...field}
    {...props}
    className="
      h-[49px] w-full rounded-lg border border-[var(--modal-input-border)] bg-[var(--modal-bg)]
      px-4 text-sm text-[var(--modal-title)] shadow-inner
      focus:border-[var(--modal-button-bg-hover)] focus:outline-none focus:[var(--modal-button-bg-hover)]
    "
  />
);

const TextAreaInput = ({ field, form, ...props }) => (
  <textarea
    {...field}
    {...props}
    rows="5" // Set a default height for the textarea
    className="
      w-full rounded-lg border border-[var(--modal-input-border)] bg-[var(--modal-bg)]
      p-4 text-sm text-[var(--modal-title)] shadow-inner resize-none
      focus:border-[var(--modal-button-bg-hover)] focus:outline-none  focus:[var(--modal-button-bg-hover)]
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
    <div className="w-full rounded-lg border border-[var(--modal-border)]/50 bg-[var(--modal-bg)] p-6 font-poppins">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-medium text-[var(--modal-title)]">{title}</h2>
        <button onClick={onClose} className="text-[var(--modal-close)] hover:text-[var(--modal-close-hover)]">
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
            <div className="flex flex-col gap-[14px]">
              {/* --- DYNAMIC FIELD RENDERING --- */}
              {fields.map((field) => {
                switch (field.type) {
                    case 'textarea':
                        return (
                        <div key={field.name}>
                            <Field
                            name={field.name}
                            placeholder={field.placeholder}
                            component={TextAreaInput}
                            />
                            <div className="mt-1 text-xs text-red-400">
                            <ErrorMessage name={field.name} />
                            </div>
                        </div>
                        );
                  case 'icon-picker':
                    return <IconPicker key={field.name} name={field.name} />
                  case 'background-picker':
                    return <BackgroundPicker key={field.name} name={field.name} />
                    case 'priority-picker':
                    return <LabelColorPicker key={field.name} name={field.name} />;
                  case 'avatar-uploader':
                    return <AvatarUploader key={field.name} name={field.name} />;
                  case 'password':
                    return <PasswordInput key={field.name} name={field.name} placeholder={field.placeholder} />;
                  case 'date-picker':
                    return <DatePickerField key={field.name} name={field.name} />;
                    case 'text':
                  default:
                    return (
                      <div key={field.name}>
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

            <div className="mt-[24px]">
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