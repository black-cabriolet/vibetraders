export function Footer() {
    return (
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
                                <span className="text-accent-foreground font-bold text-xs">VT</span>
                            </div>
                            <span className="font-semibold">Vibe Trader</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AI-powered stock investment recommendations for smarter decisions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Vibe Trader. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="hover:text-foreground transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
