export const schemas = `
  extend type Query {
    getTask: Task
  }
`
export const getTask = () => {
  console.log('1x');
  
  return ({
    id: '1',
    name: 'Task for demo getTask'
  });
}

export default {
  resolvers: {
    Query: {
      getTask
    }
  },
  schemas
}
