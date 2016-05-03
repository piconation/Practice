/**
 * Created by mattpowell on 5/2/16.
 */

var bizCard = {name:"Matt Powell", address:"123 Main St<br>City, UT 84123", phone:"801-814-0599", email:"mnjpowell07@gmail.com", job:"Sushi Destroyer"};

function card() {
    document.getElementById("name").innerHTML = bizCard.name;
    document.getElementById("job").innerHTML = bizCard.job;
    document.getElementById("address").innerHTML = bizCard.address;
    document.getElementById("phone").innerHTML = bizCard.phone;
    document.getElementById("email").innerHTML = bizCard.email
}

