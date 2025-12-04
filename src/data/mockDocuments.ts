import { Document } from '../types/document';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Deep Learning Approaches for Natural Language Processing: A Comprehensive Survey',
    type: 'research-paper',
    authors: [
      { name: 'Dr. Sarah Chen', affiliation: 'MIT Computer Science' },
      { name: 'Prof. Michael Zhang', affiliation: 'Stanford AI Lab' }
    ],
    abstract: 'This paper presents a comprehensive survey of deep learning techniques applied to natural language processing tasks. We examine various neural network architectures including transformers, BERT, GPT, and their applications in machine translation, sentiment analysis, and text generation. Our analysis covers recent advancements and identifies future research directions in the field.',
    keywords: ['Deep Learning', 'NLP', 'Transformers', 'BERT', 'Neural Networks'],
    subject: 'Computer Science',
    publicationYear: 2024,
    journal: 'Journal of Artificial Intelligence Research',
    volume: '78',
    pages: '145-198',
    doi: '10.1613/jair.1.12345',
    views: 15420,
    citations: 234
  },
  {
    id: '2',
    title: 'Quantum Computing: Principles, Algorithms, and Applications',
    type: 'book',
    authors: [
      { name: 'Dr. Robert Williams', affiliation: 'Caltech Physics Department' }
    ],
    abstract: 'A comprehensive introduction to quantum computing covering fundamental principles of quantum mechanics, quantum algorithms including Shor\'s and Grover\'s algorithms, quantum error correction, and real-world applications. This book serves as both a textbook for graduate students and a reference for researchers.',
    keywords: ['Quantum Computing', 'Quantum Algorithms', 'Quantum Mechanics', 'Shor Algorithm'],
    subject: 'Physics',
    publicationYear: 2023,
    views: 8934,
    citations: 156
  },
  {
    id: '3',
    title: 'CRISPR-Cas9 Gene Editing: Therapeutic Applications and Ethical Considerations',
    type: 'journal-article',
    authors: [
      { name: 'Dr. Emily Johnson', affiliation: 'Harvard Medical School' },
      { name: 'Dr. David Lee', affiliation: 'Johns Hopkins University' },
      { name: 'Dr. Maria Garcia', affiliation: 'Mayo Clinic' }
    ],
    abstract: 'Gene editing using CRISPR-Cas9 has revolutionized molecular biology and medicine. This article reviews recent therapeutic applications in treating genetic disorders, cancers, and infectious diseases. We also discuss ethical implications, safety concerns, and regulatory frameworks governing clinical applications of gene editing technologies.',
    keywords: ['CRISPR', 'Gene Editing', 'Genetic Therapy', 'Bioethics', 'Molecular Biology'],
    subject: 'Medicine',
    publicationYear: 2024,
    journal: 'Nature Medicine',
    volume: '30',
    pages: '567-589',
    doi: '10.1038/s41591-024-12345',
    views: 22100,
    citations: 445
  },
  {
    id: '4',
    title: 'Sustainable Energy Systems: Integration of Renewable Sources in Smart Grids',
    type: 'research-paper',
    authors: [
      { name: 'Dr. James Anderson', affiliation: 'TU Delft Energy Systems' },
      { name: 'Prof. Lisa Wang', affiliation: 'ETH Zurich' }
    ],
    abstract: 'This research investigates the integration of renewable energy sources into modern smart grid infrastructure. We present novel control algorithms for managing intermittent power generation from solar and wind sources, energy storage optimization strategies, and demand-response mechanisms that enhance grid stability and efficiency.',
    keywords: ['Renewable Energy', 'Smart Grids', 'Solar Power', 'Wind Energy', 'Energy Storage'],
    subject: 'Engineering',
    publicationYear: 2024,
    journal: 'IEEE Transactions on Smart Grid',
    volume: '15',
    pages: '1023-1045',
    doi: '10.1109/TSG.2024.12345',
    views: 12567,
    citations: 189
  },
  {
    id: '5',
    title: 'Machine Learning in Drug Discovery: From Molecular Design to Clinical Trials',
    type: 'review-paper',
    authors: [
      { name: 'Dr. Patricia Martinez', affiliation: 'Pfizer Research' },
      { name: 'Dr. Thomas Brown', affiliation: 'Cambridge Pharmaceutical Sciences' }
    ],
    abstract: 'This review examines the application of machine learning techniques in pharmaceutical research and drug discovery. Topics include molecular property prediction, de novo drug design, toxicity prediction, and optimization of clinical trial design. We analyze successful case studies and discuss challenges in deploying AI systems in pharmaceutical development.',
    keywords: ['Machine Learning', 'Drug Discovery', 'Pharmaceutical Research', 'AI in Medicine'],
    subject: 'Medicine',
    publicationYear: 2023,
    journal: 'Drug Discovery Today',
    volume: '28',
    pages: '234-267',
    doi: '10.1016/j.drudis.2023.12345',
    views: 18900,
    citations: 312
  },
  {
    id: '6',
    title: 'Blockchain Technology and Decentralized Finance: Security Analysis',
    type: 'thesis',
    authors: [
      { name: 'Alexandra Kim', affiliation: 'Carnegie Mellon University' }
    ],
    abstract: 'This doctoral thesis presents a comprehensive security analysis of blockchain protocols and decentralized finance (DeFi) systems. We identify vulnerabilities in smart contracts, analyze attack vectors in consensus mechanisms, and propose novel cryptographic solutions to enhance security in distributed ledger technologies.',
    keywords: ['Blockchain', 'Cryptocurrency', 'Smart Contracts', 'Cybersecurity', 'DeFi'],
    subject: 'Computer Science',
    publicationYear: 2024,
    views: 7845,
    citations: 67
  },
  {
    id: '7',
    title: 'Climate Change Modeling: Predictive Analytics and Environmental Impact Assessment',
    type: 'research-paper',
    authors: [
      { name: 'Dr. Richard Thompson', affiliation: 'NOAA Climate Research' },
      { name: 'Dr. Susan Miller', affiliation: 'Oxford Environmental Sciences' }
    ],
    abstract: 'We present advanced climate modeling techniques using machine learning and statistical methods to predict long-term environmental changes. Our models incorporate atmospheric data, ocean temperature patterns, and greenhouse gas concentrations to forecast climate scenarios and assess potential impacts on ecosystems and human societies.',
    keywords: ['Climate Change', 'Environmental Science', 'Predictive Modeling', 'Global Warming'],
    subject: 'Physics',
    publicationYear: 2024,
    journal: 'Environmental Research Letters',
    volume: '19',
    pages: '456-478',
    doi: '10.1088/1748-9326/ab12345',
    views: 14230,
    citations: 278
  },
  {
    id: '8',
    title: 'Advances in Cancer Immunotherapy: CAR-T Cell Engineering and Clinical Outcomes',
    type: 'journal-article',
    authors: [
      { name: 'Dr. Jennifer White', affiliation: 'Memorial Sloan Kettering' },
      { name: 'Dr. Andrew Davis', affiliation: 'MD Anderson Cancer Center' }
    ],
    abstract: 'Chimeric antigen receptor (CAR) T-cell therapy represents a breakthrough in cancer treatment. This article reviews recent advances in CAR-T cell engineering, manufacturing processes, clinical trial results across various cancer types, and strategies to overcome current limitations including tumor heterogeneity and immune escape mechanisms.',
    keywords: ['Immunotherapy', 'CAR-T Cells', 'Cancer Treatment', 'Cell Therapy', 'Oncology'],
    subject: 'Medicine',
    publicationYear: 2024,
    journal: 'The New England Journal of Medicine',
    volume: '390',
    pages: '789-812',
    doi: '10.1056/NEJMra2345678',
    views: 25600,
    citations: 523
  },
  {
    id: '9',
    title: 'Artificial Intelligence in Financial Markets: Algorithmic Trading and Risk Management',
    type: 'book-chapter',
    authors: [
      { name: 'Dr. Christopher Lee', affiliation: 'London School of Economics' },
      { name: 'Prof. Margaret Chen', affiliation: 'Wharton Business School' }
    ],
    abstract: 'This chapter explores the application of artificial intelligence and machine learning in financial markets. We examine algorithmic trading strategies, portfolio optimization, risk assessment models, fraud detection systems, and regulatory compliance automation. Case studies from major financial institutions illustrate practical implementations and outcomes.',
    keywords: ['AI', 'Finance', 'Algorithmic Trading', 'Risk Management', 'FinTech'],
    subject: 'Management',
    publicationYear: 2023,
    views: 9876,
    citations: 145
  },
  {
    id: '10',
    title: 'Neural Interface Technologies: Brain-Computer Interfaces for Medical Applications',
    type: 'research-paper',
    authors: [
      { name: 'Dr. Kevin Park', affiliation: 'Duke Neuroscience Center' },
      { name: 'Dr. Rachel Green', affiliation: 'Imperial College London' }
    ],
    abstract: 'We investigate brain-computer interface (BCI) technologies for medical applications including neural prosthetics, stroke rehabilitation, and communication systems for paralyzed patients. Our research presents novel signal processing algorithms, electrode designs, and machine learning classifiers that improve BCI accuracy and usability.',
    keywords: ['Brain-Computer Interface', 'Neuroscience', 'Medical Devices', 'Neural Engineering'],
    subject: 'Engineering',
    publicationYear: 2024,
    journal: 'Journal of Neural Engineering',
    volume: '21',
    pages: '234-256',
    doi: '10.1088/1741-2552/ab12345',
    views: 11200,
    citations: 198
  },
  {
    id: '11',
    title: 'Nanotechnology in Drug Delivery Systems: Targeted Cancer Therapeutics',
    type: 'dissertation',
    authors: [
      { name: 'Michael Rodriguez', affiliation: 'MIT Chemical Engineering' }
    ],
    abstract: 'This dissertation investigates nanoparticle-based drug delivery systems for targeted cancer therapy. We design and characterize novel nanocarriers with enhanced tumor-targeting capabilities, controlled drug release mechanisms, and reduced systemic toxicity. In vivo studies demonstrate superior efficacy compared to conventional chemotherapy.',
    keywords: ['Nanotechnology', 'Drug Delivery', 'Cancer', 'Nanoparticles', 'Biomaterials'],
    subject: 'Chemistry',
    publicationYear: 2023,
    views: 6543,
    citations: 89
  },
  {
    id: '12',
    title: 'Cybersecurity in IoT Networks: Threat Detection and Prevention Strategies',
    type: 'technical-document',
    authors: [
      { name: 'Dr. Daniel Kim', affiliation: 'Georgia Tech Cybersecurity' },
      { name: 'Dr. Amy Wilson', affiliation: 'Carnegie Mellon CyLab' }
    ],
    abstract: 'Internet of Things (IoT) networks face unique cybersecurity challenges due to resource constraints and heterogeneous devices. This technical report presents threat modeling for IoT ecosystems, intrusion detection systems optimized for low-power devices, and secure communication protocols that balance security with computational efficiency.',
    keywords: ['IoT', 'Cybersecurity', 'Network Security', 'Intrusion Detection', 'Privacy'],
    subject: 'Computer Science',
    publicationYear: 2024,
    views: 13400,
    citations: 156
  }
];

export const trendingDocuments = mockDocuments
  .sort((a, b) => b.views - a.views)
  .slice(0, 6);

export const recentDocuments = mockDocuments
  .sort((a, b) => b.publicationYear - a.publicationYear)
  .slice(0, 6);
