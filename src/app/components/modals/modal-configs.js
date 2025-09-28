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

  // --- Card Modals ---
    AddNewCard: {
    title: 'Add card',
    actionButtonText: 'Add',
    initialValues: {
      title: '',
      description: '',
      priority: 'Without', // Default color
      deadline: new Date().toISOString(),
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string(),
      priority: Yup.string().required(),
      deadline: Yup.date().required(),
    }),
    fields: [
      { name: 'title', type: 'text', placeholder: 'Title' },
      { name: 'description', type: 'textarea', placeholder: 'Description' },
      { name: 'priority', type: 'priority-picker' },
      { name: 'deadline', type: 'date-picker' },
    ],
  },
  EditCard: {
    title: 'Edit card',
    actionButtonText: 'Edit',
    initialValues: { /* This will be passed via props */ },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string(),
      priority: Yup.string().required(),
      deadline: Yup.date().required(),
    }),
    fields: [
      { name: 'title', type: 'text', placeholder: 'Title' },
      { name: 'description', type: 'textarea', placeholder: 'Description' },
      { name: 'priority', type: 'priority-picker' },
      { name: 'deadline', type: 'date-picker' },
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
    fields: [{ name: 'title', label: 'Title', type: 'text', placeholder: 'Title' }],
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
    NeedHelp: {
    title: 'Need help',
    actionButtonText: 'Send',
    initialValues: {
      email: '',
      comment: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      comment: Yup.string().min(10, 'Must be at least 10 characters').required('Comment is required'),
    }),
    fields: [
      { name: 'email', type: 'email', placeholder: 'Email address' },
      { name: 'comment', type: 'textarea', placeholder: 'Comment' },
    ],
  },
    // Add more modal configs as needed
     EditProfile: {
    title: 'Edit profile',
    actionButtonText: 'Send',
    initialValues: {
      avatar: null, // Can be a File object or a URL string
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed(),
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      // Password is optional: if the user types, it must be at least 6 chars
      password: Yup.string().min(6, 'Password must be at least 6 characters'),
    }),
    fields: [
      { name: 'avatar', type: 'avatar-uploader' },
      { name: 'name', type: 'text', placeholder: 'Name' },
      { name: 'email', type: 'email', placeholder: 'Email' },
      { name: 'password', type: 'password', placeholder: 'Password' },
    ],
  },
};
