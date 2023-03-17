// import React from 'react'
// import JoditEditor from 'jodit-react';
// import "jodit/build/jodit.min.css";
// import { Popover,PopoverTrigger } from '@chakra-ui/react';

// const Jodit = (props) => {

//   const [description,setDescrition] =React.useState("")
//   const editor = React.useRef(null);
  
//   console.log(description);
  
//   const config = {
//     placeholder:'Add Description',
    
//     width:"40vw",
//     maxWidth:"40vw",
//     buttons:[]    
//   }
//   return (
//             <JoditEditor
//             ref={editor}
//             config={config}
//             value={description}
//             onChange={(newDescription)=>setDescrition(newDescription.replace(/(<([^>]+)>)/gi, ''))}
//             // style={{border:none}}
//             />

//   )
// }

// export default Jodit