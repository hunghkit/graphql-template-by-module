
import Task from './task';
import getTask from './getTask';

export const schemas = [
  Task.schemas,
  getTask.schemas,
];

export const resolvers = [
  getTask.resolvers,
];
