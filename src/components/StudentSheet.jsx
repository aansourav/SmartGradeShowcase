import React from 'react';
import avatar from "../assets/avatar.png"

const StudentSheet = ({student}) => {
    return (
        <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img
                        className="w-8 h-8"
                        src={avatar}
                        width="32"
                        height="32"
                        alt="John Smith"
                    />
                    <span className="whitespace-nowrap"
                    >{student.name}</span
                    >
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
                {student.scores}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
                {student.percentage}
            </td>
        </tr>
    );
};

export default StudentSheet;