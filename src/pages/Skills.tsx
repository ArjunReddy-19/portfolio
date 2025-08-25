// import { Code, Database, Brain, Palette, Terminal, Github } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       icon: Code,
//       skills: [
//         { name: 'Python', level: 90, description: 'Primary language for AI/ML projects' },
//         { name: 'Java', level: 85, description: 'Object-oriented programming and applications' },
//         { name: 'C', level: 80, description: 'System programming and algorithms' },
//       ]
//     },
//     {
//       title: 'AI & Machine Learning',
//       icon: Brain,
//       skills: [
//         { name: 'Machine Learning', level: 85, description: 'Scikit-learn, ensemble methods' },
//         { name: 'Natural Language Processing', level: 80, description: 'Text processing and analysis' },
//         { name: 'Data Analysis', level: 85, description: 'Statistical analysis and insights' },
//         { name: 'NetworkX', level: 75, description: 'Network analysis and graph algorithms' },
//       ]
//     },
//     {
//       title: 'Frontend Development',
//       icon: Palette,
//       skills: [
//         { name: 'HTML/CSS', level: 85, description: 'Modern web standards and styling' },
//         { name: 'JavaScript', level: 80, description: 'Interactive web applications' },
//         { name: 'UI/UX Design', level: 75, description: 'User-centered design principles' },
//         { name: 'Responsive Design', level: 85, description: 'Mobile-first development' },
//       ]
//     },
//     {
//       title: 'Tools & Technologies',
//       icon: Terminal,
//       skills: [
//         { name: 'Git/GitHub', level: 90, description: 'Version control and collaboration' },
//         { name: 'VS Code', level: 95, description: 'Primary development environment' },
//         { name: 'Excel', level: 85, description: 'Data analysis and visualization' },
//         { name: 'Command Line', level: 80, description: 'System administration and automation' },
//       ]
//     }
//   ];

//   const getProgressColor = (level: number) => {
//     if (level >= 90) return 'bg-green-500';
//     if (level >= 80) return 'bg-blue-500';
//     if (level >= 70) return 'bg-yellow-500';
//     return 'bg-gray-500';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-section">
//       {/* Hero Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Technical Skills
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               A comprehensive overview of my technical expertise and proficiency levels
//             </p>
//           </div>

//           {/* Skills Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {skillCategories.map((category, categoryIndex) => {
//               const IconComponent = category.icon;
//               return (
//                 <Card 
//                   key={category.title}
//                   className={`shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 animate-slide-up`}
//                   style={{ animationDelay: `${categoryIndex * 200}ms` }}
//                 >
//                   <CardHeader>
//                     <CardTitle className="flex items-center space-x-3">
//                       <div className="p-2 bg-primary/10 rounded-lg">
//                         <IconComponent className="h-6 w-6 text-primary" />
//                       </div>
//                       <span className="text-xl">{category.title}</span>
//                     </CardTitle>
//                   </CardHeader>
                  
//                   <CardContent className="space-y-6">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div 
//                         key={skill.name}
//                         className="space-y-3 animate-fade-in"
//                         style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
//                       >
//                         <div className="flex justify-between items-center">
//                           <h4 className="font-medium text-foreground">{skill.name}</h4>
//                           <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
//                         </div>
                        
//                         <div className="space-y-2">
//                           <Progress 
//                             value={skill.level} 
//                             className="h-2 bg-muted"
//                           />
//                           <p className="text-sm text-muted-foreground">{skill.description}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {/* Additional Skills Section */}
//           <div className="mt-16 animate-slide-up">
//             <Card className="shadow-card bg-gradient-hero">
//               <CardHeader>
//                 <CardTitle className="text-center text-2xl">Additional Competencies</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-3 gap-6 text-center">
//                   <div className="space-y-3">
//                     <Brain className="h-8 w-8 text-primary mx-auto" />
//                     <h4 className="font-semibold">Problem Solving</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Strong analytical thinking and systematic approach to complex challenges
//                     </p>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <Github className="h-8 w-8 text-primary mx-auto" />
//                     <h4 className="font-semibold">Collaboration</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Effective teamwork and knowledge sharing in development projects
//                     </p>
//                   </div>
                  
//                   <div className="space-y-3">
//                     <Database className="h-8 w-8 text-primary mx-auto" />
//                     <h4 className="font-semibold">Learning Agility</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Quick adaptation to new technologies and continuous skill development
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Skill Development Philosophy */}
//           <div className="mt-16 text-center animate-fade-in">
//             <Card className="shadow-card border-primary/20">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold text-foreground mb-4">
//                   Continuous Learning Mindset
//                 </h3>
//                 <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                   As a Computer Science engineering student specializing in AI & ML, I believe in the power of 
//                   continuous learning and practical application. My skill development focuses on building strong 
//                   foundations while staying current with emerging technologies and industry best practices.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Brain, Github, Database, Terminal } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", description: "Primary language for AI/ML projects" },
    { name: "Java", description: "Object-oriented programming and applications" },
    { name: "C", description: "System programming and algorithms" },
    { name: "HTML/CSS", description: "Responsive, accessible web interfaces" },
    { name: "JavaScript", description: "Interactive web applications" },
    { name: "SQL", description: "Database design, queries, and optimization" },
    { name: "UI/UX", description: "User-centered design principles" },
    { name: "reactjs", description: "Declarative, Component-based, Efficient, Flexible, JavaScript, UI" },
    
  ];

  const toolsTechnologies = [
    { name: "Git/GitHub", description: "Version control and collaboration" },
    { name: "VS Code", description: "Primary development environment" },
    { name: "Excel", description: "Data analysis and visualization" },
    { name: "Figma", description: "Collaborative interface design platform" },
  ];

  const SkillBox = ({ name, description }: { name: string; description: string }) => (
    <div className="p-3 border rounded-lg text-center transition-all duration-300 hover:shadow-[0_0_15px_#3b82f680]">
      <h4 className="font-semibold text-lg leading-tight">{name}</h4>
      <p className="text-sm text-muted-foreground mt-1 leading-snug">{description}</p>
    </div>
  );

  return (
    <div className="space-y-0.5">
      {/* Technical Skills */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-0.5">
            {technicalSkills.map((skill, index) => (
              <SkillBox key={index} {...skill} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tools & Technologies */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-0">
            <Terminal className="h-6 w-6 text-primary" />
            Tools & Technologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-0.5">
            {toolsTechnologies.map((tool, index) => (
              <SkillBox key={index} {...tool} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Competencies (kept the same) */}
      <div className="mt-16 animate-slide-up">
        <Card className="shadow-card bg-gradient-hero">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Additional Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <Brain className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Strong analytical thinking and systematic approach to complex challenges
                </p>
              </div>

              <div className="space-y-3">
                <Github className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Effective teamwork and knowledge sharing in development projects
                </p>
              </div>

              <div className="space-y-3">
                <Database className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Learning Agility</h4>
                <p className="text-sm text-muted-foreground">
                  Quick adaptation to new technologies and continuous skill development
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Development Philosophy (exactly as provided) */}
      <div className="mt-16 text-center animate-fade-in">
        <Card className="shadow-card border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning Mindset
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a Computer Science engineering student specializing in AI & ML, I believe in the power of 
              continuous learning and practical application. My skill development focuses on building strong 
              foundations while staying current with emerging technologies and industry best practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;

