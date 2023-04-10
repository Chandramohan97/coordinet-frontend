// import { Default } from "react-toastify/dist/utils";
import { v4 as uuid } from "uuid";

export const boardData = [
    {
      id:uuid(),
      title : 'New',
      cards:[
          { 
              id : uuid(),
              label : "Card 1", 
              commentList :{},
            //   status : Board.title,
              Priority : "",
              dueDate : "",
              assignee : ""
          },
          { 
              id :uuid(),
              label : "Card 2",
              commentList : {},
            //   status : this.title,
              Priority : "",
              dueDate : "",
              assignee : ""
          }
      ]
  },  
  {
    id:uuid(),
    title : 'In Progress',
    cards:[
        { 
            id :uuid(),
            label : "Card 3", 
            commentList : {},
            // status : this.title,
            Priority : "",
            dueDate : "",
            assignee : ""
        },
        { 
            id : uuid(),
            label : "Card 4",
            commentList : {},
            // status : this.title,
            Priority : "",
            dueDate : "",          
            assignee : ""
        }
    ]
},  

  
]   

