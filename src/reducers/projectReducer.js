const initSate = {
  projects: [
    {id: 1, title: "Project 1", content: "blah blah blah blah"},
    {id: 2, title: "Project 2", content: "blah blah blah blah"},
    {id: 3, title: "Project 3", content: "blah blah blah blah"},
  ]
};
const projectReducer = (state = initSate, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;
    default: return state;
  }
};

export default projectReducer;
