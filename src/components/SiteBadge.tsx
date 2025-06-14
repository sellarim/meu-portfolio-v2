
import React from "react";

export default function SiteBadge() {
  return (
    <div className="fixed top-5 left-5 z-50 flex items-center bg-background border border-border rounded-xl shadow-lg px-3 py-2 gap-2">
      <img
        src="/lovable-uploads/043e449f-5d98-4cbe-83bd-834334aefa5b.png"
        alt="Leonardo Miralles logo"
        className="w-8 h-8 rounded-md"
        style={{ objectFit: "contain" }}
      />
      <span className="text-lg font-bold text-primary">Leonardo Miralles</span>
    </div>
  );
}
