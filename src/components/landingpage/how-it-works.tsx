export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Connect Your Profile",
            description: "Set up your investment profile and define your goals",
        },
        {
            number: "02",
            title: "AI Analysis",
            description: "Our AI analyzes thousands of data points in real-time",
        },
        {
            number: "03",
            title: "Get Recommendations",
            description: "Receive personalized stock picks and insights",
        },
        {
            number: "04",
            title: "Track Performance",
            description: "Monitor your investments and receive continuous updates",
        },
    ]

    return (
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-balance">How It Works</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Four simple steps to begin your AI-powered investment journey
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="space-y-4">
                                <div className="text-5xl font-bold text-accent/20">{step.number}</div>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
