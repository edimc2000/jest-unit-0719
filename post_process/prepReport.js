function prepReport() {
  const fs = require('fs');
  const path = './html-report/reportView1.html'; // Adjust path if needed

  let html = fs.readFileSync(path, 'utf8');

  const customStyle = `
    <script src="../post_process/title.js"></script>




    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Prata&family=Quicksand:wght@300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

    <style>
        /* this is to resize logo container */
        :where(.css-hro9nk).ant-avatar-lg {
          width: 180px;
          height: auto;
      
          border-radius: 50%;
        }
    
        /* this is to hide some links at the bottom */  
        :where(.css-hro9nk).ant-space {
          gap: 24px;
          display: none;
        }

        /* resize title */
        :where(.css-hro9nk).ant-typography.ant-typography-warning {
          color: #ffffffff;
          font-family: "Quicksand", sans-serif;
          font-size: 30px;
          font-style: normal;
          margin-top: 0.4em
        }

        .inner_path_text {
          font-family: "Ubuntu", sans-serif;
           font-weight: 500;
        }


      </style>
  </head>`;

  // Inject the custom style before </head>
  html = html.replace('</head>', customStyle);

  fs.writeFileSync(path, html, 'utf8');
  console.log('✔ Custom CSS injected');

}

module.exports = prepReport