import { TaskProps } from '../components/Kanban/types'

export const tasks: TaskProps[] = [
  {
    id: '0ac9b2d4-d095-438d-b300-2b9e026211e9',
    name: 'Ticket1',
    tags: ['ANDROID', 'REACT'],
    status: 'BACKLOG',
    assignee: {
      id: '85416a6b-e075-4d85-914b-37b90f67d802',
      fullName: 'Grace Stone',
      email: 'gstone@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: '85416a6b-e075-4d85-914b-37b90f67d802',
      fullName: 'Grace Stone',
      email: 'gstone@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 1,
    dueDate: '2022-03-13T04:47:19.889Z',
    pointEstimate: '8',
    createdAt: '2022-03-08T15:25:28.820Z',
  },
  {
    id: '535d84cf-c83f-4038-a881-58943f35687f',
    name: 'Ticket3',
    tags: ['ANDROID'],
    status: 'BACKLOG',
    assignee: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 2,
    dueDate: '2022-03-10T04:47:19.889Z',
    pointEstimate: '1',
    createdAt: '2022-03-08T15:25:28.819Z',
  },
  {
    id: '7b1c0640-d577-4b11-bf07-38ba7f310bf3',
    name: 'Ticket5',
    tags: ['RAILS', 'NODE_JS'],
    status: 'BACKLOG',
    assignee: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 3,
    dueDate: '2022-03-20T04:47:19.889Z',
    pointEstimate: '8',
    createdAt: '2022-03-08T15:25:28.819Z',
  },
  {
    id: 'a9ae26ce-472b-46fe-9d2a-00aedb0aad82',
    name: 'Ticket8',
    tags: ['RAILS'],
    status: 'BACKLOG',
    assignee: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 4,
    dueDate: '2022-03-10T04:47:19.889Z',
    pointEstimate: '8',
    createdAt: '2022-03-08T15:25:28.820Z',
  },
  {
    id: '06734b6e-b6db-4cbc-8b7d-a540d907ca9f',
    name: 'Ticket7',
    tags: ['REACT', 'NODE_JS'],
    status: 'TODO',
    assignee: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 1,
    dueDate: '2022-03-11T04:47:19.889Z',
    pointEstimate: '2',
    createdAt: '2022-03-08T15:25:28.820Z',
  },
  {
    id: '834cc8c3-0cda-47fa-aec0-309becce936b',
    name: 'Ticket4',
    tags: ['REACT'],
    status: 'IN_PROGRESS',
    assignee: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: 'c454b689-4168-4561-add9-8826e54e5bb8',
      fullName: 'Jhon Doe',
      email: 'jdoe@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 1,
    dueDate: '2022-03-16T04:47:19.889Z',
    pointEstimate: '0',
    createdAt: '2022-03-08T15:25:28.819Z',
  },
  {
    id: '50a9ee4e-02c9-47d8-b4e7-277f2867f061',
    name: 'Ticket6',
    tags: ['ANDROID', 'IOS'],
    status: 'IN_PROGRESS',
    assignee: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: '501d3641-99a4-4618-8a0b-3010e5870302',
      fullName: 'Romeo Barnes',
      email: 'rbarnes@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 2,
    dueDate: '2022-03-12T04:47:19.889Z',
    pointEstimate: '2',
    createdAt: '2022-03-08T15:25:28.820Z',
  },
  {
    id: '33b099c8-14bf-411f-8bd7-a345f4f3c584',
    name: 'Ticket2',
    tags: ['ANDROID', 'RAILS'],
    status: 'CANCELLED',
    assignee: {
      id: '85416a6b-e075-4d85-914b-37b90f67d802',
      fullName: 'Grace Stone',
      email: 'gstone@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    creator: {
      id: '85416a6b-e075-4d85-914b-37b90f67d802',
      fullName: 'Grace Stone',
      email: 'gstone@fake.com',
      type: 'CANDIDATE',
      avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      createdAt: '2021-12-08T15:50:00.072Z',
      updatedAt: '2021-12-08T15:50:00.073Z',
    },
    position: 1,
    dueDate: '2022-03-14T04:47:19.889Z',
    pointEstimate: '4',
    createdAt: '2022-03-08T15:25:28.819Z',
  },
]