"""
Generate an exact replica of the resume PDF matching the uploaded images.
Uses reportlab for precise layout control.
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

# ─────────── Page setup ───────────
PAGE_W, PAGE_H = A4          # 210 × 297 mm
LM = RM = 20 * mm            # left / right margin
TM = BM = 15 * mm            # top / bottom margin

doc = SimpleDocTemplate(
    "public/resume.pdf",
    pagesize=A4,
    leftMargin=LM,
    rightMargin=RM,
    topMargin=TM,
    bottomMargin=BM,
)

# ─────────── Base styles ───────────
def style(name, **kw):
    defaults = dict(
        fontName="Helvetica",
        fontSize=10,
        leading=14,
        spaceAfter=0,
        spaceBefore=0,
        textColor=colors.black,
    )
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

NAME    = style("Name",    fontName="Helvetica-Bold", fontSize=17, alignment=TA_CENTER, leading=22)
CTR     = style("Ctr",     alignment=TA_CENTER, leading=15)
CTR_LN  = style("CtrLn",   alignment=TA_CENTER, leading=15)   # linkedin line
SECTION = style("Section", fontName="Helvetica-Bold", fontSize=10.5,
                spaceBefore=7, spaceAfter=2)
BODY    = style("Body",    leading=14, spaceAfter=3)
BULLET  = style("Bullet",  leading=14, spaceAfter=3, leftIndent=12, firstLineIndent=-12)
PROJ_T  = style("ProjT",   fontName="Helvetica-Bold", leading=14,
                spaceAfter=1, leftIndent=12, firstLineIndent=-12)
PROJ_D  = style("ProjD",   leading=14, spaceAfter=6, leftIndent=12)
EDU_T   = style("EduT",    fontName="Helvetica-Bold", leading=14,
                leftIndent=12, firstLineIndent=-12)
EDU_D   = style("EduD",    leading=14, leftIndent=12)
EDU_R   = style("EduR",    alignment=TA_RIGHT, leading=14)
HR_SP   = 4   # points of space around HR line

INNER_W = PAGE_W - LM - RM   # usable width

def hr():
    """A full-width 0.8 pt black rule with a little breathing space."""
    return HRFlowable(width="100%", thickness=0.8,
                      color=colors.black,
                      spaceBefore=HR_SP, spaceAfter=HR_SP)

def section(title):
    return Paragraph(title, SECTION)

def bullet(text):
    return Paragraph(f"• {text}", BULLET)

def body(text):
    return Paragraph(text, BODY)

def sp(pts=4):
    return Spacer(1, pts)

# ─────────── Education row helper ───────────
def edu_row(name_bold, degree, pct, year):
    """Returns a 2-column table row: (bullet name + degree + pct) | year"""
    left = [
        Paragraph(f"• <b>{name_bold}</b>", EDU_T),
        Paragraph(degree, EDU_D),
        Paragraph(pct,    EDU_D),
    ]
    right = [
        Paragraph(str(year), EDU_R),
        Paragraph("", EDU_D),
        Paragraph("", EDU_D),
    ]
    t = Table([[left[i], right[i]] for i in range(3)],
              colWidths=[INNER_W * 0.78, INNER_W * 0.22])
    t.setStyle(TableStyle([
        ("LEFTPADDING",  (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING",   (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 0),
        ("VALIGN",       (0, 0), (-1, -1), "TOP"),
    ]))
    return t

# ─────────── Build story ───────────
story = []

# ── Header ──
story.append(Paragraph("P. Moneesh Raj", NAME))
story.append(sp(2))
story.append(Paragraph("Kancheepuram, Tamil Nadu", CTR))
story.append(Paragraph("8124567215 &nbsp; | &nbsp; moneesh2808@gmail.com", CTR))
story.append(Paragraph("<b>in</b> &nbsp; www.linkedin.com/in/Moneesh2808", CTR_LN))
story.append(sp(6))

# ── Professional Summary ──
story.append(section("PROFESSIONAL SUMMARY"))
story.append(hr())
story.append(Paragraph(
    "• &nbsp; M.Sc Computer Science student with hands-on experience in full-stack web development, "
    "AI-integrated applications, and machine learning projects. Skilled in Python, Django, Flask, React, "
    "PostgreSQL, and REST API development. Built scalable projects including Hospital Management Systems, "
    "AI chat applications, and machine learning solutions. Passionate about software engineering, "
    "artificial intelligence, and building impactful real-world applications.",
    BODY
))
story.append(sp(6))

# ── Technical Skills ──
story.append(section("TECHNICAL SKILLS"))
story.append(hr())

skills_data = [
    ("Programming:",       "Python, SQL, JavaScript,Reactjs(Basics)"),
    ("Data Analysis:",     "Excel, Pandas, NumPy, Matplotlib, Power BI"),
    ("Web Technologies:",  "HTML, CSS, REST APIs"),
    ("Frameworks:",        "Django, Flask"),
    ("Databases:",         "MySQL, PostgreSQL"),
    ("AI/ML:",             "Machine Learning, Data Analysis"),
    ("Tools:",             "Git, GitHub, VS Code"),
    ("AI Tools:",          "Antigravity, Claude, Cursor, ChatGPT"),
]
story.append(bullet(f"<b>Programming:</b>"))
story.append(Paragraph("Python, SQL, JavaScript,Reactjs(Basics)", PROJ_D))
story.append(sp(2))
for label, value in skills_data[1:]:
    story.append(Paragraph(f"<b>{label}</b>", PROJ_D))
    story.append(Paragraph(value, PROJ_D))
    story.append(sp(2))

story.append(sp(4))

# ── Soft Skills ──
story.append(section("SOFT SKILLS"))
story.append(hr())
for s in ["Communication", "Team Collaboration", "Problem Solving", "Analytical Thinking"]:
    story.append(bullet(s))
story.append(sp(6))

# ── Project ──
story.append(section("PROJECT"))
story.append(hr())

projects = [
    ("MoniVerse AI",
     "Developed a ChatGPT-like AI chatbot (MoniVerse AI) using React and Flask, leveraging Antigravity "
     "AI tools and a local LLM (Mistral via Ollama). Implemented real-time conversational responses "
     "along with PDF and image understanding in a modern, interactive UI."),
    ("Learning Management System",
     "Developed a full-stack Learning Management System using Django and MySQL, with features like user "
     "authentication, course management, and interactive dashboards. Designed a responsive frontend using "
     "HTML, CSS, and JavaScript to enhance user experience."),
    ("Plant Disease Detection",
     "Developed a machine learning model to classify plant diseases using image datasets, and built an "
     "interactive interface with Python and Streamlit. Improved prediction accuracy through effective "
     "data training and tuning."),
    ("Hospital Management System",
     "Developed a full-stack Hospital Management System using Django, PostgreSQL, and JWT authentication, "
     "enabling secure role-based access for patients and administrators. Designed and implemented "
     "appointment scheduling and payment workflows, enhancing operational efficiency and user experience. "
     "Utilized AI-assisted development tools (Antigravity, Claude) to accelerate feature development, "
     "optimize backend logic, and improve overall code quality."),
    ("Retail Sales Performance &amp; Demand Forecasting Analytics",
     "Developed a Retail Sales Performance and Demand Forecasting Analytics solution using Python and "
     "Power BI to analyze sales trends, customer behavior, and product performance. Applied data cleaning, "
     "exploratory data analysis, and predictive modeling techniques to forecast demand and support business "
     "decision-making through interactive dashboards and actionable insights."),
]
for title, desc in projects:
    story.append(Paragraph(f"• &nbsp;<b>{title}</b>", PROJ_T))
    story.append(Paragraph(desc, PROJ_D))

story.append(sp(6))

# ── Education ──
story.append(section("EDUCATION"))
story.append(hr())
story.append(edu_row("University of Madras", "M.Sc Computer Science", "75%", "2024 - 2026"))
story.append(sp(6))
story.append(edu_row("Pachaiyappas College for Men Kancheepuram", "B.Sc Computer Science", "78%", "2021 - 2024"))
story.append(sp(6))
story.append(edu_row("Bharathidasan Matriculation School", "12th Standard", "83%", "2021"))
story.append(sp(6))
story.append(edu_row("Bharathidasan Matriculation School", "10th Standard", "83%", "2019"))
story.append(sp(6))

# ── Certifications and Internship ──
story.append(section("CERTIFICATIONS AND INTERNSHIP"))
story.append(hr())
certs = [
    "Full Stack Developer Internship \u2013 Inspire Softtech Solutions (April 2025 - May 2025)",
    "AI &amp; Full Stack Developer Internship \u2013 Hybrid Softech Solutions (Jan 2026 - June 2026)",
    "Data Analytics with AI \u2013 Sololearn",
    "SQL Certification \u2013 Scalar, Simplilearn",
    "English Typewriting (Junior &amp; Senior)",
]
for c in certs:
    story.append(bullet(c))
story.append(sp(6))

# ── Achievements ──
story.append(section("ACHIEVEMENTS"))
story.append(hr())
for a in ["Best Student of the Year (2022)", "Rank 1 in Academics (2023)",
          "Badminton Winner \u2013 School Level (2018)"]:
    story.append(bullet(a))

# ─────────── Build ───────────
doc.build(story)
print("Resume PDF written to public/resume.pdf")
