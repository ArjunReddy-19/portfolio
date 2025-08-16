
// import { Mail, User, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { motion } from 'framer-motion';


// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you for your message! I'll get back to you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-section">
//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-4xl md:text-5xl font-bold text-foreground mb-6"
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Get In Touch
//             </motion.h1>
//             <motion.p
//               className="text-xl text-muted-foreground max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Let's connect and explore opportunities for collaboration in AI, Machine Learning, and innovative technology projects
//             </motion.p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
//                 <Card className="shadow-card hover:shadow-hover transition-all duration-300">
//                   <CardHeader>
//                     <CardTitle className="flex items-center space-x-3">
//                       <motion.div
//                         animate={{ rotate: [0, 10, -10, 0] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                       >
//                         <Mail className="h-6 w-6 text-primary" />
//                       </motion.div>
//                       <span>Contact Information</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="space-y-4">
//                       <motion.div
//                         className="flex items-center space-x-3"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                       >
//                         <User className="h-5 w-5 text-primary" />
//                         <div>
//                           <p className="font-medium text-foreground">Arjun Reddy Chethireddy</p>
//                           <p className="text-sm text-muted-foreground">Computer Science Engineering Student</p>
//                         </div>
//                       </motion.div>

//                       <motion.div
//                         className="flex items-center space-x-3"
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 1.0 }}
//                       >
//                         <Mail className="h-5 w-5 text-primary" />
//                         <div>
//                           <p className="font-medium text-foreground">Email</p>
//                           <motion.a
//                             href="mailto:arjunreddy122004@gmail.com"
//                             className="text-sm text-primary hover:text-primary-glow transition-colors"
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             arjunreddy122004@gmail.com
//                           </motion.a>
//                         </div>
//                       </motion.div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               {/* Social Links */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.4 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <Card className="shadow-card hover:shadow-hover transition-all duration-300">
//                   <CardHeader>
//                     <CardTitle>Connect With Me</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex space-x-4">
//                       <motion.a
//                         href="https://github.com/ArjunReddy-19"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
//                           <Github className="h-4 w-4 mr-2" />
//                           GitHub
//                         </Button>
//                       </motion.a>

//                       <motion.a
//                         href="https://www.linkedin.com/in/arjunreddychethireddy"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1, rotate: -5 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
//                           <Linkedin className="h-4 w-4 mr-2" />
//                           LinkedIn
//                         </Button>
//                       </motion.a>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               {/* Collaboration Areas */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 1.6 }}
//               >
//                 <Card className="shadow-card bg-gradient-hero">
//                   <CardHeader>
//                     <CardTitle>Areas of Interest</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3">
//                       {[
//                         "Machine Learning Projects",
//                         "AI Research Collaborations",
//                         "Software Development Opportunities",
//                         "Learning and Mentorship",
//                       ].map((item, idx) => (
//                         <motion.div
//                           key={item}
//                           className="flex items-center space-x-2"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.4, delay: 1.8 + idx * 0.1 }}
//                         >
//                           <motion.div
//                             className="w-2 h-2 bg-primary rounded-full"
//                             animate={{ scale: [1, 1.2, 1] }}
//                             transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
//                           />
//                           <span className="text-sm text-muted-foreground">{item}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
//                 <Card className="shadow-card hover:shadow-hover transition-all duration-300">
//                   <CardHeader>
//                     <CardTitle className="flex items-center space-x-3">
//                       <motion.div
//                         animate={{ rotate: [0, 15, -15, 0] }}
//                         transition={{ duration: 3, repeat: Infinity }}
//                       >
//                         <MessageSquare className="h-6 w-6 text-primary" />
//                       </motion.div>
//                       <span>Send a Message</span>
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <motion.div
//                         className="grid grid-cols-2 gap-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.2 }}
//                       >
//                         <div className="space-y-2">
//                           <Label htmlFor="firstName">First Name</Label>
//                           <Input id="firstName" placeholder="Your first name" required />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="lastName">Last Name</Label>
//                           <Input id="lastName" placeholder="Your last name" required />
//                         </div>
//                       </motion.div>

