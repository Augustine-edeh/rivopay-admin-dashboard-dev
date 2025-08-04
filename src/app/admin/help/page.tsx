"use client";

import { useEffect } from "react";
import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

const HelpPage = () => {
  const { setTitle } = usePageTitleStore((state) => state);

  useEffect(() => {
    setTitle("help and support");
    // Example redirection logic for future integration:
    // router.push("https://your-helpdesk.example.com/dashboard");
  }, [setTitle]);

  return (
    <div className="text-center text-muted-foreground mt-10">
      Help & Support will redirect users to our third-party dashboard once
      integrated.
    </div>
  );
};

export default HelpPage;

// NOTE: HelpPage.tsx bootstrapped Tawk.io H&S service structure to use when ready for integration

// "use client";

// import { useEffect } from "react";
// import { usePageTitleStore } from "@/stores/ui/pageTitleStore";

// const HelpPage = () => {
//   const { setTitle } = usePageTitleStore((state) => state);

//   useEffect(() => {
//     setTitle("help and support");

//     const script = document.createElement("script");
//     script.src = "https://embed.tawk.to/YOUR_TAWKTO_PROPERTY_ID/1hxyz12345"; // NOTE: please ensure to replace with the actual rivoPay Tawk.to ID generated on the tawk.io setup page here, please
//     script.async = true;
//     script.charset = "UTF-8";
//     script.setAttribute("crossorigin", "*");
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [setTitle]);

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <p className="text-muted-foreground">Loading Help & Support...</p>
//     </div>
//   );
// };

// export default HelpPage;
