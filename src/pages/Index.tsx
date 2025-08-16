import { ArrowRight, Brain, Code, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import arjunProfile from '@/assets/arjun-profile.jpg';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div className="space-y-4" variants={itemVariants}>
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
                  variants={itemVariants}
                >
                  Hi, I'm{' '}
                  <motion.span 
                    className="text-primary"
                    animate={{ 
                      color: ['hsl(210, 100%, 45%)', 'hsl(210, 100%, 60%)', 'hsl(210, 100%, 45%)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Arjun Reddy
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-2xl text-muted-foreground"
                  variants={itemVariants}
                >
                  Computer Science Engineer specializing in AI & Machine Learning
                </motion.p>
              </motion.div>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Passionate about building intelligent solutions and exploring the endless 
                possibilities of artificial intelligence. Driven by curiosity and a collaborative spirit.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Link to="/portfolio">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="hover:shadow-hover transition-all duration-300 group">
                      View My Work
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                      Get In Touch
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              className="lg:order-2"
              variants={itemVariants}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.img
                  src={arjunProfile}
                  alt="Arjun Reddy Chethireddy"
                  className="relative w-80 h-80 mx-auto rounded-full object-cover shadow-hover"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-section">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining academic excellence with practical innovation in AI and Machine Learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Innovation", desc: "Exploring cutting-edge AI technologies and machine learning algorithms to create intelligent solutions for real-world problems.", delay: 0 },
              { icon: Code, title: "Curiosity", desc: "Driven by an insatiable desire to learn, understand complex systems, and push the boundaries of what's possible with technology.", delay: 0.2 },
              { icon: Users, title: "Collaboration", desc: "Believing in the power of teamwork and knowledge sharing to achieve greater goals and create meaningful impact.", delay: 0.4 }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="text-center shadow-card hover:shadow-hover transition-all duration-500 h-full">
                    <CardContent className="p-8">
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <IconComponent className="h-16 w-16 text-primary mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="shadow-card border-primary/20 bg-gradient-hero">
              <CardContent className="p-12">
                <motion.h2 
                  className="text-3xl font-bold text-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Fresh Perspective, Strong Foundation
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Currently pursuing my Bachelor's in Computer Science Engineering with specialization 
                  in AI & ML at CMRIT (graduating 2026). As a fresher with a strong academic foundation, 
                  I bring fresh ideas and innovative approaches to every project.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link to="/about">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        Learn More About Me
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/skills">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                        View My Skills
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
