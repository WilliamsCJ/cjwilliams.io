import * as React from "react"
import { Moon, Sun } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export default function DarkModeToggle() { 
  function handleThemeChange(theme: string) {
    if (theme === "system") {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', theme)
    }

    const isDark = 
      theme === "dark" ||
      (
        theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )

    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }
  
  // React.useEffect(() => {
  //   const isDarkMode = document.documentElement.classList.contains("dark")
  //   setThemeState(isDarkMode ? "dark" : "light")
  // }, [])
 
  // React.useEffect(() => {
  //   console.log("Triggered")
  //   const isDark =
  //     theme === "dark" ||
  //     (theme === "system" &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    
  //   console.log("Theme: ", theme)
  //   if (theme === "system") {
  //     window.localStorage.removeItem('theme')
  //   } else {
  //     window.localStorage.setItem("theme", theme)
  //   }
  //   console.log("Local storage: ", window.localStorage.getItem('theme'))
  // }, [theme])
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="shadow-lg rounded-full size-12">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}