import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../Data/servicesData';
import * as LucideIcons from 'lucide-react';
import '../styles/ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();

  // 1. Scroll To Top Logic (Jab bhi click ho screen top par le jaye)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [id]);

  const currentService = SERVICES_DATA.find((service) => service.id === id);

  if (!currentService) {
    return (
      <div className="sd-not-found fade-in">
        <h2>Service Not Found</h2>
        <Link to="/services">Back to Services</Link>
      </div>
    );
  }

  return (
    <main className="sd-wrapper">
      <div className="sd-container">
        
        {/* 1. HERO SECTION (Fade Down Animation) */}
        <section className="sd-hero fade-down">
          <h1 className="sd-hero-title">{currentService.heroTitle}</h1>
          <p className="sd-hero-desc">{currentService.heroDescription}</p>
        </section>

        {/* 2. PRICING CARDS SECTION */}
        <section className="fade-up">
           

          <div className="sd-pricing-grid">
            {currentService.plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`sd-plan-card ${plan.popular ? 'popular' : ''} fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <span className="sd-popular-badge">
                    {plan.popularBadge || "POPULAR"}
                  </span>
                )}

                <div>
                  <h3 className="sd-plan-name">{plan.name}</h3>
                  <div className="sd-price-box">
                    <span className="sd-plan-price">{plan.price}</span>
                    <span className="sd-plan-currency">{plan.currency}</span>
                  </div>

                  <ul className="sd-features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`sd-feature-item ${feature.included ? 'included' : 'excluded'}`}>
                        <span>
                          {feature.included ? '✓ ' : '✕ '}{feature.text}
                        </span>
                        {feature.tag && (
                          <span className={`sd-feature-tag ${feature.tag === 'FREE' ? 'free' : 'standard'}`}>
                            {feature.tag}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={plan.buyUrl} 
                  className={`sd-buy-btn ${plan.popular ? 'primary' : 'secondary'}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COMPLEMENTARY SERVICES (Fade Right/Left Animation) */}
        {currentService.similarServices && currentService.similarServices.length > 0 && (
          <section className="sd-complementary-section fade-up">
            <div className="sd-pricing-header">
              <h2 className="sd-pricing-title" style={{ fontSize: '28px' }}>Services You May Need</h2>
              <p className="sd-pricing-sub">Enhance your digital platform with these tailored solutions.</p>
            </div>

            <div className="sd-services-grid">
              {currentService.similarServices.map((service, index) => {
                const IconComponent = LucideIcons[
                  service.icon
                    ?.split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('')
                ] || LucideIcons.Clock;

                return (
                  <div 
                    key={service.id} 
                    className={`sd-exact-card ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div>
                      <h3 className="sd-card-title">{service.title}</h3>
                      <p className="sd-card-desc">{service.description}</p>
                      
                      <div className="sd-card-info-row">
                        <div className="sd-info-item">
                          <IconComponent size={16} />
                          <span>{service.duration || "2-4 Wks"}</span>
                        </div>
                        <span className="sd-info-divider">|</span>
                        <div className="sd-info-item">
                          <LucideIcons.User size={16} />
                          <span>{service.team || "3 Devs"}</span>
                        </div>
                        <span className="sd-info-divider">|</span>
                        <div className="sd-info-item">
                          <LucideIcons.Star size={16} />
                          <span>{service.level || "Enterprise"}</span>
                        </div>
                      </div>

                      <div className="sd-card-tags-row">
                        {(service.tags || ['React', 'Node.js', '+5']).map((tag, tIdx) => (
                          <span key={tIdx} className="sd-card-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to={service.link || "#"} className="sd-black-btn">
                      {service.buttonText || "Start Project"}
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}

      </div>
    </main>
  );
};

export default ServiceDetail;