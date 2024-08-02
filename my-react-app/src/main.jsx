import React from 'react'
import ReactDOM from 'react-dom/client'

function Main()
{
  return(
    <h2>openheimer</h2>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <Main />

    </div>
  </React.StrictMode>

)

const anotherreact = (
  <a href="https://google.com">Visit Google</a>
)
//this will override the upper createdRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <Main />
        {anotherreact}
    </div>
  </React.StrictMode>

)

const reactele = React.createElement(
  //first of all tagname
   'a' ,
   //then setAttributes set it empty if have no prop but its compulsury to write down
  {href:'https://google.com' ,target:'_blank'},
  //then add innertext
  'click me'
)


//this will override the upper createdRoot
ReactDOM.createRoot(document.getElementById('root')).render(
reactele
)

//Evaluate expression 
const name = "Abdul Hanan"

function Myname()
{
  return(
    <h2>My name is {name}</h2> //the curly bracs in which var name is written are evaluated expression we can not directly write down code in it like if else statements because at the end all the code is beign converted into a object and this name var is also transferef into that object but at the very end of the created object by react but the main point i why we can not write statements? answer is because we can not write statements into objects because at the end of the day its an object ...
  )
}
//this will override the upper createdRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <Myname />

    </div>
  </React.StrictMode>

)
