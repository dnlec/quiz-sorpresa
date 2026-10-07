"use client";

import Form from "@/components/Form";
import MirroredNavbar from "@/components/MirroredNavbar";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MirroredNavbar />
      <ProgressBar />
      <Form />
      <Timer />
    </div>
  );
}
