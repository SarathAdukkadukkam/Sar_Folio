  //hey there dynamic typing function
  const text = "Hey there!";
  let index = 0;
  let direction = 1;
  let typingTimer;
  let clearingTimer;
  let delay = 150; // Initial delay for typing and clearing (in milliseconds)
  const clearingSpeedFactor = 1.8; // Speed factor for clearing text
  
  function typeText() {
    if (direction === 1) {
      if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
      } else {
        direction = -1;
        delay /= clearingSpeedFactor; // Increase the clearing speed
      }
    } else {
      if (index >= 0) {
        document.getElementById("typing-text").textContent = text.substring(0, index);
        index--;
      } else {
        direction = 1;
        delay *= clearingSpeedFactor; // Increase the typing speed
      }
    }
  
    typingTimer = setTimeout(typeText, delay); // Adjust typing speed here (in milliseconds)
  }
  
  function startTypingAnimation() {
    typeText();
  }
  
  // Call startTypingAnimation function when needed
  startTypingAnimation();

  var know = document.getElementById("know");

  know.addEventListener("mouseenter", function() {
    know.innerHTML = "Click..";
  });
  
  know.addEventListener("click", function() {
    know.innerHTML = `scrolling`;
  });
  
  know.addEventListener("mouseleave", function() {
    know.innerHTML = `
      Know More 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
        <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
      </svg>
    `;
  });
  
  
