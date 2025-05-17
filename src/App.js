import Sidebar from "./Components/layout/Sidebar"
import AppRoutes from "./Components/routes/AppRoutes"

export default function App() {
  return (
    <div className="flex flex-row h-screen">
      <aside className="w-64 bg-gray-800 text-white sticky top-0 h-screen overflow-y-auto">
        <Sidebar /> 
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50">
         <AppRoutes />
      </main>  
    </div>
  )
}
