import * as Yup from 'yup'

// Centralized configuration for all form-based modals

export const modalConfigs = {
  // --- Board Modals ---
    AddNewBoard: {
    title: 'New board',
    actionButtonText: 'Create',
    initialValues: {
      title: '',
      icon: 'puzzle', // Default selected icon
      background: 'default', // Default background
    },
    validationSchema: Yup.object({
      title: Yup.string().max(30, 'Must be 30 characters or less').required('Title is required'),
      icon: Yup.string().required(),
      background: Yup.string().required(),
    }),
    // Define the fields with their types
    fields: [
      { name: 'title', label: 'Title', type: 'text', placeholder: 'Title' },
      { name: 'icon', type: 'icon-picker' },
      { name: 'background', type: 'background-picker' },
    ],
  },
  EditBoard: {
    title: 'Edit board',
    actionButtonText: 'Save Changes',
    // initialValues will be passed via props
    validationSchema: Yup.object({
      title: Yup.string().max(30, 'Must be 30 characters or less').required('Title is required'),
    }),
    fields: [{ name: 'title', label: 'Title', type: 'text' }],
  },

  // --- Card Modals ---
  AddNewCard: {
    title: 'Add card',
    actionButtonText: 'Add Card',
    initialValues: { title: '', description: '' },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string(),
    }),
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'description', label: 'Description', as: 'textarea' },
    ],
  },
  EditCard: {
    title: 'Edit card',
    actionButtonText: 'Save Changes',
    // initialValues will be passed via props
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string(),
    }),
    fields: [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'description', label: 'Description', as: 'textarea' },
    ],
  },
  
  // --- Column Modals ---
  AddNewColumn: {
    title: 'Add column',
    actionButtonText: 'Add Column',
    initialValues: { title: '' },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
    }),
    fields: [{ name: 'title', label: 'Title', type: 'text' }],
  },
    EditColumn: {
        title: 'Edit column',
        actionButtonText: 'Save Changes',
        // initialValues will be passed via props
        validationSchema: Yup.object({
        title: Yup.string().required('Title is required'),
        }),
        fields: [{ name: 'title', label: 'Title', type: 'text' }],
    },
};