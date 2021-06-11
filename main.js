var images=["https://freedesignfile.com/upload/2013/03/Family-vector-5.jpg",
"https://www.clipartmax.com/png/small/71-714312_family-clipartschool-family-members-clipart.png",
"Family Clipartschool - Family Members Clipart @clipartmax.com",
"https://png.pngtree.com/png-clipart/20200701/original/pngtree-a-group-of-family-member-wear-mask-to-prevent-covid-19-png-image_5345066.jpg",
"https://png.pngtree.com/png-clipart/20200701/original/pngtree-family-wearing-mask-protect-from-virus-png-image_5431993.jpg"];

var names=
["Rohan","mohan","roy","Solomen","deysi"];

var i = 0;
function update(){
    i++
    var number_of_family_member_in_array = 5

    if(i > number_of_family_member_in_array){
        i = 0;
    }
    var updated_image = images[i];
    var updated_name = names[i];
    document.getElementById("family_img").src = updated_image;
    document.getElementById("family_name").innerHTML = updated_name;
}
