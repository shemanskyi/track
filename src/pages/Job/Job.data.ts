export const CONTACTS = [
    {
      address: '123 Elm Street',
      city: 'Springfield',
      emails: ['john.doe@example.com', '', '', ''],
      id: 1,
      lastContactedBy: 'Paul Jones',
      name: 'John Doe',
      pass: [
        {
          attempt: 1,
          date: '2024-12-08',
          whoCalled: 'Jane Smith'
        },
        {
          attempt: 2,
          date: '2024-12-09',
          whoCalled: 'Paul Jones'
        }
      ],
      phoneNumbers: ['555-123-4567', '555-234-5678', '555-345-6789'],
      state: 'IL',
      status: 'unset',
      technologies: ['Java', 'Python', 'SQL'],
      totalCalls: 2
    },
    {
      address: '456 Oak Avenue',
      city: 'Metropolis',
      emails: ['jane.roe@example.com', 'j.roe@workmail.com', '', ''],
      id: 2,
      lastContactedBy: '',
      name: 'Jane Roe',
      pass: [],
      phoneNumbers: ['555-987-6543', '', ''],
      state: 'NY',
      status: 'good',
      technologies: ['JavaScript', 'React', 'Node.js'],
      totalCalls: 0
    },
    {
      address: '789 Maple Road',
      city: 'Gotham',
      emails: ['alice.brown@example.com', '', '', ''],
      id: 3,
      lastContactedBy: 'Mike Green',
      name: 'Alice Brown',
      pass: [
        {
          attempt: 1,
          date: '2024-12-07',
          whoCalled: 'Mike Green'
        }
      ],
      phoneNumbers: ['555-456-7890', '555-567-8901', ''],
      state: 'NJ',
      status: 'maybe',
      technologies: ['C++', 'Python', 'AWS'],
      totalCalls: 1
    },
    {
      address: '321 Birch Lane',
      city: 'Smallville',
      emails: ['bob.white@example.com', '', '', ''],
      id: 4,
      lastContactedBy: '',
      name: 'Bob White',
      pass: [],
      phoneNumbers: ['555-678-1234', '', ''],
      state: 'KS',
      status: 'bad',
      technologies: ['Go', 'Docker', 'Kubernetes'],
      totalCalls: 0
    },
    {
      address: '246 Pine Street',
      city: 'Star City',
      emails: ['charlie.green@example.com', '', '', ''],
      id: 5,
      lastContactedBy: 'John Doe',
      name: 'Charlie Green',
      pass: [
        {
          attempt: 1,
          date: '2024-12-06',
          whoCalled: 'John Doe'
        }
      ],
      phoneNumbers: ['555-234-5678', '', ''],
      state: 'CA',
      status: 'unset',
      technologies: ['Ruby', 'Rails', 'PostgreSQL'],
      totalCalls: 1
    },
    {
      address: '789 Amazon Way',
      city: 'Themyscira',
      emails: ['diana.prince@justiceleague.com', '', '', ''],
      id: 6,
      lastContactedBy: 'Steve Trevor',
      name: 'Diana Prince',
      pass: [
        {
          attempt: 1,
          date: '2024-12-05',
          whoCalled: 'Steve Trevor'
        }
      ],
      phoneNumbers: ['555-111-2222', '555-333-4444', ''],
      state: 'WA',
      status: 'good',
      technologies: ['C#', 'Azure', 'DevOps'],
      totalCalls: 1
    },
    {
      address: '1 Krypton Lane',
      city: 'Smallville',
      emails: ['clark.kent@dailyplanet.com', '', '', ''],
      id: 7,
      lastContactedBy: '',
      name: 'Clark Kent',
      pass: [],
      phoneNumbers: ['555-555-5555', '', ''],
      state: 'KS',
      status: 'maybe',
      technologies: ['PHP', 'Laravel', 'MySQL'],
      totalCalls: 0
    },
    {
      address: '100 Wayne Manor',
      city: 'Gotham',
      emails: ['bruce.wayne@wayneenterprises.com', '', '', ''],
      id: 8,
      lastContactedBy: '',
      name: 'Bruce Wayne',
      pass: [],
      phoneNumbers: ['555-000-0000', '555-999-9999', ''],
      state: 'NJ',
      status: 'unset',
      technologies: ['Python', 'AI', 'Cybersecurity'],
      totalCalls: 0
    },
    {
      address: '101 Cat Street',
      city: 'Gotham',
      emails: ['selina.kyle@gothamcity.com', '', '', ''],
      id: 9,
      lastContactedBy: 'Alfred Pennyworth',
      name: 'Selina Kyle',
      pass: [
        {
          attempt: 1,
          date: '2024-12-04',
          whoCalled: 'Alfred Pennyworth'
        }
      ],
      phoneNumbers: ['555-222-3333', '', ''],
      state: 'NJ',
      status: 'good',
      technologies: ['Java', 'Spring', 'Hibernate'],
      totalCalls: 1
    },
    {
      address: '456 Speed Lane',
      city: 'Central City',
      emails: ['barry.allen@starlabs.com', '', '', ''],
      id: 10,
      lastContactedBy: '',
      name: 'Barry Allen',
      pass: [],
      phoneNumbers: ['555-888-7777', '', ''],
      state: 'MO',
      status: 'maybe',
      technologies: ['JavaScript', 'Angular', 'MongoDB'],
      totalCalls: 0
    },
    {
      address: '789 Lantern Ave',
      city: 'Coast City',
      emails: ['hal.jordan@greenlantern.com', '', '', ''],
      id: 11,
      lastContactedBy: '',
      name: 'Hal Jordan',
      pass: [],
      phoneNumbers: ['555-444-5555', '', ''],
      state: 'CA',
      status: 'unset',
      technologies: ['Java', 'Cloud', 'Kubernetes'],
      totalCalls: 0
    },
    {
      address: '123 Ocean Drive',
      city: 'Atlantis',
      emails: ['arthur.curry@atlantis.com', '', '', ''],
      id: 12,
      lastContactedBy: 'Mera',
      name: 'Arthur Curry',
      pass: [
        {
          attempt: 1,
          date: '2024-12-03',
          whoCalled: 'Mera'
        }
      ],
      phoneNumbers: ['555-666-7777', '', ''],
      state: 'FL',
      status: 'good',
      technologies: ['Go', 'AWS', 'Terraform'],
      totalCalls: 1
    },
    {
      address: '101 Tech Way',
      city: 'Detroit',
      emails: ['victor.stone@cyborg.com', '', '', ''],
      id: 13,
      lastContactedBy: '',
      name: 'Victor Stone',
      pass: [],
      phoneNumbers: ['555-888-4444', '', ''],
      state: 'MI',
      status: 'maybe',
      technologies: ['C++', 'AI', 'Machine Learning'],
      totalCalls: 0
    },
    {
      address: '789 Arrow Drive',
      city: 'Star City',
      emails: ['oliver.queen@queenindustries.com', '', '', ''],
      id: 14,
      lastContactedBy: '',
      name: 'Oliver Queen',
      pass: [],
      phoneNumbers: ['555-777-8888', '', ''],
      state: 'CA',
      status: 'unset',
      technologies: ['JavaScript', 'React', 'Node.js'],
      totalCalls: 0
    },
    {
      address: '321 Krypton Blvd',
      city: 'National City',
      emails: ['kara.zorel@catco.com', '', '', ''],
      id: 15,
      lastContactedBy: 'Alex Danvers',
      name: 'Kara Zor-El',
      pass: [
        {
          attempt: 1,
          date: '2024-12-02',
          whoCalled: 'Alex Danvers'
        }
      ],
      phoneNumbers: ['555-000-1111', '', ''],
      state: 'CA',
      status: 'good',
      technologies: ['Python', 'Django', 'Machine Learning'],
      totalCalls: 1
    }
  ];