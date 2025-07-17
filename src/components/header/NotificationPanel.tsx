import Link from "next/link";
import UserAvatar from "../UserAvatar";

const notifications = Array(5).fill({
  name: "Adekanye Similoluwa",
  message:
    "Can we schedule a meeting for 2pm tomorrow via zoom. Please do confirm your availability.",
  time: "2h ago",
});

const NotificationPanel = () => {
  return (
    <>
      <div className="px-4 py-3 border-b text-sm font-medium flex justify-between items-center">
        <span>Notification</span>
        <button className="text-xs text-muted-foreground hover:underline">
          Mark all as read
        </button>
      </div>

      <p className="px-4 py-3 bg-[#f3f3f7]">Today</p>

      <div className="max-h-72 overflow-y-auto space-y-1 p-1.5">
        {notifications.map((n, idx) => (
          <div
            key={idx}
            className={`flex gap-3 p-4 hover:bg-[#553a6b17] rounded-md ${
              idx === 1 || idx === 3 ? "bg-[#553A6B33]" : "bg-white"
            }`}
          >
            <div className="size-fit p-1.5 rounded-full bg-muted-foreground/20 flex items-center justify-center text-muted-foreground">
              <UserAvatar className="size-4" src="/icons/user-fallback.svg" />
            </div>

            <div className="text-sm">
              <p className="font-medium">{n.name}</p>
              <p className="text-muted-foreground text-xs leading-snug">
                {n.message}
              </p>
            </div>
            <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
              {n.time}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center border-t py-2">
        <Link
          href="#"
          className="w-full text-sm text-muted-foreground hover:underline"
        >
          View all notifications
        </Link>
      </div>
    </>
  );
};

export default NotificationPanel;
