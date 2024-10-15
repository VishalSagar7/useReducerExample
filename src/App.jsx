import { useReducer, useState } from 'react'
import EmployeeList from './Components/EmployeeList'
import TeamList from './Components/TeamList'
import employeeslist from './Components/employeelist.json'

// console.log(employeeslist);

function App() {

  const initialStates = {
    employeeList: employeeslist,
    teamList: [],
  }

  const reducerFn = (state, action) => {
    if (action.type === "Add_Item") {
      return {
        ...state,
        teamList : [...state.teamList , action.payload],
      }
    }
    else if (action.type === "Remove_Item") {
      const { teamList } = state;
      const newTeamList = teamList.filter((item) => item.id != action.payload.id);

      return {
        ...state,
        teamList : newTeamList,
      }
    }
  }

  const [state, dispatch] = useReducer(reducerFn, initialStates);


  return (
    <div className='flex justify-center gap-[100px] mt-[50px]'>
      <EmployeeList state={state} dispatch={dispatch} />
      <TeamList state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
