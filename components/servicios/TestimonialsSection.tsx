export default function TestimonialsSection({
    testimonials,
}: {
    testimonials: { text: string; author: string; meta: string }[];
}) {
    return (
        <section className="testimonials">
            <div className="testimonials-inner">
                <h2>Lo que dicen nuestras clientas</h2>
                <p className="sub">Reseñas reales · Google ⭐⭐⭐⭐⭐</p>

                <div className="t-grid">
                    {testimonials.map((item) => (
                        <div key={item.author} className="t-card">
                            <div className="t-stars">★★★★★</div>
                            <p className="t-text">"{item.text}"</p>
                            <div className="t-author">
                                {item.author}
                                <span>{item.meta}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}