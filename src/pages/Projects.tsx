import { ExternalLink, Github, TrendingUp, Network, Gamepad2, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const Portfolio= () => {
  const projects = [
    {
      title: 'Job Role Suggestion System',
      description: 'A sophisticated web-based platform that integrates job board APIs with advanced NLP and machine learning algorithms to provide optimized job matching. Features intelligent recommendation engine that improved job matching accuracy by 30%.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Web APIs', 'UI/UX'],
      icon: TrendingUp,
      highlights: ['30% performance improvement', 'Web-based UI', 'Integrated job board APIs', 'NLP processing'],
      type: 'Machine Learning'
    },
    {
      title: 'Hybrid Network Analysis & ML Model',
      description: 'Advanced financial distress prediction system combining network analysis with machine learning. Implemented using ensemble methods including Random Forest and XGBoost to achieve superior prediction accuracy.',
      technologies: ['Python', 'Scikit-learn', 'NetworkX', 'Random Forest', 'XGBoost'],
      icon: Network,
      highlights: ['15-20% accuracy improvement', 'Network analysis integration', 'Ensemble learning', 'Financial modeling'],
      type: 'Data Science'
    },
    {
      title: 'Python Snake Game',
      description: 'Classic Snake game implementation featuring smooth gameplay mechanics, dynamic difficulty scaling, comprehensive score tracking, and responsive collision detection. Built with clean, modular code architecture.',
      technologies: ['Python', 'Turtle Graphics', 'Game Development', 'OOP'],
      icon: Gamepad2,
      highlights: ['Keyboard controls', 'Score tracking', 'Dynamic difficulty', 'Collision detection'],
      type: 'Game Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects

            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Showcasing innovative projects in AI, Machine Learning, and Software Development
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className="p-3 bg-primary/10 rounded-lg"
                            whileHover={{ 
                              rotate: 360,
                              scale: 1.1
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <IconComponent className="h-8 w-8 text-primary" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <Badge variant="secondary" className="mt-2">{project.type}</Badge>
                            </motion.div>
                          </div>
                        </div>
                        {/* Desktop buttons - visible on md and larger screens */}
                        <div className="hidden md:flex space-x-2">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                          </motion.div>
                        </div>

                        {/* Mobile dropdown - visible only on small screens */}
                        <div className="md:hidden">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </motion.div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-32">
                              <DropdownMenuItem className="cursor-pointer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <motion.p 
                        className="text-muted-foreground leading-relaxed text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Key Highlights */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                              ></motion.div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.7 + techIdx * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge variant="outline" className="text-sm">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-card border-primary/20 bg-gradient-hero">
                <CardContent className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Interested in My Work?
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    I'm always excited to discuss new projects, collaboration opportunities, 
                    or innovative ideas in AI and Machine Learning.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;