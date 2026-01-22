import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, getAllProducts } from "@/lib/productsData";
import { getProductById as getLegacyProduct } from "./index";

export default function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [activeSpecTab, setActiveSpecTab] = useState("technical");
  const [hoveredApplication, setHoveredApplication] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [animatedStats, setAnimatedStats] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.12,
    AED: 3.67,
    SAR: 3.75,
    CNY: 7.24,
    JPY: 149.50
  });
  const stepRefs = useRef([]);
  const carouselIntervalRef = useRef(null);
  const statsRef = useRef(null);
  
  // Try enhanced data first, fallback to legacy
  let product = null;
  if (router.isReady && productId) {
    product = getProductById(productId);
    if (!product) {
      const legacyProduct = getLegacyProduct(productId);
      if (legacyProduct) {
        // Convert legacy product to enhanced format
        product = {
          ...legacyProduct,
          detailedDescription: legacyProduct.desc,
          heroImage: legacyProduct.image,
          specifications: {
            technical: legacyProduct.specs || [],
            keyFeatures: legacyProduct.specs || [],
            advantages: legacyProduct.specs || []
          },
          detailedSpecs: [
            {
              label: "Country of Origin",
              value: "India",
              icon: "location"
            },
            {
              label: "Manufacturing Location",
              value: "Hyderabad, Telangana, India",
              icon: "location"
            },
            {
              label: "Package Dimensions",
              value: "Varies by product type",
              icon: "dimensions"
            },
            {
              label: "Net Weight",
              value: "Varies by package size",
              icon: "weight"
            },
            {
              label: "Packaging Type",
              value: "Standard industrial packaging",
              icon: "package"
            },
            {
              label: "Quality Standards",
              value: "ISO 9001:2015 Certified",
              icon: "standard"
            },
            {
              label: "Minimum Order Quantity",
              value: "Contact for details",
              icon: "package"
            }
          ],
          pricing: {
            basePriceUSD: 7.00,
            currency: "USD",
            packageSizes: [
              { size: "1L", priceUSD: 8.50, moq: 100 },
              { size: "5L", priceUSD: 7.00, moq: 50 },
              { size: "20L", priceUSD: 6.50, moq: 20 }
            ],
            bulkDiscounts: [
              { minQuantity: 1000, discount: 5 },
              { minQuantity: 5000, discount: 10 },
              { minQuantity: 10000, discount: 15 }
            ],
            shippingCosts: {
              domestic: 0.50,
              international: 1.20
            }
          },
          applicationAreas: [],
          projects: [],
          marketGrowth: null,
          manufacturingProcess: [],
          statistics: {}
        };
      }
    }
  }

  // Get all images for carousel
  const productImages = useMemo(() => {
    if (!product) return [];
    const images = [];
    
    // Add hero image if available
    if (product.heroImage) {
      images.push(product.heroImage);
    }
    
    // Add main product image
    if (product.image && product.image !== product.heroImage) {
      images.push(product.image);
    }
    
    // Add images from application areas (up to 2 more to make 3-4 total)
    if (product.applicationAreas && product.applicationAreas.length > 0) {
      const appImages = product.applicationAreas
        .slice(0, 2)
        .map(app => app.image)
        .filter(img => img && !images.includes(img));
      images.push(...appImages);
    }
    
    // If we still don't have enough images, add some gallery images
    if (images.length < 3) {
      const galleryImages = [
        "/assets/gallery-manufacturing-facility.jpg",
        "/assets/gallery-production-line.jpg",
        "/assets/gallery-quality-control.jpg",
        "/assets/gallery-warehouse.jpg"
      ];
      galleryImages.forEach(img => {
        if (images.length < 4 && !images.includes(img)) {
          images.push(img);
        }
      });
    }
    
    return images.slice(0, 4); // Limit to 4 images
  }, [product]);

  // Auto-rotate carousel images every 1.5 seconds
  useEffect(() => {
    if (productImages.length <= 1) {
      setCurrentImageIndex(0);
      return;
    }

    carouselIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 1500);

    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [productImages]);

  // Animated statistics counter
  useEffect(() => {
    if (!product || !product.statistics || !statsRef.current) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const currentRef = statsRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate annual capacity
          if (product.statistics.annualCapacity) {
            const capacity = product.statistics.annualCapacity;
            const numericValue = parseInt(capacity.replace(/[^\d]/g, ''));
            if (numericValue) {
              let current = 0;
              const increment = numericValue / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                  current = numericValue;
                  clearInterval(timer);
                }
                setAnimatedStats(prev => ({
                  ...prev,
                  annualCapacity: Math.floor(current).toLocaleString() + capacity.replace(/[\d,]/g, '')
                }));
              }, 30);
            }
          }

          // Animate export countries
          if (product.statistics.exportCountries) {
            const countries = product.statistics.exportCountries;
            const numericValue = parseInt(countries.replace(/[^\d]/g, ''));
            if (numericValue) {
              let current = 0;
              const increment = numericValue / 30;
              const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                  current = numericValue;
                  clearInterval(timer);
                }
                setAnimatedStats(prev => ({
                  ...prev,
                  exportCountries: Math.floor(current) + countries.replace(/[\d]/g, '')
                }));
              }, 40);
            }
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [product]);

  // Scroll animation for manufacturing steps - must be called before any returns
  useEffect(() => {
    if (!product || !product.manufacturingProcess || product.manufacturingProcess.length === 0) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-step-index') || '0');
          setVisibleSteps(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
          });
        }
      });
    }, observerOptions);

    const currentRefs = stepRefs.current;
    if (currentRefs) {
      currentRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (currentRefs) {
        currentRefs.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.manufacturingProcess]);
  
  if (!router.isReady) {
    return (
      <>
        <Head>
          <title>Loading... - YNM Mega Industries</title>
        </Head>
        <Navbar />
        <main className="product-detail-page">
          <div className="product-loading">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Head>
          <title>Product Not Found - YNM Mega Industries</title>
        </Head>
        <Navbar />
        <main className="product-detail-page">
          <div className="product-not-found">
            <h1>Product Not Found</h1>
            <p>The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/products" className="back-btn">
              ← Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{product.name} - YNM Mega Industries</title>
        <meta name="description" content={product.shortDesc || product.desc} />
      </Head>

      <Navbar />

      <main className="product-detail-page">
        {/* Breadcrumb */}
        <div className="product-breadcrumb">
          <div className="product-breadcrumb-content">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="product-hero-section">
          <div className="product-hero-container">
            <div 
              className="product-hero-image"
              onMouseEnter={() => {
                if (carouselIntervalRef.current) {
                  clearInterval(carouselIntervalRef.current);
                }
              }}
              onMouseLeave={() => {
                if (productImages.length > 1) {
                  carouselIntervalRef.current = setInterval(() => {
                    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
                  }, 1500);
                }
              }}
            >
              {productImages.length > 0 ? (
                <>
                  {productImages.map((imageSrc, index) => (
                    <div
                      key={index}
                      className={`product-carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                    >
                      <Image
                        src={imageSrc}
                        alt={`${product.name} - Image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  <div className="product-hero-overlay" />
                  {productImages.length > 1 && (
                    <div className="product-carousel-indicators">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            if (carouselIntervalRef.current) {
                              clearInterval(carouselIntervalRef.current);
                            }
                            carouselIntervalRef.current = setInterval(() => {
                              setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
                            }, 1500);
                          }}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <>
                  <Image
                    src={product.heroImage || product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="product-hero-overlay" />
                </>
              )}
            </div>
            <div className="product-hero-content">
              <h1 className="product-hero-title">{product.name}</h1>
              <p className="product-hero-description">{product.shortDesc || product.desc}</p>
              {product.statistics && (
                <div className="product-hero-stats">
                  {product.statistics.annualCapacity && (
                    <div className="stat-item">
                      <div className="stat-value">{product.statistics.annualCapacity}</div>
                      <div className="stat-label">Annual Capacity</div>
                    </div>
                  )}
                  {product.statistics.exportCountries && (
                    <div className="stat-item">
                      <div className="stat-value">{product.statistics.exportCountries}</div>
                      <div className="stat-label">Export Countries</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Animated Statistics Dashboard */}
        {product.statistics && (
          <section className="product-stats-dashboard-section">
            <div className="product-section-container">
              <div className="stats-dashboard-wrapper" ref={statsRef}>
                <div className="stats-dashboard-header">
                  <h2>Product Performance Metrics</h2>
                  <p>Real-time statistics showcasing our product excellence</p>
                </div>
                <div className="stats-dashboard-grid">
                  {product.statistics.annualCapacity && (
                    <div className="stat-card">
                      <div className="stat-card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <div className="stat-card-content">
                        <div className="stat-value" data-target={product.statistics.annualCapacity}>
                          {animatedStats.annualCapacity || "0"}
                        </div>
                        <div className="stat-label">Annual Production Capacity</div>
                      </div>
                      <div className="stat-card-glow" />
                    </div>
                  )}
                  {product.statistics.exportCountries && (
                    <div className="stat-card">
                      <div className="stat-card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <div className="stat-card-content">
                        <div className="stat-value" data-target={product.statistics.exportCountries}>
                          {animatedStats.exportCountries || "0"}
                        </div>
                        <div className="stat-label">Export Countries</div>
                      </div>
                      <div className="stat-card-glow" />
                    </div>
                  )}
                  {product.statistics.qualityStandards && (
                    <div className="stat-card">
                      <div className="stat-card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div className="stat-card-content">
                        <div className="stat-value">{product.statistics.qualityStandards}</div>
                        <div className="stat-label">Quality Certification</div>
                      </div>
                      <div className="stat-card-glow" />
                    </div>
                  )}
                  {product.statistics.productionSpeed && (
                    <div className="stat-card">
                      <div className="stat-card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className="stat-card-content">
                        <div className="stat-value">{product.statistics.productionSpeed}</div>
                        <div className="stat-label">Daily Production Rate</div>
                      </div>
                      <div className="stat-card-glow" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Description Section */}
        {product.detailedDescription && (
          <section className="product-description-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Product Overview</h2>
              <div className="product-description-content">
                <p>{product.detailedDescription}</p>
              </div>
            </div>
          </section>
        )}

        {/* Detailed Specifications Section */}
        {product.detailedSpecs && (
          <section className="product-detailed-specs-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Detailed Specifications</h2>
              <p className="product-section-subtitle">
                Complete product information including dimensions, origin, and manufacturing details
              </p>
              
              <div className="detailed-specs-container">
                <div className="detailed-specs-grid">
                  {product.detailedSpecs.map((spec, index) => (
                    <div key={index} className="detailed-spec-item">
                      <div className="spec-item-icon">
                        {spec.icon === "dimensions" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="9" y1="3" x2="9" y2="21" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                          </svg>
                        )}
                        {spec.icon === "location" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        )}
                        {spec.icon === "weight" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 3h12l4 6-10 12L2 9z" />
                            <path d="M11 3L8 9l4 9 4-9-3-6" />
                            <path d="M2 9h20" />
                          </svg>
                        )}
                        {spec.icon === "package" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                          </svg>
                        )}
                        {spec.icon === "standard" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        )}
                        {spec.icon === "warranty" && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                          </svg>
                        )}
                        {!spec.icon && (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                        )}
                      </div>
                      <div className="spec-item-content">
                        <div className="spec-item-label">{spec.label}</div>
                        <div className="spec-item-value">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing & Currency Section */}
        {product.pricing && (
          <section className="product-pricing-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Pricing & Availability</h2>
              <p className="product-section-subtitle">
                Competitive pricing in multiple currencies with flexible package options
              </p>

              {/* Currency Selector */}
              <div className="currency-selector-wrapper">
                <div className="currency-selector">
                  <label>Select Currency:</label>
                  <div className="currency-buttons">
                    {Object.keys(exchangeRates).map((currency) => (
                      <button
                        key={currency}
                        className={`currency-btn ${selectedCurrency === currency ? 'active' : ''}`}
                        onClick={() => setSelectedCurrency(currency)}
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Package Sizes Grid */}
              <div className="pricing-packages-grid">
                {product.pricing.packageSizes.map((pkg, index) => {
                  const basePrice = pkg.priceUSD * exchangeRates[selectedCurrency];
                  const currencySymbol = {
                    USD: '$',
                    EUR: '€',
                    GBP: '£',
                    INR: '₹',
                    AED: 'د.إ',
                    SAR: '﷼',
                    CNY: '¥',
                    JPY: '¥'
                  }[selectedCurrency] || '$';

                  return (
                    <div key={index} className="pricing-package-card">
                      <div className="package-header">
                        <div className="package-size">{pkg.size}</div>
                        <div className="package-moq">MOQ: {pkg.moq} units</div>
                      </div>
                      <div className="package-price">
                        <span className="price-currency">{currencySymbol}</span>
                        <span className="price-amount">{basePrice.toFixed(2)}</span>
                        <span className="price-unit">/ liter</span>
                      </div>
                      <div className="package-total">
                        {currencySymbol}{(basePrice * 100).toFixed(2)} per 100L
                      </div>
                      <div className="package-features">
                        <div className="package-feature">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Bulk discounts available</span>
                        </div>
                        <div className="package-feature">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Fast shipping worldwide</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stock Availability */}
              <div className="stock-availability">
                <div className="stock-indicator">
                  <div className="stock-status in-stock">
                    <div className="stock-dot"></div>
                    <span>In Stock</span>
                  </div>
                  <div className="stock-info">
                    <strong>Available Quantity:</strong> {product.statistics?.annualCapacity || "500,000+ liters"}
                  </div>
                </div>
                <div className="stock-actions">
                  <button className="stock-btn primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Request Quote
                  </button>
                  <button className="stock-btn secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Global Availability Map */}
        <section className="product-availability-section">
          <div className="product-section-container">
            <h2 className="product-section-title">Global Availability</h2>
            <p className="product-section-subtitle">
              Our {product.name} is available and exported to 15+ countries worldwide
            </p>
            
            <div className="availability-map-wrapper">
              <div className="availability-regions">
                <div className="region-card">
                  <div className="region-icon">🌏</div>
                  <h3>Asia Pacific</h3>
                  <div className="region-countries">
                    <span className="country-tag">India</span>
                    <span className="country-tag">China</span>
                    <span className="country-tag">Japan</span>
                    <span className="country-tag">Singapore</span>
                    <span className="country-tag">Malaysia</span>
                    <span className="country-tag">Thailand</span>
                  </div>
                </div>
                <div className="region-card">
                  <div className="region-icon">🌍</div>
                  <h3>Middle East</h3>
                  <div className="region-countries">
                    <span className="country-tag">UAE</span>
                    <span className="country-tag">Saudi Arabia</span>
                    <span className="country-tag">Qatar</span>
                    <span className="country-tag">Kuwait</span>
                  </div>
                </div>
                <div className="region-card">
                  <div className="region-icon">🌎</div>
                  <h3>Africa</h3>
                  <div className="region-countries">
                    <span className="country-tag">Kenya</span>
                    <span className="country-tag">Nigeria</span>
                    <span className="country-tag">South Africa</span>
                    <span className="country-tag">Ghana</span>
                  </div>
                </div>
                <div className="region-card">
                  <div className="region-icon">🌐</div>
                  <h3>Europe</h3>
                  <div className="region-countries">
                    <span className="country-tag">UK</span>
                    <span className="country-tag">Germany</span>
                    <span className="country-tag">France</span>
                  </div>
                </div>
              </div>
              <div className="availability-stats">
                <div className="availability-stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-text">Countries</div>
                </div>
                <div className="availability-stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-text">Active Clients</div>
                </div>
                <div className="availability-stat">
                  <div className="stat-number">99.2%</div>
                  <div className="stat-text">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications Section */}
        {product.specifications && (
          <section className="product-specs-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Product Specification</h2>
              <p className="product-section-subtitle">
                Comprehensive technical details, key features, and product advantages
              </p>
              
              {/* Tabs */}
              <div className="specs-tabs-wrapper">
                <div className="specs-tabs">
                  <button
                    className={`specs-tab ${activeSpecTab === "technical" ? "active" : ""}`}
                    onClick={() => setActiveSpecTab("technical")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span>Technical Details</span>
                  </button>
                  <button
                    className={`specs-tab ${activeSpecTab === "keyFeatures" ? "active" : ""}`}
                    onClick={() => setActiveSpecTab("keyFeatures")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>Key Features</span>
                  </button>
                  <button
                    className={`specs-tab ${activeSpecTab === "advantages" ? "active" : ""}`}
                    onClick={() => setActiveSpecTab("advantages")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Product Advantages</span>
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="specs-content-wrapper">
                <div className="specs-image-container">
                  <div className="specs-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="specs-image-overlay" />
                    <div className="specs-image-badge">
                      {activeSpecTab === "technical" ? "Technical" :
                       activeSpecTab === "keyFeatures" ? "Features" : "Advantages"}
                    </div>
                  </div>
                </div>
                <div className="specs-list-container">
                  <div className="specs-list-header">
                    <h3>
                      {activeSpecTab === "technical" ? "Technical Specifications" :
                       activeSpecTab === "keyFeatures" ? "Key Features & Benefits" : "Product Advantages"}
                    </h3>
                  </div>
                  <div className="specs-list">
                    {activeSpecTab === "technical" && product.specifications.technical && (
                      <div className="specs-grid">
                        {product.specifications.technical.map((spec, i) => (
                          <div key={i} className="spec-item">
                            <div className="spec-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div className="spec-text">
                              <span>{spec}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeSpecTab === "keyFeatures" && product.specifications.keyFeatures && (
                      <div className="specs-grid">
                        {product.specifications.keyFeatures.map((spec, i) => (
                          <div key={i} className="spec-item">
                            <div className="spec-icon feature-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            </div>
                            <div className="spec-text">
                              <span>{spec}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {activeSpecTab === "advantages" && product.specifications.advantages && (
                      <div className="specs-grid">
                        {product.specifications.advantages.map((spec, i) => (
                          <div key={i} className="spec-item">
                            <div className="spec-icon advantage-icon">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                            <div className="spec-text">
                              <span>{spec}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Application Areas Section */}
        {product.applicationAreas && product.applicationAreas.length > 0 && (
          <section className="product-applications-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Application Areas</h2>
              <p className="product-section-subtitle">
                Discover where our {product.name} is applied across various industries and sectors
              </p>
              
              <div className="applications-grid">
                {product.applicationAreas.map((app) => (
                  <div
                    key={app.id}
                    className="application-card"
                    onMouseEnter={() => setHoveredApplication(app.id)}
                    onMouseLeave={() => setHoveredApplication(null)}
                  >
                    <div className="application-image">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="application-overlay" />
                    </div>
                    <div className="application-content">
                      <h3>{app.title}</h3>
                      <p>{app.description}</p>
                      {hoveredApplication === app.id && (
                        <div className="application-details">
                          <p>{app.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Our Projects Section */}
        {product.projects && product.projects.length > 0 && (
          <section className="product-projects-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Our Projects</h2>
              <p className="product-section-subtitle">
                See where our {product.name} has been successfully implemented in real-world projects
              </p>
              
              <div className="projects-grid">
                {product.projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <div className="project-info">
                      <div className="project-client">
                        <strong>Client:</strong> {project.client}
                      </div>
                      <div className="project-location">
                        <strong>Location:</strong> {project.location}
                      </div>
                      {project.quantity && (
                        <div className="project-quantity">
                          <strong>Quantity:</strong> {project.quantity}
                        </div>
                      )}
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Market Growth Section */}
        {product.marketGrowth && (
          <section className="product-market-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Market Growth</h2>
              <p className="product-section-subtitle">
                Industry insights and growth projections for {product.name}
              </p>
              
              <div className="market-content">
                <div className="market-text">
                  <p className="market-intro">{product.marketGrowth.description}</p>
                  
                  {product.marketGrowth.cagr && (
                    <div className="market-cagr-badge">
                      <div className="cagr-icon">📈</div>
                      <div className="cagr-content">
                        <div className="cagr-label">CAGR</div>
                        <div className="cagr-value">{product.marketGrowth.cagr}</div>
                      </div>
                    </div>
                  )}

                  {product.marketGrowth.growthFactors && (
                    <div className="growth-factors">
                      <h3>Key Growth Factors</h3>
                      <div className="factors-grid">
                        {product.marketGrowth.growthFactors.map((factor, i) => (
                          <div key={i} className="factor-item">
                            <div className="factor-icon">→</div>
                            <span>{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="market-visual">
                  <div className="market-chart-container">
                    <div className="chart-header">
                      <h3>Market Growth Projection</h3>
                      <p>2023 - 2036</p>
                    </div>
                    
                    <div className="chart-wrapper">
                      {/* Bar Chart */}
                      <div className="bar-chart">
                        <div className="chart-bars">
                          <div className="chart-bar-item">
                            <div className="bar-label">{product.marketGrowth.currentMarket.year}</div>
                            <div className="bar-container">
                              <div className="bar bar-2023" style={{ height: '35%' }}>
                                <div className="bar-value">{product.marketGrowth.currentMarket.value}</div>
                              </div>
                            </div>
                          </div>
                          <div className="chart-bar-item">
                            <div className="bar-label">{product.marketGrowth.projectedMarket.year}</div>
                            <div className="bar-container">
                              <div className="bar bar-2036" style={{ height: '100%' }}>
                                <div className="bar-value">{product.marketGrowth.projectedMarket.value}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Line Chart Overlay */}
                      <div className="line-chart">
                        <svg className="growth-line" viewBox="0 0 200 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#C9A24D" />
                              <stop offset="100%" stopColor="#74060D" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 20 80 Q 60 70, 100 50 T 180 20"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="growth-path"
                          />
                        </svg>
                      </div>

                      {/* Data Points */}
                      <div className="chart-data-points">
                        <div className="data-point point-2023">
                          <div className="point-marker"></div>
                          <div className="point-info">
                            <div className="point-year">{product.marketGrowth.currentMarket.year}</div>
                            <div className="point-value">{product.marketGrowth.currentMarket.value}</div>
                          </div>
                        </div>
                        <div className="data-point point-2036">
                          <div className="point-marker"></div>
                          <div className="point-info">
                            <div className="point-year">{product.marketGrowth.projectedMarket.year}</div>
                            <div className="point-value">{product.marketGrowth.projectedMarket.value}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="chart-footer">
                      <div className="chart-legend">
                        <div className="legend-item">
                          <div className="legend-color" style={{ background: '#C9A24D' }}></div>
                          <span>Current Market</span>
                        </div>
                        <div className="legend-item">
                          <div className="legend-color" style={{ background: '#74060D' }}></div>
                          <span>Projected Market</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Visualizations Grid */}
              {product.marketGrowth && (
                <div className="market-visualizations-grid">
                  {/* Market Segmentation Pie Chart */}
                  {product.marketGrowth.marketSegmentation && (
                    <div className="visualization-card">
                      <div className="viz-header">
                        <h3>Market by Application</h3>
                        <p>2023 Market Share</p>
                      </div>
                      <div className="pie-chart-container">
                        <svg className="pie-chart" viewBox="0 0 200 200">
                          <defs>
                            {product.marketGrowth.marketSegmentation.map((segment, i) => (
                              <linearGradient key={i} id={`pieGradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={segment.color} stopOpacity="1" />
                                <stop offset="100%" stopColor={segment.color} stopOpacity="0.7" />
                              </linearGradient>
                            ))}
                          </defs>
                          {(() => {
                            let currentAngle = -90;
                            const total = product.marketGrowth.marketSegmentation.reduce((sum, s) => sum + s.value, 0);
                            return product.marketGrowth.marketSegmentation.map((segment, i) => {
                              const percentage = (segment.value / total) * 100;
                              const angle = (segment.value / total) * 360;
                              const startAngle = currentAngle;
                              const endAngle = currentAngle + angle;
                              const largeArc = angle > 180 ? 1 : 0;
                              
                              const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                              const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                              const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
                              const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
                              
                              const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;
                              
                              currentAngle = endAngle;
                              
                              return (
                                <path
                                  key={i}
                                  d={pathData}
                                  fill={`url(#pieGradient${i})`}
                                  className="pie-segment"
                                  style={{ transition: 'all 0.3s ease' }}
                                />
                              );
                            });
                          })()}
                          <circle cx="100" cy="100" r="50" fill="rgba(116, 6, 13, 0.9)" />
                          <text x="100" y="95" textAnchor="middle" fill="#F7F3EA" fontSize="18" fontWeight="700">
                            Market
                          </text>
                          <text x="100" y="115" textAnchor="middle" fill="#C9A24D" fontSize="14" fontWeight="600">
                            Share
                          </text>
                        </svg>
                        <div className="pie-legend">
                          {product.marketGrowth.marketSegmentation.map((segment, i) => (
                            <div key={i} className="pie-legend-item">
                              <div className="pie-legend-color" style={{ background: segment.color }}></div>
                              <span className="pie-legend-label">{segment.label}</span>
                              <span className="pie-legend-value">{segment.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Regional Distribution Pie Chart */}
                  {product.marketGrowth.regionalDistribution && (
                    <div className="visualization-card">
                      <div className="viz-header">
                        <h3>Regional Distribution</h3>
                        <p>Global Market Share</p>
                      </div>
                      <div className="pie-chart-container">
                        <svg className="pie-chart" viewBox="0 0 200 200">
                          <defs>
                            {product.marketGrowth.regionalDistribution.map((region, i) => (
                              <linearGradient key={i} id={`regionGradient${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={region.color} stopOpacity="1" />
                                <stop offset="100%" stopColor={region.color} stopOpacity="0.7" />
                              </linearGradient>
                            ))}
                          </defs>
                          {(() => {
                            let currentAngle = -90;
                            const total = product.marketGrowth.regionalDistribution.reduce((sum, r) => sum + r.value, 0);
                            return product.marketGrowth.regionalDistribution.map((region, i) => {
                              const angle = (region.value / total) * 360;
                              const startAngle = currentAngle;
                              const endAngle = currentAngle + angle;
                              const largeArc = angle > 180 ? 1 : 0;
                              
                              const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                              const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                              const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
                              const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
                              
                              const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;
                              
                              currentAngle = endAngle;
                              
                              return (
                                <path
                                  key={i}
                                  d={pathData}
                                  fill={`url(#regionGradient${i})`}
                                  className="pie-segment"
                                />
                              );
                            });
                          })()}
                          <circle cx="100" cy="100" r="50" fill="rgba(116, 6, 13, 0.9)" />
                          <text x="100" y="95" textAnchor="middle" fill="#F7F3EA" fontSize="16" fontWeight="700">
                            Global
                          </text>
                          <text x="100" y="115" textAnchor="middle" fill="#C9A24D" fontSize="14" fontWeight="600">
                            Market
                          </text>
                        </svg>
                        <div className="pie-legend">
                          {product.marketGrowth.regionalDistribution.map((region, i) => (
                            <div key={i} className="pie-legend-item">
                              <div className="pie-legend-color" style={{ background: region.color }}></div>
                              <span className="pie-legend-label">{region.region}</span>
                              <span className="pie-legend-value">{region.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Year-over-Year Growth Area Chart */}
                  {product.marketGrowth.yearlyGrowth && (
                    <div className="visualization-card">
                      <div className="viz-header">
                        <h3>Year-over-Year Growth</h3>
                        <p>Market Value (USD Billion)</p>
                      </div>
                      <div className="area-chart-container">
                        <svg className="area-chart" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
                          <defs>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#74060D" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          {(() => {
                            const maxValue = Math.max(...product.marketGrowth.yearlyGrowth.map(d => d.value));
                            const points = product.marketGrowth.yearlyGrowth.map((data, i) => {
                              const x = 40 + (i * (320 / (product.marketGrowth.yearlyGrowth.length - 1)));
                              const y = 200 - ((data.value / maxValue) * 160);
                              return `${x},${y}`;
                            }).join(' ');
                            
                            const areaPath = `M 40,200 L ${points} L ${40 + (product.marketGrowth.yearlyGrowth.length - 1) * (320 / (product.marketGrowth.yearlyGrowth.length - 1))},200 Z`;
                            
                            return (
                              <>
                                <path d={areaPath} fill="url(#areaGradient)" className="area-path" />
                                <polyline
                                  points={points}
                                  fill="none"
                                  stroke="#C9A24D"
                                  strokeWidth="3"
                                  className="area-line"
                                />
                                {product.marketGrowth.yearlyGrowth.map((data, i) => {
                                  const x = 40 + (i * (320 / (product.marketGrowth.yearlyGrowth.length - 1)));
                                  const y = 200 - ((data.value / maxValue) * 160);
                                  return (
                                    <g key={i}>
                                      <circle cx={x} cy={y} r="5" fill="#74060D" className="area-point" />
                                      <text x={x} y={y - 15} textAnchor="middle" fill="#C9A24D" fontSize="10" fontWeight="600">
                                        {data.value}
                                      </text>
                                      <text x={x} y={230} textAnchor="middle" fill="#E6D3A3" fontSize="9" fontWeight="500">
                                        {data.year}
                                      </text>
                                    </g>
                                  );
                                })}
                              </>
                            );
                          })()}
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Market Share by Company Type */}
                  {product.marketGrowth.marketShare && (
                    <div className="visualization-card">
                      <div className="viz-header">
                        <h3>Market Share by Company</h3>
                        <p>Industry Distribution</p>
                      </div>
                      <div className="market-share-container">
                        {product.marketGrowth.marketShare.map((item, i) => (
                          <div key={i} className="market-share-item">
                            <div className="market-share-header">
                              <span className="market-share-label">{item.type}</span>
                              <span className="market-share-percentage">{item.share}%</span>
                            </div>
                            <div className="market-share-bar">
                              <div 
                                className="market-share-fill" 
                                style={{ 
                                  width: `${item.share}%`,
                                  background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Testing Video Section */}
        {product.testingVideo && product.testingVideo.youtubeId && (
          <section className="product-testing-video-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Product Testing & Quality Assurance</h2>
              <p className="product-section-subtitle">
                {product.testingVideo.description || "Watch our comprehensive testing procedures and quality assurance processes"}
              </p>
              
              <div className="testing-video-container">
                <div className="video-wrapper">
                  <div className="video-embed">
                    <iframe
                      src={`https://www.youtube.com/embed/${product.testingVideo.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                      title={product.testingVideo.title || "Product Testing Video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="youtube-iframe"
                    />
                  </div>
                  <div className="video-overlay-decoration"></div>
                </div>
                <div className="video-info">
                  <h3>{product.testingVideo.title || "Quality Testing Procedures"}</h3>
                  <p>Our rigorous testing protocols ensure that every product meets international quality standards and exceeds customer expectations.</p>
                  <div className="video-features">
                    <div className="video-feature-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>ISO Certified Testing</span>
                    </div>
                    <div className="video-feature-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Quality Assurance</span>
                    </div>
                    <div className="video-feature-item">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>Performance Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Manufacturing Process Section */}
        {product.manufacturingProcess && product.manufacturingProcess.length > 0 && (
          <section className="product-manufacturing-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Manufacturing Process</h2>
              <p className="product-section-subtitle">
                Our {product.name} undergoes a meticulous manufacturing process, ensuring precision, durability, and adherence to stringent quality standards.
              </p>
              
              <div className="manufacturing-steps">
                {product.manufacturingProcess.map((step, index) => {
                  const isVisible = visibleSteps.has(index);
                  return (
                    <div
                      key={index}
                      ref={(el) => { 
                        if (stepRefs.current) {
                          stepRefs.current[index] = el;
                        }
                      }}
                      data-step-index={index}
                      className={`manufacturing-step ${isVisible ? 'visible' : ''}`}
                    >
                      <div className="step-connector"></div>
                      <div className="step-number-wrapper">
                        <div className="step-number">{step.step}</div>
                        <div className="step-number-glow"></div>
                      </div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Proof Section - Factory Images & Certificates */}
        <section className="product-proof-section">
          <div className="product-section-container">
            <h2 className="product-section-title">Factory & Quality Proof</h2>
            <p className="product-section-subtitle">
              See our manufacturing facility and quality certifications that ensure premium product quality
            </p>

            {/* Factory Images Gallery */}
            <div className="proof-factory-gallery">
              <div className="factory-gallery-header">
                <h3>Our Manufacturing Facility</h3>
                <p>State-of-the-art production facility ensuring consistent quality</p>
              </div>
              <div className="factory-images-grid">
                <div className="factory-image-card">
                  <div className="factory-image-wrapper">
                    <Image
                      src="/assets/gallery-manufacturing-facility.jpg"
                      alt="Manufacturing Facility"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="factory-image-overlay">
                      <span className="factory-image-label">Production Facility</span>
                    </div>
                  </div>
                </div>
                <div className="factory-image-card">
                  <div className="factory-image-wrapper">
                    <Image
                      src="/assets/gallery-production-line.jpg"
                      alt="Production Line"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="factory-image-overlay">
                      <span className="factory-image-label">Production Line</span>
                    </div>
                  </div>
                </div>
                <div className="factory-image-card">
                  <div className="factory-image-wrapper">
                    <Image
                      src="/assets/gallery-quality-control.jpg"
                      alt="Quality Control"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="factory-image-overlay">
                      <span className="factory-image-label">Quality Control</span>
                    </div>
                  </div>
                </div>
                <div className="factory-image-card">
                  <div className="factory-image-wrapper">
                    <Image
                      src="/assets/gallery-warehouse.jpg"
                      alt="Warehouse"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="factory-image-overlay">
                      <span className="factory-image-label">Warehouse Facility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="proof-certificates">
              <div className="certificates-header">
                <h3>Quality Certifications</h3>
                <p>Internationally recognized certifications and quality standards</p>
              </div>
              <div className="certificates-grid">
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h4>ISO 9001:2015</h4>
                  <p>Quality Management System Certification</p>
                  <button 
                    className="certificate-view-btn"
                    onClick={() => window.open('/certificates/iso-9001-2015.pdf', '_blank')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Certificate
                  </button>
                </div>
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4>Quality Assurance</h4>
                  <p>Comprehensive Quality Control Standards</p>
                  <button 
                    className="certificate-view-btn"
                    onClick={() => window.open('/certificates/quality-assurance.pdf', '_blank')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Certificate
                  </button>
                </div>
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h4>Export License</h4>
                  <p>Authorized Export to 15+ Countries</p>
                  <button 
                    className="certificate-view-btn"
                    onClick={() => window.open('/certificates/export-license.pdf', '_blank')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Certificate
                  </button>
                </div>
                <div className="certificate-card">
                  <div className="certificate-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <h4>Environmental Compliance</h4>
                  <p>Eco-Friendly Manufacturing Standards</p>
                  <button 
                    className="certificate-view-btn"
                    onClick={() => window.open('/certificates/environmental-compliance.pdf', '_blank')}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories Section */}
        <section className="product-success-stories-section">
          <div className="product-section-container">
            <h2 className="product-section-title">Customer Success Stories</h2>
            <p className="product-section-subtitle">
              Real results from satisfied customers who chose {product.name}
            </p>
            
            <div className="success-stories-grid">
              <div className="success-story-card">
                <div className="story-header">
                  <div className="story-company-logo">
                    <Image
                      src="/assets/brand-logos/ntpc%20logo.png"
                      alt="NTPC"
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="story-meta">
                    <h3>NTPC Power Plant Project</h3>
                    <p className="story-location">Bongaigaon, Assam</p>
                  </div>
                </div>
                <div className="story-content">
                  <div className="story-stats">
                    <div className="story-stat">
                      <div className="story-stat-value">15,000L</div>
                      <div className="story-stat-label">Quantity Supplied</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">5+</div>
                      <div className="story-stat-label">Years Protection</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">100%</div>
                      <div className="story-stat-label">Satisfaction</div>
                    </div>
                  </div>
                  <p className="story-quote">
                    &quot;YNM&apos;s Industrial Enamel Paint provided exceptional protection for our power generation equipment. 
                    The paint has withstood extreme temperatures and harsh industrial conditions for over 5 years with minimal maintenance.&quot;
                  </p>
                  <div className="story-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A24D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="success-story-card">
                <div className="story-header">
                  <div className="story-company-logo">
                    <Image
                      src="/assets/brand-logos/prestige%20logo.webp"
                      alt="Prestige Group"
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="story-meta">
                    <h3>Prestige Group Residential</h3>
                    <p className="story-location">Bangalore, Karnataka</p>
                  </div>
                </div>
                <div className="story-content">
                  <div className="story-stats">
                    <div className="story-stat">
                      <div className="story-stat-value">30,000L</div>
                      <div className="story-stat-label">Quantity Supplied</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">10+</div>
                      <div className="story-stat-label">Years Warranty</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">500+</div>
                      <div className="story-stat-label">Units Protected</div>
                    </div>
                  </div>
                  <p className="story-quote">
                    &quot;The Exterior Weather Coat has maintained its beautiful finish and protective properties for over 5 years. 
                    Our residents are extremely satisfied with the quality and appearance.&quot;
                  </p>
                  <div className="story-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A24D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="success-story-card">
                <div className="story-header">
                  <div className="story-company-logo">
                    <Image
                      src="/assets/brand-logos/Tech%20Mahindra%20logo.jpg"
                      alt="Tech Mahindra"
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="story-meta">
                    <h3>Tech Mahindra Campus</h3>
                    <p className="story-location">Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="story-content">
                  <div className="story-stats">
                    <div className="story-stat">
                      <div className="story-stat-value">8,000L</div>
                      <div className="story-stat-label">Quantity Supplied</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">ISO</div>
                      <div className="story-stat-label">Certified</div>
                    </div>
                    <div className="story-stat">
                      <div className="story-stat-value">24/7</div>
                      <div className="story-stat-label">Protection</div>
                    </div>
                  </div>
                  <p className="story-quote">
                    &quot;YNM&apos;s paint solutions provided excellent protection for our IT infrastructure. 
                    The quality and service exceeded our expectations, and the paint continues to perform excellently.&quot;
                  </p>
                  <div className="story-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#C9A24D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="product-cta-section">
          <div className="product-cta-container">
            <h2>Interested in {product.name}?</h2>
            <p>Contact us for quotes, technical specifications, and custom solutions</p>
            <div className="product-cta-buttons">
              <Link href="/contact" className="product-cta-btn primary">
                Get Quote
              </Link>
              <Link href="/contact" className="product-cta-btn secondary">
                Download Catalogue
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="product-section-container">
              <h2 className="product-section-title">Related Products</h2>
              <p className="product-section-subtitle">
                Discover other top-quality products from our range
              </p>
              
              <div className="related-products-grid">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="related-product-card"
                  >
                    <div className="related-product-image">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="related-product-content">
                      <h3>{relatedProduct.name}</h3>
                      <p>{relatedProduct.shortDesc || relatedProduct.desc}</p>
                      <span className="related-product-link">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />

      <style jsx>{`
        .product-detail-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
          padding-top: 100px;
        }

        /* Breadcrumb */
        .product-breadcrumb {
          padding: 20px 0;
          background: rgba(116, 6, 13, 0.05);
          border-bottom: 1px solid #E6D3A3;
        }

        .product-breadcrumb-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
        }

        .product-breadcrumb-content a {
          color: #9A1B2E;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .product-breadcrumb-content a:hover {
          color: #74060D;
        }

        .product-breadcrumb-content span {
          color: #C9A24D;
        }

        /* Hero Section */
        .product-hero-section {
          position: relative;
          min-height: 500px;
          margin-bottom: 60px;
        }

        .product-hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .product-hero-image {
          position: relative;
          height: 500px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.2);
        }

        .product-carousel-image {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .product-carousel-image.active {
          opacity: 1;
          z-index: 1;
        }

        .product-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.3) 0%, transparent 50%);
          z-index: 2;
          pointer-events: none;
        }

        .product-carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
          padding: 10px 15px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 25px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
          margin: 0;
        }

        .carousel-dot:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        .carousel-dot.active {
          background: #C9A24D;
          border-color: #E6D3A3;
          width: 30px;
          border-radius: 5px;
        }

        .product-hero-content {
          padding: 40px 0;
        }

        .product-hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #74060D;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        .product-hero-description {
          font-size: 18px;
          color: #5a4a4a;
          line-height: 1.8;
          margin: 0 0 30px;
        }

        .product-hero-stats {
          display: flex;
          gap: 30px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 800;
          color: #C9A24D;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #9A1B2E;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Section Container */
        .product-section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .product-section-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
          text-align: center;
        }

        .product-section-subtitle {
          font-size: 18px;
          color: #5a4a4a;
          text-align: center;
          margin: 0 0 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Description Section */
        .product-description-section {
          padding: 80px 0;
          background: white;
        }

        .product-description-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .product-description-content p {
          font-size: 18px;
          line-height: 1.9;
          color: #1a2744;
          margin: 0;
        }

        /* Pricing Section */
        .product-pricing-section {
          padding: 80px 0;
          background: white;
        }

        .currency-selector-wrapper {
          max-width: 1000px;
          margin: 0 auto 50px;
        }

        .currency-selector {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          padding: 30px;
          border-radius: 20px;
          border: 2px solid #E6D3A3;
        }

        .currency-selector label {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #74060D;
          margin-bottom: 16px;
        }

        .currency-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .currency-btn {
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          color: #9A1B2E;
          background: white;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .currency-btn:hover {
          border-color: #C9A24D;
          transform: translateY(-2px);
        }

        .currency-btn.active {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: #F7F3EA;
          border-color: #C9A24D;
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.3);
        }

        .pricing-packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 50px;
        }

        .pricing-package-card {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 30px;
          border: 2px solid #E6D3A3;
          transition: all 0.4s ease;
          text-align: center;
        }

        .pricing-package-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .package-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 2px solid #E6D3A3;
        }

        .package-size {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
        }

        .package-moq {
          font-size: 12px;
          color: #9A1B2E;
          font-weight: 600;
        }

        .package-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 4px;
          margin-bottom: 12px;
        }

        .price-currency {
          font-size: 20px;
          font-weight: 700;
          color: #C9A24D;
        }

        .price-amount {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
        }

        .price-unit {
          font-size: 14px;
          color: #9A1B2E;
          font-weight: 600;
        }

        .package-total {
          font-size: 14px;
          color: #5a4a4a;
          margin-bottom: 20px;
        }

        .package-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .package-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #1a2744;
        }

        .package-feature svg {
          color: #C9A24D;
          flex-shrink: 0;
        }

        .stock-availability {
          margin-top: 40px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 30px;
          border: 2px solid #E6D3A3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .stock-indicator {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stock-status {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          background: white;
          border-radius: 30px;
          border: 2px solid #C9A24D;
        }

        .stock-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .stock-status span {
          font-size: 14px;
          font-weight: 700;
          color: #74060D;
        }

        .stock-info {
          font-size: 14px;
          color: #5a4a4a;
        }

        .stock-info strong {
          color: #9A1B2E;
        }

        .stock-actions {
          display: flex;
          gap: 12px;
        }

        .stock-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          border-radius: 30px;
          border: 2px solid;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stock-btn.primary {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: #F7F3EA;
          border-color: #C9A24D;
        }

        .stock-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.4);
        }

        .stock-btn.secondary {
          background: transparent;
          color: #9A1B2E;
          border-color: #9A1B2E;
        }

        .stock-btn.secondary:hover {
          background: #9A1B2E;
          color: #F7F3EA;
        }

        /* Global Availability Section */
        .product-availability-section {
          padding: 80px 0;
          background: white;
        }

        .availability-map-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .availability-regions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .region-card {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 30px;
          border: 2px solid #E6D3A3;
          transition: all 0.4s ease;
        }

        .region-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .region-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .region-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 20px;
        }

        .region-countries {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .country-tag {
          padding: 8px 16px;
          background: white;
          border: 1px solid #E6D3A3;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #9A1B2E;
          transition: all 0.3s ease;
        }

        .country-tag:hover {
          background: #C9A24D;
          color: #74060D;
          border-color: #C9A24D;
          transform: scale(1.05);
        }

        .availability-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .availability-stat {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          color: #F7F3EA;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 800;
          color: #C9A24D;
          margin-bottom: 8px;
        }

        .stat-text {
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Detailed Specifications Section */
        .product-detailed-specs-section {
          padding: 80px 0;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
        }

        .detailed-specs-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .detailed-specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .detailed-spec-item {
          background: white;
          border-radius: 16px;
          padding: 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border: 2px solid #E6D3A3;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(116, 6, 13, 0.08);
        }

        .detailed-spec-item:hover {
          transform: translateY(-4px);
          border-color: #C9A24D;
          box-shadow: 0 12px 40px rgba(116, 6, 13, 0.15);
        }

        .spec-item-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          border-radius: 12px;
          color: #74060D;
        }

        .detailed-spec-item:hover .spec-item-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(201, 162, 77, 0.3);
        }

        .spec-item-content {
          flex: 1;
        }

        .spec-item-label {
          font-size: 13px;
          font-weight: 600;
          color: #9A1B2E;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .spec-item-value {
          font-size: 16px;
          font-weight: 700;
          color: #1a2744;
          line-height: 1.5;
        }

        /* Specifications Section */
        .product-specs-section {
          padding: 80px 0;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
        }

        .specs-tabs-wrapper {
          margin-bottom: 50px;
        }

        .specs-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          background: white;
          padding: 12px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(116, 6, 13, 0.08);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .specs-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 28px;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #9A1B2E;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
          min-width: 180px;
        }

        .specs-tab:hover {
          background: rgba(201, 162, 77, 0.1);
          color: #74060D;
        }

        .specs-tab.active {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: #F7F3EA;
          border-color: #C9A24D;
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.3);
        }

        .specs-tab svg {
          width: 20px;
          height: 20px;
        }

        .specs-content-wrapper {
          background: white;
          border-radius: 24px;
          box-shadow: 0 15px 50px rgba(116, 6, 13, 0.15);
          overflow: hidden;
          border: 2px solid #E6D3A3;
        }

        .specs-image-container {
          position: relative;
          height: 350px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1), rgba(201, 162, 77, 0.1));
        }

        .specs-image {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .specs-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.2) 0%, transparent 50%);
        }

        .specs-image-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(201, 162, 77, 0.95);
          color: #74060D;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          backdrop-filter: blur(10px);
          z-index: 2;
        }

        .specs-list-container {
          padding: 50px;
        }

        .specs-list-header {
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #C9A24D;
        }

        .specs-list-header h3 {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
          margin: 0;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .spec-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.03), rgba(201, 162, 77, 0.03));
          border-radius: 16px;
          border: 2px solid #E6D3A3;
          transition: all 0.3s ease;
        }

        .spec-item:hover {
          transform: translateX(8px);
          border-color: #C9A24D;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.08), rgba(201, 162, 77, 0.08));
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.1);
        }

        .spec-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          border-radius: 12px;
          color: #74060D;
        }

        .spec-icon.feature-icon {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: #C9A24D;
        }

        .spec-icon.advantage-icon {
          background: linear-gradient(135deg, #9A1B2E, #C9A24D);
          color: #F7F3EA;
        }

        .spec-text {
          flex: 1;
        }

        .spec-text span {
          font-size: 15px;
          line-height: 1.7;
          color: #1a2744;
          display: block;
        }

        /* Application Areas Section */
        .product-applications-section {
          padding: 80px 0;
          background: white;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .application-card {
          position: relative;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .application-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .application-image {
          position: relative;
          height: 250px;
        }

        .application-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(116, 6, 13, 0.7) 100%);
        }

        .application-content {
          padding: 30px;
          position: relative;
        }

        .application-content h3 {
          font-size: 22px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .application-content > p {
          font-size: 15px;
          color: #5a4a4a;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .application-details {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 2px solid #E6D3A3;
        }

        .application-details p {
          font-size: 14px;
          color: #1a2744;
          line-height: 1.8;
          margin: 0;
        }

        /* Projects Section */
        .product-projects-section {
          padding: 80px 0;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.15);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 2px solid #E6D3A3;
        }

        .project-header h3 {
          font-size: 22px;
          font-weight: 700;
          color: #74060D;
          margin: 0;
        }

        .project-year {
          font-size: 14px;
          font-weight: 600;
          color: #C9A24D;
          background: rgba(201, 162, 77, 0.1);
          padding: 6px 14px;
          border-radius: 20px;
        }

        .project-info {
          margin-bottom: 16px;
        }

        .project-info div {
          font-size: 14px;
          color: #5a4a4a;
          margin-bottom: 8px;
        }

        .project-info strong {
          color: #9A1B2E;
          font-weight: 600;
        }

        .project-description {
          font-size: 15px;
          line-height: 1.7;
          color: #1a2744;
          margin: 0;
        }

        /* Market Growth Section */
        .product-market-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: white;
        }

        .product-market-section .product-section-title {
          color: #F7F3EA;
        }

        .product-market-section .product-section-subtitle {
          color: #E6D3A3;
        }

        .market-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        .market-text {
          color: #E6D3A3;
        }

        .market-intro {
          font-size: 18px;
          line-height: 1.9;
          margin: 0 0 40px;
        }

        .market-cagr-badge {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          border: 2px solid rgba(201, 162, 77, 0.3);
          margin-bottom: 40px;
        }

        .cagr-icon {
          font-size: 48px;
        }

        .cagr-content {
          flex: 1;
        }

        .cagr-label {
          font-size: 14px;
          font-weight: 600;
          color: #C9A24D;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .cagr-value {
          font-size: 32px;
          font-weight: 800;
          color: #F7F3EA;
        }

        .growth-factors {
          margin-bottom: 30px;
        }

        .growth-factors h3 {
          font-size: 24px;
          font-weight: 700;
          color: #F7F3EA;
          margin: 0 0 24px;
        }

        .factors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        .factor-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          line-height: 1.6;
          color: #E6D3A3;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          border: 1px solid rgba(201, 162, 77, 0.2);
          transition: all 0.3s ease;
        }

        .factor-item:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(201, 162, 77, 0.4);
          transform: translateX(5px);
        }

        .factor-icon {
          font-size: 20px;
          color: #C9A24D;
          font-weight: 700;
        }

        .market-visual {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 24px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(201, 162, 77, 0.2);
        }

        .market-chart-container {
          width: 100%;
        }

        .chart-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(201, 162, 77, 0.3);
        }

        .chart-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #F7F3EA;
          margin: 0 0 8px;
        }

        .chart-header p {
          font-size: 14px;
          color: #C9A24D;
          margin: 0;
          font-weight: 600;
        }

        .chart-wrapper {
          position: relative;
          height: 400px;
          margin-bottom: 30px;
        }

        .bar-chart {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 300px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 60px;
          padding: 0 40px;
        }

        .chart-bar-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 200px;
        }

        .bar-label {
          font-size: 14px;
          font-weight: 700;
          color: #C9A24D;
          margin-bottom: 12px;
        }

        .bar-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          position: relative;
        }

        .bar {
          width: 100%;
          border-radius: 12px 12px 0 0;
          position: relative;
          transition: height 1s ease;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
        }

        .bar-2023 {
          background: linear-gradient(180deg, #C9A24D 0%, #E6D3A3 100%);
          box-shadow: 0 -8px 25px rgba(201, 162, 77, 0.4);
        }

        .bar-2036 {
          background: linear-gradient(180deg, #74060D 0%, #9A1B2E 100%);
          box-shadow: 0 -8px 25px rgba(116, 6, 13, 0.4);
        }

        .bar-value {
          font-size: 12px;
          font-weight: 700;
          color: white;
          text-align: center;
          padding: 4px 8px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          backdrop-filter: blur(5px);
        }

        .line-chart {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .growth-line {
          width: 100%;
          height: 100%;
        }

        .growth-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        .chart-data-points {
          position: absolute;
          inset: 0;
        }

        .data-point {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .point-2023 {
          left: 15%;
          top: 65%;
        }

        .point-2036 {
          right: 15%;
          top: 15%;
        }

        .point-marker {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #C9A24D;
          border: 3px solid white;
          box-shadow: 0 0 0 4px rgba(201, 162, 77, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .point-2036 .point-marker {
          background: #74060D;
          box-shadow: 0 0 0 4px rgba(116, 6, 13, 0.3);
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .point-info {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          padding: 10px 16px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(201, 162, 77, 0.3);
        }

        .point-year {
          font-size: 12px;
          font-weight: 700;
          color: #C9A24D;
          margin-bottom: 4px;
        }

        .point-value {
          font-size: 11px;
          color: white;
          font-weight: 600;
        }

        .chart-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(201, 162, 77, 0.2);
        }

        .chart-legend {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #E6D3A3;
        }

        .legend-color {
          width: 20px;
          height: 20px;
          border-radius: 4px;
        }

        /* Additional Visualizations Grid */
        .market-visualizations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .visualization-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 30px;
          border: 2px solid rgba(201, 162, 77, 0.2);
          transition: all 0.4s ease;
        }

        .visualization-card:hover {
          transform: translateY(-5px);
          border-color: rgba(201, 162, 77, 0.4);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .viz-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid rgba(201, 162, 77, 0.3);
        }

        .viz-header h3 {
          font-size: 20px;
          font-weight: 700;
          color: #F7F3EA;
          margin: 0 0 8px;
        }

        .viz-header p {
          font-size: 13px;
          color: #C9A24D;
          margin: 0;
          font-weight: 600;
        }

        /* Pie Chart Styles */
        .pie-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }

        .pie-chart {
          width: 100%;
          max-width: 280px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }

        .pie-segment {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pie-segment:hover {
          opacity: 0.8;
          transform-origin: center;
        }

        .pie-legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .pie-legend-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 15px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          border: 1px solid rgba(201, 162, 77, 0.2);
          transition: all 0.3s ease;
        }

        .pie-legend-item:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateX(5px);
        }

        .pie-legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .pie-legend-label {
          flex: 1;
          font-size: 14px;
          color: #E6D3A3;
          font-weight: 500;
        }

        .pie-legend-value {
          font-size: 14px;
          color: #C9A24D;
          font-weight: 700;
        }

        /* Area Chart Styles */
        .area-chart-container {
          width: 100%;
          padding: 20px 0;
        }

        .area-chart {
          width: 100%;
          height: auto;
          max-height: 300px;
        }

        .area-path {
          transition: all 0.5s ease;
        }

        .area-line {
          transition: all 0.5s ease;
        }

        .area-point {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .area-point:hover {
          r: 7;
          fill: #C9A24D;
        }

        /* Market Share Styles */
        .market-share-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 20px 0;
        }

        .market-share-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .market-share-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .market-share-label {
          font-size: 14px;
          color: #E6D3A3;
          font-weight: 600;
        }

        .market-share-percentage {
          font-size: 16px;
          color: #C9A24D;
          font-weight: 700;
        }

        .market-share-bar {
          width: 100%;
          height: 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }

        .market-share-fill {
          height: 100%;
          border-radius: 6px;
          transition: width 1s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        /* Testing Video Section */
        .product-testing-video-section {
          padding: 80px 0;
          background: white;
        }

        .testing-video-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          align-items: center;
          margin-top: 40px;
        }

        .video-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.2);
          background: #000;
        }

        .video-embed {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .youtube-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-overlay-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1) 0%, transparent 50%);
          pointer-events: none;
          border-radius: 24px;
        }

        .video-info {
          padding: 20px 0;
        }

        .video-info h3 {
          font-size: 28px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 20px;
          line-height: 1.3;
        }

        .video-info > p {
          font-size: 16px;
          line-height: 1.8;
          color: #5a4a4a;
          margin: 0 0 30px;
        }

        .video-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .video-feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 12px;
          border: 2px solid #E6D3A3;
          transition: all 0.3s ease;
        }

        .video-feature-item:hover {
          transform: translateX(8px);
          border-color: #C9A24D;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1), rgba(201, 162, 77, 0.1));
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.1);
        }

        .video-feature-item svg {
          flex-shrink: 0;
          color: #C9A24D;
          width: 24px;
          height: 24px;
        }

        .video-feature-item span {
          font-size: 15px;
          font-weight: 600;
          color: #74060D;
        }

        /* Manufacturing Process Section */
        .product-manufacturing-section {
          padding: 80px 0;
          background: white;
        }

        .manufacturing-steps {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .manufacturing-steps::before {
          content: '';
          position: absolute;
          left: 60px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #C9A24D, #E6D3A3, #C9A24D);
          border-radius: 2px;
        }

        .manufacturing-step {
          position: relative;
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 40px;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .manufacturing-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .manufacturing-step:last-child {
          margin-bottom: 0;
        }

        .step-connector {
          position: absolute;
          left: 58px;
          top: 60px;
          bottom: -50px;
          width: 8px;
          background: linear-gradient(180deg, #C9A24D, transparent);
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
        }

        .manufacturing-step.visible .step-connector {
          opacity: 1;
        }

        .manufacturing-step:last-child .step-connector {
          display: none;
        }

        .step-number-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-number {
          position: relative;
          z-index: 2;
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          background: white;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 4px solid #C9A24D;
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.2);
          transition: all 0.5s ease;
        }

        .manufacturing-step.visible .step-number {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(201, 162, 77, 0.4);
        }

        .step-number-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201, 162, 77, 0.4), transparent 70%);
          opacity: 0;
          animation: glowPulse 2s ease-in-out infinite;
        }

        .manufacturing-step.visible .step-number-glow {
          opacity: 1;
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }

        .step-content {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          padding: 35px;
          border-radius: 20px;
          border: 2px solid #E6D3A3;
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .step-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 162, 77, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .manufacturing-step.visible .step-content::before {
          left: 100%;
        }

        .manufacturing-step.visible .step-content {
          border-color: #C9A24D;
          box-shadow: 0 12px 40px rgba(116, 6, 13, 0.15);
          transform: translateX(10px);
        }

        .step-content h3 {
          font-size: 24px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 16px;
          position: relative;
        }

        .step-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #1a2744;
          margin: 0;
          position: relative;
        }

        /* Animated Statistics Dashboard */
        .product-stats-dashboard-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          position: relative;
          overflow: hidden;
        }

        .product-stats-dashboard-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(201, 162, 77, 0.15) 0%, transparent 70%);
        }

        .stats-dashboard-wrapper {
          position: relative;
          z-index: 2;
        }

        .stats-dashboard-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .stats-dashboard-header h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 12px;
        }

        .stats-dashboard-header p {
          font-size: 18px;
          color: #E6D3A3;
          margin: 0;
        }

        .stats-dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px 30px;
          border: 2px solid rgba(201, 162, 77, 0.3);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(201, 162, 77, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .stat-card-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(201, 162, 77, 0.3), rgba(230, 211, 163, 0.3));
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .stat-card:hover .stat-card-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .stat-card-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          border-radius: 50%;
          color: #74060D;
          margin: 0 auto 24px;
          box-shadow: 0 8px 25px rgba(201, 162, 77, 0.4);
        }

        .stat-card:hover .stat-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .stat-card-content {
          text-align: center;
        }

        .stat-value {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #F7F3EA;
          margin-bottom: 12px;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: #E6D3A3;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Proof Section */
        .product-proof-section {
          padding: 80px 0;
          background: white;
        }

        .proof-factory-gallery {
          margin-bottom: 80px;
        }

        .factory-gallery-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .factory-gallery-header h3 {
          font-size: 32px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .factory-gallery-header p {
          font-size: 16px;
          color: #5a4a4a;
          margin: 0;
        }

        .factory-images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .factory-image-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.15);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .factory-image-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.25);
        }

        .factory-image-wrapper {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .factory-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(116, 6, 13, 0.7) 100%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .factory-image-card:hover .factory-image-overlay {
          opacity: 1;
        }

        .factory-image-label {
          color: #F7F3EA;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .proof-certificates {
          margin-top: 60px;
        }

        .certificates-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .certificates-header h3 {
          font-size: 32px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .certificates-header p {
          font-size: 16px;
          color: #5a4a4a;
          margin: 0;
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .certificate-card {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          border: 2px solid #E6D3A3;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .certificate-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.2);
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1), rgba(201, 162, 77, 0.1));
        }

        .certificate-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          border-radius: 50%;
          color: #74060D;
          margin-bottom: 24px;
          box-shadow: 0 8px 25px rgba(201, 162, 77, 0.3);
        }

        .certificate-card:hover .certificate-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(201, 162, 77, 0.4);
        }

        .certificate-card h4 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .certificate-card p {
          font-size: 14px;
          color: #5a4a4a;
          line-height: 1.6;
          margin: 0 0 24px;
          flex-grow: 1;
        }

        .certificate-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #74060D;
          background: #C9A24D;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .certificate-view-btn:hover {
          background: #E6D3A3;
          color: #9A1B2E;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(201, 162, 77, 0.4);
        }

        .certificate-view-btn svg {
          width: 18px;
          height: 18px;
        }

        /* Customer Success Stories Section */
        .product-success-stories-section {
          padding: 80px 0;
          background: white;
        }

        .success-stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .success-story-card {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 30px;
          border: 2px solid #E6D3A3;
          transition: all 0.4s ease;
        }

        .success-story-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .story-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 2px solid #E6D3A3;
        }

        .story-company-logo {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 0 4px 15px rgba(116, 6, 13, 0.1);
        }

        .story-meta h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 4px;
        }

        .story-location {
          font-size: 14px;
          color: #9A1B2E;
          font-weight: 600;
        }

        .story-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .story-stat {
          text-align: center;
          padding: 16px;
          background: white;
          border-radius: 12px;
          border: 1px solid #E6D3A3;
        }

        .story-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: #C9A24D;
          margin-bottom: 4px;
        }

        .story-stat-label {
          font-size: 11px;
          color: #9A1B2E;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .story-quote {
          font-size: 15px;
          line-height: 1.8;
          color: #1a2744;
          font-style: italic;
          margin: 0;
        }

        .story-rating {
          display: flex;
          gap: 4px;
        }

        /* CTA Section */
        .product-cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          text-align: center;
        }

        .product-cta-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .product-cta-container h2 {
          font-size: 36px;
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
        }

        .product-cta-container p {
          font-size: 18px;
          color: #E6D3A3;
          margin: 0 0 40px;
        }

        .product-cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .product-cta-btn {
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
        }

        .product-cta-btn.primary {
          background: #C9A24D;
          color: #74060D;
          border: 2px solid #E6D3A3;
        }

        .product-cta-btn.primary:hover {
          background: #E6D3A3;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(201, 162, 77, 0.4);
        }

        .product-cta-btn.secondary {
          background: transparent;
          color: #F7F3EA;
          border: 2px solid #E6D3A3;
        }

        .product-cta-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #C9A24D;
        }

        /* Related Products Section */
        .related-products-section {
          padding: 80px 0;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
        }

        .related-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .related-product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          text-decoration: none;
          transition: all 0.4s ease;
          display: block;
        }

        .related-product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .related-product-image {
          position: relative;
          height: 200px;
        }

        .related-product-content {
          padding: 24px;
        }

        .related-product-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .related-product-content p {
          font-size: 14px;
          color: #5a4a4a;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .related-product-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #9A1B2E;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .related-product-card:hover .related-product-link {
          color: #C9A24D;
          gap: 12px;
        }

        /* Loading & Not Found */
        .product-loading,
        .product-not-found {
          max-width: 600px;
          margin: 100px auto;
          text-align: center;
          padding: 60px 40px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.15);
        }

        .product-not-found h1 {
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 16px;
        }

        .product-not-found p {
          font-size: 16px;
          color: #5a4a4a;
          margin: 0 0 30px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 700;
          color: #9A1B2E;
          background: #F7F3EA;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: #E6D3A3;
          color: #74060D;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .product-hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .product-hero-image {
            height: 400px;
          }

          .specs-content-wrapper {
            display: flex;
            flex-direction: column;
          }

          .specs-image-container {
            height: 300px;
          }

          .specs-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }

          .detailed-specs-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
          }

          .market-content {
            grid-template-columns: 1fr;
          }

          .chart-wrapper {
            height: 350px;
          }

          .market-visualizations-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
          }

          .manufacturing-steps::before {
            left: 40px;
          }

          .manufacturing-step {
            grid-template-columns: 80px 1fr;
            gap: 30px;
          }

          .step-number {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .testing-video-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .factory-images-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .stats-dashboard-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .success-stories-grid {
            grid-template-columns: 1fr;
          }

          .currency-buttons {
            justify-content: center;
          }

          .pricing-packages-grid {
            grid-template-columns: 1fr;
          }

          .bulk-pricing-calculator {
            padding: 30px 20px;
          }

          .calculator-content {
            grid-template-columns: 1fr;
          }

          .stock-availability {
            flex-direction: column;
          }

          .stock-actions {
            width: 100%;
            flex-direction: column;
          }

          .stock-btn {
            width: 100%;
            justify-content: center;
          }

          .availability-regions {
            grid-template-columns: 1fr;
          }

          .availability-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .product-hero-section {
            margin-bottom: 40px;
          }

          .product-hero-image {
            height: 300px;
          }

          .product-hero-title {
            font-size: 32px;
          }

          .product-section-title {
            font-size: 28px;
          }

          .applications-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .market-figures {
            grid-template-columns: 1fr;
          }

          .specs-tabs {
            flex-direction: column;
          }

          .specs-tab {
            width: 100%;
          }

          .specs-grid {
            grid-template-columns: 1fr;
          }

          .detailed-specs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .detailed-spec-item {
            padding: 24px;
          }

          .factors-grid {
            grid-template-columns: 1fr;
          }

          .chart-wrapper {
            height: 300px;
          }

          .bar-chart {
            gap: 30px;
            padding: 0 20px;
          }

          .market-visualizations-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .visualization-card {
            padding: 25px;
          }

          .pie-chart {
            max-width: 240px;
          }

          .area-chart {
            max-height: 250px;
          }

          .testing-video-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .video-info h3 {
            font-size: 24px;
          }

          .video-info > p {
            font-size: 15px;
          }

          .manufacturing-steps::before {
            left: 30px;
          }

          .manufacturing-step {
            grid-template-columns: 60px 1fr;
            gap: 20px;
          }

          .step-number {
            width: 50px;
            height: 50px;
            font-size: 20px;
          }

          .step-connector {
            left: 28px;
          }

          .product-cta-buttons {
            flex-direction: column;
          }

          .product-cta-btn {
            width: 100%;
            justify-content: center;
          }

          .factory-images-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
          }

          .factory-image-wrapper {
            height: 240px;
          }

          .certificates-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 24px;
          }

          .certificate-card {
            padding: 30px 20px;
          }

          .factory-gallery-header h3,
          .certificates-header h3 {
            font-size: 28px;
          }

          .stats-dashboard-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stat-card {
            padding: 30px 20px;
          }

          .success-stories-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .story-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }

          .pricing-packages-grid {
            grid-template-columns: 1fr;
          }

          .calculator-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .stock-availability {
            flex-direction: column;
            align-items: flex-start;
          }

          .availability-regions {
            grid-template-columns: 1fr;
          }

          .availability-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
