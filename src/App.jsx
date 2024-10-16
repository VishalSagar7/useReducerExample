import { useReducer, useState } from 'react'
import EmployeeList from './Components/EmployeeList'
import TeamList from './Components/TeamList'
import employeeslist from './Components/employeelist.json'

// console.log(employeeslist);

function App() {

  const initialStates = {
    employeeList: employeeslist,
    teamList: [],
    avgAge : 0,
  }

  const reducerFn = (state, action) => {
    if (action.type === "Add_Item") {

      const {teamList} = state

      const AgeSum = teamList.reduce((acc, item) => acc + item.age, 0);
      console.log("average sum",AgeSum);
      
      const length = teamList.length;
      console.log("length",length);
      
      const newAvgAge = teamList.length === 0 ? action.payload.age : (AgeSum / length).toFixed(1);


      return {
        ...state,
        avgAge : newAvgAge,
        teamList : [...state.teamList , action.payload],
      }
    }
    else if (action.type === "Remove_Item") {
      const { teamList } = state;
      const newTeamList = teamList.filter((item) => item.id != action.payload.id);
      const AgeSum = newTeamList.reduce((acc, item) => acc + item.age, 0);
      const length = newTeamList.length;
      const newAvgAge = (AgeSum/length).toFixed(1);


      return {
        ...state,
        teamList: newTeamList,
        avgAge : newAvgAge,
      }
    }
    else if (action.type === "SortBy_age") {

      const { teamList } = state


      teamList.sort((a,b)=> a.age - b.age)
      return {
        ...state,
        teamList : teamList,
        
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
