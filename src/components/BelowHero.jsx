import React from "react";
import Class from "./Class";
import StudentSheet from "./StudentSheet";
import allStudents from "../assets/students.json";

const BelowHero = () => {
    const classOneStudents = allStudents.students1;
    const classTwoStudents = allStudents.students2;
    const classThreeStudents = allStudents.students3;

    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    {/* <!-- Search Box --> */}
                    <form>
                        <div className="flex">
                            <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
                                    placeholder="Search by Student "
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* <!-- Search Box Ends --> */}
                </div>

                <div className="max-w-[848px] mx-auto overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#FFFFFF0D]">
                                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                                    ID
                                </th>
                                <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* <!-- class One --> */}
                            <Class name="Class One" />
                            {classOneStudents.map((student) => (
                                <StudentSheet student={student} key={student.id}></StudentSheet>
                            ))}

                            {/* <!-- class two --> */}
                            <Class name="Class Two" />
                            {classTwoStudents.map((student) => (
                                <StudentSheet student={student} key={student.id}></StudentSheet>
                            ))}

                            {/* <!-- class three --> */}
                            <Class name="Class Three" />
                            {classThreeStudents.map((student) => (
                                <StudentSheet student={student} key={student.id}></StudentSheet>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default BelowHero;
