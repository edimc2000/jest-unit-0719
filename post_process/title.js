const reStyle = () => {
    let targetTitle = document.getElementsByTagName("i")[0]
    targetTitle.outerHTML = "TEST RESULTS"
}

setTimeout(() => {
    console.log('Delayed message after 1 second');
    reStyle()
}, 100); // 1000 milliseconds = 1 second