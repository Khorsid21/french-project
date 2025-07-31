import React from 'react';

const EducationalProgramTemplate = ({ programData }) => {
  // Default data structure - users can override by passing their own programData
  const defaultData = {
    title: "Techniques du Meuble et d'Ébénisterie",
    subtitle: "Option menuiserie architecturale",
    programInfo: "Programme non contingenté",
    code: "233-B0 – DEC 3 ans – cours offerts le jour",
    mainTitle: "A. Comprendre des informations sur un programme d'études",
    introText: "1. Olivier et Thomas se renseignent sur les formations qui les intéressent. Lisez les renseignements sur les 2 programmes d'études.",
    
    questions: [
      "concevoir et dessiner de l'ameublement et des boiseries pour des bâtiments prestigieux, des restaurants et des intérieurs de bateaux et d'avions d'affaires ?",
      "planifier et superviser la production industrielle d'ameublement et de boiseries ?",
      "programmer des machines-outils à commande numérique ?",
      "produire des dessins d'atelier à partir de plans d'architectes et préparer des soumissions ?",
      "participer à la gestion des opérations de production ?",
      "travailler le bois à l'aide d'outils traditionnels et de machines-outils de haute technologie ?"
    ],
    
    careers: [
      "ébéniste responsable d'une petite équipe de travail",
      "dessinatrice, dessinateur de mobilier et de menuiserie architecturale (boiseries, escaliers)",
      "ébéniste à ton compte",
      "conceptrice, concepteur en menuiserie architecturale",
      "technicienne, technicien à l'organisation de la production en ébénisterie",
      "programmeuse, programmeur de machines-outils à commande numérique",
      "etc."
    ],
    
    companies: [
      "entreprises d'ébénisterie",
      "entreprises de restauration et de finition de meubles",
      "entreprises d'ameublement d'intérieur de bateaux, d'avions, de restaurants, d'hôtels, d'immeubles de bureaux, etc.",
      "ateliers de fabrication de meubles sur mesure",
      "entreprises de production de boiseries",
      "ta propre entreprise",
      "etc."
    ],
    
    courses: [
      { session: "1", number: "233-113-VI", title: "Environnement d'atelier", hours: "75" },
      { session: "1", number: "233-1C3-VI", title: "Outillage portatif", hours: "45" },
      { session: "1", number: "233-1D3-VI", title: "Étude des bois", hours: "45" }
    ]
  };

  const data = programData || defaultData;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 relative">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-3 uppercase tracking-wide">
            {data.title}
          </h1>
          <div className="absolute top-6 right-6 text-right text-sm leading-tight">
            <div>{data.subtitle}</div>
            <div>{data.programInfo}</div>
            <div>{data.code}</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="bg-pink-600 text-white p-4">
          <h2 className="text-lg md:text-xl font-bold">{data.mainTitle}</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-base font-semibold mb-6 text-gray-800">
            {data.introText}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Questions Section */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-4">
                  Aimerais-tu devenir technicien en ébénisterie et...
                </h3>
                <ul className="space-y-3 mb-6">
                  {data.questions.map((question, index) => (
                    <li key={index} className="flex items-start text-sm leading-relaxed">
                      <span className="text-blue-500 font-bold mr-3 mt-1">•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                  Si oui, ce programme est pour toi !
                </button>
              </div>

              {/* Career Possibilities */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-4 border-b border-gray-300 pb-2">
                  Les possibilités de carrière
                </h3>
                <ul className="space-y-2">
                  {data.careers.map((career, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-blue-500 font-bold mr-3 mt-1">•</span>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Companies */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-4 border-b border-gray-300 pb-2">
                  Les entreprises où tu pourrais travailler, ça aussi c'est important !
                </h3>
                <ul className="space-y-2">
                  {data.companies.map((company, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-blue-500 font-bold mr-3 mt-1">•</span>
                      <span>{company}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              {/* University Studies */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  Et si tu voulais poursuivre tes études...
                </h3>
                <p className="text-sm leading-relaxed">
                  ... tu pourrais t'inscrire à l'université, par exemple en enseignement technique, en génie du bois, en génie industriel, en design d'aménagement ou en design industriel, ou à l'École de technologie supérieure (ÉTS) en génie de la production automatisée.
                </p>
              </div>

              {/* Work-Study Program */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  L'alternance travail-études (ATE)
                </h3>
                <p className="text-sm">Au moins 15 semaines de stages rémunérés dans le domaine.</p>
              </div>

              {/* International Internships */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  Les stages à l'étranger
                </h3>
                <p className="text-sm">Tu pourrais faire un stage de formation ou de perfectionnement en France ou en Tunisie.</p>
              </div>

              {/* Prerequisites */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  Les préalables du secondaire
                </h3>
                <p className="text-sm">Mathématiques, séquence Culture, société et technique (063-404 ou 563-404) de la 4e secondaire.</p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  Pour en savoir plus
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-200 p-4 rounded-md">
                    <p className="font-semibold text-xs mb-1">Aide pédagogique individuelle</p>
                    <p className="text-xs">Mme Sylvie C.</p>
                    <p className="text-xs">Tél. 526 528-8587, poste 290</p>
                    <a href="mailto:c.sylvie@ecoledumeuble.ca" className="text-blue-500 text-xs hover:underline">
                      c.sylvie@ecoledumeuble.ca
                    </a>
                  </div>
                  <div className="bg-gray-200 p-4 rounded-md">
                    <p className="font-semibold text-xs mb-1">Coordonnateur du programme</p>
                    <p className="text-xs">M. Gilles C.</p>
                    <p className="text-xs">Tél. 526 528-8588, poste 295</p>
                    <a href="mailto:c.gilles@ecoledumeuble.ca" className="text-blue-500 text-xs hover:underline">
                      c.gilles@ecoledumeuble.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Course Examples */}
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-600 mb-3 border-b border-gray-300 pb-2">
                  Exemples de cours à suivre
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <th className="border border-gray-300 p-2 text-center font-bold">Session</th>
                        <th className="border border-gray-300 p-2 text-center font-bold">Numéro du cours</th>
                        <th className="border border-gray-300 p-2 text-center font-bold">Titre du cours</th>
                        <th className="border border-gray-300 p-2 text-center font-bold">Nombre d'heures</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.courses.map((course, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border border-gray-300 p-2 text-center">{course.session}</td>
                          <td className="border border-gray-300 p-2 text-center">{course.number}</td>
                          <td className="border border-gray-300 p-2 text-center">{course.title}</td>
                          <td className="border border-gray-300 p-2 text-center">{course.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalProgramTemplate;

/* 
Usage Example:

import EducationalProgramTemplate from './EducationalProgramTemplate';

// Use with default data
<EducationalProgramTemplate />

// Use with custom data
const customData = {
  title: "Your Program Title",
  subtitle: "Your Subtitle",
  // ... other properties
};

<EducationalProgramTemplate programData={customData} />
*/

