// import { useEffect, useState } from "react";

// export default function Count()
// {

//     const [ loggedIn , setloggedIn] = useState(true);

//     function checkForInactivity() 
//     {
//         const expireTime = localStorage.getItem("expireTime");

//         if (expireTime < Date.now()) {
//             console.log("logout");
//             setloggedIn(false);
//         }

//         const updateExpireTime = () => {
//             localStorage.setItem("expireTime", expireTime);
//         };

//         useEffect(() => {
//             updateExpireTime();

//             window.addEventListener("click", updateExpireTime);
//             window.addEventListener("keypress", updateExpireTime);
//             window.addEventListener("scroll", updateExpireTime);
//             window.addEventListener("mousemove", updateExpireTime);


//             return () => {

//                 window.removeEventListener("click", updateExpireTime);
//                 window.removeEventListener("Keypress", updateExpireTime);
//                 window.removeEventListener("scroll", updateExpireTime);
//                 window.removeEventListener("mousemove", updateExpireTime);

//             };





//         }, []);

//         useEffect(() => setInterval(() => {
//             checkForInactivity();
//         },[]);



//     }


// return(
//     <div> 
//     you have {loggedIn.tostring()}
    
//     </div>
// )



// }