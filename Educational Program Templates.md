# Educational Program Templates

This package contains HTML and React templates that replicate the educational program information layout shown in your reference image. Both templates feature a professional design with a blue gradient header, two-column layout, and comprehensive program information sections.

## Files Included

1. **`educational-program-template.html`** - Complete HTML template with embedded CSS
2. **`EducationalProgramTemplate.jsx`** - Standalone React component
3. **`educational-program-react/`** - Complete React application project
4. **`README.md`** - This documentation file

## HTML Template

### Features
- Complete standalone HTML file with embedded CSS
- Responsive design that works on desktop and mobile
- Professional styling with gradients and hover effects
- Two-column layout with organized sections
- Interactive elements (buttons, links)

### Usage
Simply open `educational-program-template.html` in any web browser or integrate it into your website.

### Customization
Edit the HTML content and CSS styles directly in the file to match your program's information.

## React Component

### Features
- Reusable React component with props support
- Tailwind CSS styling (requires Tailwind CSS in your project)
- Responsive design
- Customizable data structure
- TypeScript-friendly

### Usage

#### Basic Usage (with default data)
```jsx
import EducationalProgramTemplate from './EducationalProgramTemplate';

function App() {
  return <EducationalProgramTemplate />;
}
```

#### Advanced Usage (with custom data)
```jsx
import EducationalProgramTemplate from './EducationalProgramTemplate';

const customProgramData = {
  title: "Your Program Title",
  subtitle: "Your Program Subtitle",
  programInfo: "Program Information",
  code: "Program Code - Duration - Schedule",
  mainTitle: "Your Main Section Title",
  introText: "Your introduction text...",
  
  questions: [
    "Your first question about the program?",
    "Your second question about the program?",
    // Add more questions...
  ],
  
  careers: [
    "Career option 1",
    "Career option 2",
    // Add more career options...
  ],
  
  companies: [
    "Company type 1",
    "Company type 2",
    // Add more company types...
  ],
  
  courses: [
    { session: "1", number: "COURSE-101", title: "Course Title", hours: "30" },
    // Add more courses...
  ]
};

function App() {
  return <EducationalProgramTemplate programData={customProgramData} />;
}
```

### Requirements
- React 16.8+ (uses hooks)
- Tailwind CSS for styling

### Installation in Your Project
1. Copy `EducationalProgramTemplate.jsx` to your React project
2. Ensure Tailwind CSS is installed and configured
3. Import and use the component as shown above

## Complete React Application

The `educational-program-react/` directory contains a complete React application with:
- Vite build system
- Tailwind CSS pre-configured
- shadcn/ui components
- Development server setup

### Running the React Application
```bash
cd educational-program-react
npm install  # if dependencies aren't installed
npm run dev
```

Then open http://localhost:5173 in your browser.

## Design Features

Both templates include:
- **Blue gradient header** with program title and information
- **Pink accent bar** for section titles
- **Two-column responsive layout**
- **Interactive elements** (buttons with hover effects)
- **Professional typography** with proper hierarchy
- **Contact information sections** with styled boxes
- **Course table** with alternating row colors
- **Mobile-responsive design**

## Customization Guide

### Colors
- Primary blue: `#4a9eca` to `#5bb3d9`
- Accent pink: `#e91e63`
- Background gray: `#f5f5f5`
- Text gray: `#333`

### Typography
- Headers: Bold, uppercase with letter spacing
- Body text: 13-14px with good line height
- Lists: Bullet points with blue accent color

### Layout
- Maximum width: 1000px (HTML) / 6xl (React)
- Grid: Two equal columns on desktop, single column on mobile
- Padding: Consistent 20px spacing
- Border radius: 8px for cards and buttons

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Internet Explorer 11+ (HTML template)

## License

These templates are provided as-is for your use. Feel free to modify and adapt them for your educational programs.

