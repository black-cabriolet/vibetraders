export function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-accent font-medium text-sm">Powered by Advanced AI</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                        Smart Stock Picks, Powered by AI
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        Make informed investment decisions with our AI-driven analysis. Get personalized stock recommendations based
                        on market trends and your investment goals.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity text-lg">
                        Start Analyzing
                    </button>
                    <button className="px-8 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-colors text-lg">
                        View Demo
                    </button>
                </div>

                <div className="pt-12">
                    <div className="w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                        <span className="text-muted-foreground">Interactive Dashboard Preview</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
