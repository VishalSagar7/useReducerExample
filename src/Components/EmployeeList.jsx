import React from 'react'

const EmployeeList = ({ state, dispatch }) => {

    const { employeeList } = state;

    const handleAddBtn = (item) => {
        
        dispatch({
            type: "Add_Item",
            payload : item,
        })
        
    }

    return (
        <div className='min-h-[400px] w-[300px] border shadow-lg rounded p-[10px]'>
            <h1 className='text-lg font-semibold text-center'>Employee list</h1>
            <table className='w-full mt-[10px] border-collapse'>
                <thead>
                    <tr>
                        <th className=' px-[10px] py-[5px] text-left'>Name</th>
                        <th className=' px-[10px] py-[5px] text-left'>ID</th>
                        <th className=' px-[10px] py-[5px] text-right'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map((item) => (
                        <tr key={item.id}>
                            <td className=' px-[10px] py-[5px]'>{item.first_name}</td>
                            <td className=' px-[10px] py-[5px]'>{item.id}</td>
                            <td className=' px-[10px] py-[5px] text-right'>
                                <button
                                    onClick={()=>handleAddBtn(item)}
                                    className='bg-sky-500 text-white rounded px-[10px] py-[5px] hover:bg-sky-400'>
                                    Add
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;
