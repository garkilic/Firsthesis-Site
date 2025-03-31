import { motion } from 'framer-motion'
import { ChartBarIcon, DocumentTextIcon, MagnifyingGlassIcon, SparklesIcon, ShieldCheckIcon, BanknotesIcon, UserGroupIcon, ChartPieIcon, StarIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Firsthesis
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">How It Works</a>
              <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#security" className="text-secondary hover:text-primary transition-colors">Security</a>
              <button className="btn btn-primary px-6 py-2 rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Trust Indicators */}
      <div className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheckIcon, label: "Minimum Investment", value: "$1M+" },
              { icon: BanknotesIcon, label: "Average Fund Size", value: "$10M+" },
              { icon: UserGroupIcon, label: "HNWI Investors", value: "500+" },
              { icon: ChartPieIcon, label: "Historical Returns", value: "32.5%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 animate-gradient"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              For Accredited Investors Only
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Launch Your VC Fund in Minutes, Not Months
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed">
              Turn your $1M+ net worth into a venture fund instantly. Our AI handles everything from fund creation to investment decisions, letting you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Fund Today
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-primary border-2 border-primary hover:bg-primary/5 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            AI-Powered Fund Management
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "1",
                title: "AI Fund Creation",
                description: "Our advanced AI analyzes your investment goals and automatically generates a sophisticated fund structure, including legal documentation and compliance frameworks.",
                icon: ChartBarIcon,
              },
              {
                number: "2",
                title: "Smart Thesis Development",
                description: "Leveraging machine learning to analyze market trends and opportunities, our AI crafts a data-driven investment thesis tailored to your objectives.",
                icon: DocumentTextIcon,
              },
              {
                number: "3",
                title: "Automated Investing",
                description: "Our AI continuously monitors the market, identifies promising opportunities, and executes investments based on your predefined criteria.",
                icon: SparklesIcon,
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-300"></div>
                  <div className="relative bg-white p-4 rounded-full shadow-lg">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-4 text-accent">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-secondary mb-6">
              Our AI handles everything from fund creation to investment execution, allowing you to focus on your vision while we manage the operational complexity.
            </p>
            <div className="inline-flex items-center gap-2 text-accent font-medium">
              <SparklesIcon className="w-5 h-5" />
              <span>Powered by Advanced Machine Learning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traditional VC Challenges Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Traditional VC Firms Are Hard to Start
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <UserGroupIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Large Team Required</h3>
                  <p className="text-secondary">Traditional VC firms typically need <span className="font-bold text-primary">10-15 people</span> to operate effectively, including partners, analysts, and support staff.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <BanknotesIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">High Operational Costs</h3>
                  <p className="text-secondary">Annual operating costs can exceed <span className="font-bold text-primary">$1M</span>, including office space, salaries, and administrative expenses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <ChartBarIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complex Fundraising</h3>
                  <p className="text-secondary">Raising a traditional VC fund requires extensive networking and typically <span className="font-bold text-primary">$50M+</span> in commitments from limited partners.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center mb-6">How Firsthesis Makes It Different</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <StarIcon className="w-5 h-5 text-accent" />
                      <span className="text-secondary">Start with just <span className="font-bold text-primary">$1M</span> in capital</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <StarIcon className="w-5 h-5 text-accent" />
                      <span className="text-secondary">AI handles <span className="font-bold text-primary">80%</span> of operational tasks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <StarIcon className="w-5 h-5 text-accent" />
                      <span className="text-secondary">Potential for <span className="font-bold text-primary">2% management fee + 20% carry</span></span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-accent/5 rounded-xl">
                    <h4 className="font-semibold mb-2 text-primary">Experts-in-the-Loop</h4>
                    <p className="text-secondary">Our AI is backed by a team of <span className="font-medium">experienced venture capitalists</span> who review and validate all investment decisions before execution.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historical Returns Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            The Power of Early-Stage Investing
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "Uber",
                seed: "$200K",
                current: "$1.2B",
                return: "600,000%",
                icon: SparklesIcon,
                context: "In 2010, First Round Capital invested $200K in Uber's seed round. This investment would have grown to $1.2B by the company's IPO, demonstrating the massive potential of early-stage tech investments.",
              },
              {
                company: "Airbnb",
                seed: "$20K",
                current: "$1.2B",
                return: "6,000,000%",
                icon: StarIcon,
                context: "Sequoia Capital's $20K investment in Airbnb's seed round in 2009 would have grown to $1.2B by the company's IPO, showcasing how small early investments can lead to extraordinary returns.",
              },
              {
                company: "Stripe",
                seed: "$2M",
                current: "$95B",
                return: "4,750,000%",
                icon: ChartBarIcon,
                context: "Stripe's seed round in 2011 included a $2M investment that would have grown to $95B by their latest valuation, making it one of the most successful early-stage investments in tech history.",
              },
            ].map((company, index) => (
              <motion.div
                key={company.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <company.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{company.company}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Seed Investment</span>
                    <span className="font-bold text-primary">{company.seed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Current Value</span>
                    <span className="font-bold text-primary">{company.current}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Return on Investment</span>
                    <span className="font-bold text-accent">{company.return}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-secondary leading-relaxed">
                    {company.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-secondary mb-6">
              Don't miss out on the next big opportunity. Our AI-powered platform helps you identify and invest in promising startups early.
            </p>
            <div className="inline-flex items-center gap-2 text-accent font-medium">
              <SparklesIcon className="w-5 h-5" />
              <span>Powered by Advanced Market Analysis</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Everything You Need
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fund Setup",
                description: "Automated legal documentation, fund structure, and compliance setup.",
                icon: DocumentTextIcon,
              },
              {
                title: "Thesis Creation",
                description: "AI-powered investment thesis development based on your preferences.",
                icon: SparklesIcon,
              },
              {
                title: "Startup Sourcing",
                description: "Access to our extensive network of vetted startup opportunities.",
                icon: MagnifyingGlassIcon,
              },
              {
                title: "Due Diligence",
                description: "Comprehensive AI-driven analysis of potential investments.",
                icon: ChartBarIcon,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            See It In Action
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <SparklesIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intuitive Interface</h3>
                  <p className="text-secondary">Watch how easy it is to set up your fund and start investing with our AI-powered platform.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <ChartBarIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                  <p className="text-secondary">See how our platform provides instant insights and portfolio performance tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <ShieldCheckIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-secondary">Experience our bank-grade security measures in action.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-secondary">Watch Demo Video</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Platform Overview</h3>
                  <p className="text-secondary">A comprehensive walkthrough of Firsthesis's key features and capabilities.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Venture Fund?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the future of venture investing. No experience needed.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Firsthesis</h3>
              <p className="text-gray-400 mb-4">Empowering venture capital with AI-driven insights and secure portfolio management.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Firsthesis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App 