//                       <motion.div
//                         className="space-y-2"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.4 }}
//                       >
//                         <Label htmlFor="email">Email</Label>
//                         <Input id="email" type="email" placeholder="your.email@example.com" required />
//                       </motion.div>

//                       <motion.div
//                         className="space-y-2"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.6 }}
//                       >
//                         <Label htmlFor="subject">Subject</Label>
//                         <Input id="subject" placeholder="What's this about?" required />
//                       </motion.div>

//                       <motion.div
//                         className="space-y-2"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.8 }}
//                       >
//                         <Label htmlFor="message">Message</Label>
//                         <Textarea
//                           id="message"
//                           placeholder="Tell me more about your project, collaboration idea, or just say hello!"
//                           rows={6}
//                           required
//                         />
//                       </motion.div>

//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 2.0 }}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Button
//                           type="submit"
//                           className="w-full hover:shadow-hover transition-all duration-300"
//                           size="lg"
//                         >
//                           <Send className="h-4 w-4 mr-2" />
//                           Send Message
//                         </Button>
//                       </motion.div>
//                     </form>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Call to Action */}
//           <motion.div
//             className="text-center mt-16"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
//               <Card className="shadow-card border-primary/20">
//                 <CardContent className="p-8">
//                   <motion.h3
//                     className="text-2xl font-bold text-foreground mb-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                   >
//                     Let's Build Something Amazing Together
//                   </motion.h3>
//                   <motion.p
//                     className="text-muted-foreground max-w-2xl mx-auto"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                   >
//                     Whether you're looking for a collaborator on an AI project, need a fresh perspective
//                     on a technical challenge, or simply want to connect with a fellow technology enthusiast,
//                     I'd love to hear from you!
//                   </motion.p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { Mail, User, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_f8t3288',   // ✅ Your Service ID
        'template_m2k4aip',  // ✅ Your Template ID
        form.current,
        'ltaY1KfZ11o6bUwoa'  // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's connect and explore opportunities for collaboration in AI, Machine Learning, and innovative technology projects
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Mail className="h-6 w-6 text-primary" />
                      </motion.div>
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <User className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Arjun Reddy Chethireddy</p>
                          <p className="text-sm text-muted-foreground">Computer Science Engineering Student</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <motion.a
                            href="mailto:arjunreddy122004@gmail.com"
                            className="text-sm text-primary hover:text-primary-glow transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            arjunreddy122004@gmail.com
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/ArjunReddy-19"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </motion.a>

                      <motion.a
                        href="https://www.linkedin.com/in/arjunreddychethireddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Collaboration Areas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <Card className="shadow-card bg-gradient-hero">
                  <CardHeader>
                    <CardTitle>Areas of Interest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Machine Learning Projects",
                        "AI Research Collaborations",
                        "Software Development Opportunities",
                        "Learning and Mentorship",
                      ].map((item, idx) => (
                        <motion.div
                          key={item}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.8 + idx * 0.1 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                          />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </motion.div>
                      <span>Send a Message</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        <div className="space-y-2">
                          <Label htmlFor="from_name">First Name</Label>
                          <Input id="from_name" name="from_name" placeholder="Your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name</Label>
                          <Input id="last_name" name="last_name" placeholder="Your last name" required />
                        </div>
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                      >
                        <Label htmlFor="reply_to">Email</Label>
                        <Input id="reply_to" name="reply_to" type="email" placeholder="your.email@example.com" required />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                      >
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" name="subject" placeholder="What's this about?" required />
                      </motion.div>

                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      >
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me more about your project, collaboration idea, or just say hello!"
                          rows={6}
                          required
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.0 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full hover:shadow-hover transition-all duration-300"
                          size="lg"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
