
const toggleDarkMode = document.getElementById("toggleDarkMode");
const shipper_text = document.getElementById("shipper_text");
const consignee_text = document.getElementById("consignee_text");
const depText = document.getElementById("depText");
const arvText = document.getElementById("arvText");
const item_text = document.getElementById("item_text");
const batteryType = document.getElementById("batteryType");
const wattHoursObjects = document.getElementById("wattHoursObjects")
const wattHours = document.getElementById("wattHours");
const aggContentObjects = document.getElementById("aggContentObjects")
const aggContent = document.getElementById("aggContent");
const paxCargoOutput = document.getElementById("paxCargoOutput");
const paxCargoCheck = document.getElementById("paxCargoCheck");
const caoOutput = document.getElementById("caoOutput");
const caoCheck = document.getElementById("caoCheck");
const totalBox = document.getElementById("totalBox");
const totalWeight_txt = document.getElementById("totalWeight_txt");
const noticeBox = document.getElementById("noticeBox");
const disclaimerBox = document.getElementById("disclaimerBox");
const makeupTitle = document.getElementById("makeupTitle");

const disclaimKey = document.getElementById("disclaimKey");
const disclaim_A = document.getElementById("disclaim_A");
const disclaim_B = document.getElementById("disclaim_B");
const disclaim_C = document.getElementById("disclaim_C");
const disclaim_D = document.getElementById("disclaim_D");
const disclaim_E = document.getElementById("disclaim_E");
const disclaim_F = document.getElementById("disclaim_F");
const disclaim_G = document.getElementById("disclaim_G");
const disclaim_H = document.getElementById("disclaim_H");
const disclaim_I = document.getElementById("disclaim_I");
const disclaim_J = document.getElementById("disclaim_J");
const disclaim_K = document.getElementById("disclaim_K");
const footerNoticeBox = document.getElementById("footerNoticeBox");
const body = document.body;



document.addEventListener('DOMContentLoaded', function() {
  
  batteryType.addEventListener('change', function() {
    if (batteryType.value === "A" || batteryType.value === "B" || batteryType.value === "C") {  
      makeupObjects.hidden = false;
      makeupTitle.innerText = "WATT Hours (per item):";
      clearSelectOptions("selectMakeup");
      const newOptions = [
        { value: "", label: "Choose the appropriate Wh (Ah x V = Wh)"},
        { value: "A", label: "Battery ≤ 100 Wh / Cells ≤ 20 Wh"},
        { value: "B", label: "Battery > 100 Wh / Cells > 20 Wh"}
      ];

      addSelectOptions("selectMakeup", newOptions);

    } else if (batteryType.value === "D" || batteryType.value === "E" || batteryType.value === "F") {  
      makeupObjects.hidden = false;
      makeupTitle.innerText = "Content - Battery aggregate and Cell metal:";
      clearSelectOptions("selectMakeup");

    } else {  
      makeupObjects.hidden = true;
      
    };

  });

});

function clearSelectOptions(selectId) {
  const select = document.getElementById(selectId);
  if (select) {
      select.innerHTML = ''; // remove all <option> elements
  }
}

function addSelectOptions(selectId, optionsArray) {
  const select = document.getElementById(selectId);
  if (select) {
      optionsArray.forEach(opt => {
          const option = document.createElement('option');
          option.value = opt.value;
          option.text = opt.label;
          select.appendChild(option);
      });
  }
}


/*
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
*/