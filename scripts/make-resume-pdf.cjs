const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '..', 'src', 'assets', 'Resume.png');
const outputPDF = path.join(__dirname, '..', 'src', 'assets', 'Jahnavi_Resume.pdf');

// Get image dimensions using pdfkit's built-in image handling
const doc = new PDFDocument({ autoFirstPage: false, margin: 0 });

const writeStream = fs.createWriteStream(outputPDF);
doc.pipe(writeStream);

// Read the image to get its dimensions
const imgBuffer = fs.readFileSync(inputImage);

// Add a page sized to the image (A4 portrait: 595.28 x 841.89 pts)
// We'll use A4 size and fit the image to it
const pageWidth = 595.28;
const pageHeight = 841.89;

doc.addPage({ size: [pageWidth, pageHeight], margin: 0 });
doc.image(imgBuffer, 0, 0, {
    width: pageWidth,
    height: pageHeight,
    align: 'center',
    valign: 'center'
});

doc.end();

writeStream.on('finish', () => {
    console.log('✅ PDF created successfully at:', outputPDF);
    console.log('📄 File size:', fs.statSync(outputPDF).size, 'bytes');
});

writeStream.on('error', (err) => {
    console.error('❌ Error creating PDF:', err);
    process.exit(1);
});
