import { useState } from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Swahili Coastal Design",
      excerpt: "Discover how traditional Swahili architecture inspires modern luxury at LuxeStay.",
      category: "design",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Luxury: Our Eco-Friendly Initiatives",
      excerpt: "How we blend opulence with environmental responsibility in every detail.",
      category: "sustainability",
      readTime: "4 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Maasai Craftsmanship in Modern Hospitality",
      excerpt: "Celebrating the artisans whose work adorns our spaces with authentic African heritage.",
      category: "culture",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Culinary Journey: From Coast to Table",
      excerpt: "Exploring the flavors and traditions that define our award-winning dining experience.",
      category: "culinary",
      readTime: "7 min read",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "The Luxury of Space: Designing Serene Retreats",
      excerpt: "How thoughtful design creates sanctuaries of peace and tranquility.",
      category: "design",
      readTime: "5 min read",
      date: "Nov 22, 2024",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Preserving African Heritage Through Hospitality",
      excerpt: "Our commitment to keeping cultural traditions alive in modern luxury.",
      category: "culture",
      readTime: "8 min read",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'design', name: 'Design' },
    { id: 'culture', name: 'Culture' },
    { id: 'culinary', name: 'Culinary' },
    { id: 'sustainability', name: 'Sustainability' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-brand-charcoal pt-20 pb-20">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '120px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-brand-gold/40 mr-4"></div>
            <span className="text-brand-gold font-sans text-sm uppercase tracking-widest">Insights & Stories</span>
            <div className="w-12 h-px bg-brand-gold/40 ml-4"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-ivory mb-6">
            LuxeStay Journal
          </h1>
          <p className="text-lg text-brand-ivory/80 leading-relaxed">
            Discover stories of African elegance, sustainable luxury, and the art of hospitality 
            that defines the LuxeStay experience.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-brand-gold text-brand-navy shadow-lg'
                  : 'bg-brand-ivory/10 text-brand-ivory/80 hover:bg-brand-ivory/20 border border-brand-ivory/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 mb-16">
        {filteredPosts.filter(post => post.featured).map((post) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent z-10"></div>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
              <div className="inline-flex items-center space-x-4 text-brand-ivory/80 text-sm mb-4">
                <span className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs">
                  Featured
                </span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-ivory mb-4">
                {post.title}
              </h2>
              <p className="text-brand-ivory/90 text-lg mb-6 max-w-2xl">
                {post.excerpt}
              </p>
              <button className="inline-flex items-center text-brand-gold font-sans font-medium group-hover:translate-x-2 transition-transform duration-300">
                Read Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-brand-ivory/60 mb-3">
                <span className="bg-brand-ivory/10 px-2 py-1 rounded text-xs">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-brand-ivory mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-brand-ivory/80 text-sm mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-brand-ivory/60 text-sm">{post.date}</span>
                <button className="text-brand-gold text-sm font-medium group-hover:underline">
                  Read More
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-brand-charcoal/50 to-brand-charcoal/30 border border-brand-ivory/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h3 className="text-2xl font-serif font-bold text-brand-ivory mb-4">
            Stay Inspired
          </h3>
          <p className="text-brand-ivory/80 mb-6">
            Receive the latest stories about luxury, design, and African hospitality directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-brand-ivory/10 border border-brand-ivory/20 rounded-xl text-brand-ivory placeholder-brand-ivory/40 focus:outline-none focus:border-brand-gold/50"
            />
            <button className="px-6 py-3 bg-gold-gradient text-brand-navy font-sans font-semibold rounded-xl hover:shadow-gold transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;