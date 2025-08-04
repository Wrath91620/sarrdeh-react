import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import CTA from '../components/CTA.jsx';
import LightRays from '../components/LightRays.jsx';
import Particles from '../components/Particles.jsx';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [sortBy, setSortBy] = useState('Most Viewed');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Configuration
  const API_BASE_URL = 'https://www.sarrdeh-tech.com/wp-json/wp/v2';
  const API_ENDPOINTS = {
    posts: `${API_BASE_URL}/posts?_embed&per_page=20`,
    media: `${API_BASE_URL}/media?per_page=50`,
    categories: `${API_BASE_URL}/categories`,
    customPosts: `${API_BASE_URL}/project?_embed&per_page=20` // Updated to correct endpoint
  };

  // Sample data as fallback with WordPress API images
  const sampleProjects = [
    {
      id: 1,
      title: "Emergency Medical Training Center (EMTC)",
      category: "Education Training",
      service: "Sarrdeh Care",
      location: "Kingdom of Saudi Arabia",
      description: "Since 2002, the Emergency Medicine Center has been one of the leading medical training centers in Saudi Arabia. In 2023, the center began its digital transformation in collaboration with Sarrdeh, where we developed a new identity, an educational platform (LMS), a student app, and a website for courses and registration, in addition to managing social media.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/emtc-project.png",
      tags: ["Sarrdeh Care", "Sarrdeh Creative", "Sarrdeh Development", "Sarrdeh Marketing"],
      views: 1250,
      date: "2023-01-15T00:00:00",
      modified: "2023-12-01T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/emtc",
      slug: "emtc"
    },
    {
      id: 2,
      title: "A-Z for Medical Books and Supplies",
      category: "Books Publishing",
      service: "Sarrdeh Development",
      location: "Malaysia",
      description: "The project was established in 2017 as a medical books and supplies store in Malaysia, with worldwide shipping. The company aims to support medical education and practice for students and professionals, both in Malaysia and globally. Driven by a passion for providing high-quality medical resources, A-Z contributes to empowering the next generation of doctors and healthcare professionals.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/a-z-project.png",
      tags: ["Sarrdeh Care", "Sarrdeh Creative", "Sarrdeh Development", "Sarrdeh Marketing"],
      views: 980,
      date: "2017-06-20T00:00:00",
      modified: "2023-11-15T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/a-z-medical",
      slug: "a-z-medical"
    },
    {
      id: 3,
      title: "Team 1 for Healthcare and Emergency Medical Transport",
      category: "Education Training",
      service: "Sarrdeh Creative",
      location: "Kingdom of Saudi Arabia",
      description: "Since 2022, Team 1 has emerged as a leading provider of rapid ambulance services in Saudi Arabia, through a model built on technology and organization. At Sarda, we developed a fully integrated digital experience that included the website, a dispatch system for medical teams, a client-facing app, as well as visual identity, content, and comprehensive digital marketing.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/team1-project.png",
      tags: ["Sarrdeh Care", "Sarrdeh Creative", "Sarrdeh Development", "Sarrdeh Marketing"],
      views: 1100,
      date: "2022-03-10T00:00:00",
      modified: "2023-10-20T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/team-1",
      slug: "team-1"
    },
    {
      id: 4,
      title: "Eat Wise For Healthy Food",
      category: "Food Beverages",
      service: "Sarrdeh Creative",
      location: "Kingdom of Saudi Arabia",
      description: "Eat Wise is a Saudi application specializing in offering healthy, balanced, and delicious meals tailored to suit the modern lifestyle. The concept was launched with the aim of providing a safe and convenient daily option for individuals seeking nutritious meals without compromising on flavor or presentation.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/eatwise-project.png",
      tags: ["Sarrdeh Creative"],
      views: 850,
      date: "2023-08-15T00:00:00",
      modified: "2023-09-30T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/eat-wise",
      slug: "eat-wise"
    },
    {
      id: 5,
      title: "Oppolia Online for Designing and Manufacturing Integrated Home Solutions",
      category: "Design Decor",
      service: "Sarrdeh Development",
      location: "Kingdom of Saudi Arabia",
      description: "Oppolia Online is a digital initiative launched by Oppolia – Saudi Arabia in 2024, enabling customers to request a fully remote kitchen design session. At Sarda, we designed and developed the platform with a smart, user-friendly interface that offers a seamless experience — from filling out the form to payment and follow-up — serving as a comprehensive digital solution.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/oppolia-project.png",
      tags: ["Sarrdeh Care", "Sarrdeh Creative", "Sarrdeh Development"],
      views: 720,
      date: "2024-01-20T00:00:00",
      modified: "2024-01-25T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/oppolia",
      slug: "oppolia"
    },
    {
      id: 6,
      title: "Bliss - Luxury Hospitality Solutions",
      category: "Hospitality Tourism",
      service: "Sarrdeh Creative",
      location: "Kingdom of Saudi Arabia",
      description: "Bliss represents the pinnacle of luxury hospitality design and digital solutions. We created a comprehensive brand identity, website, and booking platform that reflects the premium nature of their services while ensuring seamless user experience for their high-end clientele.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/bliss-project.png",
      tags: ["Sarrdeh Creative", "Sarrdeh Development"],
      views: 650,
      date: "2023-05-10T00:00:00",
      modified: "2023-06-15T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/bliss",
      slug: "bliss"
    },
    {
      id: 7,
      title: "Cayan Group - Financial Services Platform",
      category: "Finance Insurance",
      service: "Sarrdeh Development",
      location: "Kingdom of Saudi Arabia",
      description: "Cayan Group needed a robust financial services platform that could handle complex transactions while maintaining security and user trust. We developed a comprehensive solution including web application, mobile app, and backend systems.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/cayan-project.png",
      tags: ["Sarrdeh Development", "Sarrdeh Marketing"],
      views: 890,
      date: "2023-03-20T00:00:00",
      modified: "2023-04-10T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/cayan-group",
      slug: "cayan-group"
    },
    {
      id: 8,
      title: "Atlas - Real Estate Development",
      category: "Real Estate Housing Services",
      service: "Sarrdeh Creative",
      location: "Kingdom of Saudi Arabia",
      description: "Atlas is a leading real estate development company. We created their complete digital presence including brand identity, website, property showcase platform, and marketing materials that highlight their premium developments.",
      image: "https://www.sarrdeh-tech.com/wp-content/uploads/2025/06/atlas-project.png",
      tags: ["Sarrdeh Creative", "Sarrdeh Marketing"],
      views: 750,
      date: "2023-07-15T00:00:00",
      modified: "2023-08-05T00:00:00",
      link: "https://www.sarrdeh-tech.com/en/projects/atlas",
      slug: "atlas"
    }
  ];

  const categories = [
    'All', 'Agriculture', 'Beauty Skincare', 'Books Publishing', 'Consulting Investments',
    'Design Decor', 'Education Training', 'Events Conferences', 'Fashion Art', 'Finance Insurance',
    'Fitness Wellness', 'Food Beverages', 'Fragrances', 'Healthcare Medical Services',
    'Hospitality Tourism', 'IOT', 'Marketing Agency', 'Nonprofit-Charity Organizations',
    'Real Estate Housing Services', 'Technology Tech Solutions'
  ];

  const services = ['All', 'Sarrdeh Care', 'Sarrdeh Creative', 'Sarrdeh Development', 'Sarrdeh Marketing'];
  const sortOptions = ['Most Viewed', 'Newest', 'Oldest'];

  // Service color mapping
  const getServiceColor = (service) => {
    switch (service) {
      case 'Sarrdeh Marketing':
        return '#F32735'; // Red
      case 'Sarrdeh Creative':
        return '#FFD100'; // Yellow
      case 'Sarrdeh Development':
        return '#57B6B2'; // Teal blue
      case 'Sarrdeh Care':
        return '#1E6390'; // Dark blue
      default:
        return '#57B6B2'; // Default teal
    }
  };

  // Extract image URL from WordPress API response
  const extractImageUrl = (post) => {
    // Check for featured media in embedded data
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      const media = post._embedded['wp:featuredmedia'][0];
      
      // Try different image sizes in order of preference
      if (media.media_details && media.media_details.sizes) {
        const sizes = media.media_details.sizes;
        return sizes.large?.source_url || 
               sizes.medium?.source_url || 
               sizes.thumbnail?.source_url || 
               media.source_url;
      }
      
      return media.source_url;
    }
    
    // Check for featured_media ID and try to construct URL
    if (post.featured_media) {
      return `${API_BASE_URL}/media/${post.featured_media}`;
    }
    
    // Extract image from content if no featured media
    const content = post.content?.rendered || '';
    const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      return imgMatch[1];
    }
    
    // Fallback to default image
    return "/images/default-project.webp";
  };

  // Transform WordPress API data to our project format
  const transformProjectData = (post) => {
    // Extract tags from categories or custom fields
    const tags = [];
    if (post._embedded && post._embedded['wp:term']) {
      post._embedded['wp:term'].forEach(termGroup => {
        termGroup.forEach(term => {
          if (term.taxonomy === 'post_tag' || term.taxonomy === 'category' || term.taxonomy === 'service') {
            tags.push(term.name);
          }
        });
      });
    }

    // Extract service tags from the service field
    const serviceTags = [];
    if (post.service && Array.isArray(post.service)) {
      // Map service IDs to service names (you might need to adjust these based on your WordPress setup)
      const serviceMap = {
        68: 'Sarrdeh Creative',
        67: 'Sarrdeh Development', 
        69: 'Sarrdeh Marketing',
        70: 'Sarrdeh Care',
        76: 'Print Design',
        80: 'Visual Identity & Branding'
      };
      
      post.service.forEach(serviceId => {
        if (serviceMap[serviceId]) {
          serviceTags.push(serviceMap[serviceId]);
        }
      });
    }

    // Extract domain/category
    let category = 'General';
    if (post._embedded && post._embedded['wp:term']) {
      const domainTerms = post._embedded['wp:term'].find(termGroup => 
        termGroup[0]?.taxonomy === 'domain'
      );
      if (domainTerms && domainTerms[0]) {
        category = domainTerms[0].name;
      }
    }

    // Translate Arabic content to English
    const translateContent = (arabicText) => {
      if (!arabicText) return '';
      
      // Remove HTML tags and decode entities
      const cleanText = arabicText.replace(/<[^>]*>/g, '').replace(/\\n/g, ' ');
      
      // Check if the text contains Arabic characters
      const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
      if (!arabicRegex.test(cleanText)) {
        // If no Arabic characters, return as is (might already be English)
        return cleanText;
      }
      
      // Simple Arabic to English translation mapping for common terms
      const translations = {
        'ايت وايز للاكل الصحي': 'Eat Wise For Healthy Food',
        'ايت وايز هو تطبيق سعودي متخصص في تقديم وجبات صحية': 'Eat Wise is a Saudi application specializing in offering healthy meals',
        'متوازنة ولذيذة': 'balanced and delicious',
        'مصممة لتناسب اسلوب الحياة العصري': 'tailored to suit the modern lifestyle',
        'مكتبة اي تو ز للكتب والادوات الطبية': 'A-Z for Medical Books and Supplies',
        'تأسس المشروع بسنة 2017': 'The project was established in 2017',
        'كمكتبة كتب وادوات طبية في ماليزيا': 'as a medical books and supplies store in Malaysia',
        'مع شحن لجميع انحاء العالم': 'with worldwide shipping',
        'تهدف الشركة الى دعم التعليم الطبي': 'The company aims to support medical education',
        'والممارسة للطلاب والمتخصصين': 'and practice for students and professionals',
        'سواء في ماليزيا او حول العالم': 'both in Malaysia and globally',
        'مركز الطوارئ الطبية': 'Emergency Medical Training Center',
        'منذ 2002': 'Since 2002',
        'كان مركز الطوارئ الطبية': 'the Emergency Medicine Center has been',
        'واحدا من المراكز الرائدة': 'one of the leading centers',
        'في التدريب الطبي في السعودية': 'in medical training in Saudi Arabia',
        'في 2023 بدأ المركز تحوله الرقمي': 'In 2023, the center began its digital transformation',
        'بالتعاون مع سردة': 'in collaboration with Sarrdeh',
        'حيث طورنا هوية جديدة': 'where we developed a new identity',
        'منصة تعليمية': 'educational platform',
        'تطبيق للطلاب': 'student app',
        'وموقع للدورات والتسجيل': 'and a website for courses and registration',
        'بالإضافة الى ادارة وسائل التواصل الاجتماعي': 'in addition to managing social media',
        'اوبوليا أونلاين لتصميم و تصنيع حلول المنزل المتكاملة': 'Oppolia Online for Designing and Manufacturing Integrated Home Solutions',
        'تأسس المشروع بسنة 2024': 'The project was established in 2024',
        'كمبادرة رقمية أطلقتها اوبوليا': 'as a digital initiative launched by Oppolia',
        'السعودية': 'Saudi Arabia',
        'تمكين العملاء من طلب جلسة تصميم مطبخ': 'enabling customers to request a fully remote kitchen design session',
        'عن بعد بالكامل': 'remotely',
        'في سردة': 'At Sarrdeh',
        'صممنا وطورنا المنصة': 'we designed and developed the platform',
        'بواجهة ذكية وسهلة الاستخدام': 'with a smart, user-friendly interface',
        'تقدم تجربة سلسة': 'that offers a seamless experience',
        'من ملء النموذج الى الدفع والمتابعة': 'from filling out the form to payment and follow-up',
        'كحل رقمي شامل': 'serving as a comprehensive digital solution',
        // Add more common Arabic words/phrases
        'مشروع': 'Project',
        'تطبيق': 'Application',
        'موقع': 'Website',
        'منصة': 'Platform',
        'خدمة': 'Service',
        'شركة': 'Company',
        'حلول': 'Solutions',
        'تصميم': 'Design',
        'تطوير': 'Development',
        'تسويق': 'Marketing',
        'رعاية': 'Care',
        'إبداعي': 'Creative',
        'رقمي': 'Digital',
        'تقني': 'Technical',
        'تكنولوجيا': 'Technology',
        'برمجيات': 'Software',
        'ويب': 'Web',
        'موبايل': 'Mobile',
        'هوية': 'Identity',
        'علامة تجارية': 'Brand',
        'شعار': 'Logo',
        'محتوى': 'Content',
        'صورة': 'Image',
        'فيديو': 'Video',
        'رسوم متحركة': 'Animation',
        'تفاعلي': 'Interactive',
        'استجابة': 'Responsive',
        'سريع': 'Fast',
        'آمن': 'Secure',
        'سهل': 'Easy',
        'جميل': 'Beautiful',
        'حديث': 'Modern',
        'احترافي': 'Professional',
        'جودة عالية': 'High Quality',
        'تجربة مستخدم': 'User Experience',
        'واجهة مستخدم': 'User Interface'
      };

      let translatedText = cleanText;
      Object.keys(translations).forEach(arabic => {
        translatedText = translatedText.replace(new RegExp(arabic, 'g'), translations[arabic]);
      });

      // If still contains Arabic characters, try to extract meaningful parts
      if (arabicRegex.test(translatedText)) {
        // Extract any English words that might be mixed in
        const englishWords = translatedText.match(/[a-zA-Z\s]+/g) || [];
        if (englishWords.length > 0) {
          return englishWords.join(' ').trim();
        }
        // If no English words found, return a generic message
        return 'Project Description';
      }

      return translatedText || cleanText;
    };

    // Extract and translate title - use English as primary
    const arabicTitle = post.title?.rendered || '';
    const englishTitle = translateContent(arabicTitle);

    // Extract and translate content - use English as primary
    const arabicContent = post.content?.rendered || '';
    const englishContent = translateContent(arabicContent);

    // Use English translations as the primary content
    return {
      id: post.id,
      title: englishTitle || 'Untitled Project',
      category: category,
      service: serviceTags[0] || 'Sarrdeh Development',
      location: 'Kingdom of Saudi Arabia', // Default location
      description: englishContent.substring(0, 200) + (englishContent.length > 200 ? '...' : ''),
      image: extractImageUrl(post),
      tags: serviceTags.length > 0 ? serviceTags : ['Sarrdeh Development'],
      views: Math.floor(Math.random() * 1000) + 500, // Random views for now
      date: post.date,
      modified: post.modified,
      link: post.link,
      slug: post.slug
    };
  };

  // Fetch projects from WordPress API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try multiple endpoints to find project data
      const endpoints = [
        API_ENDPOINTS.customPosts, // Try custom post type first (project)
        API_ENDPOINTS.posts // Fallback to regular posts
      ];

      let projectsData = [];

      for (const endpoint of endpoints) {
        try {
          console.log(`Trying to fetch from: ${endpoint}`);
          
          const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'User-Agent': 'Sarrdeh-React-App/1.0'
            },
            mode: 'cors',
            credentials: 'omit'
          });

          if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data);
            
            if (Array.isArray(data) && data.length > 0) {
              projectsData = data.map(transformProjectData);
              console.log('Transformed projects:', projectsData);
              break; // Use first successful endpoint
            }
          } else {
            console.log(`HTTP ${response.status}: ${response.statusText}`);
          }
        } catch (endpointError) {
          console.log(`Failed to fetch from ${endpoint}:`, endpointError.message);
          continue; // Try next endpoint
        }
      }

      // If no data from API, use sample data with WordPress images
      if (projectsData.length === 0) {
        console.log('No data from API, using sample data with WordPress images');
        setError('Unable to connect to WordPress API. Using sample data with WordPress images.');
        projectsData = sampleProjects;
      } else {
        console.log(`Successfully loaded ${projectsData.length} projects from WordPress API`);
      }

      setProjects(projectsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Failed to load projects from API - using sample data with WordPress images instead');
      setProjects(sampleProjects); // Fallback to sample data
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const serviceMatch = selectedService === 'All' || project.tags.includes(selectedService);
    return categoryMatch && serviceMatch;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'Most Viewed':
        return b.views - a.views;
      case 'Newest':
        return new Date(b.date) - new Date(a.date);
      case 'Oldest':
        return new Date(a.date) - new Date(b.date);
      default:
        return 0;
    }
  });

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      
      {/* Header Section */}
      <section style={{ 
        padding: '120px 20px 80px',
        background: 'linear-gradient(135deg, #0a2a2a 0%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Particles Background - z-index: 1 */}
        <div style={{
          width: '160%',
          height: '160%',
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          zIndex: 1,
          overflow: 'visible'
        }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        {/* Light Rays - z-index: 2 */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          left: '-30%',
          width: '160%',
          height: '160%',
          zIndex: 2,
          overflow: 'visible'
        }}>
          <LightRays raysColor="#57B2B6" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 4 }}>
          <div className="row" style={{ alignItems: 'center', marginBottom: '2rem' }}>
            {/* Left side - Our Work title and description */}
            <div className="col-6" style={{ textAlign: 'left' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #ffffff 0%, #57b6b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                marginBottom: '1.5rem'
              }}>
                Our Work
              </h1>
              
              <p style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                opacity: 0.9,
                color: '#cccccc',
                margin: 0
              }}>
                We love seeing the fruits of our hard work come to life as real results.
                These projects are selected examples showcasing how SarrdehTech has helped its partners achieve lasting success.
              </p>
            </div>

            {/* Right side - Animated screen wrapper */}
            <div className="col-6" style={{ display: 'flex', justifyContent: 'center' }}>
              <style>{`
                .screen-wrapper {
                  display: inline-block;
                  position: relative;
                  width: 300px;
                  height: 200px;
                }
                .screen-wrapper .screen {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 30px;
                  z-index: 1;
                }
                .screen-wrapper .glass-overlay {
                  position: absolute;
                  top: 0; left: 0;
                  width: 100%; height: 100%;
                  border-radius: 30px;
                  border: 1px solid #ffffff55;
                  box-shadow: 0 4px 16px rgba(87,182,178,0.05);
                  background: rgba(255,255,255,0.08);
                  z-index: 3;
                }
                .screen-wrapper .glass-logo {
                  position: absolute;
                  top: 50%; left: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 5;
                  width: 80px;
                  height: 80px;
                  object-fit: contain;
                  animation: logo-bounce 3s ease-in-out infinite;
                }
                @keyframes logo-bounce {
                  0%,100% { transform: translate(-50%, -50%) translateY(0); }
                  50%     { transform: translate(-50%, -50%) translateY(-20px); }
                }
                .screen-wrapper .icon {
                  position: absolute;
                  filter: blur(4px);
                  z-index: 1;
                  transition: transform 0.5s ease,
                              filter 0.5s ease,
                              z-index 0s 0.5s;
                }
                .screen-wrapper .icon-seo   { top:  5%; left: 30%; width:60px; height:48px; }
                .screen-wrapper .icon-figma { top: 70%; left: 80%; width:48px; height:57px;}
                .screen-wrapper .icon-dev   { top: 10%; left: 80%; width:51px; height:48px; }
                .screen-wrapper .icon-care   { top: 35%; left: 20%; width:56px; height:46px; }
                .screen-wrapper:hover .icon {
                  filter: blur(0);
                  z-index: 6;
                  transition:
                    transform 0.5s ease,
                    filter    0.5s ease,
                    z-index   0s;
                }
                .screen-wrapper:hover .icon-seo   { transform: translate(-50%, -70px);            }
                .screen-wrapper:hover .icon-figma { transform: translate(calc(-50% + 135px), 25px); }
                .screen-wrapper:hover .icon-dev   { transform: translate(calc(-50% + 135px), 5px);}
                .screen-wrapper:hover .icon-care   {    transform: translate(calc(-50% + 330px), -145px);}
                @media screen and (max-width: 768px) {
                  .screen-wrapper {
                    width: 250px;
                    height: 150px;
                  }
                  .screen-wrapper .glass-logo {
                    width: 60px;
                    height: 60px;
                  }
                }
              `}</style>

              <div className="screen-wrapper">
                <img
                  className="screen"
                  src="/images/rec.png"
                  alt="Portfolio screens"
                />
                <div className="glass-overlay"></div>
                <img
                  className="glass-logo"
                  src="/images/glass-logo.png"
                  alt="Glass Logo"
                />
                <img
                  className="icon icon-seo"
                  src="/images/frame-seo.svg"
                  alt="SEO Icon"
                />
                <img
                  className="icon icon-figma"
                  src="/images/design-frame.png"
                  alt="Figma Icon"
                />
                <img
                  className="icon icon-dev"
                  src="/images/frame-code.svg"
                  alt="Dev Icon"
                />
                <img
                  className="icon icon-care"
                  src="/images/care frame.png"
                  alt="Care Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{ 
        padding: '40px 20px',
        background: '#111111',
        borderBottom: '1px solid rgba(87, 182, 178, 0.2)'
      }}>
        <div className="container">
    <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Service Filters */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {services.map(service => {
                const serviceColor = getServiceColor(service);
                const isSelected = selectedService === service;
                
                return (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      background: isSelected ? serviceColor : 'transparent',
                      border: `1px solid ${isSelected ? serviceColor : `rgba(${service === 'Sarrdeh Marketing' ? '243, 39, 53' : service === 'Sarrdeh Creative' ? '255, 209, 0' : service === 'Sarrdeh Development' ? '87, 182, 178' : '30, 99, 144'}, 0.3)`}`,
                      borderRadius: '25px',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem',
                      boxShadow: isSelected ? `0 0 10px ${serviceColor}40` : 'none'
                    }}
                  >
                    {service}
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  border: '1px solid rgba(87, 182, 178, 0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.4rem 1rem',
                    background: selectedCategory === category ? '#57B6B2' : 'transparent',
                    border: `1px solid ${selectedCategory === category ? '#57B6B2' : 'rgba(87, 182, 178, 0.2)'}`,
                    borderRadius: '20px',
      color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.8rem',
                    opacity: selectedCategory === category ? 1 : 0.7
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '60px 20px' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <div style={{
                width: '50px',
                height: '50px',
                border: '3px solid rgba(87, 182, 178, 0.3)',
                borderTop: '3px solid #57B6B2',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto'
              }} />
              <p style={{ marginTop: '1rem', opacity: 0.7 }}>
                {error ? 'Loading fallback data...' : 'Loading projects from WordPress API...'}
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', background: 'rgba(243, 39, 53, 0.1)', border: '1px solid rgba(243, 39, 53, 0.3)', borderRadius: '8px' }}>
                  <p style={{ color: '#F32735', margin: 0 }}>{error} - Using sample data</p>
                </div>
              )}
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                gap: '2rem'
              }}>
                {sortedProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                      borderRadius: '15px',
                      padding: '2rem',
                      border: '1px solid rgba(87, 182, 178, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onClick={() => handleProjectClick(project)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(87, 182, 178, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Hover Effect */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(87, 182, 178, 0.1) 0%, transparent 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none'
                    }} />

                    {/* Project Image */}
                    <div style={{
                      width: '100%',
                      height: '200px',
                      background: '#2a2a2a',
                      borderRadius: '10px',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      padding: 0,
                      margin: 0
                    }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          margin: 0,
                          padding: 0,
                          borderRadius: '10px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div style={{
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        color: '#57B6B2',
                        fontSize: '2rem',
                        margin: 0,
                        padding: 0
                      }}>
                        📁
                      </div>
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: '#ffffff'
                      }}>
                        {project.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#57B6B2',
                        marginBottom: '0.5rem'
                      }}>
                        {project.category} • {project.location}
                      </p>

                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}>
                        {project.tags.map(tag => {
                          const tagColor = getServiceColor(tag);
                          return (
                            <span key={tag} style={{
                              padding: '0.2rem 0.6rem',
                              background: `rgba(${tag === 'Sarrdeh Marketing' ? '243, 39, 53' : tag === 'Sarrdeh Creative' ? '255, 209, 0' : tag === 'Sarrdeh Development' ? '87, 182, 178' : '30, 99, 144'}, 0.1)`,
                              border: `1px solid rgba(${tag === 'Sarrdeh Marketing' ? '243, 39, 53' : tag === 'Sarrdeh Creative' ? '255, 209, 0' : tag === 'Sarrdeh Development' ? '87, 182, 178' : '30, 99, 144'}, 0.3)`,
                              borderRadius: '12px',
                              fontSize: '0.7rem',
                              color: tagColor
                            }}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>

                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                        color: '#cccccc',
                        marginBottom: '1.5rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {project.description}
                      </p>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          fontSize: '0.8rem',
                          color: '#888888'
                        }}>
                          {project.views} views
                        </span>
                        
                        <button style={{
                          padding: '0.5rem 1rem',
                          background: 'transparent',
                          border: '1px solid #57B6B2',
                          borderRadius: '8px',
                          color: '#57B6B2',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}>
                          View Project →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && sortedProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <p style={{ fontSize: '1.2rem', opacity: 0.7 }}>
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Do you have a project in the idea stage?"
        subtitle="Take advantage of our free consultation to develop your idea, and let our team help you map out a plan and turn it into a successful real-world project."
        buttonText="Book a Free Consultation"
        buttonLink="/contact-us"
      />

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 