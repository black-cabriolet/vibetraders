"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"

export function Header() {
    const [isDark, setIsDark] = useState(true)

    const toggleTheme = () => {
        setIsDark(!isDark)
        if (isDark) {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                            <span className="text-accent-foreground font-bold text-sm">VT</span>
                        </div>
                        <span className="text-lg font-semibold">Vibe Trader</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                            How It Works
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
                        </button>
                        <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
