// listing element

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
 event.preventDefault();


 const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

 //type assertion
 const nameElement = document.getElementById('name') as HTMLInputElement;
 const emailElement = document.getElementById('email') as HTMLInputElement;
 const phoneElement = document.getElementById('phone') as HTMLInputElement;
 const educationElement = document.getElementById('education') as HTMLInputElement;
 const experienceElement = document.getElementById('experience') as HTMLInputElement;
 const skillsElement = document.getElementById('skills') as HTMLInputElement;

 //

 const CVNameElement = document.getElementById(
  "CVName"
 ) as HTMLInputElement;


if (profilePictureInput  && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

  //
  CVNameElement

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value; 

//

const CVName = CVNameElement.value;
const uniquePath = `resumes/${CVName.replace(/\s+/g, '_')}_cv.html `


    // picture elements

    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

 // create resume output
 const resumeOutput = `
 <h2>Resume</h2>
 ${profilePictureURL ? `<img src= "${profilePictureURL} alt="Profile Picture" class="profilePicture">` : '' }
 <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
 <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
 <p><strong>Phone Number :</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>

 <h3>Education</h3>
 <p id="edit-education" class="editable">${education}</p>

 <h4>Experience</h4>
 <p id="edit-exprience" class="editable">${experience}</p>

  <h5>Skills</h5>
 <p id="edit-skills" class="editable">${skills}</p>
`;



// Resume Output
  const resumeOutputElement = document.getElementById('resumeOutput');
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.classList.remove("hidden");



    // create container for buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonsContainer);

    //Add Download PDF buttons
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click" , () => {
      window.print(); // open the print dialog, allowing the user to save as PDF.
    });
    buttonsContainer.appendChild(downloadButton);

    // Add shareable Link Button
    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy Shareable Link";
    shareLinkButton.addEventListener("click", async () => {
      try {
        // Create a unique shareable link (simulate it in this case)
        const shareableLink = `https://yourdomain.com/resumes/${name.replace(
          /\s+/g,
          "_"
    )}_cv.html`;

    // use clipboard API to copy the shareable link
    await navigator.clipboard.writeText(shareableLink);
    alert("Shareable link copied to clipboard!");
   } catch (err) {
    console.error("Failed to copy link: ", err);
    alert("Failed to copy link to clipborad. Please try again.");
   }
    });
    buttonsContainer.appendChild(shareLinkButton);
  } else {
    console.error("Resume output container not found");
  }
} else { 
  console.error("form elements are missing");
}
});