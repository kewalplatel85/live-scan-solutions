const customerCategories = [
  {
    title: 'Healthcare & Medical',
    types: [
      'Disability Care',
      'Elderly Care Employees',
      'Emergency Medical Systems',
      'Home Healthcare Agencies',
      'Massage Therapist',
      'Nursing License',
      'Osteopathic Physicians',
      'Pharmacy Technicians',
      'Physical Therapists and Assistants',
    ],
  },
  {
    title: 'Education & Childcare',
    types: [
      'Charter Schools',
      'Child Care',
      'Foster Parents',
      'Post-Secondary Education',
      'Private and Charter Schools',
      'School-district Employment',
      'Teaching License',
    ],
  },
  {
    title: 'Legal & Government',
    types: [
      'ATF (Alcohol, Tobacco and Firearms)',
      'Bar examination',
      'Bureau of Alcohol & Drug Abuse',
      'Department of Agriculture Employment',
      'Department of Motor Vehicles',
      'Department of Wildlife',
      'FFL (Federal firearm License)',
      'Immigration',
      'Lawyers/State Bar',
      'Sealing Criminal Records',
    ],
  },
  {
    title: 'Business & Finance',
    types: [
      'Accounting professionals',
      'Contractors',
      'CPA',
      'Escrow Title Officers',
      'Insurance Inspectors and Officers',
      'Labor Commissioners',
      'Mortgage Professionals',
      'Real Estate Professionals',
    ],
  },
  {
    title: 'Transportation & Safety',
    types: [
      'Bus Drivers',
      'Limo Drivers',
      'Private Investigators',
      'Security Guards',
      'Taxicab Drivers',
    ],
  },
  {
    title: 'Professional Licenses',
    types: [
      'Athletic Trainers',
      'Board of Long Term Examiners',
      'Cannabis Compliance Board',
      'Chiropractic Examiners',
      'Dentists and Dental Hygienists',
      'Dietitian',
      'Gaming License or Employment',
      'HCQC',
      'Psychology',
    ],
  },
  {
    title: 'Community Services',
    types: [
      'Adoption',
      'City or County Employment',
      'Document Prep',
      'Housing Authority Employment or Application',
      'Kinship Care',
      'Long-term Care Administrators',
      'Manufactured Housing',
      'Social Workers',
      'Traveling Outside USA',
      'Volunteers',
    ],
  },
];

export const CustomerTypesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At LiveScan Express Hub, we&apos;re the experts in fingerprinting,
            so you don&apos;t need to worry about a thing! From education and
            employment to business, travel, volunteering, and legal
            requirements, just about everyone in America will need
            fingerprinting services at some point. Our customers come to us for
            background checks in various fields and areas, including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {customerCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.types.map((type) => (
                  <li
                    key={type}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
