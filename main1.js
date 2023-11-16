function local() { 
    var fullName = document.getElementById('fullName').value; 
    var age = document.getElementById('age').value; 
    var gender = document.querySelector('input[name="gender"]:checked').value; 
    var description = document.getElementById('description').value; 
    var university = document.getElementById('university').value; 
    var major = document.getElementById('major').value; 
    var languages = []; 
    var checkedLanguages = document.querySelectorAll('input[name="language"]:checked'); 
    checkedLanguages.forEach(function (i) { 
        languages.push(i.value); 
    }); 
    var userData = { 
        fullName: fullName, 
        age: age, 
        gender: gender, 
        description: description, 
        university: university, 
        major: major, 
        languages: languages 
    }; 

    localStorage.setItem('UserInformation', JSON.stringify(userData)); 
    requestInfo(userData); 
} 

function requestInfo(userInfo) { 
    var container = document.createElement('div'); 
    container.className = 'card'; 
    var cardContent =`  
    <div style="border:1px solid; width:200px">
        <p>Name: ${userInfo.fullName}</p> 
        <p>Age: ${userInfo.age}</p> 
        <p>Gender: ${userInfo.gender}</p> 
        <p>Description: ${userInfo.description}</p> 
        <p>University: ${userInfo.university}</p> 
        <p>Major: ${userInfo.major}</p> 
        <p>Languages: ${userInfo.languages.join(', ')}</p> 
    </div>
    `
    container.innerHTML = cardContent; 
    document.body.appendChild(container); 
} 

