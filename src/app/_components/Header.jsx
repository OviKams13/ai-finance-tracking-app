import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-5 flex justify-between items-centerborder shadow-sm">
        <Image
          src="/logo.svg" // Logo stored in the public folder
          alt="Logo"
          width={160}
          height={100}
        />
        <Button variant="default">Get Started</Button>
    </div>
  );
}

export default  Header