export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white text-center py-2 mt-4">
      &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
    </footer>
  );
}