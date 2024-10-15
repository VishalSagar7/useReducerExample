import React from 'react'

const TeamList = ({ state, dispatch }) => {

    // console.log("teamList",state);
    const { teamList } = state;

    const handleRemoveBtn = (item) => {
        
        dispatch({
            type: "Remove_Item",
            payload : item,
        })
        
    }

    return (
        <div className='h-auto w-[300px] border shadow-lg rounded p-[10px] rounded'>
            <h1 className='text-lg font-semibold text-center'>Team list</h1>
            <table className='w-full mt-[10px] border-collapse'>
                <thead>
                    <tr>
                        <th className=' px-[10px] py-[5px] text-left'>Name</th>
                        <th className=' px-[10px] py-[5px] text-left'>ID</th>
                        <th className=' px-[10px] py-[5px] text-right'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teamList?.map((item) => (
                        <tr key={item.id}>
                            <td className=' px-[10px] py-[5px]'>{item.first_name}</td>
                            <td className=' px-[10px] py-[5px]'>{item.id}</td>
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
        </div>
    )
}

export default TeamList;
