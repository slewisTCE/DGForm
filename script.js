    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const choice3 = document.getElementById("choice3");
    const textEntry = document.getElementById("textEntry");
    const extraText = document.getElementById("extraText");
    const acknowledge = document.getElementById("acknowledge");
    const radios = document.getElementsByName("satisfaction");
    const resultBox = document.getElementById("resultBox");
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;

    const allOptions = ["A", "B", "C", "D"];

    function updateChoice3() {
      const index = choice1.selectedIndex;
      choice3.innerHTML = "<option value=''>Choose</option>";
      
      // Index 0 is the default "Choose" option
      if (index <= 0) return;

      const optionSets = [
        ["AAA", "AA"],  // Index 1 → A
        ["BBB", "BB"],  // Index 2 → B
        ["CCC", "CC"],  // Index 3 → C
        ["DDD", "DD"]   // Index 4 → D
      ];

      const selectedOptions = optionSets[index - 1]; // Adjust for 0-based array

      selectedOptions.forEach(text => {
        const opt = document.createElement("option");
        opt.value = text;
        opt.textContent = text;
        choice3.appendChild(opt);
      });
    }


    function getSelectedRadio() {
      for (let r of radios) {
        if (r.checked) return r.value;
      }
      return null;
    }

    function updateResult() {
      const val1 = choice1.value;
      const val2 = choice2.value;
      const val3 = choice3.value;
      const labelText = textEntry.value;
      const noteText = extraText.value;
      const isAcknowledged = acknowledge.checked;
      const satisfaction = getSelectedRadio();

      if (val1 && val2 && val3) {
        resultBox.innerHTML = `
          <strong>Selected Combo:</strong> <span style="color:#00c2a6;">${val1}${val2}${val3}</span><br>
          <strong>Label:</strong> ${labelText || '<i>No text entered</i>'}<br>
          <strong>Notes:</strong> ${noteText || '<i>No additional notes</i>'}<br>
          <strong>Acknowledged:</strong> ${isAcknowledged ? '✅ Yes' : '❌ No'}<br>
          <strong>Satisfaction:</strong> ${satisfaction || '<i>Not selected</i>'}
        `;
      } else {
        resultBox.innerHTML = `<em>Please select all options and fill in the required fields.</em>`;
      }
    }

    [choice1, choice2, choice3, textEntry, extraText, acknowledge, ...radios].forEach(el => {
      el.addEventListener("change", updateResult);
      el.addEventListener("input", updateResult);
    });

    choice1.addEventListener("change", () => {
      updateChoice3();
      updateResult();
    });

    toggleDarkMode.addEventListener("change", () => {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
    });

    // Initialize dropdown
    updateChoice3();
