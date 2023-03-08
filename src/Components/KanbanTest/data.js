import { v4 as uuid } from "uuid";
export const Board = [
    {
      id:uuid(),
      title : 'New',
      cards:[
          { 
              id : uuid(),
              label : "Card 1", 
              // assignee : "First card"
          },
          { 
              id :uuid(),
              label : "Card 2",
              // assignee : "Second card"
          }
      ]
  },  
  {
    id:uuid(),
    title : 'In Progress',
    cards:[
        { 
            id : uuid(),
            label : "Card 3", 
            // assignee : "First card"
        },
        { 
            id : uuid(),
            label : "Card 4",
            // assignee : "Second card"
        }
    ]
},  

  
]   