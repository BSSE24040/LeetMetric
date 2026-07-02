// document.addEventListener("DOMContentLoaded",function(){})


// const searchButton=document.getElementById("search-btn");
// const usernameInput= document.getElementById("user-input");

// const statsContainer= document.querySelector(".stats-container");

//  const easyProgressCircle= document.querySelector(".easy-progress");
//  const mediumProgressCircle=document.querySelector(".medium-progress");
//  const hardProgressCircle=document.querySelector(".hard-progress");
//  const easyLabel=document.getElementById("easy-label");
//  const mediumLabel=document.getElementById("medium-label");
//  const hardLabel=document.getElementById("hard-label");
//  const cardStatsContainer= document.querySelector(".stats-card");


// function validateUsername(username){
//     if(username.trim()===""){
//         alert("Username should not be empty");
//         return false;
//     }
//      const regex= /^[a-zA-Z0-9_-]{1,15}$/;
//     const isMatching =regex.test(username);
//     if(!isMatching){
//         alert("invalid Username");
//     }    
//     return isMatching;
// }


// function updateProgress(solved,total,label,circle){
//     const progressDegree = (solved/total)*100;
//     circle.style.setProperty("--progress-degree",`${progressDegree}%`);
//   label.textContent=`${solved}/ ${total}`;
// }

// function displayUserDetails(data){
//   const totalQues=data.data.allQuestionsCount[0].count;
//    const totalEasyQues=data.data.allQuestionsCount[1].count;
//     const totalMediumQues=data.data.allQuestionsCount[2].count;
//      const totalHardQues=data.data.allQuestionsCount[3].count;
//      const solvedTotalQues=data.data.matchedUser.submitStats.actSubmissionNum[0].count;
//       const solvedEasyQues=data.data.matchedUser.submitStats.actSubmissionNum[1].count;
//        const solvedMediumQues=data.data.matchedUser.submitStats.actSubmissionNum[2].count;
//         const solvedHardQues=data.data.matchedUser.submitStats.actSubmissionNum[3].count;
// updateProgress(solvedEasyQues,totalEasyQues,easyLabel,easyProgressCircle);
// updateProgress(solvedMediumQues,totalMediumQues,mediumLabel,mediumProgressCircle);
// updateProgress(solvedHardQues,totalHardQues,hardLabel,hardProgressCircle);

//   const cardData=[{
//     label:"Overall Submission",value:data.data.matchedUser.submitStats.totalSubmissionNum[0].submissions
//   },{
//     label:"Overall easy Submission",value:data.data.matchedUser.submitStats.totalSubmissionNum[1].submissions
//   },{
//     label:"Overall medium Submission",value:data.data.matchedUser.submitStats.totalSubmissionNum[2].submissions
//   },{
//     label:"Overall hard Submission",value:data.data.matchedUser.submitStats.totalSubmissionNum[3].submissions
//   }
// ];

// console.log("card ka data: ",cardData);
    

//     cardStatsContainer.innerHTML = cardData.map(data => `
//   <div class="card">
//     <h3>${data.label}</h3>
//     <p>${data.value}</p>
//   </div>
// `).join("");

// }

// async function fetchUserDetails(){
//    const url=''
//    try{
//     searchButton.textContent="searching..."
//     searchButton.disabled=true;
    
//     const response=await fetch(url);
//     if(!response.ok){
//         throw new Error("Unable to fetch the user details");
//     }
//     const data=await response.json();
//      console.log("logging data: ",data);
     
     
//     displayUserDetails(data);
// }
// catch(error){
// statsContainer.innerHTML='<p>No data found</p>'
// }
// finally{
//   searchButton.textContent="search"
//     searchButton.disabled=false;
// }
// }


//   searchButton.addEventListener("click",function(){
//     const username=usernameInput.value;
//     console.log("loggin username ",username);
//     if(validateUsername(username)){
//         fetchUserDetails(username);

//     }
//   })




  document.addEventListener("DOMContentLoaded", function () {});

const searchButton = document.getElementById("search-btn");
const usernameInput = document.getElementById("user-input");

const statsContainer = document.querySelector(".stats-container");

const easyProgressCircle = document.querySelector(".easy-progress");
const mediumProgressCircle = document.querySelector(".medium-progress");
const hardProgressCircle = document.querySelector(".hard-progress");
const easyLabel = document.getElementById("easy-label");
const mediumLabel = document.getElementById("medium-label");
const hardLabel = document.getElementById("hard-label");
const cardStatsContainer = document.querySelector(".stats-card");

function validateUsername(username) {
  if (username.trim() === "") {
    alert("Username should not be empty");
    return false;
  }
  const regex = /^[a-zA-Z0-9_-]{1,15}$/;
  const isMatching = regex.test(username);
  if (!isMatching) {
    alert("Invalid Username");
  }
  return isMatching;
}

function updateProgress(solved, total, label, circle) {
  const progressDegree = (solved / total) * 100;
  circle.style.setProperty("--progress-degree", `${progressDegree}%`);
  label.textContent = `${solved}/${total}`;
}

function displayUserDetails(data) {
  const totalEasyQues = data.data.allQuestionsCount[1].count;
  const totalMediumQues = data.data.allQuestionsCount[2].count;
  const totalHardQues = data.data.allQuestionsCount[3].count;

  const solvedEasyQues =
    data.data.matchedUser.submitStats.acSubmissionNum[1].count;
  const solvedMediumQues =
    data.data.matchedUser.submitStats.acSubmissionNum[2].count;
  const solvedHardQues =
    data.data.matchedUser.submitStats.acSubmissionNum[3].count;

  updateProgress(solvedEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
  updateProgress(
    solvedMediumQues,
    totalMediumQues,
    mediumLabel,
    mediumProgressCircle
  );
  updateProgress(solvedHardQues, totalHardQues, hardLabel, hardProgressCircle);

  const cardData = [
    {
      label: "Overall Submission",
      value: data.data.matchedUser.submitStats.totalSubmissionNum[0].submissions,
    },
    {
      label: "Overall Easy Submission",
      value: data.data.matchedUser.submitStats.totalSubmissionNum[1].submissions,
    },
    {
      label: "Overall Medium Submission",
      value: data.data.matchedUser.submitStats.totalSubmissionNum[2].submissions,
    },
    {
      label: "Overall Hard Submission",
      value: data.data.matchedUser.submitStats.totalSubmissionNum[3].submissions,
    },
  ];

  console.log("card ka data: ", cardData);

  cardStatsContainer.innerHTML = cardData
    .map(
      (data) => `
        <div class="card">
          <h3>${data.label}</h3>
          <p>${data.value}</p>
        </div>`
    )
    .join("");
}

async function fetchUserDetails(username) {
  const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
  try {
    searchButton.textContent = "Searching...";
    searchButton.disabled = true;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to fetch the user details");
    }
    const data = await response.json();
    console.log("logging data: ", data);

    displayUserDetails(data);
  } catch (error) {
    statsContainer.innerHTML = "<p>No data found</p>";
  } finally {
    searchButton.textContent = "Search";
    searchButton.disabled = false;
  }
}

searchButton.addEventListener("click", function () {
  const username = usernameInput.value;
  console.log("logging username ", username);
  if (validateUsername(username)) {
    fetchUserDetails(username);
  }
});
