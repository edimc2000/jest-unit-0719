function logoResize() {

  const fs = require('fs');
  const path = './html-report/reportView1.html'; // Adjust path if needed

  let html = fs.readFileSync(path, 'utf8');

  const customStyle = `
  <style>
      :where(.css-hro9nk).ant-avatar-lg {
        width: 140px;
        height: auto;
        line-height: 38px;
        border-radius: 50%;
      }

      :where(.css-hro9nk).ant-switch {
       display: none;
      }



    </style>
</head>`;

  // Inject the custom style before </head>
  html = html.replace('</head>', customStyle);

  fs.writeFileSync(path, html, 'utf8');
  console.log('✔ Custom CSS injected');

}

module.exports = logoResize