import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Skills = () => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6666', '#FF33CC'];

  const skillCategories = [
    {
      title: 'Programming',
      data: [
        { name: 'JavaScript', value: 90 },
        { name: 'React.js', value: 85 },
        { name: 'Node.js', value: 80 },
        { name: 'Express.js', value: 75 },
        { name: 'Java', value: 70 },
        { name: 'Spring Boot', value: 65 },
      ],
    },
    {
      title: 'Database',
      data: [
        { name: 'MySQL', value: 95 },
        { name: 'MongoDB', value: 80 },
      ],
    },
    {
      title: 'Design',
      data: [
        { name: 'Figma', value: 85 },
        { name: 'Canva', value: 75 },
        { name: 'Draw.io', value: 70 },
        { name: 'StarUML', value: 65 },
      ],
    },
    {
      title: 'Tool',
      data: [
        { name: 'VS Code', value: 95 },
        { name: 'phpMyAdmin', value: 90 },
      ],
    },
    {
      title: 'Networking',
      data: [
        { name: 'Information Security', value: 50 },
        { name: 'Cloud Computing', value: 40 },
      ],
    },
  ];

  return (
    <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-10">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={category.data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {category.data.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default Skills;
