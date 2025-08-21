export const mockDashboards = [
  { id: 'board-1', name: "Personal Board", columns: ['col-1', 'col-2', 'col-3'] },
  { id: 'board-2', name: "Work Projects", columns: ['col-4', 'col-5'] },
  { id: 'board-3', name: "Team Tasks", columns: ['col-6'] },
  { id: 'board-4', name: "Extra Board", columns: [] },
];

export const mockColumns = [
  { id: 'col-1', name: "To Do", cards: ['card-1', 'card-2', 'card-10', 'card-11'] },
  { id: 'col-2', name: "In Progress", cards: ['card-3'] },
  { id: 'col-3', name: "Done", cards: ['card-4'] },
  { id: 'col-4', name: "Backlog", cards: ['card-5'] },
  { id: 'col-5', name: "Review", cards: ['card-6'] },
  { id: 'col-6', name: "Testing", cards: [] },
];

export const mockCards = [
  {
    id: 'card-1',
    title: 'The Watch Spot Design',
    description: 'Create a visually stunning and eye-catching watch design...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-2',
    title: 'Research and Analysis',
    description: 'Conduct in-depth research and analysis on the project topic...',
    priority: 'Medium',
    deadline: '2023-12-06',
  },
  {
    id: 'card-3',
    title: 'Concept Development',
    description: 'Brainstorm and develop creative concepts and ideas...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-4',
    title: 'Design and Prototyping SoYummy',
    description: 'Create visually appealing and functional design prototypes...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-5',
    title: 'Content Creation',
    description: 'Generate engaging and persuasive content for project deliverables...',
    priority: 'High',
    deadline: '2023-12-06',
  },
  {
    id: 'card-6',
    title: 'Quiz Creation',
    description: 'Create engaging and interactive quizzes using Kahoot’s interface...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-7',
    title: 'Reporting and Analytics',
    description: 'Utilize TaskPro’s reporting and analytics capabilities...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-8',
    title: 'Publication of the Project',
    description: 'Review the project materials, including text and images...',
    priority: 'Low',
    deadline: '2023-12-06',
  },
  {
    id: 'card-9',
    title: "Students' Projects",
    description: 'Review and finalize the students’ project submissions...',
    priority: 'Medium',
    deadline: '2023-12-06',
  },
    {
        id: 'card-10',
        title: 'Project Management',
        description: 'Oversee the project’s progress, ensuring it stays on track...',
        priority: 'High',
        deadline: '2023-12-06',
    },
    {
        id: 'card-11',
        title: 'Feedback and Iteration',
        description: 'Gather feedback from stakeholders and make necessary adjustments...',
        priority: 'Medium',
        deadline: '2023-12-06',
    },
];