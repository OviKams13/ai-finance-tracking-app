"use client";

import React from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Header() {
  const { user, isSignedIn } = useUser(); // Get user authentication status

  return (
    <div className="p-5 flex justify-between items-centerborder shadow-sm">
        <Image
          src={"/logo.svg"} // Logo stored in the public folder
          alt="Logo"
          width={160}
          height={100}
        />
         {isSignedIn ? (
          <UserButton /> // Show user profile button when signed in
        ) : (
          <Link href="/sign-in">
            <Button variant="default">Get Started</Button>
          </Link>)}
    </div>
  );
}

export default  Header