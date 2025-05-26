import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Laraib Ejaz</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm a Computer Science student at IST (KICSIT Campus). I've built projects using C++, Python, HTML, CSS, and MongoDB. I'm passionate about learning more in web development and designing user-centric digital solutions.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <li>UI/UX Design</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>MongoDB</li>
          <li>XAMPP</li>
          <li>C++ / Python</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Hotel Management System</h3>
              <p className="text-gray-600">Built using C++, this project manages bookings, guests, and billing operations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Car Parking Management</h3>
              <p className="text-gray-600">A C++ project that handles parking lot operations and vehicle logs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Machine Learning Models</h3>
              <p className="text-gray-600">Implemented basic ML models in Python for classification and prediction tasks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Chat Box</h3>
              <p className="text-gray-600">A simple chatbot built in Python to simulate conversations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Cookbook Website</h3>
              <p className="text-gray-600">Currently developing a web application to manage and share recipes.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="flex items-center gap-4 text-gray-700">
          <Mail className="w-5 h-5" />
          <a href="mailto:laraibejaz04@gmail.com" className="hover:underline">laraibejaz04@gmail.com</a>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} Laraib Ejaz. All rights reserved.
      </footer>
    </div>
  );
}
