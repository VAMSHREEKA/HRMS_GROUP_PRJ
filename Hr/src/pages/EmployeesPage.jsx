import { useState } from 'react'
import Ecard from '../components/Employee/Ecard';
function EmployeesPage() {
  // State to control mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#f9fafb] min-h-screen relative font-inter">

      {/* Main Content Area */}
      {/* On Mobile: ml-0 (full width) | On Desktop (lg): ml-64 (make room for sidebar) */}
      <div className="w-full transition-all duration-300">

        {/* Mobile Header Bar (Hidden on Desktop) */}
        <div className="lg:hidden bg-white p-4 shadow-sm flex items-center justify-between sticky top-0 z-30 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">HRMS</h1>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-600 focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Content Padding */}
        <div className="p-6 sm:p-10 max-w-[1600px] mx-auto">
          {/* Breadcrumbs & Title */}
          <div className="mb-8">
            <nav className="flex mb-2" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a href="#" className="text-sm font-medium text-gray-500 hover:text-blue-600">Employee Management</a>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-sm font-medium text-gray-900">Employees</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Employees Directory</h1>
            <p className="text-sm text-gray-500 mt-1">Manage and view all employee profiles</p>
          </div>

          <Ecard />
        </div>
      </div>
    </div>
  )
}

export default EmployeesPage;