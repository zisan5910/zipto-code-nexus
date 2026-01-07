import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, ArrowLeft, Search, Filter } from "lucide-react";
import ziptocodelogo from "@/assets/ziptocode-logo.png";

const products = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Firebase", "Stripe"],
    price: "Contact for Price",
    features: ["Admin Dashboard", "Payment Integration", "Inventory Management", "Order Tracking"],
  },
  {
    id: 2,
    title: "School Management System",
    category: "Educational",
    description: "Complete solution for student enrollment, attendance, grade management, and parent portal.",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    price: "Contact for Price",
    features: ["Student Portal", "Parent Access", "Grade Management", "Attendance Tracking"],
  },
  {
    id: 3,
    title: "Healthcare Portal",
    category: "Healthcare",
    description: "Patient appointment booking, medical records management, and doctor scheduling system.",
    tags: ["React", "PostgreSQL", "AWS"],
    price: "Contact for Price",
    features: ["Appointment Booking", "Medical Records", "Doctor Dashboard", "Patient Portal"],
  },
  {
    id: 4,
    title: "Business Automation Suite",
    category: "Automation",
    description: "Workflow automation for inventory, order processing, and business analytics.",
    tags: ["Python", "APIs", "Zapier"],
    price: "Contact for Price",
    features: ["Workflow Automation", "Analytics Dashboard", "API Integration", "Custom Reports"],
  },
  {
    id: 5,
    title: "Restaurant Management",
    category: "Business",
    description: "Complete restaurant solution with online ordering, table booking, and kitchen management.",
    tags: ["React", "Firebase", "Node.js"],
    price: "Contact for Price",
    features: ["Online Ordering", "Table Reservation", "Kitchen Display", "POS Integration"],
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Application",
    description: "Property listing, virtual tours, agent management, and lead tracking system.",
    tags: ["Next.js", "Supabase", "Maps API"],
    price: "Contact for Price",
    features: ["Property Listings", "Virtual Tours", "Agent Portal", "Lead Management"],
  },
  {
    id: 7,
    title: "Portfolio Website Template",
    category: "Website",
    description: "Modern, responsive portfolio template for professionals and creatives.",
    tags: ["React", "Tailwind", "Framer Motion"],
    price: "Contact for Price",
    features: ["Responsive Design", "Dark/Light Mode", "Contact Form", "SEO Optimized"],
  },
  {
    id: 8,
    title: "Gym Management System",
    category: "Business",
    description: "Member management, class scheduling, and payment tracking for fitness centers.",
    tags: ["React", "Node.js", "MongoDB"],
    price: "Contact for Price",
    features: ["Member Portal", "Class Scheduling", "Payment Tracking", "Trainer Dashboard"],
  },
];

const categories = ["All", "Web Application", "Educational", "Healthcare", "Automation", "Business", "Website"];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContact = (productTitle: string) => {
    const message = `Hi! I'm interested in purchasing "${productTitle}" from ZiptoCode Store. Please provide more details.`;
    window.open(`https://wa.me/8801712525910?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="container-max">
          <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={ziptocodelogo} alt="ZiptoCode" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-foreground">
                Zipto<span className="text-primary">Code</span>
                <span className="text-sm font-normal text-muted-foreground ml-2">Store</span>
              </span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-max text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-semibold uppercase tracking-wider"
          >
            ZiptoCode Store
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-3 mb-4"
          >
            Ready-Made <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Browse our collection of professionally built websites, web apps, and projects. 
            Contact us to purchase and customize any solution for your business.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-300 text-foreground"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border/50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-max">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl text-primary/30 font-bold">
                      {product.title.charAt(0)}
                    </span>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <ul className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm font-medium text-primary">{product.price}</span>
                      <button
                        onClick={() => handleContact(product.title)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contact
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-b from-background to-primary/5">
        <div className="container-max text-center">
          <h2 className="heading-md mb-4">
            Need a <span className="text-gradient">Custom Solution?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? We can build custom solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8801712525910?text=Hi!%20I%20need%20a%20custom%20solution.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+8809638845910"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Call: +880 9638-845910
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ZiptoCode Tech Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Store;
