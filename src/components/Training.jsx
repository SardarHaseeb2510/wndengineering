import React, { useState } from 'react';
import './Training.css';

const Training = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const contents = [
    { title: "Safety Induction", desc: "Covers basic safety rules, site orientation, and emergency protocols for all new workers." },
    { title: "Accident Investigation", desc: "Learn how to analyze accidents, find root causes, and create preventive measures." },
    { title: "Confined Space", desc: "Explains risks, entry procedures, permits, and rescue operations for confined spaces." },
    { title: "H2S Awareness", desc: "Teaches recognition, handling, and emergency response for hydrogen sulfide exposure." },
    { title: "Health Education", desc: "Covers workplace health, hygiene, ergonomics, and disease prevention." },
    { title: "Emergency First Aid", desc: "Basic life-saving skills like CPR, wound care, and handling medical emergencies." },
    { title: "Excavation", desc: "Safety practices for excavation work, trenching, soil stability, and protective systems." },
    { title: "Safe Behaviour", desc: "Encourages proactive safety actions, awareness, and hazard reporting." },
    { title: "Sea Survival", desc: "Training for survival at sea, life jackets, rafts, and emergency evacuation." },
    { title: "Aerial Works", desc: "Guidelines for safe use of aerial lifts, harnesses, and fall prevention." },
    { title: "Electrical Safety", desc: "Hazards of electricity, lockout/tagout procedures, and safe handling." },
    { title: "Blood Borne Pathogens", desc: "Prevention and handling of exposure to infectious materials at work." },
    { title: "Scaffolding", desc: "Safe erection, inspection, and dismantling of scaffolds." },
    { title: "Equipment Opening & Line Breaking", desc: "Safe handling of pressurized equipment and hazardous pipelines." },
    { title: "Interview", desc: "Preparation for job interviews, communication tips, and confidence building." },
    { title: "Communication Skills", desc: "Developing clear, effective verbal and non-verbal communication." },
    { title: "Fire Fighting", desc: "How to use fire extinguishers, alarms, and evacuation drills." },
    { title: "Extra Ordinary PPE", desc: "Use of advanced PPE for high-risk tasks beyond standard equipment." },
    { title: "Defensive Driving", desc: "Safe driving techniques to prevent accidents and manage risks." },
    { title: "Hot Works", desc: "Precautions for welding, cutting, and grinding operations." },
    { title: "Lifting", desc: "Safe lifting practices with cranes, hoists, and manual handling." },
    { title: "Sign, Signal & Barricade", desc: "Using signage, hand signals, and barricades for site safety." },
    { title: "Hiking", desc: "Outdoor survival skills, navigation, and physical endurance training." },
    { title: "Work at Height", desc: "Fall protection, harness use, and scaffold safety." },
    { title: "Self Rescue", desc: "Techniques to escape dangerous situations without external help." },
    { title: "Life Critical Training", desc: "Essential training on activities with highest risks, like working with energy or heights." },
    { title: "Job Safety Analysis", desc: "Process of analyzing tasks to identify and control hazards." },
    { title: "Competent Person", desc: "Defines the role of a trained, experienced person authorized for inspections." },
    { title: "Permit to Work", desc: "Permit system for hazardous tasks, ensuring safe authorization." },
    { title: "High Pressure Cleaning", desc: "Safe practices for cleaning with high-pressure water systems." },
    { title: "Leadership Skills", desc: "Developing safety leadership and team management skills." },
    { title: "Safety Audit", desc: "Conducting audits to identify safety gaps and compliance issues." },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="training" className="training-section">
      <div className="container">
        <a href="https://whatsapp.com/channel/0029VbCFI8h0wajoqzfgl21b" target="_blank" rel="noopener noreferrer" className="whatsapp-link">Join our WhatsApp Channel</a>
        <h2>HSE Extensive Skill Program</h2>
        <p className="training-intro">
          Comprehensive training programs designed to ensure workplace safety and professional development.
          Our courses cover essential safety protocols, technical skills, and leadership development.
        </p>
        <ul>
          {contents.map((item, index) => (
            <li key={index} onClick={() => toggleDropdown(index)} className={`training-item ${openIndex === index ? 'open' : ''}`}>
              <span className="title">{item.title}</span>
              {openIndex === index && <p className="description">{item.desc}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Training;
