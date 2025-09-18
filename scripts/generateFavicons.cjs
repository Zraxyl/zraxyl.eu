const fs = require('fs');
const path = require('path');

// Create a simple SVG favicon with "Z"
const createZFavicon = () => {
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="url(#gradient)" rx="6"/>
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="16" y="24" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">Z</text>
</svg>`;

  // Save SVG favicon
  fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svgContent.trim());
  console.log('✅ Created favicon.svg with Z logo');

  // Create a simple HTML file to convert SVG to other formats
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Favicon Generator</title>
    <style>
        canvas { border: 1px solid #ccc; margin: 10px; }
        .container { display: flex; flex-wrap: wrap; }
    </style>
</head>
<body>
    <h1>Zraxyl Favicon Generator</h1>
    <p>Generated Z favicon files:</p>
    <div class="container">
        <canvas id="canvas16" width="16" height="16"></canvas>
        <canvas id="canvas32" width="32" height="32"></canvas>
        <canvas id="canvas192" width="192" height="192"></canvas>
        <canvas id="canvas512" width="512" height="512"></canvas>
    </div>
    
    <script>
        // Function to draw Z favicon on canvas
        function drawZFavicon(canvas) {
            const ctx = canvas.getContext('2d');
            const size = canvas.width;
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, size, size);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            
            // Draw rounded rectangle background
            ctx.fillStyle = gradient;
            ctx.roundRect(0, 0, size, size, size * 0.1875);
            ctx.fill();
            
            // Draw Z text
            ctx.fillStyle = 'white';
            ctx.font = 'bold ' + (size * 0.625) + 'px Arial, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Z', size / 2, size / 2);
        }
        
        // Add roundRect method if not available
        if (!CanvasRenderingContext2D.prototype.roundRect) {
            CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
                this.beginPath();
                this.moveTo(x + radius, y);
                this.lineTo(x + width - radius, y);
                this.quadraticCurveTo(x + width, y, x + width, y + radius);
                this.lineTo(x + width, y + height - radius);
                this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                this.lineTo(x + radius, y + height);
                this.quadraticCurveTo(x, y + height, x, y + height - radius);
                this.lineTo(x, y + radius);
                this.quadraticCurveTo(x, y, x + radius, y);
                this.closePath();
            };
        }
        
        // Draw favicons
        ['16', '32', '192', '512'].forEach(size => {
            const canvas = document.getElementById('canvas' + size);
            drawZFavicon(canvas);
            
            // Convert to blob and create download link
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'favicon-' + size + 'x' + size + '.png';
                link.textContent = 'Download ' + size + 'x' + size;
                link.style.display = 'block';
                link.style.margin = '5px';
                document.body.appendChild(link);
            });
        });
    </script>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, '../public/favicon-generator.html'), htmlContent.trim());
  console.log('✅ Created favicon-generator.html - Open this in a browser to download PNG favicons');
};

// Run the favicon generator
createZFavicon();