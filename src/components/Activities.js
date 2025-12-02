const activities =[
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    user: "Natali Craig",
    text: "You have a bug that needs fixing",
    time: "Just now",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    user: "Drew Cano",
    text: "Released a new version",
    time: "59 minutes ago",
  },
  {
    avatar:"https://randomuser.me/api/portraits/women/12.jpg",
    user: "Andi Lane",
    text: "Modified a data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    user:"Kate Morrison",
    text: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];


export default function Activities({activities}){
  return (
    <div className="p-4 text-gray-200 text-sm">
      <h4 className="text-xs font-semibold text-gray-400 mb-3">Activities</h4>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start space-x-3">
            {/*Avatar*/}
            <img 
            src={activity.avatar}
            alt={activity.user}
            className="w-8 h-8 rounded-full object-cover"
            />

            {/* Activity Text */}
            <div className="flex flex-col">
              <p className="text-gray-200 text-gray-500">{activity.time}</p>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          </li>
        ))}
        </ul>
    </div>
  )
}