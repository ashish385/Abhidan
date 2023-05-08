import React from 'react'


const filterData = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Animal",
  },
  {
    id: "3",
    title: "Food",
  },
  {
    id: "4",
    title: "Education",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];

const Filter = () => {
  return (
    <div>
      
      <div className="flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-centre">
        {filterData.map((data) => (
          <button>{data.title}</button>
        ))}
      </div>
    </div>
  );
}

export default Filter