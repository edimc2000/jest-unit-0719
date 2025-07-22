function prepReport() {
  const fs = require('fs');
  const path = './html-report/reportView1.html'; // Adjust path if needed

  let html = fs.readFileSync(path, 'utf8');

  const customStyle = `
      <script>
        const reStyle = () => {
          let targetTitle = document.getElementsByTagName("i")[0]
          targetTitle.outerHTML = "TEST REPORT"

          // result summary passed
          const spanElements = document.querySelectorAll('span[style="background-color: rgb(82, 196, 26);"]')
            spanElements.forEach((element) => {
              // Visual styling
              element.style.backgroundColor = 'rgb(22, 97, 14)';
      
               // Ensure text remains visible
              element.style.padding = '5px 15px'; // Increased horizontal padding
              element.style.borderRadius = '4px'; // Softened edges
              
              // Text styling
              element.style.fontSize = '0.95em'; // Slightly reduced font size
              element.style.fontFamily = 'Quicksand, sans-serif';
              element.style.fontWeight = 'bold';
              element.style.color = 'white';
              
              // Layout
              element.style.display = 'inline-flex'; // Better for text alignment
              element.style.alignItems = 'center';
              element.style.justifyContent = 'center';
              element.style.boxSizing = 'border-box';
              element.style.minWidth = 'fit-content'; // Adjusts to text length
          });
          
          // result summary failed
          const spanElementsFailed = document.querySelectorAll('span[style="background-color: rgb(255, 77, 79);"]')
            spanElementsFailed.forEach((element) => {
              // Visual styling
              element.style.backgroundColor = 'rgb(255, 77, 79)';
      
               // Ensure text remains visible
              element.style.padding = '5px 15px'; // Increased horizontal padding
              element.style.borderRadius = '4px'; // Softened edges
              
              // Text styling
              element.style.fontSize = '0.95em'; // Slightly reduced font size
              element.style.fontFamily = 'Quicksand, sans-serif';
              element.style.fontWeight = 'bold';
              element.style.color = 'white';
              
              // Layout
              element.style.display = 'inline-flex'; // Better for text alignment
              element.style.alignItems = 'center';
              element.style.justifyContent = 'center';
              element.style.boxSizing = 'border-box';
              element.style.minWidth = 'fit-content'; // Adjusts to text length
          });
             
          //time box
          const spanTimeBox = document.querySelectorAll('.time_box')
            spanTimeBox.forEach((element) => {
             
              // Text styling
              element.style.fontSize = '1.2em'; // Slightly reduced font size
              element.style.fontFamily = 'Quicksand, sans-serif';
              element.style.fontWeight = 'bold';
              element.style.color = 'rgb(57, 62, 70)';
           
          });



        }
 



        setTimeout(() => {
            console.log('Delayed message after 1 second');
            reStyle()
          
        }, 1000); // 1000 milliseconds = 1 second
      </script>

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

        /* test item */
        .inner_path_text {
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 1em;   
        }

        // filename header on the test report
        .ant-typography css-hro9nk{
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 1.2em; 
        }


        [style = "color: rgb(217, 54, 62);"] .detail_status_text{
          font-family: "Quicksand", sans-serif;
          font-weight: 700;    
          font-size: 1em;   
        }

        [style = "color: rgb(82, 196, 26);"] .detail_status_text{
          font-family: "Quicksand", sans-serif;
          font-weight: 700;    
          font-size: 1em;   
          color: rgb(22, 97, 14);
        }



 

      </style>
  </head>`;

  // Inject the custom style before </head>
  html = html.replace('</head>', customStyle);

  fs.writeFileSync(path, html, 'utf8');
  console.log('✔ Custom CSS injected');

}

module.exports = prepReport