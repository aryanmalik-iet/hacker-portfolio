     const tags = ['<html>', '<body>', '<script>', 'Python', 'CSS', 'JS', 'C++', 'HTML', 'GitHub', '<style>', '<main>'];
     const colors = ['#ff5555', '#fd971f', '#00ff00', '#66d9ef', '#f92672', '#ae81ff'];
     
     const container = document.getElementById('floating-tags-container');
     
     function spawnTag() {
       const tag = document.createElement('div');
       tag.className = 'tag';
       tag.style.left = `${Math.random() * 100}vw`;
       tag.style.bottom = `-5vh`;
       tag.style.fontSize = `${Math.random() * 2 + 0.8}rem`;
       tag.style.color = colors[Math.floor(Math.random() * colors.length)];
       tag.textContent = tags[Math.floor(Math.random() * tags.length)];
     
       tag.style.animation = `floatUp 12s linear, tagBlink 2.5s ease-in-out infinite`;
     
       setTimeout(() => tag.remove(), 12000);
     
       container.appendChild(tag);
     }
     
     setInterval(spawnTag, 450);
    const output = document.getElementById("output");
    const input = document.getElementById("terminal-cmd");
    const commands = {
      help: `Available commands:<br><ul>
        <li><a href="#" onclick="runCommand('about')">about</a></li>
        <li><a href="#" onclick="runCommand('education')">education</a></li>
        <li><a href="#" onclick="runCommand('skills')">skills</a></li>
        <li><a href="#" onclick="runCommand('experience')">experience</a></li>
        <li><a href="#" onclick="runCommand('certifications')">certifications</a></li>
        <li><a href="#" onclick="runCommand('contact')">contact</a></li>
      </ul>`,
      about: `‣ I'm a B.Tech student at IET Lucknow exploring the exciting intersections of cloud computing, cybersecurity, and web development.<br><br>
      ‣ I’ve gained hands-on experience through platforms like Google Cloud Skills Boost, TryHackMe and have earned badges and certifications while learning core technologies like Python, HTML/CSS, and cloud tools.<br><br>
      ‣ I’ve also gained experience building websites using platforms like Weebly, focusing on responsive and user-friendly design.<br><br>
      ‣ I'm actively seeking opportunities to learn, grow, and apply these skills in real-world projects. Let’s connect and collaborate!`,
      education: `<br><span class="edu-sub">1. <strong>Institute of Engineering and Technology Lucknow</strong></span><br>
      Bachelor of Technology - BTech, Mechanical Engineering<br>
      Aug 2024 - Aug 2028<br><br><br>
  
      2. <span class="edu-sub"><strong>Silver Bells Public School Shamli</strong></span><br>
      Science (PCM)<br>
      Apr 2019 - Apr 2023`,
      skills: `<ul>
        <li>‣ Machine Learning <br><span class="via"> Mastering Generative AI and ChatGPT</span></li>
        <li>‣ Critical Thinking <br> <span class="via">Mastering Generative AI and ChatGPT</span></li>
        <li>‣ AI Model Development <br> <span class="via">Mastering Generative AI and ChatGPT</span></li>
        <li>‣ Soft Skills <br><span class="via"> Soft Skills Course Online</span></li>
        <li>‣ Communication <br> <span class="via">Soft Skills Course Online</span></li>
        <li>‣ Google Cloud Platform <br> <span class="via">Skills Boost Arcade (June 2025)</span></li>
        <li>‣ Python <br> <span class="via">IET Lucknow</span></li>
        <li>‣ Cybersecurity <br><span class="via"> IET Lucknow, IP Addressing and Subnetting</span></li>
        <li>‣ HTML, CSS, JavaScript <br> <span class="via">Web Design @ Weebly</span></li>
        <li>‣ Team Coordination <br> <span class="via">Parmarth IET, IEEE Day, AUCTUM</span></li>
        <li>‣ Event Planning <br> <span class="via">Sports Committee Member, IET</span></li>
      </ul>`,
      experience: `<ul>
        <li><strong>Volunteer</strong> <br><span class="via"> Parmarth IET Lucknow (Jan 2025 - Present)</span></li>
        <li><strong>Web Designer</strong> <br> <span class="via"> Weebly (Jun 2023 - Present)<br>
          Created responsive websites using Weebly<br>
          Customized HTML/CSS<br>
          Clean UI and structured content</span></li>
        <li><strong>Student</strong> <br> <span class="via"> IET Lucknow (Aug 2024 - Present)<br>
          Exploring cloud, web, and cybersecurity<br>
          Platforms: <a>Google Cloud Skills Boost</a>, <a>TryHackMe</a></span></li>
        <li><strong>Sports Committee Member</strong> <br> <span class="via"> IET (Nov 2024 - Present)</li>
      </ul>`,
      certifications: `<ul>
        <li>Neo4j Certified Professional<br> 
        <span class="edu-sub1">Issued: Jul 2025<br>Credential ID 0beded4f-59c1-47e5-b15a-a901c8a21702</span><br><a class="button-link" href="https://graphacademy.neo4j.com/c/0beded4f-59c1-47e5-b15a-a901c8a21702/" target="_blank">Show Credential</a></li><br>
        <li>IP Addressing and Subnetting<br> 
        <span class="edu-sub1">Issued: Jun 2025<br>Credential ID N/A</span> <br><a class="button-link" href="https://www.geeksforgeeks.org/certificate/19378f664c375deeb7899fd312319c8a" target="_blank">Show Credential</a></li><br>
        <li>Generative AI and ChatGPT <br> 
        <span class="edu-sub1">Issued: Jun 2025<br>Credential ID N/A</span> <br><a class="button-link" href="https://www.geeksforgeeks.org/certificate/c6976d6259ffe0d82cb0e5eaf1b0fa35" target="_blank">Show Credential</a></li><br>
        <li>Google Arcade Certification Zone <br> 
        <span class="edu-sub1">Issued: Jun 2025<br>Credential ID 16691848</span> <br><a class="button-link" href="https://www.cloudskillsboost.google/public_profiles/d9334990-b257-4f7e-ba80-07dd2a806841/badges/16691848" target="_blank">Show Credential</a></li><br>
        <li>Trivia Week 1 <br> 
        <span class="edu-sub1">Issued: Jun 2025<br>Credential ID 16668501</span> <br><a class="button-link" href="https://www.cloudskillsboost.google/public_profiles/d9334990-b257-4f7e-ba80-07dd2a806841/badges/16668501" target="_blank">Show Credential</a></li><br>
        <li>Soft Skills Course Online - Complete Professional Development Training <br> 
        <span class="edu-sub1">Issued: Jun 2025<br>Credential ID N/A</span><br><a class="button-link" href="https://www.geeksforgeeks.org/certificate/8d79e10d46f125dad56c0f37ea46b1c4?utm_source=socials&utm_medium=cc_link" target="_blank">Show Credential</a></li><br>
        <li>AUCTUM Participation – Hult Prize 2025<br> 
        <span class="edu-sub1">Issued: Nov 2024<br>Credential ID N/A</span> <br><a class="button-link" href="https://media.licdn.com/dms/image/v2/D562DAQGZeOP8fAseNQ/profile-treasury-image-shrink_800_800/B56Zed1OXKHoAY-/0/1750699666540" target="_blank">Show Credential</a></li><br>
        <li>E-auction IEEE Day <br> 
        <span class="edu-sub1">Issued: Oct 2024<br>Credential ID N/A</span> <br><a class="button-link" href="https://media.licdn.com/dms/image/v2/D562DAQEArgrevMUtQA/profile-treasury-image-shrink_800_800/B56Zedz.IGHUAY-/0/1750699338424" target="_blank">Show Credential</a></li><br>
      </ul>`,
      contact: `📧 Email: <a href="aryanmalik.sbps@gmail.com" target="_blank">aryanmalik.sbps@gmail.com</a><br>
      🔗 LinkedIn: <a href="https://www.linkedin.com/in/aryanmaliksbps/" target="_blank">linkedin.com/in/aryanmaliksbps</a><br>
      🐱 GitHub: <a href="https://github.com/aryanmalik-iet" target="_blank">github.com/aryanmalik-iet</a>`
    };

    function runCommand(cmd) {
      const c = cmd.toLowerCase();
      if (commands[c]) {
        output.innerHTML = `<div>>> ${c}</div><div>${commands[c]}</div>`;
      } else {
        output.innerHTML = `<div>>> ${c}</div><div style="color: var(--highlight);">Command not found. Type 'help' to see all available commands.</div>`;
      }
    }

    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        const cmd = input.value.trim();
        runCommand(cmd);
        input.value = "";
      }
    });
    document.querySelector('.terminal').addEventListener('click', () => {
    document.getElementById('terminal-cmd').focus();
   });

