
"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <div className="flex items-center justify-between px-8">
        <Link to="/" className="text-white font-josefin font-bold text-xl">
          Music Label
        </Link>
        
        <Menu setActive={setActive}>
          <Link to="/" className="text-white hover:opacity-80 font-josefin transition-opacity">
            Home
          </Link>
          <Link to="/about" className="text-white hover:opacity-80 font-josefin transition-opacity">
            About
          </Link>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="/services/audio">Audio Services</HoveredLink>
              <HoveredLink to="/services/video">Video Services</HoveredLink>
            </div>
          </MenuItem>
          <Link to="/clients" className="text-white hover:opacity-80 font-josefin transition-opacity">
            Clients
          </Link>
          <Link to="/albums" className="text-white hover:opacity-80 font-josefin transition-opacity">
            Albums
          </Link>
          <Link to="/contacts" className="text-white hover:opacity-80 font-josefin transition-opacity">
            Contacts
          </Link>
          <Link to="/faqs" className="text-white hover:opacity-80 font-josefin transition-opacity">
            FAQs
          </Link>
        </Menu>
      </div>
    </div>
  );
}
