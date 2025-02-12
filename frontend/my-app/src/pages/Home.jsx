
import { Input } from "../components/ui/input"

import { Hammer, Calendar, User, LogIn, Search } from "lucide-react"
import { Button } from "../components/ui/button"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Hammer className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">CarpenterBook</span>
              </div>
              {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        href="/"
                      >
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        href="/services"
                      >
                        Services
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        href="/about"
                      >
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        href="/contact"
                      >
                        Contact
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div> */}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="outline" className="mr-2" icon={<LogIn className="h-4 w-4" />}>
                Login
              </Button>
              <Button icon={<User className="h-4 w-4" />}>Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to CarpenterBook</h1>
              <p className="text-gray-600 mb-6">
                Find and book skilled carpenters for your home improvement projects. Choose from a wide range of
                available time slots and get your work done efficiently.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <Button className="w-full sm:w-auto mb-4 sm:mb-0" icon={<Calendar className="h-4 w-4" />}>
                  View Available Slots
                </Button>
                <div className="flex w-full sm:w-auto">
                  <Input placeholder="Enter your location" className="rounded-l-md" />
                  <Button className="rounded-l-none" icon={<Search className="h-4 w-4" />}>
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage

