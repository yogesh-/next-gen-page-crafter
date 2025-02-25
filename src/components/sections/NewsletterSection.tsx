
const NewsletterSection = () => {
  return (
    <section className="py-20 bg-luxury-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-light mb-8">JOIN OUR NEWSLETTER</h2>
        <div className="max-w-md mx-auto">
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-white/10 border border-accent/20 rounded-sm focus:outline-none focus:border-accent/40 transition"
            />
            <button className="px-6 py-2 bg-accent text-white rounded-sm hover:bg-accent-dark transition font-medium">
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
