// import { GraduationCap, Brain, Code, Users } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-section">
//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               About Me
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Passionate about artificial intelligence and driven by curiosity to build intelligent solutions
//             </p>
//           </div>

//           {/* Main Content */}
//           <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 I'm Arjun Reddy Chethireddy, an innovative Computer Science engineer specializing in 
//                 Artificial Intelligence and Machine Learning. My passion lies in exploring the endless 
//                 possibilities of intelligent systems and their potential to solve real-world problems.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 As a curious learner and collaborative team player, I believe in the power of continuous 
//                 learning and knowledge sharing. My approach combines strong theoretical foundations with 
//                 practical implementation skills to create meaningful technological solutions.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Despite being a fresher in the industry, my academic journey has equipped me with a 
//                 solid foundation in computer science principles, and I'm eager to apply this knowledge 
//                 to contribute to innovative projects and collaborate with like-minded professionals.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-6">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <GraduationCap className="h-8 w-8 text-primary" />
//                     <h3 className="text-xl font-semibold">Education</h3>
//                   </div>
//                   <div className="space-y-2">
//                     <h4 className="font-medium text-foreground">Bachelor's in Computer Science Engineering</h4>
//                     <p className="text-sm text-muted-foreground">Specialization in AI & Machine Learning</p>
//                     <p className="text-sm text-muted-foreground">CMRIT • Graduating 2026</p>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-6">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <Brain className="h-8 w-8 text-primary" />
//                     <h3 className="text-xl font-semibold">Specialization</h3>
//                   </div>
//                   <div className="space-y-2">
//                     <p className="text-sm text-muted-foreground">
//                       Focused on Artificial Intelligence and Machine Learning with emphasis on 
//                       practical applications and innovative problem-solving approaches.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Values Section */}
//           <div className="mt-20 animate-slide-up">
//             <h2 className="text-3xl font-bold text-center text-foreground mb-12">Coding profiles</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-8">
//                   <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-4">CodeChef</h3>
//                   <p className="text-muted-foreground">
//                    Code. Debug. Innovate. Repeat.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-8">
//                   <Code className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-4">Leetcode</h3>
//                   <p className="text-muted-foreground">
//                     Transforming problems into programs.
//                   </p>
//                 </CardContent>
//               </Card>

//               <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
//                 <CardContent className="p-8">
//                   <Users className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-4">Codeforce</h3>
//                   <p className="text-muted-foreground">
//                     Train your brain, master the code.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import { GraduationCap, Brain, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about artificial intelligence and driven by curiosity to build intelligent solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm Arjun Reddy Chethireddy, an innovative Computer Science engineer specializing in 
                Artificial Intelligence and Machine Learning. My passion lies in exploring the endless 
                possibilities of intelligent systems and their potential to solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a curious learner and collaborative team player, I believe in the power of continuous 
                learning and knowledge sharing. My approach combines strong theoretical foundations with 
                practical implementation skills to create meaningful technological solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Despite being a fresher in the industry, my academic journey has equipped me with a 
                solid foundation in computer science principles, and I'm eager to apply this knowledge 
                to contribute to innovative projects and collaborate with like-minded professionals.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Bachelor's in Computer Science Engineering</h4>
                    <p className="text-sm text-muted-foreground">Specialization in AI & Machine Learning</p>
                    <p className="text-sm text-muted-foreground">CMRIT • Graduating 2026</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Specialization</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Focused on Artificial Intelligence and Machine Learning with emphasis on 
                      practical applications and innovative problem-solving approaches.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coding Profiles Section */}
          <div className="mt-20 animate-slide-up">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Coding Profiles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* CodeChef */}
              <a 
                href="https://www.codechef.com/users/arjunreddy19" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">CodeChef</h3>
                    <p className="text-muted-foreground">
                      Code. Debug. Innovate. Repeat.
                    </p>
                  </CardContent>
                </Card>
              </a>

              {/* LeetCode */}
              <a 
                href="https://leetcode.com/u/arjunreddy19/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8">
                    <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">LeetCode</h3>
                    <p className="text-muted-foreground">
                      Transforming problems into programs.
                    </p>
                  </CardContent>
                </Card>
              </a>

              {/* Codeforces */}
              <a 
                href="https://codeforces.com/profile/arjunreddy19" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Codeforces</h3>
                    <p className="text-muted-foreground">
                      Train your brain, master the code.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
