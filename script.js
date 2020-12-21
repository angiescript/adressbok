document.addEventListener("DOMContentLoaded", function() {

    //Tankar in formulärets input-fält samt själva formuläret
    let add_button = document.getElementById("add_button");
    let add_name = document.getElementById("name");
    let add_number = document.getElementById("phone_no");
    let add_email = document.getElementById("email");
    let add_address = document.getElementById("address");
    let address_tbody = document.getElementById("tbody");
   
    //Om man klickar på "Lägg till" så läggs en ny rad till, därefter celler i den raden. 
    //Därefter sätter vi cellens värde till vad användaren skrivt in i inputfälten. 
    //Sist men inte minst lägger vi till en eventlyssnare för att hantera ta-bort-knapparna för de nya, tillagda personerna.
    //Notera att dessa måste ligga EFTER att vi lagt in dem - om man lägger dem utanför denna eventlistener hittar den inte de nya personerna!
    add_button.addEventListener("click", () => {
        let newRow = document.createElement("tr");
        
        let new_name = document.createElement("td");
        new_name.innerHTML= add_name.value;
        let new_no = document.createElement("td");
        new_no.innerHTML= add_number.value;
        let new_email = document.createElement("td");
        new_email.innerHTML= add_email.value;
        let new_address = document.createElement("td");
        new_address.innerHTML= add_address.value;
        
        let new_delete = document.createElement("td");
        let new_delete_button = document.createElement("button");
        new_delete_button.innerHTML = "Ta bort"
        new_delete_button.classList.add("delete");
        new_delete_button.setAttribute("type", "button");
        new_delete.appendChild(new_delete_button);
        

        address_tbody.appendChild(newRow);
        newRow.appendChild(new_name);
        newRow.appendChild(new_no);
        newRow.appendChild(new_email);
        newRow.appendChild(new_address);
        newRow.appendChild(new_delete);

        new_delete.addEventListener('click', () => {
            new_delete_button.parentNode.parentNode.remove();
        });

    });

    // Dessa rader krävs om man vill hårdkoda in några personer som ligger i adressboken från start!
    /* Array.from(delete_btn).forEach((delete_btn) => {
        delete_btn.addEventListener('click', () => {
            delete_btn.parentNode.parentNode.remove();
        });
    });
 */


}); 
