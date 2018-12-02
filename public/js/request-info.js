
// Initialize Cloud Firestore via Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

var submitInfoRequest = (requestForm) => {
    let name = requestForm.elements[0].value;
    let email = requestForm.elements[1].value;
    let subject = requestForm.elements[2].value;
    let message = requestForm.elements[3].value;

    db.collection("webrequest").add({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        // Show user submission worked
        $("#contact-status").css("display", "inline");
        $("#contact-overlay").addClass("submitted-overlay");
        $(".form-wrapper").css("color", "chocolate");
        $("#contact-form .form-control").attr("disabled", "true");
        $("#contact-submit-button").addClass("disabled");

    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
};