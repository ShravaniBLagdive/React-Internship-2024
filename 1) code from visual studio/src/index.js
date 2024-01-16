import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // import Lifecycle_in_functional_code this file for runn code 
// import Lifecycle_in_functional_code from './1_react-functional-lifecycle/Lifecycle_in_functional_code';

// // import parent an d child file from 2_pass_val-par-to-child to run code
//import Parent from './2_pass_val-par-to-child/Parent';

// // import parent an d child file from 3_pass_val-Child-to-parent to run code
// import Parentt from './3_pass_val-child-to-par/Parentt';


// // import Hookuseref file from 4_UseRef_hook to run code
// import Hookuseref from './4_UseRef_hook/Hookuseref';


// // import UseMemo Hook  file from 5_UseMemo_Hook to run code
// import UseMemo from './5_UseMemo_Hook/UseMemoHook';

// // import RenderingEX  file from 6_Conditional_Rendering to run code
//  import RenderingEX from './6_Conditional_Rendering/RenderingEX'


// // import LifeCycle  file from 7_simple_life_cycle
 import LifeCycle from './7_Simple_life_cycle_explanation/LifeCycle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /* <App /> */}


    {/* import Lifecycle_in_functional_code component */ }
    {/* <Lifecycle_in_functional_code /> */}


    {/* import Parent component  from 2_pass_val-par-to-Child*/ }
   {/* <Parent /> */}


   {/* import Parent component from 3_pass_val-child-to-par */ }
   {/* <Parentt />  */}

  {/* import Hookuseref component from 4_Useref_hook */ }
  {/*  <Hookuseref /> */}


  {/* import UseMemo component from 5_UseMemo_hook */ }
  {/* <UseMemo /> */}
   

  {/* import RenderingEX component from 6_Conditional_Rendering */ }
  {/* < RenderingEX /> */}


  {/* import LifeCycle component from 7_simple_life_cycle */ }
  <LifeCycle />

  </React.StrictMode>
);

 
reportWebVitals();
