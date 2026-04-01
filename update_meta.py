import re
from pathlib import Path

mapping = {
    'webdevelopment.js': ('Web Development Course in Ojo, Lagos | Florintech Computer College', 'Learn web development in Ojo, Lagos at Florintech Computer College. Master HTML, CSS, JavaScript and more with 100% practical ICT training. Register today.'),
    'frontendwebdevelopment.js': ('Frontend Web Development with React.js in Lagos | Florintech', 'Take our React.js frontend development course in Ojo, Lagos. Build modern web apps with hands-on practical training. Enroll at Florintech Computer College today.'),
    'backenddevelopment.js': ('Backend Development with Node.js Course in Lagos | Florintech', 'Learn backend development with Node.js at Florintech Computer College in Ojo, Lagos. Practical training for aspiring backend developers. Register now.'),
    'fullstackwebdevelopment.js': ('Full-Stack Web Development Course in Ojo, Lagos | Florintech', 'Become a full-stack web developer at Florintech Computer College, Ojo Lagos. Covers frontend, backend, and industry best practices. Enroll today.'),
    'webdesignwithwordpress.js': ('Web Design with WordPress Course in Ojo, Lagos | Florintech', 'Learn to build and customize professional websites with WordPress at Florintech Computer College in Ojo, Lagos. Practical training for beginners. Register now.'),
    'certifiedgraphicsprofessional.js': ('Graphics Design Course in Ojo, Lagos | Florintech Computer College', 'Master Adobe Photoshop, Illustrator and CorelDRAW at Florintech Computer College in Ojo, Lagos. Become a certified graphics design professional. Enroll today.'),
    'desktoppublishing.js': ('Desktop Publishing Course in Ojo, Lagos | Florintech Computer College', 'Learn desktop publishing software and techniques at Florintech, a leading computer school in Ojo, Lagos. Practical, hands-on ICT training. Register now.'),
    'officeapplication.js': ('Microsoft Office Application Course in Ojo, Lagos | Florintech', 'Master Microsoft Office applications at Florintech Computer College in Ojo, Lagos. Essential digital skills for students and professionals. Enroll today.'),
    'autocadspecialist.js': ('AutoCAD Specialist Course in Ojo, Lagos | Florintech Computer College', 'Become an AutoCAD specialist at Florintech Computer College in Ojo, Lagos. Training for architects, engineers and designers. Practical ICT training. Register now.'),
    'advanceddesktoppublishing.js': ('Advanced Desktop Publishing Course in Lagos | Florintech Computer College', 'Take your desktop publishing skills to the next level at Florintech, Ojo Lagos. Covers Adobe InDesign, Illustrator and Photoshop. Enroll today.'),
    'digitalmarketingandwebdevelopnment.js': ('Digital Marketing & Web Development Course in Lagos | Florintech', 'Learn digital marketing and web development together at Florintech Computer College in Ojo, Lagos. Practical training for the Nigerian digital economy. Register now.'),
    'businesselectronicaccounting.js': ('Electronic Accounting Course in Ojo, Lagos | Florintech Computer College', 'Learn QuickBooks and business electronic accounting at Florintech Computer College in Ojo, Lagos. Ideal for students and business owners. Enroll today.'),
    'officeinformationmgt.js': ('Office Information Management Course in Lagos | Florintech', 'Learn modern office information management at Florintech Computer College in Ojo, Lagos. Practical digital skills for office professionals. Register now.'),
    'uiux.js': ('UI/UX Design Course in Ojo, Lagos | Florintech Computer College', 'Learn UI/UX design at Florintech Computer College in Ojo, Lagos. Master wireframing, prototyping, and user research with expert instructors. Enroll today.'),
    'cybersecurity.js': ('Cybersecurity Course in Ojo, Lagos | Florintech Computer College', 'Start a career in cybersecurity at Florintech Computer College in Ojo, Lagos. Our Junior Security Analyst course is ideal for beginners. Register now.'),
    'digitalmarketing.js': ('Digital Marketing Course in Ojo, Lagos | Florintech Computer College', 'Learn digital marketing at Florintech Computer College in Ojo, Lagos. Master SEO, social media, and content creation. Practical training for all levels. Enroll today.'),
    'data-analysis.js': ('Data Analysis Course in Ojo, Lagos | Florintech Computer College', 'Learn data analysis with Excel, SQL, Power BI and Python at Florintech Computer College in Ojo, Lagos. Hands-on training for aspiring analysts. Register now.'),
}

for filename, (title, desc) in mapping.items():
    path = Path('pages/courses') / filename
    if not path.exists():
        print('missing', path)
        continue
    txt = path.read_text(encoding='utf-8')
    new_txt = re.sub(r'(title\s*=\s*\")[^\"]*(\")', r'\1' + title + r'\2', txt, count=1)
    new_txt = re.sub(r'(description\s*=\s*\")[^\"]*(\")', r'\1' + desc + r'\2', new_txt, count=1)
    if new_txt != txt:
        path.write_text(new_txt, encoding='utf-8')
        print('updated', path)
    else:
        print('unchanged', path)
