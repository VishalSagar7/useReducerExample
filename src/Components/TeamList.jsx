import React from 'react'

const TeamList = ({ state, dispatch }) => {

    // console.log("teamList",state);
    const { teamList } = state;
    const { avgAge } = state

    const handleRemoveBtn = (item) => {
        
        dispatch({
            type: "Remove_Item",
            payload : item,
        })
        
    }

    const sortByAgeBtn = () => {
        dispatch({
            type : 'SortBy_age'
        })
    }

    return (
        <div className='h-auto w-[350px] border shadow-lg rounded p-[10px] '>
            <h1 className='text-lg font-semibold text-center'>Team list</h1>
            <button
                onClick={()=>sortByAgeBtn()}
                className='bg-sky-500 text-white block ml-auto px-[10px] py-[2px] rounded'
            >Sort by age
            </button>
            <table className='w-full mt-[10px] border-collapse'>
                <thead>
                    <tr>
                        <th className=' px-[10px] py-[5px] text-left'>Name</th>
                        <th className=' px-[10px] py-[5px] text-left'>ID</th>
                        <th className=' px-[10px] py-[5px] text-left'>Age</th>
                        <th className=' px-[10px] py-[5px] text-right'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teamList?.map((item) => (
                        <tr key={item.id}>
                            <td className=' px-[10px] py-[5px]'>{item.first_name}</td>
                            <td className=' px-[10px] py-[5px]'>{item.id}</td>
                            <td className=' px-[10px] py-[5px]'>{item.age}</td>
                            <td className=' px-[10px] py-[5px] text-right'>
                                <button
                                    onClick={()=>handleRemoveBtn(item)}
                                    className='bg-sky-500 text-white rounded px-[10px] py-[5px] hover:bg-sky-400'>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1 className='text-2xl font-semibold mt-[10px]'>Average age : <span>{ avgAge }</span></h1>
        </div>
    )
}

export default TeamList;
