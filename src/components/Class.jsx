import React from 'react';

const Class = ({name}) => {
    return (
        <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl" colSpan="4">
                {name}
            </td>
        </tr>
    );
};

export default Class;