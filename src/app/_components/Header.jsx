"use client";

import React from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  const { isSignedIn } = useUser(); // Get user authentication status

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image
        src={"/logo.svg"} // Logo stored in the public folder
        alt="Logo"
        width={160}
        height={100}
      />
      <div className="flex items-center gap-4">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button variant="default">Get Started</Button>
        </Link>
        {isSignedIn && <UserButton />} {/* Show user profile button when signed in */}
      </div>
    </div>
  );
}

export default Header;
