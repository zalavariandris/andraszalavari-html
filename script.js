console.log("hello world");

// document.addEventListener('DOMContentLoaded', function() {
//     // Get all video tags in the document
//     var videos = document.getElementsByTagName('video');

//     // Loop through each video tag
//     for (var i = 0; i < videos.length; i++) {
//         var video = videos[i];

//         // Get the source tag inside the video tag
//         var source = video.getElementsByTagName('source')[0];

//         // Get the current src attribute value
//         var currentSrc = source.getAttribute('src');

//         // Check if the current src attribute value is a relative URL
//         if (currentSrc.startsWith('/')) {
//             // Construct the raw GitHub URL
//             var rawUrl = 'https://raw.githubusercontent.com' + currentSrc;

//             // Set the new src attribute value
//             source.setAttribute('src', rawUrl);
//             console.log(rawUrl);
//         }
//     }
// });