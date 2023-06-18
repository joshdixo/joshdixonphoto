'use client';

import useIsMobile from "@/hooks/useIsMobile";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {

    const isMobile = useIsMobile();

    return isMobile ? <MobileNav /> : <DesktopNav />
  
}