import Sidebar from "./Components/layout/Sidebar";
import AppRoutes from "./Components/routes/AppRoutes";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (fixed left) */}
      <div className="md:w-64 w-0 md:block">
        <Sidebar />
      </div>

      {/* Scrollable Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <AppRoutes />
      </main>
    </div>
  );
}
