    function getJSONData() {

      var xhr = new XMLHttpRequest();
      var proxyUrl = "https://cors-anywhere.herokuapp.com/";
      var apiUrl = "https://docs.microsoft.com/api/gamestatus/c1522e71-fd06-4015-9d18-e8bc316d289d";
      var url = proxyUrl + apiUrl;

      xhr.onreadystatechange = function() {

        if (xhr.readyState === 4 && xhr.status === 200) {

          var response = JSON.parse(xhr.responseText);

          // Only keep the value of totalPoints
          var totalPoints = response.totalPoints;
          var level = response.level.levelNumber;
		  var max = response.level.pointsHigh;
		  var percentage = (totalPoints / max) * 100;
		  var roundedPercentage = Math.round(percentage);
          document.getElementById("json-output").textContent = totalPoints +"/"+ max +"XP";
		  document.getElementById("json-output2").textContent = "Level: " +level;
		  
		  
          document.getElementById("progress-bar").value = roundedPercentage;
          document.getElementById("progress-label").textContent = "Progress: " + roundedPercentage + "%";



        }

      }

      xhr.open("GET", url, true);
      xhr.send();

    }

    window.onload = function() {
      getJSONData();

    };
 
