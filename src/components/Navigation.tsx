
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
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
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
            <div className="flex space-x-8 p-4">
              <div className="flex flex-col space-y-2">
                <div 
                  className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  onMouseEnter={() => setHoveredService('audio')}
                >
                  <HoveredLink to="/services/audio" className="text-white font-josefin font-semibold">
                    Audio
                  </HoveredLink>
                </div>
                <div 
                  className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                  onMouseEnter={() => setHoveredService('video')}
                >
                  <HoveredLink to="/services/video" className="text-white font-josefin font-semibold">
                    Video
                  </HoveredLink>
                </div>
              </div>
              
              <div className="border-l border-gray-600 pl-8">
                <div className="transition-all duration-300 ease-in-out">
                  {hoveredService === 'audio' && (
                    <div className="flex flex-col space-y-3 text-sm min-w-[200px] animate-fade-in">
                      <h4 className="text-white font-josefin font-semibold mb-2">Audio Services</h4>
                      <HoveredLink to="/services/audio" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Music Label
                      </HoveredLink>
                      <HoveredLink to="/services/audio" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Song Distribution
                      </HoveredLink>
                      <HoveredLink to="/services/audio" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Music Production
                      </HoveredLink>
                      <HoveredLink to="/services/audio" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Recording Studio
                      </HoveredLink>
                      <HoveredLink to="/services/audio" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        On Set Sync Sound
                      </HoveredLink>
                    </div>
                  )}
                  
                  {hoveredService === 'video' && (
                    <div className="flex flex-col space-y-3 text-sm min-w-[200px] animate-fade-in">
                      <h4 className="text-white font-josefin font-semibold mb-2">Video Services</h4>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Equipment Hiring
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Video Shooting
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Artist Coordination
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Locations
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Editing
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        Graphics
                      </HoveredLink>
                      <HoveredLink to="/services/video" className="text-gray-300 hover:text-white font-josefin transition-colors">
                        VFX
                      </HoveredLink>
                    </div>
                  )}
                  
                  {!hoveredService && (
                    <div className="flex items-center justify-center min-w-[200px] h-16">
                      <p className="text-gray-400 font-josefin text-sm">Hover over Audio or Video to see services</p>
                    </div>
                  )}
                </div>
              </div>
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
