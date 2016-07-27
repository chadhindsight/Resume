
var bio = {
    "name": "Chadrick Hinds",
    "role": "Web Developer",
    "contacts": {
        "mobile": "347-777-2043",
        "email": "chadrickj8@gmail.com",
        "github": "chadrick123",
        "twitter" : "chadhindsight",
        "location": "New York, New York",
    },
    "welcomeMessage": "Greetings Everyone! Glad to see you want to know more about me.",
    "skills": ["Business", "Portuguese", "Web Development", "Being Dope"],
    "biopic": "images/sweater.jpg"
};
bio.display = function() {
    "use strict";
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedImage);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
                $('#footerContacts').append(formattedEmail);
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
                $('#footerContacts').append(formattedMobile);
            var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
                $('#footerContacts').append(formattedGitHub);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
                $('#footerContacts').append(formattedTwitter);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
                $('#topContacts').append(formattedLocation);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill, index) {
        if (bio.skills.length > 0) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
            $("#skills").append(formattedSkill);
            }
    });
};
bio.display();

var education = {
    "schools": [{
        "name": "City College of New York",
        "location": "New York",
        "degree": "BA",
        "major": "English Literature",
        "dates": "2010-2015",
        "url": "www.icantcodewell.com"    
    }, {
        "name": "Bronx Community College",
        "location": "Bronx, New York",
        "degree": "Assoc.",
        "major": "Liberal Arts",
        "dates": "2009-2010",
        "url": "www.bcc.cuny.edu"
    }],
    "onlineCourses": [{
        "title": "Web Developer Nano Degree",
        "school": "Udacity",
        "dates": "Jan 2016-June 2016",
        "url": "www.Udacity.com"

    }],
    "display": "Goku is pretty strong!"

};
education.display = function() {
    "use strict";
    education.schools.forEach(function(school, index) {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
            $(".education-entry:last").append(formattedSchoolMajor);



        }
    });

};
education.display();

var work = {
    "jobs": [{
        "employer": "Midtown Flowers",
        "title": "Delivery Man",
        "location": "New York, New York",
        "dates": "February 2015",
        "description": "Delivering various Flowers and arrangements in the Manhattan area."

    }, 
         {
        "employer": "Steven Starker",
        "title": "Pet sitter",
        "location": "Westchester, New York",
        "dates": "Sep 2012-Dec 2013",
        "description": "Caring for several family pets."
    }],   
};
work.display = function(){
    work.jobs.forEach(function(job, index) {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedDescription);
    }
});

};
work.display();

var projects;
projects = {
    "projects": [{
        "title": "Front Page",
        "dates": "Jan 2016",
        "description": "My first web project.",
        "images": ["http://lorempixel.com/197/148"],
        "display": "stuff"
    }]
};
projects.display = function() {
    "use strict";
    projects.projects.forEach(function(project, index) {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
            
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
            $(".project-entry:last").append(formattedProjectTitle);
            
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
            $(".project-entry:last").append(formattedProjectDates);
            
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[index]);
                $(".project-entry:last").append(formattedImage);
        }

    
    });
};
projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function locationizer(work) {
    var locationArray = [];

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            var newLocation = work.jobs[job].location;
            locationArray.push(newLocation);
        }
    }
    return locationArray;

}

$("#mapDiv").append(googleMap);

console.log("google map = " + googleMap);
console.log("bio locations: "+ bio.contacts.location);
console.log("education locations: "+ education.schools.location);

for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            console.log("work locations: "+ work.jobs[job].location);
        }
}
education.schools.forEach(function(school){
     console.log("school locations in builder: "+ school.location);
    });
