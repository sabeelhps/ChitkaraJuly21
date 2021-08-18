
// Not a Good Way of Writing code (using callbacks) ,better way
// is to use promise 

// Download File 
// function downloadFile(url,downloaded) {
//     console.log(`Starting the download from ${url}`);
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//     }, 3000);
// }


// // compress file

// function compressFile(path, compressed) {
//     console.log(`Starting the file compression for the file ${path}`);
//     setTimeout(() => {
//         const compressedPath = path.split('.')[0] + '.zip';
//         compressed(compressedPath);
//     }, 2000);

// }

// // upload file

// function uploadFile(compressedPath, uploaded) {
    
//     console.log(`Starting to upload the file from ${compressedPath}`);

//     setTimeout(() => {
//         const uploadedPath = `http://localsystem/${compressedPath}`;
//         uploaded(uploadedPath);
//     }, 3000);

// }


// downloadFile('http://facebook.com/profile.jpg', function (path) {
//     console.log(`File downloaded Successfully as ${path}`);
//     compressFile(path, function (compressedPath) {
//         console.log(`File Compressed Successfully as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File uploaded Successfully at path ${uploadedPath}`);
//             console.log("Everything Done!!!");
//         })
//     })
// });



// ----------------------------------------------------

// Good Way Using Promise

// Download File 
function downloadFile(url) {
    console.log(`Starting the download from ${url}`);

    return new Promise(function (resolve, reject) {

        if (!url.startsWith('http')) {
            throw new Error("Invalid URL");
        }

        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);
    
    })
}


// compress file

function compressFile(path) {
    console.log(`Starting the file compression for the file ${path}`);

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const compressedPath = path.split('.')[0] + '.zip';
            resolve(compressedPath);
        }, 2000);
    
    });
}

// upload file

function uploadFile(compressedPath) {
    
    console.log(`Starting to upload the file from ${compressedPath}`);

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const uploadedPath = `http://localsystem/${compressedPath}`;
            resolve(uploadedPath);
        }, 3000);
    
    })
}




// downloadFile('http://facebook.com/profile.jpg')
//     .then((path) => {
//         console.log(`File Downloaded Successfully as ${path}`);
//         compressFile(path)
//             .then((compressedPath) => {
//                 console.log(`File Compressed Sucessfully as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then((uploadedPath) => {
//                         console.log(`File uploaded Successfully as ${uploadedPath}`);
//                         console.log("Everything Done!!!");
//                     });
//             });
//     });



downloadFile('smtp://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log("Everything Done");
    })
    .catch((err) => {
        console.log(err.message);
        console.log("Something Went Wrong");
    });