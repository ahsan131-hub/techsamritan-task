import React from "react";

const StaffNameSelector = () => {
  return (
    <label className="font-medium text-2xl mr-10 text-gray-800">
      Esther Howard
    </label>
  );
};

const LocationSelector = () => {
  return (
    <select className="px-1 py-3 font-medium rounded-lg bg-blue-50 border border-blue-700 text-gray-700 m-2">
      <option value="name">California</option>
      <option value="age">London</option>
      <option value="salary">Karachi</option>
    </select>
  );
};

const RoleSelector = () => {
  return (
    <select className="px-1 py-3 font-medium rounded-lg bg-blue-50 border border-blue-700 text-gray-700 m-2">
      <option value="name">Front Desk</option>
      <option value="age">Receptionist</option>
      <option value="salary">HR Manager</option>
    </select>
  );
};

const StaffSelector = () => {
  return (
    <>
      <StaffNameSelector />
      <LocationSelector />
      <RoleSelector />
    </>
  );
};

export default StaffSelector;
