export function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-4xl mx-auto">
                <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-background p-12 sm:p-16 text-center space-y-8">
                    <h2 className="text-4xl sm:text-5xl font-bold text-balance">Ready to Transform Your Investing?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of investors using AI to make smarter decisions. Start free today—no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity text-lg">
                            Start Free Trial
                        </button>
                        <button className="px-8 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-colors text-lg">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
