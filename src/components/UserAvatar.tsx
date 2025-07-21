import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";

interface UserAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  fallback?: string;
}

const UserAvatar = ({
  className,
  src = "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D",
  alt = "User Avatar",
  fallback = "UA",
}: UserAvatarProps) => {
  return (
    <Avatar className={clsx(className)}>
      <AvatarImage src={src} alt={alt} className="object-cover" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
