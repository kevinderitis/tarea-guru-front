const sendUser = async () => {
    let user = document.getElementById("nameForm").value
    let email = document.getElementById("emailForm").value
    let userData = {
        user, 
        email
    }
    try {
       await axios.post('http://localhost:8080/user', userData);
       window.location.href = 'form.html'
    } catch (error) {
        console.log(error)
    }
   

}