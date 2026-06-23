"use client"
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'; // এখানে Tooltip ইমপোর্ট করা হয়েছে

export default function PieChartWithPaddingAngle({ clientNum, freelancerNum, adminNum, isAnimationActive = true }) {

  const data = [
    { name: 'Admin', value: adminNum?.length || 0, fill: '#F43F5E' },
    { name: 'Freelancer', value: freelancerNum?.length || 0, fill: '#10B981' },
    { name: 'Client', value: clientNum?.length || 0, fill: '#3B82F6' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '450px', height: '300px', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
          
          {/* এই Tooltip-টি হোভার করলে নাম এবং লেন্থ দেখাবে */}
          <Tooltip 
            formatter={(value, name) => [`${value} জন`, name]} // দেখতে আরও সুন্দর করার জন্য কাস্টম ফরম্যাট
          />

          <Pie
            data={data}
            innerRadius="60%"  
            outerRadius="90%"   
            cornerRadius={0}    
            fill="#8884d8"
            paddingAngle={2}   
            dataKey="value"
            isAnimationActive={isAnimationActive}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle" 
          />
        </PieChart>
      </ResponsiveContainer>
    </div>        
  );
}