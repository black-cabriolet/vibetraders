import { TrendingUp, Shield, Zap } from "lucide-react"

export function Features() {
    const features = [
        {
            icon: TrendingUp,
            title: "Real-Time Analysis",
            description:
                "Get instant AI-powered insights on market movements and stock performance with our advanced algorithms.",
        },
        {
            icon: Shield,
            title: "Risk Management",
            description:
                "Understand potential risks and receive recommendations tailored to your risk tolerance and investment timeline.",
        },
        {
            icon: Zap,
            title: "Smart Alerts",
            description:
                "Receive timely notifications when opportunities align with your investment criteria and market conditions.",
        },
    ]

    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-balance">Intelligent Features</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to invest smarter and with confidence
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border border-border hover:border-accent/50 transition-colors bg-background/50 space-y-4"
                            >
                                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
