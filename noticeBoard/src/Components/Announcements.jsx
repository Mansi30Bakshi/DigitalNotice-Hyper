
import React from 'react';

const Announcements = () => {

  const announcements = [
    "Exciting new product launch coming next week!",
    "Join us for the quarterly town hall on Friday!",
    "We're hiring! Check out our careers page for openings.",
    "Congratulations to our team for achieving a new milestone!",
    "Upcoming webinar on digital transformation strategies.",
    "Welcome aboard our new CTO, John Doe!",
    "Introducing our new Marketing Director, Jane Smith!",
    "Join us in welcoming our latest batch of interns!",
    "Congratulations to our Sales team for exceeding targets!",
  ];

  const newJoinings = [
    { name: "John Doe", department: "Engineering" },
    { name: "Jane Smith", department: "Marketing" },
    { name: "Michael Johnson", department: "Sales" },
    { name: "Emily Brown", department: "Human Resources" },
    { name: "David Wilson", department: "Finance" },
    { name: "Emma Lee", department: "Customer Support" },
    { name: "Alex Turner", department: "Product Management" },
    { name: "Olivia White", department: "Operations" },
  ];

  return (
    <>
      <div id="companies-container" className="flex flex-col gap-10">
        <div id="companies-title" className="flex justify-center gap-2">
          <span className="font-semibold">ANNOUNCEMENTS</span>
        </div>
        <div id="lines-group" className="overflow-hidden relative">
          <div className="flex gap-4 w-full transition-transform ease-out duration-500 transform hover:-translate-x-16">
            {announcements.map((announcement, index) => (
              <div key={`announcement-${index}`} className="flex flex-col justify-center gap-2 items-center min-w-32 min-h-32 bg-blue-100 rounded-xl border border-gray-300 md:min-h-40 md:min-w-32">
                {/* <span className="text-[14px] font-semibold lg:text-[16px]">{announcement}</span> */}
                <span className="text-[14px] lg:text-[16px] font-semibold text-center">{announcement}</span>

              </div>
            ))}
          </div>
        </div>
      </div>

    
        <div id="companies-container" className="flex flex-col gap-10">
       <div id="companies-title" className="flex justify-center gap-2 mt-4">
       <span className="font-semibold">NEW JOININGS</span>
       </div>
        <div id="lines-group" className="overflow-hidden relative">
          <div className="flex gap-4 w-full transition-transform ease-out duration-500 transform hover:-translate-x-16">
            {newJoinings.map((person, index) => (
              <div key={`new-joining-${index}`} className="flex flex-col justify-center gap-2 items-center min-w-32 min-h-32 bg-green-100 rounded-xl border border-gray-300 md:min-h-40 md:min-w-32">
                {/* <span className="text-[14px]  font-semibold ">{person.name} - {person.department}</span> */}
                <span className="text-[14px] font-semibold text-center">{person.name} - {person.department}</span>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;


