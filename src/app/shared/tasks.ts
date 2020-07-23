export const TASKS=[
  {
    taskName:"task1",
    subtasks:[
      {
        subtaskName:"subtask1",
        responsible:"person1",
        assignmentDate:new Date(2020,1,1),
        completionDate:new Date(2020,1,7),
        status:"complete",
        priority:1
      },
      {
        subtaskName:"subtask2",
        responsible:"person2",
        assignmentDate:new Date(2020,1,7),
        completionDate:new Date(2020,1,14),
        status:"complete",
        priority:3
      },
      {
        subtaskName:"subtask3",
        responsible:"person3",
        assignmentDate:new Date(2020,1,14),
        completionDate:new Date(2020,1,31),
        status:"issues",
        priority:5
      }
    ]
  },
  {
    taskName:"task2",
    subtasks:[
      {
        subtaskName:"subtask1",
        responsible:"person1",
        assignmentDate:new Date(2020,2,1),
        completionDate:new Date(2020,2,5),
        status:"inprogress",
        priority:3
      },
      {
        subtaskName:"subtask2",
        responsible:"person2",
        assignmentDate:new Date(2020,2,5),
        completionDate:new Date(2020,2,12),
        status:"issues",
        priority:2
      },
      {
        subtaskName:"subtask3",
        responsible:"person3",
        assignmentDate:new Date(2020,2,12),
        completionDate:new Date(2020,2,20),
        status:"inprogress",
        priority:3
      },
      {
        subtaskName:"subtask4",
        responsible:"person4",
        assignmentDate:new Date(2020,2,20),
        completionDate:new Date(2020,2,30),
        status:"inprogress",
        priority:5
      }
    ]
  },{
    taskName:"task3",
    subtasks:[
      {
        subtaskName:"subtask1",
        responsible:"person1",
        assignmentDate:new Date(2020,3,1),
        completionDate:new Date(2020,3,8),
        status:"incomplete",
        priority:3
      },
      {
        subtaskName:"subtask2",
        responsible:"person2",
        assignmentDate:new Date(2020,3,8),
        completionDate:new Date(2020,3,21),
        status:"incomplete",
        priority:5
      }
    ]
  }
];
