function getGitaChapter() {
  const chapterNo = document.getElementById("chapterNo").value;
  const apiKey = "f88e34acc1msh774984c6e7cfb0ap10c327jsn4c29fcf2b260";
  const rapidapiHost = "bhagavad-gita3.p.rapidapi.com";
  const apiUrl = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=${chapterNo}`;
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-Rapidapi-Key": apiKey,
      "X-Rapidapi-Host": rapidapiHost,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const resultDiv = document.getElementById("gita-chapter-result");
      resultDiv.innerHTML = "";
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";
      table.style.marginTop = "10px";
      const element = response[chapterNo - 1];
      if (element) {
        const stackDiv = document.createElement("div");
        stackDiv.style.border = "1px solid #000";
        stackDiv.style.padding = "10px";
        stackDiv.style.marginTop = "10px";

        const titleValuePairs = [
          { title: "Chapter No.", key: "id" },
          { title: "Chapter Name", key: "name" },
          { title: "Translated Name", key: "name_translated" },
          { title: "Meaning of Name", key: "name_meaning" },
          { title: "Chapter Number", key: "chapter_number" },
          { title: "Number of Verses", key: "verses_count" },
          { title: "Summary (Hindi)", key: "chapter_summary_hindi" },
          { title: "Summary (English)", key: "chapter_summary" },
        ];

        titleValuePairs.forEach((pair) => {
          const cellDiv = document.createElement("div");
          cellDiv.style.display = "flex";
          cellDiv.style.alignItems = "center";
          cellDiv.style.marginBottom = "5px";

          const titleElement = document.createElement("p");
          titleElement.textContent = pair.title + ":";
          titleElement.style.marginRight = "20px";
          cellDiv.appendChild(titleElement);

          const valueElement = document.createElement("p");
          valueElement.textContent = element[pair.key];
          cellDiv.appendChild(valueElement);

          stackDiv.appendChild(cellDiv);
        });

        resultDiv.appendChild(stackDiv);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const resultDiv = document.getElementById("gita-chapter-result");
      resultDiv.innerHTML = `<span style="color:red">Error fetching data. Please try again.</span>`;
      resultDiv.style.border = "1px solid #000";
      resultDiv.style.padding = "10px";
      resultDiv.style.marginTop = "10px";
    });
}

function getTrailingGitaChapter() {
  const chapterNo = document.getElementById("chapterNo").value;
  const apiKey = "f88e34acc1msh774984c6e7cfb0ap10c327jsn4c29fcf2b260";
  const rapidapiHost = "bhagavad-gita3.p.rapidapi.com";
  const apiUrl = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=${chapterNo}`;
  fetch(apiUrl, {
    method: "GET",
    headers: {
      "X-Rapidapi-Key": apiKey,
      "X-Rapidapi-Host": rapidapiHost,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      const resultDiv = document.getElementById("gita-chapter-result");
      resultDiv.innerHTML = "";
      const table = document.createElement("table");
      table.style.borderCollapse = "collapse";
      table.style.marginTop = "10px";
      response.forEach((element) => {
        const stackDiv = document.createElement("div");
        stackDiv.style.border = "1px solid #000";
        stackDiv.style.padding = "10px";
        stackDiv.style.marginTop = "10px";

        const titleValuePairs = [
          { title: "Chapter No.", key: "id" },
          { title: "Chapter Name", key: "name" },
          { title: "Translated Name", key: "name_translated" },
          { title: "Meaning of Name", key: "name_meaning" },
          { title: "Chapter Number", key: "chapter_number" },
          { title: "Number of Verses", key: "verses_count" },
          { title: "Summary (Hindi)", key: "chapter_summary_hindi" },
          { title: "Summary (English)", key: "chapter_summary" },
        ];

        titleValuePairs.forEach((pair) => {
          const cellDiv = document.createElement("div");
          cellDiv.style.display = "flex";
          cellDiv.style.alignItems = "center";
          cellDiv.style.marginBottom = "5px";

          const titleElement = document.createElement("p");
          titleElement.textContent = pair.title + ":";
          titleElement.style.marginRight = "20px";
          cellDiv.appendChild(titleElement);

          const valueElement = document.createElement("p");
          valueElement.textContent = element[pair.key];
          cellDiv.appendChild(valueElement);

          stackDiv.appendChild(cellDiv);
        });

        resultDiv.appendChild(stackDiv);
      });
    })

    //   response.forEach((element) => {
    //     const row = document.createElement("tr");
    //     row.style.border = "1px solid #000";

    //     const chapterIdCell = document.createElement("td");
    //     chapterIdCell.textContent = element.id;
    //     chapterIdCell.style.border = "1px solid #000";
    //     row.appendChild(chapterIdCell);

    //     const nameCell = document.createElement("td");
    //     nameCell.textContent = element.name;
    //     nameCell.style.border = "1px solid #000";
    //     row.appendChild(nameCell);

    //     const nameTranslatedCell = document.createElement("td");
    //     nameTranslatedCell.textContent = element.name_translated;
    //     nameTranslatedCell.style.border = "1px solid #000";
    //     row.appendChild(nameTranslatedCell);

    //     const nameMeaningCell = document.createElement("td");
    //     nameMeaningCell.textContent = element.name_meaning;
    //     nameMeaningCell.style.border = "1px solid #000";
    //     row.appendChild(nameMeaningCell);

    //     const chapterNumberCell = document.createElement("td");
    //     chapterNumberCell.textContent = element.chapter_number;
    //     chapterNumberCell.style.border = "1px solid #000";
    //     row.appendChild(chapterNumberCell);

    //     const noOfVersesCell = document.createElement("td");
    //     noOfVersesCell.textContent = element.verses_count;
    //     noOfVersesCell.style.border = "1px solid #000";
    //     row.appendChild(noOfVersesCell);

    //     const chapterSummaryHindiCell = document.createElement("td");
    //     chapterSummaryHindiCell.textContent = element.chapter_summary_hindi;
    //     chapterSummaryHindiCell.style.border = "1px solid #000";
    //     row.appendChild(chapterSummaryHindiCell);

    //     const chapterSummaryCell = document.createElement("td");
    //     chapterSummaryCell.textContent = element.chapter_summary;
    //     chapterSummaryCell.style.border = "1px solid #000";
    //     row.appendChild(chapterSummaryCell);

    //     table.appendChild(row);
    //   });

    //   resultDiv.appendChild(table);
    // })
    //   response.forEach((element) => {
    //     const stackDiv = document.createElement("div");
    //     stackDiv.style.border = "1px solid #000";
    //     stackDiv.style.padding = "10px";
    //     stackDiv.style.marginTop = "10px";

    //     for (const key in element) {
    //       const keyElement = document.createElement("p");
    //       keyElement.textContent = key;
    //       stackDiv.appendChild(keyElement);

    //       const valueElement = document.createElement("p");
    //       valueElement.textContent = element[key];
    //       stackDiv.appendChild(valueElement);
    //     }

    //     resultDiv.appendChild(stackDiv);
    //   });
    // })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const resultDiv = document.getElementById("gita-chapter-result");
      resultDiv.innerHTML = `<span style="color:red">Error fetching data. Please try again.</span>`;
      resultDiv.style.border = "1px solid #000";
      resultDiv.style.padding = "10px";
      resultDiv.style.marginTop = "10px";
    });
}

function validateChapterNumber() {
  const chapterNo = parseInt(document.getElementById("chapterNo").value);
  const trailingChapters = document.getElementById("trailingChapters").checked;

  if (chapterNo < 1) {
    showToast("Gita is not empty!");
  } else if (chapterNo > 18) {
    showToast("Gita has 18 chapters!");
  } else if (isNaN(chapterNo)) {
    showToast("That won't work. Enter a number between 1 and 18!");
  } else {
    if (trailingChapters) {
      getTrailingGitaChapter();
    } else {
      getGitaChapter();
    }
  }
}

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    destination: "./index.html",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  // alert(message);
}
